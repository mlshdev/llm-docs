> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/attachment/loadmetadata(of:)](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/attachment/loadmetadata(of:))

# loadMetadata(of:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Downloads the metadata for the attachment asynchronously and delivers it as the type you specify.

## Declaration

```swift
func loadMetadata<MetadataType>(of: MetadataType.Type) async throws -> MetadataType where MetadataType : Decodable, MetadataType : Encodable
```

## Parameters

- `of`: The type for your attachment’s custom metadata. This type must match the one added with the attachment.

<a id="return-value"></a>

## Return Value

The custom metadata object for the attachment.

<a id="discussion"></a>

## Discussion

Use this function to retrieve any metadata you included with the attachment. You might use this metadata to retrieve app-specific details that aren’t part of the item’s intrinsic data format.

## See Also

### Downloading the attachment data

- [load(\_:)](load%28__%29.md): Downloads the attachment data and asynchronously delivers it as the type you specify.
