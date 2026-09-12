> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene](https://developer.apple.com/documentation/spritekit/skscene)

# SKScene (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that organizes all of the active SpriteKit content.

## Declaration

```swift
class SKScene
```

## Mentioned In

- [Controlling User Interaction on Nodes](controlling-user-interaction-on-nodes.md)
- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md)
- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md)
- [Creating a Scene from a File](creating-a-scene-from-a-file.md)
- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md)
- [Drawing SpriteKit Content in a View](drawing-spritekit-content-in-a-view.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)

<a id="overview"></a>

## Overview

An [SKScene](skscene.md) object represents a scene of content in SpriteKit. A scene is the root node in a tree of SpriteKit nodes ([SKNode](sknode.md)). These nodes provide content that the scene animates and renders for display. To display a scene, you present it from an [SKView](skview.md), [SKRenderer](skrenderer.md), or [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene).

`SKScene` is a subclass of [SKEffectNode](skeffectnode.md) and enables certain effects to apply to the entire scene. Though applying effects to an entire scene can be an expensive operation, creativity, and ingenuity may help you find some interesting ways to use effects.

## Topics

### Creating a Scene from a File

- [Creating a Scene from a File](creating-a-scene-from-a-file.md): Load a scene that you configure in Xcode’s scene editor.

### Creating a Scene Programmatically

Use code to manually create a scene and configure its properties.

- [init(size:)](skscene/init%28size_%29.md): Initializes a new scene object.
- [size](skscene/size.md): The dimensions of the scene, in points.

### Stretching Content to Fit the View

- [Scaling a Scene’s Content to Fit the View](scaling-a-scene-s-content-to-fit-the-view.md): Configure the scale mode to determine how a scene is sized to fit its view.
- [scaleMode](skscene/scalemode.md): A setting that defines how the scene is mapped to the view that presents it.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.

### Configuring the Viewport

Define which portion of the scene is visible at a given time.

- [Positioning a Scene’s Origin Within its View](positioning-a-scene-s-origin-within-its-view.md): Try the different ways to configure the scene’s origin inside its view.
- [camera](skscene/camera.md): The camera node in the scene that determines what part of the scene’s coordinate space is visible in the view.
- [anchorPoint](skscene/anchorpoint.md): The point in the view’s frame that corresponds to the scene’s origin.

### Responding to Loading and Resizing Events

Override these functions to be notified when a scene is loaded or presented, or changes size.

- [sceneDidLoad()](skscene/scenedidload%28%29.md): Tells you when the scene is presented.
- [didChangeSize(\_:)](skscene/didchangesize%28__%29.md): Tells you when the scene’s size has changed.
- [willMove(from:)](skscene/willmove%28from_%29.md): Tells you when the scene is about to be removed from a view.
- [didMove(to:)](skscene/didmove%28to_%29.md): Tells you when the scene is presented by a view.

### Responding to Frame-Cycle Events

Callbacks occur every frame, telling you when to perform app logic.

- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update(\_:)](skscene/update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions()](skscene/didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics()](skscene/didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints()](skscene/didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate()](skscene/didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

### Configuring a Delegate

Instead of subclassing a scene to respond to update life-cycle events, assign a delegate to field them.

- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md): Use a scene delegate to share app logic across various scenes.
- [delegate](skscene/delegate.md): A delegate to be called during the animation loop.
- [SKSceneDelegate](skscenedelegate.md): Methods that, when implemented, allow any class to participate in the SpriteKit render loop callbacks.

### Setting the Background Appearance

Adjust content that’s under a scene.

- [Creating a Scene with a Transparent Background](creating-a-scene-with-a-transparent-background.md): Set a transparent background color to show the content of the views below.
- [view](skscene/view.md): The view that is currently presenting the scene.
- [backgroundColor](skscene/backgroundcolor.md): The background color of the scene.

### Configuring Physics Properties

- [physicsWorld](skscene/physicsworld.md): The physics simulation associated with the scene.

### Adding Positional Audio

Enable positional audio by defining a listener.

- [Using Audio Nodes with the Scene’s Listener](using-audio-nodes-with-the-scene-s-listener.md): Add audio to your scene, and optionally give it 2D-positional mixing characteristics.
- [listener](skscene/listener.md): A node used to determine the position of the listener for positional audio in the scene.
- [audioEngine](skscene/audioengine.md): The AVFoundation audio engine used to play audio from audio nodes contained in the scene.

### Converting Between Coordinate Systems

- [convertPoint(fromView:)](skscene/convertpoint%28fromview_%29.md): Converts a point from view coordinates to scene coordinates.
- [convertPoint(toView:)](skscene/convertpoint%28toview_%29.md): Converts a point from scene coordinates to view coordinates.

## Relationships

### Inherits From

- [SKEffectNode](skeffectnode.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [GKSceneRootNodeType](../gameplaykit/gkscenerootnodetype.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [SKWarpable](skwarpable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Essentials

- [Drawing SpriteKit Content in a View](drawing-spritekit-content-in-a-view.md): Display visual content using SpriteKit.
- [Nodes for Scene Building](nodes-for-scene-building.md): Define the appearance or layout of scene content.

# SKScene (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that organizes all of the active SpriteKit content.

## Declaration

```objectivec
@interface SKScene : SKEffectNode
```

## Mentioned In

- [Controlling User Interaction on Nodes](controlling-user-interaction-on-nodes.md)
- [Customizing the Behavior of a Node](customizing-the-behavior-of-a-node.md)
- [Getting Started with Nodes](getting-started-with-nodes.md)
- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md)
- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md)
- [Creating a Scene from a File](creating-a-scene-from-a-file.md)
- [Displaying 3D Content in a SpriteKit Scene](displaying-3d-content-in-a-spritekit-scene.md)
- [Drawing SpriteKit Content in a View](drawing-spritekit-content-in-a-view.md)
- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md)

