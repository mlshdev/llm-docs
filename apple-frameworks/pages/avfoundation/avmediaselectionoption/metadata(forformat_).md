> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/metadata(forformat:)](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/metadata(forformat:))

# metadata(forFormat:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of metadata items—one for each metadata item in the container of a given format.

## Declaration

```swift
func metadata(forFormat format: String) -> [AVMetadataItem]
```

## Parameters

- `format`: The metadata format for which items are requested.

<a id="return-value"></a>

## Return Value

An array of `AVMetadataItem` objects, one for each metadata item in the container of format, or `nil` if there is no metadata of the specified format.

## See Also

### Managing metadata

- [commonMetadata](commonmetadata.md): An array of metadata items for each common metadata key for which a value is available.
- [availableMetadataFormats](availablemetadataformats.md): The metadata formats that contain metadata associated with the option.

# metadataForFormat: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an array of metadata items—one for each metadata item in the container of a given format.

## Declaration

```objectivec
- (NSArray<AVMetadataItem *> *) metadataForFormat:(NSString *) format;
```

## Parameters

- `format`: The metadata format for which items are requested.

<a id="return-value"></a>

## Return Value

An array of `AVMetadataItem` objects, one for each metadata item in the container of format, or `nil` if there is no metadata of the specified format.

## See Also

### Managing metadata

- [commonMetadata](commonmetadata.md): An array of metadata items for each common metadata key for which a value is available.
- [availableMetadataFormats](availablemetadataformats.md): The metadata formats that contain metadata associated with the option.
