> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmattachmentmode](https://developer.apple.com/documentation/coremedia/cmattachmentmode)

# CMAttachmentMode (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The mode to use when propagating attachments.

## Declaration

```swift
typealias CMAttachmentMode = UInt32
```

<a id="Discussion"></a>

## Discussion

Set these attributes when adding attachments to a [CMAttachmentBearer](cmattachmentbearer.md) object.

## Topics

### Modes

- [kCMAttachmentMode_ShouldNotPropagate](kcmattachmentmode_shouldnotpropagate.md): A mode that doesn’t propagate attachments to another object.
- [kCMAttachmentMode_ShouldPropagate](kcmattachmentmode_shouldpropagate.md): A mode that propagates attachments to another object.

## See Also

### Data Types

- [CMAttachmentBearerProtocol](cmattachmentbearerprotocol.md): A protocol for objects that can carry attachments.
- [CMAttachmentBearer](cmattachmentbearer.md): An object that can carry attachments.

# CMAttachmentMode (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The mode to use when propagating attachments.

## Declaration

```objectivec
typedef uint32_t CMAttachmentMode;
```

<a id="Discussion"></a>

## Discussion

Set these attributes when adding attachments to a [CMAttachmentBearerRef](cmattachmentbearer.md) object.

## Topics

### Modes

- [kCMAttachmentMode_ShouldNotPropagate](kcmattachmentmode_shouldnotpropagate.md): A mode that doesn’t propagate attachments to another object.
- [kCMAttachmentMode_ShouldPropagate](kcmattachmentmode_shouldpropagate.md): A mode that propagates attachments to another object.

## See Also

### Data Types

- [CMAttachmentBearerRef](cmattachmentbearer.md): An object that can carry attachments.