<a id="overview"></a>

## Overview

An [SKScene](skscene.md) object represents a scene of content in SpriteKit. A scene is the root node in a tree of SpriteKit nodes ([SKNode](sknode.md)). These nodes provide content that the scene animates and renders for display. To display a scene, you present it from an [SKView](skview.md), [SKRenderer](skrenderer.md), or [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene).

`SKScene` is a subclass of [SKEffectNode](skeffectnode.md) and enables certain effects to apply to the entire scene. Though applying effects to an entire scene can be an expensive operation, creativity, and ingenuity may help you find some interesting ways to use effects.

## Topics

### Creating a Scene from a File

- [Creating a Scene from a File](creating-a-scene-from-a-file.md): Load a scene that you configure in Xcode’s scene editor.

### Creating a Scene Programmatically

Use code to manually create a scene and configure its properties.

- [sceneWithSize:](skscene/scenewithsize_.md): Creates and returns a new scene object.
- [initWithSize:](skscene/init%28size_%29.md): Initializes a new scene object.
- [size](skscene/size.md): The dimensions of the scene, in points.

### Stretching Content to Fit the View

- [Scaling a Scene’s Content to Fit the View](scaling-a-scene-s-content-to-fit-the-view.md): Configure the scale mode to determine how a scene is sized to fit its view.
- [scaleMode](skscene/scalemode.md): A setting that defines how the scene is mapped to the view that presents it.
- [SKSceneScaleMode](skscenescalemode.md): The modes that determine how the scene’s area is mapped to the view that presents it.

### Configuring the Viewport

Define which portion of the scene is visible at a given time.

- [Positioning a Scene’s Origin Within its View](positioning-a-scene-s-origin-within-its-view.md): Try the different ways to configure the scene’s origin inside its view.
- [camera](skscene/camera.md): The camera node in the scene that determines what part of the scene’s coordinate space is visible in the view.
- [anchorPoint](skscene/anchorpoint.md): The point in the view’s frame that corresponds to the scene’s origin.

### Responding to Loading and Resizing Events

Override these functions to be notified when a scene is loaded or presented, or changes size.

- [sceneDidLoad](skscene/scenedidload%28%29.md): Tells you when the scene is presented.
- [didChangeSize:](skscene/didchangesize%28__%29.md): Tells you when the scene’s size has changed.
- [willMoveFromView:](skscene/willmove%28from_%29.md): Tells you when the scene is about to be removed from a view.
- [didMoveToView:](skscene/didmove%28to_%29.md): Tells you when the scene is presented by a view.

### Responding to Frame-Cycle Events

Callbacks occur every frame, telling you when to perform app logic.

- [Responding to Frame-Cycle Events](responding-to-frame-cycle-events.md): Implement per-frame app logic, such as the scene’s update function that’s called every frame.
- [update:](skscene/update%28__%29.md): Tells your app to perform any app-specific logic to update your scene.
- [didEvaluateActions](skscene/didevaluateactions%28%29.md): Tells your app to peform any necessary logic after scene actions are evaluated.
- [didSimulatePhysics](skscene/didsimulatephysics%28%29.md): Tells your app to peform any necessary logic after physics simulations are performed.
- [didApplyConstraints](skscene/didapplyconstraints%28%29.md): Tells your app to peform any necessary logic after constraints are applied.
- [didFinishUpdate](skscene/didfinishupdate%28%29.md): Tells your app to peform any necessary logic after the scene has finished all of the steps required to process animations.

### Configuring a Delegate

Instead of subclassing a scene to respond to update life-cycle events, assign a delegate to field them.

- [Subclassing Scenes Versus Assigning a Delegate](subclassing-scenes-versus-assigning-a-delegate.md): Use a scene delegate to share app logic across various scenes.
- [delegate](skscene/delegate.md): A delegate to be called during the animation loop.
- [SKSceneDelegate](skscenedelegate.md): Methods that, when implemented, allow any class to participate in the SpriteKit render loop callbacks.

### Setting the Background Appearance

Adjust content that’s under a scene.

- [Creating a Scene with a Transparent Background](creating-a-scene-with-a-transparent-background.md): Set a transparent background color to show the content of the views below.
- [view](skscene/view.md): The view that is currently presenting the scene.
- [backgroundColor](skscene/backgroundcolor.md): The background color of the scene.

### Configuring Physics Properties

- [physicsWorld](skscene/physicsworld.md): The physics simulation associated with the scene.

### Adding Positional Audio

Enable positional audio by defining a listener.

- [Using Audio Nodes with the Scene’s Listener](using-audio-nodes-with-the-scene-s-listener.md): Add audio to your scene, and optionally give it 2D-positional mixing characteristics.
- [listener](skscene/listener.md): A node used to determine the position of the listener for positional audio in the scene.
- [audioEngine](skscene/audioengine.md): The AVFoundation audio engine used to play audio from audio nodes contained in the scene.

### Converting Between Coordinate Systems

- [convertPointFromView:](skscene/convertpoint%28fromview_%29.md): Converts a point from view coordinates to scene coordinates.
- [convertPointToView:](skscene/convertpoint%28toview_%29.md): Converts a point from scene coordinates to view coordinates.

## Relationships

### Inherits From

- [SKEffectNode](skeffectnode.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [GKSceneRootNodeType](../gameplaykit/gkscenerootnodetype.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Drawing SpriteKit Content in a View](drawing-spritekit-content-in-a-view.md): Display visual content using SpriteKit.
- [Nodes for Scene Building](nodes-for-scene-building.md): Define the appearance or layout of scene content.
