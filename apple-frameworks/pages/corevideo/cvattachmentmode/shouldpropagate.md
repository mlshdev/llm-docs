> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvattachmentmode/shouldpropagate](https://developer.apple.com/documentation/corevideo/cvattachmentmode/shouldpropagate)

# CVAttachmentMode.shouldPropagate (Swift)

**Framework:** Core Video  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Indicates to copy the attachment.

## Declaration

```swift
case shouldPropagate
```

<a id="Discussion"></a>

## Discussion

The [CVBufferPropagateAttachments(\_:\_:)](../cvbufferpropagateattachments%28____%29.md) function propagates all attachments that have this attachment mode. For example, in most cases, you’ll want to propagate an attachment bearing a timestamp to each successive buffer.

## See Also

### Constants

- [CVAttachmentMode.shouldNotPropagate](shouldnotpropagate.md): Indicates to not propagate the attachment.

# kCVAttachmentMode_ShouldPropagate (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Indicates to copy the attachment.

## Declaration

```objectivec
kCVAttachmentMode_ShouldPropagate
```

<a id="Discussion"></a>

## Discussion

The [CVBufferPropagateAttachments](../cvbufferpropagateattachments%28____%29.md) function propagates all attachments that have this attachment mode. For example, in most cases, you’ll want to propagate an attachment bearing a timestamp to each successive buffer.

## See Also

### Constants

- [kCVAttachmentMode_ShouldNotPropagate](shouldnotpropagate.md): Indicates to not propagate the attachment.
