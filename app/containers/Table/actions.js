/**
 * Created by helge on 20.09.16.
 */


export const START_POLLING = 'START_POLLING';
export const STOP_POLLING = 'STOP_POLLING';
export const GET_LINEUP = 'GET_LINEUP';
export const COMPLETE_HAND_QUERY = 'COMPLETE_HAND_QUERY';
export const NEXT_HAND = 'NEXT_HAND';
export const SET_CARDS = 'SET_CARDS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const STARTED_REQUEST = 'STARTED_REQUEST';
export const UPDATE_RECEIVED = 'UPDATE_RECEIVED';
export const LINEUP_RECEIVED = 'LINEUP_RECEIVED';
export const PERFORM_DEALING_ACTION = 'PERFORM_DEALING_ACTION';
export const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
export const SUBMIT_BET = 'SUBMIT_BET';
export const SUBMIT_FOLD = 'SUBMIT_FOLD';
export const SUBMIT_SHOW = 'SUBMIT_SHOW';
export const SUBMIT_CHECK = 'SUBMIT_CHECK';
export const COMPLETE_BET = 'COMPLETE_BET';
export const COMPLETE_FOLD = 'COMPLETE_FOLD';
export const COMPLETE_SHOW = 'COMPLETE_SHOW';
export const COMPLETE_CHECK = 'COMPLETE_CHECK';


export function getLineup(tableAddr, privKey) {
  return { type: GET_LINEUP, tableAddr, privKey };
}

export function setCards(cards, pos) {
  return { type: SET_CARDS, cards, pos };
}

export function poll(tableAddr) {
  return { type: START_POLLING, tableAddr };
}

export function updateReceived(tableState) {
  return { type: UPDATE_RECEIVED, tableState };
}

export function lineupReceived(lineup) {
  return { type: LINEUP_RECEIVED, lineup };
}

export function updateAmount(amount) {
  return { type: UPDATE_AMOUNT, amount };
}

export function submitBet(amount) {
  return { type: SUBMIT_BET, amount };
}

export function submitFold(amount) {
  return { type: SUBMIT_FOLD, amount };
}

export function submitShow(amount) {
  return { type: SUBMIT_SHOW, amount };
}

export function submitCheck(amount) {
  return { type: SUBMIT_CHECK, amount };
}

export function stopPolling() {
  return { type: STOP_POLLING };
}
