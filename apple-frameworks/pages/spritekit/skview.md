> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview](https://developer.apple.com/documentation/spritekit/skview)

# SKView (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A view subclass that renders a SpriteKit scene.

## Declaration

```swift
class SKView
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md)
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md)

<a id="overview"></a>

## Overview

You present a scene by calling the view’s [presentScene(\_:)](skview/presentscene%28__%29.md) method. When a scene is presented by the view, it alternates between running its simulation (which animates the content) and rendering the content for display. You can pause the scene by setting the view’s [isPaused](skview/ispaused.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Displaying a Scene

Present a scene to display content on the screen.

- [scene](skview/scene.md): The scene currently presented by this view.
- [presentScene(\_:)](skview/presentscene%28__%29.md): Presents a scene.
- [presentScene(\_:transition:)](skview/presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
- [SKTransition](sktransition.md): An object used to perform an animated transition to a new scene.

### Controlling the Timing of a Scene’s Rendering

Control the timing of the view’s screen updates.

- [isPaused](skview/ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](skview/preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](skview/delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](skview/frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.
- [preferredFrameRate](skview/preferredframerate.md): Deprecated.

### Configuring Performance Related Toggles

Control hints that have performance implications which are unique to your app.

- [ignoresSiblingOrder](skview/ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [shouldCullNonVisibleNodes](skview/shouldcullnonvisiblenodes.md): A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.
- [allowsTransparency](skview/allowstransparency.md): A Boolean property that indicates whether the view is rendered using transparency.
- [isAsynchronous](skview/isasynchronous.md): A Boolean value that indicates whether the content is rendered asynchronously.

### Enabling Visual Statistics for Debugging

Display metrics in the bottom corner of the view for debugging purposes.

- [showsFPS](skview/showsfps.md): A Boolean value that indicates whether the view displays a frame rate indicator.
- [showsNodeCount](skview/showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsDrawCount](skview/showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsQuadCount](skview/showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](skview/showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](skview/showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

### Converting Between View and Scene Coordinates

Convert to or from scene and view coordinates which is a common task for touch or mouse input.

- [convert(\_:from:)](skview/convert%28__from_%29.md): Converts a point from scene coordinates to view coordinates.
- [convert(\_:to:)](skview/convert%28__to_%29.md): Converts a point from view coordinates to scene coordinates.

### Snapshotting Nodes to a Texture

Create a texture that is a flattened or cropped portion of the node heirarchy.

- [texture(from:crop:)](skview/texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a texture.
- [texture(from:)](skview/texture%28from_%29.md): Renders the contents of a node tree and returns the rendered image as a texture.
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md): Render a portion of the node tree into a new texture.

### Switching Renderers

- [Requesting the OpenGL Renderer](requesting-the-opengl-renderer.md): Switch to the legacy renderer temporarily for debugging purposes.

### Instance Properties

- [disableDepthStencilBuffer](skview/disabledepthstencilbuffer.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Scene Renderers

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md): Compare the different ways to display a SpriteKit scene.
- [SKRenderer](skrenderer.md): An object that renders a scene into a custom Metal rendering pipeline and drives the scene update cycle.
- [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene): A visual WatchKit element that displays a SpriteKit scene.

# SKView (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A view subclass that renders a SpriteKit scene.

## Declaration

```objectivec
@interface SKView : UIView
```

```objectivec
@interface SKView : NSView
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md)
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md)

<a id="overview"></a>

## Overview

You present a scene by calling the view’s [presentScene:](skview/presentscene%28__%29.md) method. When a scene is presented by the view, it alternates between running its simulation (which animates the content) and rendering the content for display. You can pause the scene by setting the view’s [paused](skview/ispaused.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Displaying a Scene

Present a scene to display content on the screen.

- [scene](skview/scene.md): The scene currently presented by this view.
- [presentScene:](skview/presentscene%28__%29.md): Presents a scene.
- [presentScene:transition:](skview/presentscene%28__transition_%29.md): Transitions from the current scene to a new scene.
- [SKTransition](sktransition.md): An object used to perform an animated transition to a new scene.

### Controlling the Timing of a Scene’s Rendering

Control the timing of the view’s screen updates.

- [paused](skview/ispaused.md): A Boolean value that indicates whether the view’s scene animations are paused.
- [preferredFramesPerSecond](skview/preferredframespersecond.md): The animation frame rate that the view uses to render its scene.
- [delegate](skview/delegate.md): A delegate that allows dynamic control of the view’s render rate.
- [SKViewDelegate](skviewdelegate.md): Methods to take custom control over the view’s render rate.
- [frameInterval](skview/frameinterval.md): Deprecated. The number of frames that must pass before the scene is called to update its contents.
- [preferredFrameRate](skview/preferredframerate.md): Deprecated.

### Configuring Performance Related Toggles

Control hints that have performance implications which are unique to your app.

- [ignoresSiblingOrder](skview/ignoressiblingorder.md): A Boolean value that indicates whether parent-child and sibling relationships affect the rendering order of nodes in the scene.
- [shouldCullNonVisibleNodes](skview/shouldcullnonvisiblenodes.md): A Boolean value that indicates whether the view automatically culls non-visible nodes from the rendering tree.
- [allowsTransparency](skview/allowstransparency.md): A Boolean property that indicates whether the view is rendered using transparency.
- [asynchronous](skview/isasynchronous.md): A Boolean value that indicates whether the content is rendered asynchronously.

### Enabling Visual Statistics for Debugging

Display metrics in the bottom corner of the view for debugging purposes.

- [showsFPS](skview/showsfps.md): A Boolean value that indicates whether the view displays a frame rate indicator.
- [showsNodeCount](skview/showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsDrawCount](skview/showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsQuadCount](skview/showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](skview/showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](skview/showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

### Converting Between View and Scene Coordinates

Convert to or from scene and view coordinates which is a common task for touch or mouse input.

- [convertPoint:fromScene:](skview/convert%28__from_%29.md): Converts a point from scene coordinates to view coordinates.
- [convertPoint:toScene:](skview/convert%28__to_%29.md): Converts a point from view coordinates to scene coordinates.

### Snapshotting Nodes to a Texture

Create a texture that is a flattened or cropped portion of the node heirarchy.

- [textureFromNode:crop:](skview/texture%28from_crop_%29.md): Renders a portion of a node’s contents and returns the rendered image as a texture.
- [textureFromNode:](skview/texture%28from_%29.md): Renders the contents of a node tree and returns the rendered image as a texture.
- [Creating a New Node By Rendering To a Texture](creating-a-new-node-by-rendering-to-a-texture.md): Render a portion of the node tree into a new texture.

### Switching Renderers

- [Requesting the OpenGL Renderer](requesting-the-opengl-renderer.md): Switch to the legacy renderer temporarily for debugging purposes.

### Instance Properties

- [disableDepthStencilBuffer](skview/disabledepthstencilbuffer.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Scene Renderers

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md): Compare the different ways to display a SpriteKit scene.
- [SKRenderer](skrenderer.md): An object that renders a scene into a custom Metal rendering pipeline and drives the scene update cycle.
- [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene): A visual WatchKit element that displays a SpriteKit scene.
