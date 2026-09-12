> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alasset](https://developer.apple.com/documentation/assetslibrary/alasset)

# ALAsset

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Class

An `ALAsset` object represents a photo or a video managed by the Photo application.

## Declaration

```objectivec
@interface ALAsset : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  The Assets Library framework is deprecated as of iOS 9.0. Instead, use the Photos framework instead, which in iOS 8.0 and later provides more features and better performance for working with a user’s photo library. For more information, see `Photos`.
>
> In the Photos framework, the [PHAsset](https://developer.apple.com/documentation/photos/phasset) class provides functionality for fetching and working with photo and video assets.

Assets can have multiple representations, for example a photo which was captured in RAW and JPG. Different representations of the same asset may have different dimensions.

## Topics

### Constants

- [Property Keys](property-keys.md): Constants for the keys for the properties you can get from an asset.
- [Invalid Property Value](invalid-property-value.md): A constant to indicate that a property accessed by `ALAsset/value(forProperty:)` is invalid.
- [Asset Types](asset-types.md): Constants that specify the type of an asset.

### Instance Properties

- [editable](alasset/editable.md): Deprecated.
- [originalAsset](alasset/originalasset.md): Deprecated.

### Instance Methods

- [aspectRatioThumbnail](alasset/aspectratiothumbnail.md): Deprecated.
- [defaultRepresentation](alasset/defaultrepresentation.md): Deprecated.
- [representationForUTI:](alasset/representationforuti_.md): Deprecated.
- [setImageData:metadata:completionBlock:](alasset/setimagedata_metadata_completionblock_.md): Deprecated.
- [setVideoAtPath:completionBlock:](alasset/setvideoatpath_completionblock_.md): Deprecated.
- [thumbnail](alasset/thumbnail.md): Deprecated.
- [valueForProperty:](alasset/valueforproperty_.md): Deprecated.
- [writeModifiedImageDataToSavedPhotosAlbum:metadata:completionBlock:](alasset/writemodifiedimagedatatosavedphotosalbum_metadata_completionblock_.md): Deprecated.
- [writeModifiedVideoAtPathToSavedPhotosAlbum:completionBlock:](alasset/writemodifiedvideoatpathtosavedphotosalbum_completionblock_.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [ALAssetRepresentation](alassetrepresentation.md): Deprecated. An `ALAssetRepresentation` object encapsulates one of the representations of a given [ALAsset](alasset.md) object.
- [ALAssetsFilter](alassetsfilter.md): Deprecated. `ALAssetsFilter` encapsulates filtering criteria to be used when retrieving assets from a group.
- [ALAssetsGroup](alassetsgroup.md): Deprecated. An `ALAssetsGroup` object represents an ordered set of the assets managed by the Photos application. The order of the elements is the same as the user sees in the Photos application. An asset can belong to multiple assets groups.
- [ALAssetsLibrary](alassetslibrary.md): Deprecated. An instance of `ALAssetsLibrary` provides access to the videos and photos that are under the control of the Photos application.
