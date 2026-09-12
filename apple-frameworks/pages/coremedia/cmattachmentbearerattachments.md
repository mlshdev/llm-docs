> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmattachmentbearerattachments](https://developer.apple.com/documentation/coremedia/cmattachmentbearerattachments)

# CMAttachmentBearerAttachments

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that contains attachments.

## Declaration

```swift
struct CMAttachmentBearerAttachments
```

## Topics

### Inspecting Attachments

- [propagated](cmattachmentbearerattachments/propagated.md): A dictionary of attachments to copy when propagating attachments from one object to another.
- [nonPropagated](cmattachmentbearerattachments/nonpropagated.md): A dictionary of attachments to not copy when propagating attachments from one object to another.

### Accessing Attachments

- [subscript(\_:)](cmattachmentbearerattachments/subscript%28__%29-8uau0.md): Gets the value associated with the specified attachment.
- [subscript(\_:)](cmattachmentbearerattachments/subscript%28__%29-74jgw.md): Gets the value associated with the specified attachment key.
- [CMAttachmentBearerAttachments.Value](cmattachmentbearerattachments/value.md): An enumeration of attachment values.

### Managing Attachments

- [merge(\_:mode:)](cmattachmentbearerattachments/merge%28__mode_%29.md): Sets a collection of attachments on the object.
- [CMAttachmentBearerAttachments.Mode](cmattachmentbearerattachments/mode.md): An enumeration that defines the available attachment modes.
- [removeAll()](cmattachmentbearerattachments/removeall%28%29.md): Removes all attachments from this object.

## See Also

### Processing Attachments

- [attachments](cmattachmentbearerprotocol/attachments.md): All attachments for this object.
- [propagateAttachments(to:)](cmattachmentbearerprotocol/propagateattachments%28to_%29.md): Copies all propagable attachments from one attachment bearer object to another.
