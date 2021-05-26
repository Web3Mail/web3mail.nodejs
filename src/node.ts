import ethers from 'ethers';
import { EventType, Listener, Provider, RequestArguments } from 'web3mail.js';
import { EventEmitter } from 'events';

export class Web3MailNode extends EventEmitter implements Provider {
	request(args: RequestArguments): Promise<any> {
		throw new Error('Method not implemented.');
	}
}
