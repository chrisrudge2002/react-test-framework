import {expect} from '../test_helper';
import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

describe('Actions', () => {
	describe('saveComment', () => {
		it('has the correct type', () => {
			const action = actions.saveComment();
			expect(action.type).to.equal(types.SAVE_COMMENT);
		});

		it('has the correct payload', () => {
			const action = actions.saveComment('new comment');
			expect(action.comment).to.equal('new comment');
		});
	});
});
