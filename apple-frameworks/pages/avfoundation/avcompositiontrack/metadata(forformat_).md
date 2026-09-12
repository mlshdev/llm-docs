> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/metadata(forformat:)](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/metadata(forformat:))

# metadata(forFormat:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns metadata items that a track contains for the specified format.

## Declaration

```swift
func metadata(forFormat format: AVMetadataFormat) -> [AVMetadataItem]
```

## Parameters

- `format`: The format of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items matching the specified format, or an empty array if none are found.

## See Also

### Accessing metadata

- [metadata](metadata.md): An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](commonmetadata.md): An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](availablemetadataformats.md): An array of metadata formats available for the track.

# metadataForFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns metadata items that a track contains for the specified format.

## Declaration

```objectivec
- (NSArray<AVMetadataItem *> *) metadataForFormat:(AVMetadataFormat) format;
```

## Parameters

- `format`: The format of the metadata items to retrieve.

<a id="return-value"></a>

## Return Value

An array of metadata items matching the specified format, or an empty array if none are found.
