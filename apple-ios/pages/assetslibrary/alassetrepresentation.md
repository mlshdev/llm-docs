> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetrepresentation](https://developer.apple.com/documentation/assetslibrary/alassetrepresentation)

# ALAssetRepresentation

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Class

An `ALAssetRepresentation` object encapsulates one of the representations of a given [ALAsset](alasset.md) object.

## Declaration

```objectivec
@interface ALAssetRepresentation : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  The Assets Library framework is deprecated as of iOS 9.0. Instead, use the Photos framework instead, which in iOS 8.0 and later provides more features and better performance for working with a user’s photo library. For more information, see `Photos`.
>
> In the Photos framework, the [PHAsset](https://developer.apple.com/documentation/photos/phasset) and [PHImageManager](https://developer.apple.com/documentation/photos/phimagemanager) classes provide functionality for fetching an asset’s image or video data.

A given asset in the library may have more than one representation. For example, if a camera provides RAW and JPEG versions of an image, the resulting asset will have two representations—one for the RAW file and one for the JPEG file.

## Topics

### Instance Methods

- [CGImageWithOptions:](alassetrepresentation/cgimagewithoptions_.md): Deprecated.
- [UTI](alassetrepresentation/uti.md): Deprecated.
- [dimensions](alassetrepresentation/dimensions.md): Deprecated.
- [filename](alassetrepresentation/filename.md): Deprecated.
- [fullResolutionImage](alassetrepresentation/fullresolutionimage.md): Deprecated.
- [fullScreenImage](alassetrepresentation/fullscreenimage.md): Deprecated.
- [getBytes:fromOffset:length:error:](alassetrepresentation/getbytes_fromoffset_length_error_.md): Deprecated.
- [metadata](alassetrepresentation/metadata.md): Deprecated.
- [orientation](alassetrepresentation/orientation.md): Deprecated.
- [scale](alassetrepresentation/scale.md): Deprecated.
- [size](alassetrepresentation/size.md): Deprecated.
- [url](alassetrepresentation/url.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [ALAsset](alasset.md): Deprecated. An `ALAsset` object represents a photo or a video managed by the Photo application.
- [ALAssetsFilter](alassetsfilter.md): Deprecated. `ALAssetsFilter` encapsulates filtering criteria to be used when retrieving assets from a group.
- [ALAssetsGroup](alassetsgroup.md): Deprecated. An `ALAssetsGroup` object represents an ordered set of the assets managed by the Photos application. The order of the elements is the same as the user sees in the Photos application. An asset can belong to multiple assets groups.
- [ALAssetsLibrary](alassetslibrary.md): Deprecated. An instance of `ALAssetsLibrary` provides access to the videos and photos that are under the control of the Photos application.
