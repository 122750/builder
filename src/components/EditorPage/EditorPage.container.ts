import { connect } from 'react-redux'

import { loadAssetPacksRequest } from 'modules/assetPack/actions'
import { bindEditorKeyboardShortcuts, unbindEditorKeyboardShortcuts, startEditor } from 'modules/editor/actions'
import { MapDispatch, MapDispatchProps } from './EditorPage.types'
import EditorPage from './EditorPage'

const mapState = () => ({})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onStartEditor: () => dispatch(startEditor()),
  onLoadAssetPacks: () => dispatch(loadAssetPacksRequest()),
  onBindKeyboardShortcuts: () => dispatch(bindEditorKeyboardShortcuts()),
  onUnbindKeyboardShortcuts: () => dispatch(unbindEditorKeyboardShortcuts())
})

export default connect(
  mapState,
  mapDispatch
)(EditorPage)