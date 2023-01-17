import { TreeNode } from '../../../../../model/treeNode'
import TreeContainer from '../../../../UI/TreeViewer/TreeContainer'

export interface Props {
  treeNode: TreeNode
}

const ImpactGraph = (props: Props) => <TreeContainer
	root={props.treeNode}/>


export default ImpactGraph