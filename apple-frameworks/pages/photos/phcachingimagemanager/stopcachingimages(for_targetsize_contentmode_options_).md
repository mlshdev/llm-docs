> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcachingimagemanager/stopcachingimages(for:targetsize:contentmode:options:)](https://developer.apple.com/documentation/photos/phcachingimagemanager/stopcachingimages(for:targetsize:contentmode:options:))

# stopCachingImages(for:targetSize:contentMode:options:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels image preparation for the specified assets and options.

## Declaration

```swift
func stopCachingImages(for assets: [PHAsset], targetSize: CGSize, contentMode: PHImageContentMode, options: PHImageRequestOptions?)
```

## Parameters

- `assets`: The array of specific [PHAsset](../phasset.md) objects for which image preparation is in progress but is no longer needed.
- `targetSize`: The target size with which you requested image preparation.
- `contentMode`: The content mode with which you requested image preparation.
- `options`: The options with which you requested image preparation.

<a id="Discussion"></a>

## Discussion

This method cancels image preparation for the specified assets with the specified options. Use it when image preparation that might be in progress is no longer needed. For example, if you prepare images for a collection view filled with photo thumbnails and then the user chooses a different thumbnail size for your collection view, call this method to cancel generating thumbnail images at the old size.

## See Also

### Preparing Images

- [startCachingImages(for:targetSize:contentMode:options:)](startcachingimages%28for_targetsize_contentmode_options_%29.md): Prepares image representations of the specified assets for later use.
- [stopCachingImagesForAllAssets()](stopcachingimagesforallassets%28%29.md): Cancels all image preparation that is currently in progress.

# stopCachingImagesForAssets:targetSize:contentMode:options: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels image preparation for the specified assets and options.

## Declaration

```objectivec
- (void) stopCachingImagesForAssets:(NSArray<PHAsset *> *) assets targetSize:(CGSize) targetSize contentMode:(PHImageContentMode) contentMode options:(PHImageRequestOptions *) options;
```

## Parameters

- `assets`: The array of specific [PHAsset](../phasset.md) objects for which image preparation is in progress but is no longer needed.
- `targetSize`: The target size with which you requested image preparation.
- `contentMode`: The content mode with which you requested image preparation.
- `options`: The options with which you requested image preparation.

<a id="Discussion"></a>

## Discussion

This method cancels image preparation for the specified assets with the specified options. Use it when image preparation that might be in progress is no longer needed. For example, if you prepare images for a collection view filled with photo thumbnails and then the user chooses a different thumbnail size for your collection view, call this method to cancel generating thumbnail images at the old size.

## See Also

### Preparing Images

- [startCachingImagesForAssets:targetSize:contentMode:options:](startcachingimages%28for_targetsize_contentmode_options_%29.md): Prepares image representations of the specified assets for later use.
- [stopCachingImagesForAllAssets](stopcachingimagesforallassets%28%29.md): Cancels all image preparation that is currently in progress.
