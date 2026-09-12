> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrenderer](https://developer.apple.com/documentation/spritekit/skrenderer)

# SKRenderer (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that renders a scene into a custom Metal rendering pipeline and drives the scene update cycle.

## Declaration

```swift
class SKRenderer
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md)

<a id="overview"></a>

## Overview

[SKRenderer](skrenderer.md) allows an app to mix SpriteKit and Metal content by rendering an [SKScene](skscene.md) into a Metal command buffer. The reasons an app may do this instead of displaying a scene in [SKView](skview.md) are:

1. Apps that are built in Metal can mix in SpriteKit content. While it’s possible to add [SKView](skview.md) as a subview to a Metal view, plugging [SKRenderer](skrenderer.md) into their Metal pipeline allows layering SpriteKit content at a specific z-position.
2. You might be writing a SpriteKit app and decide later to take full control over some portion of renderering by implementing it with Metal, yet continue to use SpriteKit for the rest of the app. For example, you might write the environmental effects layer of your app that does fog, clouds, and rain, with custom Metal shaders, and continue to layer content below and above that with SpriteKit.

## Topics

### First Steps

Create a renderer by specifying a GPU and then set its scene.

- [init(device:)](skrenderer/init%28device_%29.md): Initializes with a specific GPU to render into.
- [scene](skrenderer/scene.md): The scene this renderer will draw into the Metal command buffer.

### Rendering the Scene

Draw the renderer’s scene into a custom Metal rendering pipeline.

- [render(withViewport:commandBuffer:renderPassDescriptor:)](skrenderer/render%28withviewport_commandbuffer_renderpassdescriptor_%29.md)
- [render(withViewport:renderCommandEncoder:renderPassDescriptor:commandQueue:)](skrenderer/render%28withviewport_rendercommandencoder_renderpassdescriptor_commandqueue_%29.md)

### Driving the Scene’s Update Cycle

Control when the scene’s delegate functions are called.

- [update(atTime:)](skrenderer/update%28attime_%29.md)

### Configuring Performance Related Toggles

Control hints that have performance implications which are unique to your app.

- [ignoresSiblingOrder](skrenderer/ignoressiblingorder.md)
- [shouldCullNonVisibleNodes](skrenderer/shouldcullnonvisiblenodes.md)

### Enabling Visual Statistics for Debugging

Display metrics in the bottom corner of the scene’s frame for debugging purposes.

- [showsNodeCount](skrenderer/showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsDrawCount](skrenderer/showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsQuadCount](skrenderer/showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](skrenderer/showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](skrenderer/showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Scene Renderers

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md): Compare the different ways to display a SpriteKit scene.
- [SKView](skview.md): A view subclass that renders a SpriteKit scene.
- [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene): A visual WatchKit element that displays a SpriteKit scene.

# SKRenderer (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An object that renders a scene into a custom Metal rendering pipeline and drives the scene update cycle.

## Declaration

```objectivec
@interface SKRenderer : NSObject
```

## Mentioned In

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md)

<a id="overview"></a>

## Overview

[SKRenderer](skrenderer.md) allows an app to mix SpriteKit and Metal content by rendering an [SKScene](skscene.md) into a Metal command buffer. The reasons an app may do this instead of displaying a scene in [SKView](skview.md) are:

1. Apps that are built in Metal can mix in SpriteKit content. While it’s possible to add [SKView](skview.md) as a subview to a Metal view, plugging [SKRenderer](skrenderer.md) into their Metal pipeline allows layering SpriteKit content at a specific z-position.
2. You might be writing a SpriteKit app and decide later to take full control over some portion of renderering by implementing it with Metal, yet continue to use SpriteKit for the rest of the app. For example, you might write the environmental effects layer of your app that does fog, clouds, and rain, with custom Metal shaders, and continue to layer content below and above that with SpriteKit.

## Topics

### First Steps

Create a renderer by specifying a GPU and then set its scene.

- [rendererWithDevice:](skrenderer/init%28device_%29.md): Initializes with a specific GPU to render into.
- [scene](skrenderer/scene.md): The scene this renderer will draw into the Metal command buffer.

### Rendering the Scene

Draw the renderer’s scene into a custom Metal rendering pipeline.

- [renderWithViewport:commandBuffer:renderPassDescriptor:](skrenderer/render%28withviewport_commandbuffer_renderpassdescriptor_%29.md)
- [renderWithViewport:renderCommandEncoder:renderPassDescriptor:commandQueue:](skrenderer/render%28withviewport_rendercommandencoder_renderpassdescriptor_commandqueue_%29.md)

### Driving the Scene’s Update Cycle

Control when the scene’s delegate functions are called.

- [updateAtTime:](skrenderer/update%28attime_%29.md)

### Configuring Performance Related Toggles

Control hints that have performance implications which are unique to your app.

- [ignoresSiblingOrder](skrenderer/ignoressiblingorder.md)
- [shouldCullNonVisibleNodes](skrenderer/shouldcullnonvisiblenodes.md)

### Enabling Visual Statistics for Debugging

Display metrics in the bottom corner of the scene’s frame for debugging purposes.

- [showsNodeCount](skrenderer/showsnodecount.md): A Boolean value that indicates whether the view displays an overlay that shows physics bodies that are visible in the scene.
- [showsDrawCount](skrenderer/showsdrawcount.md): A Boolean value that indicates whether the view displays the number of drawing passes it needed to render the view.
- [showsQuadCount](skrenderer/showsquadcount.md): A Boolean value that indicates whether the view displays the number of rectangles used to render the scene.
- [showsPhysics](skrenderer/showsphysics.md): A Boolean value that indicates whether the view displays physics-related debugging information.
- [showsFields](skrenderer/showsfields.md): A Boolean value that indicates whether the view displays information about physics fields in the scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Scene Renderers

- [Choosing a SpriteKit Scene Renderer](choosing-a-spritekit-scene-renderer.md): Compare the different ways to display a SpriteKit scene.
- [SKView](skview.md): A view subclass that renders a SpriteKit scene.
- [WKInterfaceSKScene](https://developer.apple.com/documentation/watchkit/wkinterfaceskscene): A visual WatchKit element that displays a SpriteKit scene.
