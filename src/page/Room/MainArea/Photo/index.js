
import React from 'react';

import './index.scss';

import KingdomIcon from '../../component/KingdomIcon';
import HpBar from '../../component/HpBar';
import PhotoAvatar from './Avatar';
import HandArea from './HandArea';
import PhaseBar from '../../component/PhaseBar';

class Photo extends React.Component {

	constructor(props) {
		super(props);

		const player = this.props.player;

		this.state = {
			seat: player.seat(),
			headGeneral: player.headGeneral(),
			deputyGeneral: player.deputyGeneral(),
			screenName: player.name(),
			hp: player.hp(),
			maxHp: player.maxHp(),
			kingdom: player.kingdom(),
		};

		player.on('seatChanged', seat => this.setState({seat: seat}));
		player.on('headGeneralChanged', general => this.setState({headGeneral: general}));
		player.on('deputyGeneralChanged', general => this.setState({deputyGeneral: general}));
		player.on('nameChanged', name => this.setState({screenName: name}));
		player.on('hpChanged', hp => this.setState({hp: hp}));
		player.on('maxHpChanged', maxHp => this.setState({maxHp: maxHp}));
		player.on('kingdomChanged', kingdom => this.setState({kingdom: kingdom}));
	}

	render() {
		const player = this.props.player;

		return <div className={'photo' + ' ' + this.state.kingdom}>
			<div className="avatar-area">
				<PhotoAvatar position="head" general={this.state.headGeneral} />
				<PhotoAvatar position="deputy" general={this.state.deputyGeneral} />
			</div>
			<div className="frame"></div>
			<div className="screen-name">{this.state.screenName}</div>
			<KingdomIcon kingdom={this.state.kingdom} />
			<HandArea area={player.handArea} />
			<HpBar size={18} hp={this.state.hp} maxHp={this.state.maxHp} />
			<PhaseBar player={player} />
		</div>;
	}

}

export default Photo;
