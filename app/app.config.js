/**
 * Created by helge on 05.08.16.
 */

export const apiBasePath = 'https://evm4rumeob.execute-api.eu-west-1.amazonaws.com/v0';
export const landingPageUrl = 'http://www.acebusters.com';
export const ethNodeUrl = 'ws://geth.ocolin.com:8546';
export const tokenContractAddress = '0xd56fb602475a6bf067e5998bd02764df5219bcb5';
export const accountFactoryAddress = '0xecc669f51460e729eb8a386dc779398a5482b9f1';
export const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
export const valuesShort = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
export const suits = ['c', 'd', 'h', 's'];

export const ABI_TOKEN_CONTRACT = [{ constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'approve', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'revoke', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_holder', type: 'address' }], name: 'balanceOf', outputs: [{ name: 'balance', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'changeOwner', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transfer', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'baseUnit', outputs: [{ name: '', type: 'uint96' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'issue', outputs: [{ name: 'success', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_holder', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: 'remaining', type: 'uint256' }], payable: false, type: 'function' }, { inputs: [{ name: '_owner', type: 'address' }, { name: '_baseUnit', type: 'uint96' }], type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: 'from', type: 'address' }, { indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Issuance', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'from', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Revoke', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'owner', type: 'address' }, { indexed: true, name: 'spender', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, name: 'sender', type: 'address' }, { indexed: false, name: 'code', type: 'uint256' }], name: 'Error', type: 'event' }];
export const ABI_ACCOUNT_FACTORY = [{ constant: false, inputs: [{ name: '_oldSigner', type: 'address' }, { name: '_newSigner', type: 'address' }], name: 'handleRecovery', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'signerToController', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'signerToProxy', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_signer', type: 'address' }, { name: '_proxy', type: 'address' }, { name: '_controller', type: 'address' }], name: 'register', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_signer', type: 'address' }], name: 'getAccount', outputs: [{ name: '', type: 'address' }, { name: '', type: 'address' }, { name: '', type: 'uint96' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_signer', type: 'address' }, { name: '_recovery', type: 'address' }, { name: '_timeLock', type: 'uint256' }], name: 'create', outputs: [], payable: false, type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'signer', type: 'address' }, { indexed: false, name: 'proxy', type: 'address' }, { indexed: false, name: 'controller', type: 'address' }, { indexed: false, name: 'recovery', type: 'address' }], name: 'AccountCreated', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'newSigner', type: 'address' }, { indexed: false, name: 'proxy', type: 'address' }, { indexed: false, name: 'oldSigner', type: 'address' }], name: 'AccountRecovered', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, name: 'code', type: 'uint256' }], name: 'Error', type: 'event' }];
export const ABI_TABLE = [{ constant: false, inputs: [{ name: '_buyIn', type: 'uint96' }], name: 'rebuy', outputs: [], payable: false, type: 'function' }, { inputs: [{ name: '_leaveReceipt', type: 'bytes' }], name: 'leave', outputs: [], type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'seats', outputs: [{ name: 'senderAddr', type: 'address' }, { name: 'amount', type: 'uint96' }, { name: 'signerAddr', type: 'address' }, { name: 'exitHand', type: 'uint96' }], type: 'function' }, { constant: true, inputs: [], name: 'lastNettingRequestTime', outputs: [{ name: '', type: 'uint256' }], type: 'function' }, { constant: true, inputs: [], name: 'lastHandNetted', outputs: [{ name: '', type: 'uint256' }], type: 'function' }, { inputs: [{ name: '_sender', type: 'address' }], name: 'payoutFrom', outputs: [], type: 'function' }, { inputs: [{ name: '_newBalances', type: 'bytes' }, { name: '_sigs', type: 'bytes' }], name: 'settle', outputs: [], type: 'function' }, { inputs: [], name: 'payout', outputs: [], type: 'function' }, { inputs: [{ name: '_now', type: 'uint256' }], name: 'netHelp', outputs: [], type: 'function' }, { constant: true, inputs: [], name: 'oracle', outputs: [{ name: '', type: 'address' }], type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'hands', outputs: [{ name: 'claimCount', type: 'uint256' }], type: 'function' }, { inputs: [{ name: '_buyIn', type: 'uint96' }, { name: '_signerAddr', type: 'address' }, { name: '_pos', type: 'uint256' }], name: 'join', outputs: [], type: 'function' }, { constant: true, inputs: [], name: 'getLineup', outputs: [{ name: '', type: 'uint256' }, { name: 'addresses', type: 'address[]' }, { name: 'amounts', type: 'uint256[]' }, { name: 'exitHands', type: 'uint96[]' }], type: 'function' }, { inputs: [{ name: '_bets', type: 'bytes' }, { name: '_sigs', type: 'bytes' }], name: 'submitBets', outputs: [{ name: '', type: 'uint256' }], type: 'function' }, { constant: true, inputs: [], name: 'lastNettingRequestHandId', outputs: [{ name: '', type: 'uint256' }], type: 'function' }, { inputs: [], name: 'net', outputs: [], type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'seatMap', outputs: [{ name: '', type: 'uint256' }], type: 'function' }, { constant: true, inputs: [{ name: '_handId', type: 'uint96' }, { name: '_addr', type: 'address' }], name: 'getIn', outputs: [{ name: '', type: 'uint96' }], type: 'function' }, { constant: true, inputs: [], name: 'smallBlind', outputs: [{ name: '', type: 'uint256' }], type: 'function' }, { constant: true, inputs: [{ name: '_handId', type: 'uint96' }, { name: '_addr', type: 'address' }], name: 'getOut', outputs: [{ name: '', type: 'uint96' }, { name: '', type: 'uint256' }], type: 'function' }, { inputs: [{ name: '_dists', type: 'bytes' }, { name: '_sigs', type: 'bytes' }], name: 'submitDists', outputs: [{ name: '', type: 'uint256' }], type: 'function' }, { constant: true, inputs: [], name: 'token', outputs: [{ name: '', type: 'address' }], type: 'function' }, { inputs: [{ name: '_token', type: 'address' }, { name: '_oracle', type: 'address' }, { name: '_smallBlind', type: 'uint256' }, { name: '_seats', type: 'uint256' }], type: 'constructor' }, { inputs: [{ indexed: false, name: 'addr', type: 'address' }, { indexed: false, name: 'amount', type: 'uint256' }], name: 'Join', type: 'event' }, { inputs: [{ indexed: false, name: 'hand', type: 'uint256' }], name: 'NettingRequest', type: 'event' }, { inputs: [{ indexed: false, name: 'hand', type: 'uint256' }], name: 'Netted', type: 'event' }, { inputs: [{ indexed: false, name: 'addr', type: 'address' }], name: 'Leave', type: 'event' }, { inputs: [{ indexed: false, name: 'errorCode', type: 'uint256' }], name: 'Error', type: 'event' }];
export const ABI_CONTROLLER = [{ constant: true, inputs: [], name: 'newControllerPendingUntil', outputs: [{ name: '', type: 'uint96' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'newRecoveryPendingUntil', outputs: [{ name: '', type: 'uint96' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'signer', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'newController', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'lastNonce', outputs: [{ name: '', type: 'uint96' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint96' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_destination', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'sendTx', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'newRecovery', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newController', type: 'address' }], name: 'signControllerChange', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newRecovery', type: 'address' }], name: 'signRecoveryChange', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'changeController', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_nonceAndAddr', type: 'bytes32' }, { name: '_data', type: 'bytes' }, { name: '_r', type: 'bytes32' }, { name: '_s', type: 'bytes32' }, { name: '_v', type: 'uint8' }], name: 'forward', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newSigner', type: 'address' }], name: 'changeSigner', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_destination', type: 'address' }, { name: '_payload', type: 'bytes' }], name: 'forwardTx', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'timeLock', outputs: [{ name: '', type: 'uint96' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'changeRecovery', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'recovery', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'proxy', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { inputs: [{ name: '_proxy', type: 'address' }, { name: '_signer', type: 'address' }, { name: '_recovery', type: 'address' }, { name: '_timeLock', type: 'uint96' }], payable: false, type: 'constructor' }, { anonymous: false, inputs: [{ indexed: false, name: 'action', type: 'bytes32' }], name: 'Event', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, name: 'error', type: 'bytes32' }], name: 'Error', type: 'event' }];

export const ABI_BET = [{ name: 'bet', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }];
export const checkABIs = {
  preflop: [{ name: 'checkPre', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }],
  flop: [{ name: 'checkFlop', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }],
  turn: [{ name: 'checkTurn', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }],
  river: [{ name: 'checkRiver', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }],
};

export const ABI_FOLD = [{ name: 'fold', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }];
export const ABI_SIT_OUT = [{ name: 'sitOut', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }];
export const ABI_SHOW = [{ name: 'show', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }];
export const ABI_LEAVE = [{ name: 'leave', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }] }];
export const ABI_DIST = [{ name: 'distribution', type: 'function', inputs: [{ type: 'uint' }, { type: 'uint' }, { type: 'bytes32[]' }] }];
export const TIMEOUT_PERIOD = 179;

// chip values and colors
export const chipValues = [
  [5000, '#080B0F'],
  [1000, '#317DDD'],
  [500, '#192A39'],
  [100, '#009688'],
  [50, '#FEB300'],
  [10, '#080B0F'],
  [1, '#FFFFFF'],
];

export const SEAT_COORDS = {
  2: [[110, 65, 0], [-10, 65, 0]],
  4: [[25, -30, 0], [65, -30, 0], [65, 140, 1], [25, 140, 0]],
  6: [[25, -30, 0], [65, -30, 0], [110, 50, 0], [65, 140, 1], [25, 140, 0], [-20, 50, 0]],
  10: [[10, -28], [100, 72], [12, 102], [-12, 72], [-12, 0], [75, 102], [75, -28], [100, 0], [44, -30], [44, 102]],
};

export const AMOUNT_COORDS = {
  2: [[-295, 0], [275, 10]],
  4: [[50, 200], [50, 200], [-50, -165], [50, -165]],
  6: [[50, 200], [50, 200], [-295, 0], [-50, -165], [50, -165], [275, 10]],
  10: [[-20, -10], [-15, 0], [-20, -10], [-15, 0], [-15, 0], [-15, 0], [-15, 0], [-15, 0], [-15, 0], [-15, 0], [-15, 0], [-15, 0]],
};
