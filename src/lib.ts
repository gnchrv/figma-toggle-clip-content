export function isClippable(node: SceneNode):
    node is FrameNode | InstanceNode | ComponentNode | ComponentSetNode {
    return node.type === 'FRAME' ||
        node.type === 'INSTANCE' ||
        node.type === 'COMPONENT' ||
        node.type === 'COMPONENT_SET'
}