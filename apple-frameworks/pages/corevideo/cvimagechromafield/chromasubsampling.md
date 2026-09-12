> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagechromafield/chromasubsampling](https://developer.apple.com/documentation/corevideo/cvimagechromafield/chromasubsampling)

# CVImageChromaField.ChromaSubsampling

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Original format of subsampled data in the image buffer before conversion to 422/2vuy format.

## Declaration

```swift
enum ChromaSubsampling
```

<a id="overview"></a>

## Overview

Note: To use these values, ensure that the image buffer data was converted to 4:2:2 format using simple pixel replication.

## Topics

### Enumeration Cases

- [CVImageChromaField.ChromaSubsampling.4:1:1](chromasubsampling/4_1_1.md): The original chroma-subsampled data used 4:1:1 formatting.
- [CVImageChromaField.ChromaSubsampling.4:2:0](chromasubsampling/4_2_0.md): The original chroma-subsampled data used 4:2:0 formatting.
- [CVImageChromaField.ChromaSubsampling.4:2:2](chromasubsampling/4_2_2.md): The original chroma-subsampled data used 4:2:2 formatting.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
