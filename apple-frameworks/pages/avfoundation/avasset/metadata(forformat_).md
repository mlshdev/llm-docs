> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/metadata(forformat:)](https://developer.apple.com/documentation/avfoundation/avasset/metadata(forformat:))

# metadata(forFormat:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns an array of metadata items from the container with the specified format.

> Use [loadMetadata(for:completionHandler:)](loadmetadata%28for_completionhandler_%29.md) instead.

## Declaration

```swift
func metadata(forFormat format: AVMetadataFormat) -> [AVMetadataItem]
```

## Parameters

- `format`: The metadata format for which you want items.

<a id="return-value"></a>

## Return Value

An array of [AVMetadataItem](../avmetadataitem.md) objects, one for each metadata item in the container of the specified format, or an empty array if there is no metadata for the specified format.

<a id="Discussion"></a>

## Discussion

You can filter the array to the specific items of interest using the class methods provided by [AVMetadataItem](../avmetadataitem.md), like [metadataItems(from:filteredByIdentifier:)](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) or [metadataItems(from:with:)](../avmetadataitem/metadataitems%28from_with_%29.md).

You can call this method without blocking the current thread after you’ve asynchronously loaded the [availableMetadataFormats](availablemetadataformats.md) property.

# metadataForFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns an array of metadata items from the container with the specified format.

> Use [loadMetadataForFormat:completionHandler:](loadmetadata%28for_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSArray<AVMetadataItem *> *) metadataForFormat:(AVMetadataFormat) format;
```

## Parameters

- `format`: The metadata format for which you want items.

<a id="return-value"></a>

## Return Value

An array of [AVMetadataItem](../avmetadataitem.md) objects, one for each metadata item in the container of the specified format, or an empty array if there is no metadata for the specified format.

<a id="Discussion"></a>

## Discussion

You can filter the array to the specific items of interest using the class methods provided by [AVMetadataItem](../avmetadataitem.md), like [metadataItemsFromArray:filteredByIdentifier:](../avmetadataitem/metadataitems%28from_filteredbyidentifier_%29.md) or [metadataItemsFromArray:withLocale:](../avmetadataitem/metadataitems%28from_with_%29.md).

You can call this method without blocking the current thread after you’ve asynchronously loaded the [availableMetadataFormats](availablemetadataformats.md) property.

## See Also

### Accessing metadata

- [metadata](metadata.md): Deprecated. An array of metadata items for all metadata identifiers for which a value is available.
- [commonMetadata](commonmetadata.md): Deprecated. The metadata items an asset contains for common metadata identifiers that provide a value.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. The metadata formats this asset contains.
- [creationDate](creationdate.md): Deprecated. A metadata item that indicates the asset’s creation date.
- [lyrics](lyrics.md): Deprecated. The lyrics of the asset in a language suitable for the current locale.
