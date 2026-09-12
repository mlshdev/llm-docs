> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/assembly/texturebinding](https://developer.apple.com/documentation/computegraph/computenodegraph/assembly/texturebinding)

# ComputeNodeGraph.Assembly.TextureBinding

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Describes how a Metal texture is bound to a compute pipeline stage.

## Declaration

```swift
struct TextureBinding
```

<a id="overview"></a>

## Overview

A texture binding pairs an [ComputeNodeGraph.Assembly.Attachment](attachment.md) (how the texture is connected to the graph) with an optional `MTLTextureType` indicating the texture’s dimensionality.

## Topics

### Initializers

- [init(attachment:type:)](texturebinding/init%28attachment_type_%29.md)

### Instance Properties

- [attachment](texturebinding/attachment.md): The attachment point that provides this texture.
- [type](texturebinding/type.md): The texture type (e.g. `.type2D`, `.typeCube`), or `nil` if unspecified.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
