> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/metadata(forformat:)](https://developer.apple.com/documentation/avfoundation/avassettrack/metadata(forformat:))

# metadata(forFormat:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · watchOS 1.0+ (deprecated in 9.0)

Returns metadata items that a track contains for the specified format.

> Use [loadMetadata(for:completionHandler:)](loadmetadata%28for_completionhandler_%29.md) instead.

## Declaration

```swift
func metadata(forFormat format: AVMetadataFormat) -> [AVMetadataItem]
```

## Parameters

- `format`: The format of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items matching the specified format, or an empty array if none are found.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load track metadata asynchronously using [loadMetadata(for:completionHandler:)](loadmetadata%28for_completionhandler_%29.md) instead.

You can call this method without blocking the current thread after you’ve loaded the [availableMetadataFormats](availablemetadataformats.md) property.

# metadataForFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 18.0) · iPadOS 4.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.7+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · watchOS 1.0+ (deprecated in 11.0)

Returns metadata items that a track contains for the specified format.

> Use [loadMetadataForFormat:completionHandler:](loadmetadata%28for_completionhandler_%29.md) instead.

## Declaration

```objectivec
- (NSArray<AVMetadataItem *> *) metadataForFormat:(AVMetadataFormat) format;
```

## Parameters

- `format`: The format of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items matching the specified format, or an empty array if none are found.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this method in iOS 15, tvOS 15, and macOS 12 or later. Load track metadata asynchronously using [loadMetadataForFormat:completionHandler:](loadmetadata%28for_completionhandler_%29.md) instead.

You can call this method without blocking the current thread after you’ve loaded the [availableMetadataFormats](availablemetadataformats.md) property.

## See Also

### Accessing metadata

- [metadata](metadata.md): Deprecated. An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](commonmetadata.md): Deprecated. An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](availablemetadataformats.md): Deprecated. An array of metadata formats available for the track.
