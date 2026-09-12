> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagechromafield/samplelocation](https://developer.apple.com/documentation/corevideo/cvimagechromafield/samplelocation)

# CVImageChromaField.SampleLocation

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Indicates the locations of the chroma sample in the image buffer.

## Declaration

```swift
enum SampleLocation
```

## Topics

### Enumeration Cases

- [CVImageChromaField.SampleLocation.bottom](samplelocation/bottom.md): Chroma sample is horizontally centered, but is co-sited with the bottom row of luma samples.
- [CVImageChromaField.SampleLocation.bottomLeft](samplelocation/bottomleft.md): Chroma sample is co-sited with the bottom-left luma sample.
- [CVImageChromaField.SampleLocation.center](samplelocation/center.md): Chroma sample is fully centered.
- [CVImageChromaField.SampleLocation.dv420](samplelocation/dv420.md): The Cr and Cb samples are alternatingly co-sited with the left luma samples of the same field.
- [CVImageChromaField.SampleLocation.left](samplelocation/left.md): Chroma sample is horizontally co-sited with the left column of luma samples, but centered vertically.
- [CVImageChromaField.SampleLocation.top](samplelocation/top.md): Chroma sample is horizontally centered, but is co-sited with the top row of luma samples.
- [CVImageChromaField.SampleLocation.topLeft](samplelocation/topleft.md): Chroma sample is co-sited with the top-left luma sample.

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
