> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentmode](https://developer.apple.com/documentation/corevideo/cvattachmentmode)

# CVAttachmentMode (Swift)

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The propagation modes of a Core Video buffer attachment.

## Declaration

```swift
enum CVAttachmentMode
```

<a id="overview"></a>

## Overview

You set these attributes when adding attachments to a [CVBuffer](cvbuffer.md) object.

## Topics

### Constants

- [CVAttachmentMode.shouldNotPropagate](cvattachmentmode/shouldnotpropagate.md): Indicates to not propagate the attachment.
- [CVAttachmentMode.shouldPropagate](cvattachmentmode/shouldpropagate.md): Indicates to copy the attachment.

### Initializers

- [init(rawValue:)](cvattachmentmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data types

- [CVBuffer](cvbuffer.md)

# CVAttachmentMode (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The propagation modes of a Core Video buffer attachment.

## Declaration

```objectivec
enum CVAttachmentMode : uint32_t;
```

<a id="overview"></a>

## Overview

You set these attributes when adding attachments to a [CVBufferRef](cvbuffer.md) object.

## Topics

### Constants

- [kCVAttachmentMode_ShouldNotPropagate](cvattachmentmode/shouldnotpropagate.md): Indicates to not propagate the attachment.
- [kCVAttachmentMode_ShouldPropagate](cvattachmentmode/shouldpropagate.md): Indicates to copy the attachment.

## See Also

### Data types

- [CVBufferRef](cvbuffer.md)
