> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phvideorequestoptions](https://developer.apple.com/documentation/photos/phvideorequestoptions)

# PHVideoRequestOptions (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of video asset data that you request from an image manager.

## Declaration

```swift
class PHVideoRequestOptions
```

## Topics

### Specifying Video Request Options

- [version](phvideorequestoptions/version.md): The version of the video to request.
- [PHVideoRequestOptionsVersion](phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](phvideorequestoptions/version.md) property.
- [deliveryMode](phvideorequestoptions/deliverymode.md): A mode specifying the requested video quality and delivery priority.
- [PHVideoRequestOptionsDeliveryMode](phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](phvideorequestoptions/deliverymode.md) property.

### Fetching Video Data from iCloud

- [isNetworkAccessAllowed](phvideorequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested video from iCloud.
- [progressHandler](phvideorequestoptions/progresshandler.md): A block Photos calls periodically while downloading the video.
- [PHAssetVideoProgressHandler](phassetvideoprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](phvideorequestoptions/progresshandler.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Asset loading

- [Loading and Caching Assets and Thumbnails](../photokit/loading-and-caching-assets-and-thumbnails.md): Request image, video, or Live Photos content, and cache for quick reuse.
- [PHImageManager](phimagemanager.md): An object that facilitates retrieving or generating preview thumbnails and asset data.
- [PHCachingImageManager](phcachingimagemanager.md): An object that facilitates retrieving or generating preview thumbnails, optimized for batch preloading large numbers of assets.
- [PHImageRequestOptions](phimagerequestoptions.md): A set of options affecting the delivery of still image representations of Photos assets you request from an image manager.
- [PHLivePhotoRequestOptions](phlivephotorequestoptions.md): A set of options affecting the delivery of Live Photo assets you request from an image manager.

# PHVideoRequestOptions (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of video asset data that you request from an image manager.

## Declaration

```objectivec
@interface PHVideoRequestOptions : NSObject
```

## Topics

### Specifying Video Request Options

- [version](phvideorequestoptions/version.md): The version of the video to request.
- [PHVideoRequestOptionsVersion](phvideorequestoptionsversion.md): Options for requesting a video asset with or without adjustments, used by the [version](phvideorequestoptions/version.md) property.
- [deliveryMode](phvideorequestoptions/deliverymode.md): A mode specifying the requested video quality and delivery priority.
- [PHVideoRequestOptionsDeliveryMode](phvideorequestoptionsdeliverymode.md): Options for delivering requested video data, used by the [deliveryMode](phvideorequestoptions/deliverymode.md) property.

### Fetching Video Data from iCloud

- [networkAccessAllowed](phvideorequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested video from iCloud.
- [progressHandler](phvideorequestoptions/progresshandler.md): A block Photos calls periodically while downloading the video.
- [PHAssetVideoProgressHandler](phassetvideoprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](phvideorequestoptions/progresshandler.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Asset loading

- [Loading and Caching Assets and Thumbnails](../photokit/loading-and-caching-assets-and-thumbnails.md): Request image, video, or Live Photos content, and cache for quick reuse.
- [PHImageManager](phimagemanager.md): An object that facilitates retrieving or generating preview thumbnails and asset data.
- [PHCachingImageManager](phcachingimagemanager.md): An object that facilitates retrieving or generating preview thumbnails, optimized for batch preloading large numbers of assets.
- [PHImageRequestOptions](phimagerequestoptions.md): A set of options affecting the delivery of still image representations of Photos assets you request from an image manager.
- [PHLivePhotoRequestOptions](phlivephotorequestoptions.md): A set of options affecting the delivery of Live Photo assets you request from an image manager.
