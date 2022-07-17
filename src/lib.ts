/**
 * Determines whether an element can have different clipping modes
 * @param {SceneNode} node Element in question
 * @returns Whether an element is clippable
 */
export function isClippable(node: SceneNode):
    node is FrameNode | InstanceNode | ComponentNode | ComponentSetNode {
    return node.type === 'FRAME' ||
        node.type === 'INSTANCE' ||
        node.type === 'COMPONENT' ||
        node.type === 'COMPONENT_SET'
}