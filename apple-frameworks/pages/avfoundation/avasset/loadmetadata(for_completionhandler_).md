> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/loadmetadata(for:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avasset/loadmetadata(for:completionhandler:))

# loadMetadata(for:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads an array of metadata items that the asset contains for the specified format.

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

  - **metadata**: An array of metadata items, which may be empty if there are no items of the specified format. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## Mentioned In

- [Retrieving media metadata](../retrieving-media-metadata.md)

## See Also

### Loading metadata

- [metadata](../avpartialasyncproperty/metadata-16qej.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for all metadata identifiers.
- [commonMetadata](../avpartialasyncproperty/commonmetadata-3j3n4.md): Conforms when `Root` inherits `AVAsset`. The metadata items that an asset contains for common metadata identifiers.
- [availableMetadataFormats](../avpartialasyncproperty/availablemetadataformats-4yiq8.md): Conforms when `Root` inherits `AVAsset`. The formats of metadata that an asset contains.
- [creationDate](../avpartialasyncproperty/creationdate.md): Conforms when `Root` inherits `AVAsset`. A metadata item that indicates the creation date of an asset.
- [lyrics](../avpartialasyncproperty/lyrics.md): Conforms when `Root` inherits `AVAsset`. The lyrics of the asset in a language suitable for the current locale.

# loadMetadataForFormat:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Loads an array of metadata items that the asset contains for the specified format.

## Declaration

```objectivec
- (void) loadMetadataForFormat:(AVMetadataFormat) format completionHandler:(void (^)(NSArray<AVMetadataItem *> *, NSError *)) completionHandler;
```

## Parameters

- `format`: The format of the metadata items to load.
- `completionHandler`: A callback that the system invokes after it finishes the loading request. It passes the completion handler the following parameters:

  - **metadata**: An array of metadata items, which may be empty if there are no items of the specified format. The value is `nil` if an error occurs.
  - **error**: An error object if the request fails; otherwise, `nil`.

## Mentioned In

- [Retrieving media metadata](../retrieving-media-metadata.md)
