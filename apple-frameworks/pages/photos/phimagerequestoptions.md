> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagerequestoptions](https://developer.apple.com/documentation/photos/phimagerequestoptions)

# PHImageRequestOptions (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of still image representations of Photos assets you request from an image manager.

## Declaration

```swift
class PHImageRequestOptions
```

## Topics

### Scheduling an Image Request

- [isSynchronous](phimagerequestoptions/issynchronous.md): A Boolean value that determines whether Photos processes the image request synchronously.

### Specifying Image Request Options

- [version](phimagerequestoptions/version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

### Fetching Image Data from iCloud

- [isNetworkAccessAllowed](phimagerequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested image from iCloud.
- [progressHandler](phimagerequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the image.
- [PHAssetImageProgressHandler](phassetimageprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](phimagerequestoptions/progresshandler.md) property.

### Instance Properties

- [allowSecondaryDegradedImage](phimagerequestoptions/allowsecondarydegradedimage.md)
- [preferHDR](phimagerequestoptions/preferhdr.md): Request HDR image data if available (such as PQ/HLG formats).
- [targetHDRHeadroom](phimagerequestoptions/targethdrheadroom.md): Target HDR headroom for image rendering.

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
- [PHVideoRequestOptions](phvideorequestoptions.md): A set of options affecting the delivery of video asset data that you request from an image manager.
- [PHLivePhotoRequestOptions](phlivephotorequestoptions.md): A set of options affecting the delivery of Live Photo assets you request from an image manager.

# PHImageRequestOptions (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of still image representations of Photos assets you request from an image manager.

## Declaration

```objectivec
@interface PHImageRequestOptions : NSObject
```

## Topics

### Scheduling an Image Request

- [synchronous](phimagerequestoptions/issynchronous.md): A Boolean value that determines whether Photos processes the image request synchronously.

### Specifying Image Request Options

- [version](phimagerequestoptions/version.md): The version of the image to be requested.
- [PHImageRequestOptionsVersion](phimagerequestoptionsversion.md): Options for requesting an image asset with or without adjustments, used by the [version](phimagerequestoptions/version.md) property.
- [deliveryMode](phimagerequestoptions/deliverymode.md): The requested image quality and delivery priority.
- [PHImageRequestOptionsDeliveryMode](phimagerequestoptionsdeliverymode.md): Options for delivering requested image data, used by the [deliveryMode](phimagerequestoptions/deliverymode.md) property.
- [resizeMode](phimagerequestoptions/resizemode.md): A mode that specifies how to resize the requested image.
- [PHImageRequestOptionsResizeMode](phimagerequestoptionsresizemode.md): Options for how to resize the requested image to fit a target size, used by the [resizeMode](phimagerequestoptions/resizemode.md) property.
- [normalizedCropRect](phimagerequestoptions/normalizedcroprect.md): A rectangle for requesting a cropped version of the original image.

### Fetching Image Data from iCloud

- [networkAccessAllowed](phimagerequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested image from iCloud.
- [progressHandler](phimagerequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the image.
- [PHAssetImageProgressHandler](phassetimageprogresshandler.md): The signature for a block that Photos calls while downloading asset data from iCloud. Used by the [progressHandler](phimagerequestoptions/progresshandler.md) property.

### Instance Properties

- [allowSecondaryDegradedImage](phimagerequestoptions/allowsecondarydegradedimage.md)
- [preferHDR](phimagerequestoptions/preferhdr.md): Request HDR image data if available (such as PQ/HLG formats).
- [targetHDRHeadroom](phimagerequestoptions/targethdrheadroom.md): Target HDR headroom for image rendering.

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
- [PHVideoRequestOptions](phvideorequestoptions.md): A set of options affecting the delivery of video asset data that you request from an image manager.
- [PHLivePhotoRequestOptions](phlivephotorequestoptions.md): A set of options affecting the delivery of Live Photo assets you request from an image manager.
