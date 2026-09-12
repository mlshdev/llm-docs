> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/carenderer](https://developer.apple.com/documentation/quartzcore/carenderer)

# CARenderer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that allows an application to render a layer tree into a Core OpenGL context.

## Declaration

```swift
class CARenderer
```

<a id="overview"></a>

## Overview

For real-time output you should use an instance of [NSView](https://developer.apple.com/documentation/appkit/nsview) to host the layer-tree.

## Topics

### Creating a Renderer

- [init(cglContext:options:)](carenderer/init%28cglcontext_options_%29-1l3m2.md): Deprecated. Creates and returns a `CARenderer` instance with the render target specified by the Core OpenGL context.
- [init(mtlTexture:options:)](carenderer/init%28mtltexture_options_%29-1cr0b.md): Creates a layer renderer from a Metal texture.

### Getting the Rendered Layer

- [layer](carenderer/layer.md): The root layer of the layer-tree the receiver should render.

### Determining Layer Bounds

- [bounds](carenderer/bounds.md): The bounds of the receiver.

### Rendering a Frame

- [beginFrame(atTime:timeStamp:)](carenderer/beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds()](carenderer/updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdate(\_:)](carenderer/addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render()](carenderer/render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime()](carenderer/nextframetime%28%29.md): Returns the time at which the next update should happen.
- [endFrame()](carenderer/endframe%28%29.md): Release any data associated with the current frame.

### Instance Methods

- [setDestination(\_:)](carenderer/setdestination%28__%29.md)

### Initializers

- [init(CGLContext:options:)](carenderer/init%28cglcontext_options_%29-6ywk8.md): Deprecated.
- [init(MTLTexture:options:)](carenderer/init%28mtltexture_options_%29-51l7q.md)

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

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAMetalDrawable](cametaldrawable.md): A Metal drawable associated with a Core Animation layer.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.

# CARenderer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that allows an application to render a layer tree into a Core OpenGL context.

## Declaration

```objectivec
@interface CARenderer : NSObject
```

<a id="overview"></a>

## Overview

For real-time output you should use an instance of [NSView](https://developer.apple.com/documentation/appkit/nsview) to host the layer-tree.

## Topics

### Creating a Renderer

- [rendererWithCGLContext:options:](carenderer/init%28cglcontext_options_%29-1l3m2.md): Deprecated. Creates and returns a `CARenderer` instance with the render target specified by the Core OpenGL context.
- [rendererWithMTLTexture:options:](carenderer/init%28mtltexture_options_%29-1cr0b.md): Creates a layer renderer from a Metal texture.

### Getting the Rendered Layer

- [layer](carenderer/layer.md): The root layer of the layer-tree the receiver should render.

### Determining Layer Bounds

- [bounds](carenderer/bounds.md): The bounds of the receiver.

### Rendering a Frame

- [beginFrameAtTime:timeStamp:](carenderer/beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds](carenderer/updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdateRect:](carenderer/addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render](carenderer/render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime](carenderer/nextframetime%28%29.md): Returns the time at which the next update should happen.
- [endFrame](carenderer/endframe%28%29.md): Release any data associated with the current frame.

### Instance Methods

- [setDestination:](carenderer/setdestination%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Metal and OpenGL

- [CAMetalLayer](cametallayer.md): A Core Animation layer that Metal can render into, typically displayed onscreen.
- [CAMetalDrawable](cametaldrawable.md): A Metal drawable associated with a Core Animation layer.
- [CAEAGLLayer](caeagllayer.md): Deprecated. A layer that supports drawing OpenGL content in iOS and tvOS applications.
- [CAEDRMetadata](caedrmetadata.md): Metadata describing how extended dynamic range (EDR) values should be tone mapped.
- [CAOpenGLLayer](caopengllayer.md): Deprecated. A layer that provides a layer suitable for rendering OpenGL content.
