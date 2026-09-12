> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/gaussiansplatresource/bufferdescriptor](https://developer.apple.com/documentation/realitykit/gaussiansplatresource/bufferdescriptor)

# GaussianSplatResource.BufferDescriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A description of where one per-splat property lives within a buffer.

## Declaration

```swift
struct BufferDescriptor
```

<a id="overview"></a>

## Overview

Express the stride and offset in bytes. The framework finds the value for each splat by starting at the offset and advancing one stride per splat.

## Topics

### Initializers

- [init(buffer:format:stride:offset:)](bufferdescriptor/init%28buffer_format_stride_offset_%29.md): Creates a descriptor that locates a property within a buffer.

### Instance Properties

- [buffer](bufferdescriptor/buffer.md): The buffer that stores the property’s values.
- [format](bufferdescriptor/format.md): The element format of each value in the buffer.
- [offset](bufferdescriptor/offset.md): The byte offset of the first splat’s value within the buffer.
- [stride](bufferdescriptor/stride.md): The distance, in bytes, between consecutive splats’ values.
