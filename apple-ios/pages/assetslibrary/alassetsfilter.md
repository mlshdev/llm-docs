> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetsfilter](https://developer.apple.com/documentation/assetslibrary/alassetsfilter)

# ALAssetsFilter

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Class

`ALAssetsFilter` encapsulates filtering criteria to be used when retrieving assets from a group.

## Declaration

```objectivec
@interface ALAssetsFilter : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  The Assets Library framework is deprecated as of iOS 9.0. Instead, use the Photos framework instead, which in iOS 8.0 and later provides more features and better performance for working with a user’s photo library. For more information, see `Photos`.
>
> In the Photos framework, the [PHFetchOptions](https://developer.apple.com/documentation/photos/phfetchoptions) class provides functionality for filtering requests for assets or collections.

You use filters with the `ALAssetsGroup/setAssetsFilter(_:)` method in [ALAssetsGroup](alassetsgroup.md).

## Topics

### Type Methods

- [allAssets](alassetsfilter/allassets.md): Deprecated.
- [allPhotos](alassetsfilter/allphotos.md): Deprecated.
- [allVideos](alassetsfilter/allvideos.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [ALAsset](alasset.md): Deprecated. An `ALAsset` object represents a photo or a video managed by the Photo application.
- [ALAssetRepresentation](alassetrepresentation.md): Deprecated. An `ALAssetRepresentation` object encapsulates one of the representations of a given [ALAsset](alasset.md) object.
- [ALAssetsGroup](alassetsgroup.md): Deprecated. An `ALAssetsGroup` object represents an ordered set of the assets managed by the Photos application. The order of the elements is the same as the user sees in the Photos application. An asset can belong to multiple assets groups.
- [ALAssetsLibrary](alassetslibrary.md): Deprecated. An instance of `ALAssetsLibrary` provides access to the videos and photos that are under the control of the Photos application.
