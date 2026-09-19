> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetreader/init(asset:)

# init(asset:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object to read media data from an asset.

## Declaration

```swift
init(asset: AVAsset) throws
```

## Parameters

- `asset`: The asset from which to read media data.

# initWithAsset:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates an object to read media data from an asset.

## Declaration

```objectivec
- (instancetype) initWithAsset:(AVAsset *) asset error:(NSError **) outError;
```

## Parameters

- `asset`: The asset from which to read media data.
- `outError`: On return, if the initialization fails, a pointer to an error object provides the details of the failure.

## See Also

### Creating an asset reader

- [assetReaderWithAsset:error:](assetreaderwithasset_error_.md): Returns a new object to read media data from an asset.
