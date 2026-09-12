> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmattachmentbearerprotocol](https://developer.apple.com/documentation/coremedia/cmattachmentbearerprotocol)

# CMAttachmentBearerProtocol

**Framework:** Core Media  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A protocol for objects that can carry attachments.

## Declaration

```swift
protocol CMAttachmentBearerProtocol
```

## Topics

### Processing Attachments

- [attachments](cmattachmentbearerprotocol/attachments.md): All attachments for this object.
- [propagateAttachments(to:)](cmattachmentbearerprotocol/propagateattachments%28to_%29.md): Copies all propagable attachments from one attachment bearer object to another.
- [CMAttachmentBearerAttachments](cmattachmentbearerattachments.md): A structure that contains attachments.

## Relationships

### Conforming Types

- [CMBlockBuffer](cmblockbuffer.md)
- [CMSampleBuffer](cmsamplebuffer.md)

## See Also

### Data Types

- [CMAttachmentBearer](cmattachmentbearer.md): An object that can carry attachments.
- [CMAttachmentMode](cmattachmentmode.md): The mode to use when propagating attachments.
