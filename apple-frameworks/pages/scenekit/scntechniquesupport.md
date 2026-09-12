> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntechniquesupport](https://developer.apple.com/documentation/scenekit/scntechniquesupport)

# SCNTechniqueSupport (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The common interface for SceneKit objects that support multipass rendering using [SCNTechnique](scntechnique.md) objects.

## Declaration

```swift
protocol SCNTechniqueSupport : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Techniques let you specify approaches to rendering a scene that involves multiple drawing passes. For example, you might create a technique that uses a shader program to postprocess a rendered scene on the GPU, creating special effects such as color grading, screen-space ambient occlusion, or motion blur. Different SceneKit objects support techniques in different ways, summarized in Table 1.

| Class | Description |
| --- | --- |
| [SCNView](scnview.md), [SCNLayer](scnlayer.md) (macOS), [SCNRenderer](scnrenderer.md) | Apply effects whenever the scene is rendered. |
| [SCNCamera](scncamera.md) | Apply effects when the camera is the current point of view. |
| [SCNLight](scnlight.md) | Apply effects when the light is enabled. |

## Topics

### Specifying a Technique

- [technique](scntechniquesupport/technique.md): The technique SceneKit uses when rendering the object.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNCamera](scncamera.md)
- [SCNLayer](scnlayer.md)
- [SCNLight](scnlight.md)
- [SCNRenderer](scnrenderer.md)
- [SCNView](scnview.md)

## See Also

### Renderer Customization

- [SCNShadable](scnshadable.md): Methods for customizing SceneKit’s rendering of geometry and materials using Metal or OpenGL shader programs.
- [SCNProgram](scnprogram.md): A complete Metal or OpenGL shader program that replaces SceneKit’s rendering of a geometry or material.
- [SCNBufferStream](scnbufferstream.md): An object that manages a Metal buffer used by a custom shader program.
- [SCNTechnique](scntechnique.md): A specification for augmenting or postprocessing SceneKit’s rendering of a scene using additional drawing passes with custom Metal or OpenGL shaders.
- [SCNNodeRendererDelegate](scnnoderendererdelegate.md): Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.
- [Postprocessing a Scene With Custom Symbols](postprocessing-a-scene-with-custom-symbols.md): Create visual effects in a scene by defining a rendering technique with custom symbols.

# SCNTechniqueSupport (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The common interface for SceneKit objects that support multipass rendering using [SCNTechnique](scntechnique.md) objects.

## Declaration

```objectivec
@protocol SCNTechniqueSupport <NSObject>
```

<a id="overview"></a>

## Overview

Techniques let you specify approaches to rendering a scene that involves multiple drawing passes. For example, you might create a technique that uses a shader program to postprocess a rendered scene on the GPU, creating special effects such as color grading, screen-space ambient occlusion, or motion blur. Different SceneKit objects support techniques in different ways, summarized in Table 1.

| Class | Description |
| --- | --- |
| [SCNView](scnview.md), [SCNLayer](scnlayer.md) (macOS), [SCNRenderer](scnrenderer.md) | Apply effects whenever the scene is rendered. |
| [SCNCamera](scncamera.md) | Apply effects when the camera is the current point of view. |
| [SCNLight](scnlight.md) | Apply effects when the light is enabled. |

## Topics

### Specifying a Technique

- [technique](scntechniquesupport/technique.md): The technique SceneKit uses when rendering the object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [SCNCamera](scncamera.md)
- [SCNLayer](scnlayer.md)
- [SCNLight](scnlight.md)
- [SCNRenderer](scnrenderer.md)
- [SCNView](scnview.md)

## See Also

### Renderer Customization

- [SCNShadable](scnshadable.md): Methods for customizing SceneKit’s rendering of geometry and materials using Metal or OpenGL shader programs.
- [SCNProgram](scnprogram.md): A complete Metal or OpenGL shader program that replaces SceneKit’s rendering of a geometry or material.
- [SCNBufferStream](scnbufferstream.md): An object that manages a Metal buffer used by a custom shader program.
- [SCNTechnique](scntechnique.md): A specification for augmenting or postprocessing SceneKit’s rendering of a scene using additional drawing passes with custom Metal or OpenGL shaders.
- [SCNNodeRendererDelegate](scnnoderendererdelegate.md): Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.
- [Postprocessing a Scene With Custom Symbols](postprocessing-a-scene-with-custom-symbols.md): Create visual effects in a scene by defining a rendering technique with custom symbols.
