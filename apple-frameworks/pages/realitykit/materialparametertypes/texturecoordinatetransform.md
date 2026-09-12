> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/materialparametertypes/texturecoordinatetransform](https://developer.apple.com/documentation/realitykit/materialparametertypes/texturecoordinatetransform)

# MaterialParameterTypes.TextureCoordinateTransform

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines a transformation the framework applies to a material’s UV-mapped textures.

## Declaration

```swift
struct TextureCoordinateTransform
```

<a id="overview"></a>

## Overview

An entity’s UV texture coordinates define how RealityKit maps image textures onto an entity. This object defines a transformation to texture coordinates that changes the way this material maps textures onto an entity. You might, for example, continuously rotate, translate, or scale the texture coordinates and animate materials to create special effects, such as fire or flowing liquids.

## Topics

### Creating a texture coordinate transform

- [init(offset:scale:rotation:)](texturecoordinatetransform/init%28offset_scale_rotation_%29.md): Creates a texture coordinate transform object.

### Accessing the transform values

- [offset](texturecoordinatetransform/offset.md): The amount by which the framework offsets the entity’s UV texture coordinates.
- [scale](texturecoordinatetransform/scale.md): The amount by which the framework scale the UV texture coordinates.
- [rotation](texturecoordinatetransform/rotation.md): The amount by which the framework rotates the UV texture coordinates you specify in radians.
