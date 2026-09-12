> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcachingimagemanager/startcachingimages(for:targetsize:contentmode:options:)](https://developer.apple.com/documentation/photos/phcachingimagemanager/startcachingimages(for:targetsize:contentmode:options:))

# startCachingImages(for:targetSize:contentMode:options:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Prepares image representations of the specified assets for later use.

## Declaration

```swift
func startCachingImages(for assets: [PHAsset], targetSize: CGSize, contentMode: PHImageContentMode, options: PHImageRequestOptions?)
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects for which to prepare image representations.
- `targetSize`: The size of the images to be prepared.
- `contentMode`: An option for how to fit the images to the aspect ratio of the requested size. For details, see [PHImageContentMode](../phimagecontentmode.md).
- `options`: Options specifying how Photos should handle the request, format the requested images, and notify your app of progress or errors. For details, see [PHImageRequestOptions](../phimagerequestoptions.md).

<a id="Discussion"></a>

## Discussion

When you call this method, Photos begins to fetch image data and generates thumbnail images on a background thread. At any time afterward, you can use the [requestImage(for:targetSize:contentMode:options:resultHandler:)](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method to request individual images from the cache. If Photos has finished preparing a requested image, that method provides the image immediately.

Photos caches images with the exact target size, content mode, and options you specify in this method. If you later request an image with, for example, a different target size than you passed when calling this method, Photos cannot make use of the cache and so it must fetch or generate a new image.

## See Also

### Preparing Images

- [stopCachingImages(for:targetSize:contentMode:options:)](stopcachingimages%28for_targetsize_contentmode_options_%29.md): Cancels image preparation for the specified assets and options.
- [stopCachingImagesForAllAssets()](stopcachingimagesforallassets%28%29.md): Cancels all image preparation that is currently in progress.

# startCachingImagesForAssets:targetSize:contentMode:options: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Prepares image representations of the specified assets for later use.

## Declaration

```objectivec
- (void) startCachingImagesForAssets:(NSArray<PHAsset *> *) assets targetSize:(CGSize) targetSize contentMode:(PHImageContentMode) contentMode options:(PHImageRequestOptions *) options;
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects for which to prepare image representations.
- `targetSize`: The size of the images to be prepared.
- `contentMode`: An option for how to fit the images to the aspect ratio of the requested size. For details, see [PHImageContentMode](../phimagecontentmode.md).
- `options`: Options specifying how Photos should handle the request, format the requested images, and notify your app of progress or errors. For details, see [PHImageRequestOptions](../phimagerequestoptions.md).

<a id="Discussion"></a>

## Discussion

When you call this method, Photos begins to fetch image data and generates thumbnail images on a background thread. At any time afterward, you can use the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](../phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method to request individual images from the cache. If Photos has finished preparing a requested image, that method provides the image immediately.

Photos caches images with the exact target size, content mode, and options you specify in this method. If you later request an image with, for example, a different target size than you passed when calling this method, Photos cannot make use of the cache and so it must fetch or generate a new image.

## See Also

### Preparing Images

- [stopCachingImagesForAssets:targetSize:contentMode:options:](stopcachingimages%28for_targetsize_contentmode_options_%29.md): Cancels image preparation for the specified assets and options.
- [stopCachingImagesForAllAssets](stopcachingimagesforallassets%28%29.md): Cancels all image preparation that is currently in progress.
