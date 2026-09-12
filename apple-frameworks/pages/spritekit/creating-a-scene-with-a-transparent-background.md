> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/creating-a-scene-with-a-transparent-background](https://developer.apple.com/documentation/spritekit/creating-a-scene-with-a-transparent-background)

# Creating a Scene with a Transparent Background

**Interface languages:** Swift, Objective-C

**Framework:** SpriteKit  
**Kind:** Article

Set a transparent background color to show the content of the views below.

<a id="overview"></a>

## Overview

To overlay content rendered with SpriteKit on top of another view, follow these steps:

1. Set the scene’s [backgroundColor](skscene/backgroundcolor.md) to clear.
2. Enable [allowsTransparency](skview/allowstransparency.md) on the view.
3. Set the view’s [backgroundColor](../uikit/uiview/backgroundcolor.md) to `clear`.

## See Also

### Setting the Background Appearance

- [view](skscene/view.md): The view that is currently presenting the scene.
- [backgroundColor](skscene/backgroundcolor.md): The background color of the scene.
