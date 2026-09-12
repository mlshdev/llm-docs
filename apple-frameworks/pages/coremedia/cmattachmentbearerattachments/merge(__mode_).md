> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmattachmentbearerattachments/merge(_:mode:)](https://developer.apple.com/documentation/coremedia/cmattachmentbearerattachments/merge(_:mode:))

# merge(\_:mode:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a collection of attachments on the object.

## Declaration

```swift
func merge(_ attachments: [String : Any], mode: CMAttachmentBearerAttachments.Mode)
```

## Parameters

- `attachments`: The attachments to set on this object.
- `mode`: The mode with which to add the attachments.

## See Also

### Managing Attachments

- [CMAttachmentBearerAttachments.Mode](mode.md): An enumeration that defines the available attachment modes.
- [removeAll()](removeall%28%29.md): Removes all attachments from this object.
