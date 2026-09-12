> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/loadmetadata(for:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassettrack/loadmetadata(for:completionhandler:))

# loadMetadata(for:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads metadata items that a track contains for the specified format.

## Declaration

```swift
func loadMetadata(for format: AVMetadataFormat, completionHandler: @escaping @Sendable ([AVMetadataItem]?, (any Error)?) -> Void)
```

```swift
func loadMetadata(for format: AVMetadataFormat) async throws -> [AVMetadataItem]
```

## Parameters

- `format`: The format of the metadata items to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **metadata**: The loaded metadata, or an empty array if no metadata items for the specified format exist. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, nil.

## See Also

### Loading metadata

- [metadata](../avpartialasyncproperty/metadata-6e14c.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata items for all metadata identifiers that have a value.
- [commonMetadata](../avpartialasyncproperty/commonmetadata-73m58.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata items for all common metadata keys that have a value.
- [availableMetadataFormats](../avpartialasyncproperty/availablemetadataformats-5p9xg.md): Conforms when `Root` inherits `AVAssetTrack`. An array of metadata formats available for the track.

# loadMetadataForFormat:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads metadata items that a track contains for the specified format.

## Declaration

```objectivec
- (void) loadMetadataForFormat:(AVMetadataFormat) format completionHandler:(void (^)(NSArray<AVMetadataItem *> *, NSError *)) completionHandler;
```

## Parameters

- `format`: The format of the metadata items to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **metadata**: The loaded metadata, or an empty array if no metadata items for the specified format exist. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, nil.
