> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcachingimagemanager](https://developer.apple.com/documentation/photos/phcachingimagemanager)

# PHCachingImageManager (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An object that facilitates retrieving or generating preview thumbnails, optimized for batch preloading large numbers of assets.

## Declaration

```swift
class PHCachingImageManager
```

## Mentioned In

- [Loading and Caching Assets and Thumbnails](../photokit/loading-and-caching-assets-and-thumbnails.md)

<a id="overview"></a>

## Overview

For quick performance when you are working with many assets, a caching image manager can prepare asset images in the background in order to eliminate delays when you later request individual images. For example, use a caching image manager when you want to populate a collection view or similar UI with thumbnails of photo or video assets.

Much of the key functionality of the [PHCachingImageManager](phcachingimagemanager.md) class is defined by its superclass, [PHImageManager](phimagemanager.md). For details, see [PHImageManager](phimagemanager.md).

To use a caching image manager:

1. Create a [PHCachingImageManager](phcachingimagemanager.md) instance. (This step replaces using the shared [PHImageManager](phimagemanager.md) instance.)
2. Use [PHAsset](phasset.md) class methods to fetch the assets you’re interested in.
3. To prepare images for those assets, call the [startCachingImages(for:targetSize:contentMode:options:)](phcachingimagemanager/startcachingimages%28for_targetsize_contentmode_options_%29.md) method with the target size, content mode, and options you plan to use when later requesting images for each individual asset.
4. When you need an image for an individual asset, call the [requestImage(for:targetSize:contentMode:options:resultHandler:)](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method, and pass the same parameters you used when preparing that asset.

If the image you request is among those already prepared, the [PHCachingImageManager](phcachingimagemanager.md) object immediately returns that image. Otherwise, Photos prepares the image on demand and caches it for later use.

## Topics

### Preparing Images

- [startCachingImages(for:targetSize:contentMode:options:)](phcachingimagemanager/startcachingimages%28for_targetsize_contentmode_options_%29.md): Prepares image representations of the specified assets for later use.
- [stopCachingImages(for:targetSize:contentMode:options:)](phcachingimagemanager/stopcachingimages%28for_targetsize_contentmode_options_%29.md): Cancels image preparation for the specified assets and options.
- [stopCachingImagesForAllAssets()](phcachingimagemanager/stopcachingimagesforallassets%28%29.md): Cancels all image preparation that is currently in progress.

### Setting Cache Policy

- [allowsCachingHighQualityImages](phcachingimagemanager/allowscachinghighqualityimages.md): Deprecated. A Boolean value that determines whether the image manager prepares high-quality images.

## Relationships

### Inherits From

- [PHImageManager](phimagemanager.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset loading

- [Loading and Caching Assets and Thumbnails](../photokit/loading-and-caching-assets-and-thumbnails.md): Request image, video, or Live Photos content, and cache for quick reuse.
- [PHImageManager](phimagemanager.md): An object that facilitates retrieving or generating preview thumbnails and asset data.
- [PHImageRequestOptions](phimagerequestoptions.md): A set of options affecting the delivery of still image representations of Photos assets you request from an image manager.
- [PHVideoRequestOptions](phvideorequestoptions.md): A set of options affecting the delivery of video asset data that you request from an image manager.
- [PHLivePhotoRequestOptions](phlivephotorequestoptions.md): A set of options affecting the delivery of Live Photo assets you request from an image manager.

# PHCachingImageManager (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An object that facilitates retrieving or generating preview thumbnails, optimized for batch preloading large numbers of assets.

## Declaration

```objectivec
@interface PHCachingImageManager : PHImageManager
```

## Mentioned In

- [Loading and Caching Assets and Thumbnails](../photokit/loading-and-caching-assets-and-thumbnails.md)

<a id="overview"></a>

## Overview

For quick performance when you are working with many assets, a caching image manager can prepare asset images in the background in order to eliminate delays when you later request individual images. For example, use a caching image manager when you want to populate a collection view or similar UI with thumbnails of photo or video assets.

Much of the key functionality of the [PHCachingImageManager](phcachingimagemanager.md) class is defined by its superclass, [PHImageManager](phimagemanager.md). For details, see [PHImageManager](phimagemanager.md).

To use a caching image manager:

1. Create a [PHCachingImageManager](phcachingimagemanager.md) instance. (This step replaces using the shared [PHImageManager](phimagemanager.md) instance.)
2. Use [PHAsset](phasset.md) class methods to fetch the assets you’re interested in.
3. To prepare images for those assets, call the [startCachingImagesForAssets:targetSize:contentMode:options:](phcachingimagemanager/startcachingimages%28for_targetsize_contentmode_options_%29.md) method with the target size, content mode, and options you plan to use when later requesting images for each individual asset.
4. When you need an image for an individual asset, call the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](phimagemanager/requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method, and pass the same parameters you used when preparing that asset.

If the image you request is among those already prepared, the [PHCachingImageManager](phcachingimagemanager.md) object immediately returns that image. Otherwise, Photos prepares the image on demand and caches it for later use.

## Topics

### Preparing Images

- [startCachingImagesForAssets:targetSize:contentMode:options:](phcachingimagemanager/startcachingimages%28for_targetsize_contentmode_options_%29.md): Prepares image representations of the specified assets for later use.
- [stopCachingImagesForAssets:targetSize:contentMode:options:](phcachingimagemanager/stopcachingimages%28for_targetsize_contentmode_options_%29.md): Cancels image preparation for the specified assets and options.
- [stopCachingImagesForAllAssets](phcachingimagemanager/stopcachingimagesforallassets%28%29.md): Cancels all image preparation that is currently in progress.

### Setting Cache Policy

- [allowsCachingHighQualityImages](phcachingimagemanager/allowscachinghighqualityimages.md): Deprecated. A Boolean value that determines whether the image manager prepares high-quality images.

## Relationships

### Inherits From

- [PHImageManager](phimagemanager.md)

## See Also

### Asset loading

- [Loading and Caching Assets and Thumbnails](../photokit/loading-and-caching-assets-and-thumbnails.md): Request image, video, or Live Photos content, and cache for quick reuse.
- [PHImageManager](phimagemanager.md): An object that facilitates retrieving or generating preview thumbnails and asset data.
- [PHImageRequestOptions](phimagerequestoptions.md): A set of options affecting the delivery of still image representations of Photos assets you request from an image manager.
- [PHVideoRequestOptions](phvideorequestoptions.md): A set of options affecting the delivery of video asset data that you request from an image manager.
- [PHLivePhotoRequestOptions](phlivephotorequestoptions.md): A set of options affecting the delivery of Live Photo assets you request from an image manager.
