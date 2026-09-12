> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotorequestoptions](https://developer.apple.com/documentation/photos/phlivephotorequestoptions)

# PHLivePhotoRequestOptions (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of Live Photo assets you request from an image manager.

## Declaration

```swift
class PHLivePhotoRequestOptions
```

<a id="overview"></a>

## Overview

A Live Photo is a picture that includes movement and sound from the moments just before and after its capture.

## Topics

### Specifying Image Request Options

- [version](phlivephotorequestoptions/version.md): The version of the Live Photo to be requested.
- [deliveryMode](phlivephotorequestoptions/deliverymode.md): The requested Live Photo quality and delivery priority.

### Fetching Image Data from iCloud

- [isNetworkAccessAllowed](phlivephotorequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested Live Photo data from iCloud.
- [progressHandler](phlivephotorequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the Live Photo.

### Instance Properties

- [preferHDR](phlivephotorequestoptions/preferhdr.md): Request HDR image data if available (such as PQ/HLG formats).

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
- [PHVideoRequestOptions](phvideorequestoptions.md): A set of options affecting the delivery of video asset data that you request from an image manager.

# PHLivePhotoRequestOptions (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of Live Photo assets you request from an image manager.

## Declaration

```objectivec
@interface PHLivePhotoRequestOptions : NSObject
```

<a id="overview"></a>

## Overview

A Live Photo is a picture that includes movement and sound from the moments just before and after its capture.

## Topics

### Specifying Image Request Options

- [version](phlivephotorequestoptions/version.md): The version of the Live Photo to be requested.
- [deliveryMode](phlivephotorequestoptions/deliverymode.md): The requested Live Photo quality and delivery priority.

### Fetching Image Data from iCloud

- [networkAccessAllowed](phlivephotorequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested Live Photo data from iCloud.
- [progressHandler](phlivephotorequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the Live Photo.

### Instance Properties

- [preferHDR](phlivephotorequestoptions/preferhdr.md): Request HDR image data if available (such as PQ/HLG formats).

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
- [PHVideoRequestOptions](phvideorequestoptions.md): A set of options affecting the delivery of video asset data that you request from an image manager.
