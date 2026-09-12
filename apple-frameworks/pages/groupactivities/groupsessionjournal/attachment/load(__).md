> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/attachment/load(_:)](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/attachment/load(_:))

# load(\_:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Downloads the attachment data and asynchronously delivers it as the type you specify.

## Declaration

```swift
func load<AttachmentType>(_ attachmentType: AttachmentType.Type) async throws -> AttachmentType where AttachmentType : Transferable
```

## Parameters

- `attachmentType`: The type you use to interpret the data. An app typically uploads and downloads a single type of data for an activity. For more information about defining your types, see [Transferable](../../../coretransferable/transferable.md).

<a id="return-value"></a>

## Return Value

A requested type that contains the downloaded information.

<a id="discussion"></a>

## Discussion

Use this function to retrieve the file or data another participant provides. The method asynchronously retrieves and decodes the data, returning it as the requested type. If the requested type isn’t available, the method throws an error.

## See Also

### Downloading the attachment data

- [loadMetadata(of:)](loadmetadata%28of_%29.md): Downloads the metadata for the attachment asynchronously and delivers it as the type you specify.
