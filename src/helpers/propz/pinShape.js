import PropTypes from 'prop-types';

const pinShape = PropTypes.shape({
  boardId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export default { pinShape };
