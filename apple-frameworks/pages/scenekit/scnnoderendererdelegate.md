> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnoderendererdelegate](https://developer.apple.com/documentation/scenekit/scnnoderendererdelegate)

# SCNNodeRendererDelegate (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.

## Declaration

```swift
protocol SCNNodeRendererDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Typically, you use a node renderer delegate to perform custom rendering that is anchored at a location in the scene. For example, you can attach a node with a renderer delegate to part of a scene in order to add a special effect rendered using your own Metal or OpenGL drawing code, such as a fluid simulation. To provide a renderer delegate for an [SCNNode](scnnode.md) object, use its [rendererDelegate](scnnode/rendererdelegate.md) property.

SceneKit performs no rendering of its own for a node with a render delegate, so this protocol is not appropriate for customizing SceneKit’s rendering of geometry and materials. Instead, use methods in the [SCNShadable](scnshadable.md) protocol to extend SceneKit’s rendering using shader programs written in the Metal shading language or the OpenGL Shading Language (GLSL).

## Topics

### Customizing the Rendering of a Node

- [renderNode(\_:renderer:arguments:)](scnnoderendererdelegate/rendernode%28__renderer_arguments_%29.md): Tells the delegate to perform rendering for a node.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Renderer Customization

- [SCNShadable](scnshadable.md): Methods for customizing SceneKit’s rendering of geometry and materials using Metal or OpenGL shader programs.
- [SCNProgram](scnprogram.md): A complete Metal or OpenGL shader program that replaces SceneKit’s rendering of a geometry or material.
- [SCNBufferStream](scnbufferstream.md): An object that manages a Metal buffer used by a custom shader program.
- [SCNTechnique](scntechnique.md): A specification for augmenting or postprocessing SceneKit’s rendering of a scene using additional drawing passes with custom Metal or OpenGL shaders.
- [SCNTechniqueSupport](scntechniquesupport.md): The common interface for SceneKit objects that support multipass rendering using [SCNTechnique](scntechnique.md) objects.
- [Postprocessing a Scene With Custom Symbols](postprocessing-a-scene-with-custom-symbols.md): Create visual effects in a scene by defining a rendering technique with custom symbols.

# SCNNodeRendererDelegate (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Methods you can implement to use your own custom Metal or OpenGL drawing code to render content for a node.

## Declaration

```objectivec
@protocol SCNNodeRendererDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Typically, you use a node renderer delegate to perform custom rendering that is anchored at a location in the scene. For example, you can attach a node with a renderer delegate to part of a scene in order to add a special effect rendered using your own Metal or OpenGL drawing code, such as a fluid simulation. To provide a renderer delegate for an [SCNNode](scnnode.md) object, use its [rendererDelegate](scnnode/rendererdelegate.md) property.

SceneKit performs no rendering of its own for a node with a render delegate, so this protocol is not appropriate for customizing SceneKit’s rendering of geometry and materials. Instead, use methods in the [SCNShadable](scnshadable.md) protocol to extend SceneKit’s rendering using shader programs written in the Metal shading language or the OpenGL Shading Language (GLSL).

## Topics

### Customizing the Rendering of a Node

- [renderNode:renderer:arguments:](scnnoderendererdelegate/rendernode%28__renderer_arguments_%29.md): Tells the delegate to perform rendering for a node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Renderer Customization

- [SCNShadable](scnshadable.md): Methods for customizing SceneKit’s rendering of geometry and materials using Metal or OpenGL shader programs.
- [SCNProgram](scnprogram.md): A complete Metal or OpenGL shader program that replaces SceneKit’s rendering of a geometry or material.
- [SCNBufferStream](scnbufferstream.md): An object that manages a Metal buffer used by a custom shader program.
- [SCNTechnique](scntechnique.md): A specification for augmenting or postprocessing SceneKit’s rendering of a scene using additional drawing passes with custom Metal or OpenGL shaders.
- [SCNTechniqueSupport](scntechniquesupport.md): The common interface for SceneKit objects that support multipass rendering using [SCNTechnique](scntechnique.md) objects.
- [Postprocessing a Scene With Custom Symbols](postprocessing-a-scene-with-custom-symbols.md): Create visual effects in a scene by defining a rendering technique with custom symbols.
