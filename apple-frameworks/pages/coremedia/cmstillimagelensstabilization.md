> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmstillimagelensstabilization](https://developer.apple.com/documentation/coremedia/cmstillimagelensstabilization)

# CMStillImageLensStabilization

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
enum CMStillImageLensStabilization
```

## Topics

### Enumeration Cases

- [CMStillImageLensStabilization.active](cmstillimagelensstabilization/active.md): The lens stabilization module was active for the duration this buffer.
- [CMStillImageLensStabilization.off](cmstillimagelensstabilization/off.md): The lens stabilization module was not used during this capture.
- [CMStillImageLensStabilization.outOfRange](cmstillimagelensstabilization/outofrange.md): The motion of the device or duration of the capture was outside of what the stabilization mechanism could support.
- [CMStillImageLensStabilization.unavailable](cmstillimagelensstabilization/unavailable.md): The lens stabilization module was unavailable for use.

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
