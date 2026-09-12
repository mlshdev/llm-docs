> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmdroppedframereason](https://developer.apple.com/documentation/coremedia/cmdroppedframereason)

# CMDroppedFrameReason

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
enum CMDroppedFrameReason
```

## Topics

### Enumeration Cases

- [CMDroppedFrameReason.discontinuity](cmdroppedframereason/discontinuity.md): An unknown number of frames were dropped.
- [CMDroppedFrameReason.frameWasLate](cmdroppedframereason/framewaslate.md): The frame was dropped because it was late.
- [CMDroppedFrameReason.outOfBuffers](cmdroppedframereason/outofbuffers.md): The frame was dropped because the module providing frames is out of buffers.

### Enumerations

- [CMDroppedFrameReason.Info](cmdroppedframereason/info.md): Provides additional information regarding the dropped video frame.

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
