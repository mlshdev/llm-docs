> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbufferstream](https://developer.apple.com/documentation/scenekit/scnbufferstream)

# SCNBufferStream (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An object that manages a Metal buffer used by a custom shader program.

## Declaration

```swift
protocol SCNBufferStream : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Your app does not define classes that implement this protocol. Instead, you use the [SCNProgram](scnprogram.md) method [handleBinding(ofBufferNamed:frequency:handler:)](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) to register a block to be called by SceneKit. In that block, SceneKit provides a buffer stream object that you can use to write data to the buffer.

## Topics

### Writing Data to a Buffer

- [writeBytes(\_:count:)](scnbufferstream/writebytes%28__count_%29.md): Copies the specified data bytes into the underlying Metal buffer for use by a shader.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Renderer Customization

- [SCNShadable](scnshadable.md): Methods for customizing SceneKit’s rendering of geometry and materials using Metal or OpenGL shader programs.
- [SCNProgram](scnprogram.md): A complete Metal or OpenGL shader program that replaces SceneKit’s rendering of a geometry or material.
- [SCNTechnique](scntechnique.md): A specification for augmenting or postprocessing SceneKit’s rendering of a scene using additional drawing passes with custom Metal or OpenGL shaders.
- [SCNTechniqueSupport](scntechniquesupport.md): The common interface for SceneKit objects that support multipass rendering using [SCNTechnique](scntechnique.md) objects.
- [SCNNodeRendererDelegate](scnnoderendererdelegate.md): Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.
- [Postprocessing a Scene With Custom Symbols](postprocessing-a-scene-with-custom-symbols.md): Create visual effects in a scene by defining a rendering technique with custom symbols.

# SCNBufferStream (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that manages a Metal buffer used by a custom shader program.

## Declaration

```objectivec
@protocol SCNBufferStream <NSObject>
```

<a id="overview"></a>

## Overview

Your app does not define classes that implement this protocol. Instead, you use the [SCNProgram](scnprogram.md) method [handleBindingOfBufferNamed:frequency:usingBlock:](scnprogram/handlebinding%28ofbuffernamed_frequency_handler_%29.md) to register a block to be called by SceneKit. In that block, SceneKit provides a buffer stream object that you can use to write data to the buffer.

## Topics

### Writing Data to a Buffer

- [writeBytes:length:](scnbufferstream/writebytes%28__count_%29.md): Copies the specified data bytes into the underlying Metal buffer for use by a shader.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Renderer Customization

- [SCNShadable](scnshadable.md): Methods for customizing SceneKit’s rendering of geometry and materials using Metal or OpenGL shader programs.
- [SCNProgram](scnprogram.md): A complete Metal or OpenGL shader program that replaces SceneKit’s rendering of a geometry or material.
- [SCNTechnique](scntechnique.md): A specification for augmenting or postprocessing SceneKit’s rendering of a scene using additional drawing passes with custom Metal or OpenGL shaders.
- [SCNTechniqueSupport](scntechniquesupport.md): The common interface for SceneKit objects that support multipass rendering using [SCNTechnique](scntechnique.md) objects.
- [SCNNodeRendererDelegate](scnnoderendererdelegate.md): Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.
- [Postprocessing a Scene With Custom Symbols](postprocessing-a-scene-with-custom-symbols.md): Create visual effects in a scene by defining a rendering technique with custom symbols.
