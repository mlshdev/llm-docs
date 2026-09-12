> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmattachmentbearerprotocol/propagateattachments(to:)](https://developer.apple.com/documentation/coremedia/cmattachmentbearerprotocol/propagateattachments(to:))

# propagateAttachments(to:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Copies all propagable attachments from one attachment bearer object to another.

## Declaration

```swift
func propagateAttachments<T>(to destination: T) where T : CMAttachmentBearerProtocol
```

## Parameters

- `destination`: The object to copy attachments to.

## See Also

### Processing Attachments

- [attachments](attachments.md): All attachments for this object.
- [CMAttachmentBearerAttachments](../cmattachmentbearerattachments.md): A structure that contains attachments.
