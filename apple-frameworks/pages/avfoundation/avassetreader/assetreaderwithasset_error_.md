> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreader/assetreaderwithasset:error:](https://developer.apple.com/documentation/avfoundation/avassetreader/assetreaderwithasset:error:)

# assetReaderWithAsset:error:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object to read media data from an asset.

## Declaration

```objectivec
+ (instancetype) assetReaderWithAsset:(AVAsset *) asset error:(NSError **) outError;
```

## Parameters

- `asset`: The asset from which to read media data.
- `outError`: On return, if the initialization fails, a pointer to an error object provides the details of the failure.

<a id="return-value"></a>

## Return Value

A new asset reader object.

## See Also

### Creating an asset reader

- [initWithAsset:error:](init%28asset_%29.md): Creates an object to read media data from an asset.
