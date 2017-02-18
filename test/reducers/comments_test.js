import {expect} from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import * as types from '../../src/actions/types';

describe('Comments Reducers', () => {
	it('handles action with unknown type', () => {
		expect(commentsReducer(undefined, {})).to.eql([]);
	});

	it('SAVE_COMMENT', () => {
		const action = {
			type: types.SAVE_COMMENT,
			comment: 'new comment'
		};
		expect(commentsReducer([], action)).to.eql(['new comment']);
	});
});
