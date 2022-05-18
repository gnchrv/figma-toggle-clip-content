// Import helper functions
import { isClippable } from './lib'

// Get selected elements
const { selection } = figma.currentPage

// If nothing is selected, close the plugin and tell what’s wrong
if (!selection.length)
    figma.closePlugin('Select an element to clip its content')

/* 
I decided to synchronize elements clipping modes. If a selection contains nodes with different  clipping settings, these settings will not be toggled separately. Instead, the first element will change its clipping mode and then this new mode will be propagated to the rest of the selection. 
*/
let isFirstNodeClipped: boolean

// Walk through each of the selected elements
for (const node of selection) {

    // If an element doesn’t have such parameter, switch to the next one
    if (!isClippable(node)) continue

    // Set a clipping mode of the first element if it hasn’t been set yet
    if (isFirstNodeClipped === undefined) isFirstNodeClipped = node.clipsContent
    
    // Change an element’s clipping to the mode which is opposite of the first one
    node.clipsContent = !isFirstNodeClipped
}

// Finally, close the plugin
figma.closePlugin()