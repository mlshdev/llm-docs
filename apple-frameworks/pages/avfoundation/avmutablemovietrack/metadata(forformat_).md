> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/metadata(forformat:)

# metadata(forFormat:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

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

- [metadata](metadata.md): An array of metadata stored by the track.
- [commonMetadata](commonmetadata.md): An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](availablemetadataformats.md): An array of metadata formats available for the track.

# metadataForFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

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

## See Also

### Accessing metadata

- [metadata](metadata.md): An array of metadata stored by the track.
