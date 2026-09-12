> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/linkmetadata/setmedia(_:for:)](https://developer.apple.com/documentation/linkpresentation/linkmetadata/setmedia(_:for:))

# setMedia(\_:for:)

**Framework:** Link Presentation  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Sets the media data in the metadata for an attachment.

## Declaration

```swift
nonisolated mutating func setMedia(_ media: some Transferable, for attachment: LinkMetadata.Attachment)
```

## Parameters

- `media`: The value to use for the media that corresponds to the specified attachment.
- `attachment`: The kind of attachment to modify, such as `.image`, `.icon`, and `.video`.

<a id="discussion"></a>

## Discussion

For example, a custom image can be set on some metadata:

```swift
metadata.setMedia(myImage, for: .image)
```
