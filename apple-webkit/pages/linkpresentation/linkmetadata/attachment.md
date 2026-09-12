> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/linkmetadata/attachment](https://developer.apple.com/documentation/linkpresentation/linkmetadata/attachment)

# LinkMetadata.Attachment

**Framework:** Link Presentation  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Describes a kind of attachment to the metadata.

## Declaration

```swift
nonisolated struct Attachment
```

## Topics

### Type Properties

- [icon](attachment/icon.md): The descriptor for an icon attachment. The corresponding media type must support the content type of the metadata’s icon data.
- [image](attachment/image.md): The descriptor for an image attachment. The corresponding media type must support the content type of the metadata’s image data.
- [video](attachment/video.md): The descriptor for a local video attachment. The corresponding media type must support the content type of the metadata’s local video data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
