import {connect} from 'react-redux';
import Link from './link';
import setVisibilityFilter from '../reducers/set-visibility-filter';

const mapStateToLinkProps = (state,
                             ownProps) => {
    return {
        active:
        ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToLinkProps = (dispatch,
                                ownProps) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        }
    };
}

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

export default FilterLink;