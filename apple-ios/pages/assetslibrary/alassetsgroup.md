> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assetslibrary/alassetsgroup](https://developer.apple.com/documentation/assetslibrary/alassetsgroup)

# ALAssetsGroup

**Interface language:** Objective-C

**Framework:** Assets Library  
**Kind:** Class

An `ALAssetsGroup` object represents an ordered set of the assets managed by the Photos application. The order of the elements is the same as the user sees in the Photos application. An asset can belong to multiple assets groups.

## Declaration

```objectivec
@interface ALAssetsGroup : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  The Assets Library framework is deprecated as of iOS 9.0. Instead, use the Photos framework instead, which in iOS 8.0 and later provides more features and better performance for working with a user’s photo library. For more information, see `Photos`.
>
> In the Photos framework, the [PHCollection](https://developer.apple.com/documentation/photos/phcollection) and [PHCollectionList](https://developer.apple.com/documentation/photos/phcollectionlist) classes and their subclasses provide functionality for working with collections of assets.

Assets groups themselves are synced via iTunes, created to hold the user’s saved photos or created during camera import. You can indirectly modify the Saved Photos group by saving images or videos into it using the [ALAssetsLibrary](alassetslibrary.md) class.

## Topics

### Constants

- [ALAssetsGroupEnumerationResultsBlock](alassetsgroupenumerationresultsblock.md): Deprecated. Signature for the block executed during enumeration of assets.
- [Group Property Names](group-property-names.md): Constants for the names of group properties, used by `ALAssetsGroup/value(forProperty:)`.

### Instance Properties

- [editable](alassetsgroup/editable.md): Deprecated.

### Instance Methods

- [addAsset:](alassetsgroup/addasset_.md): Deprecated.
- [enumerateAssetsAtIndexes:options:usingBlock:](alassetsgroup/enumerateassetsatindexes_options_usingblock_.md): Deprecated.
- [enumerateAssetsUsingBlock:](alassetsgroup/enumerateassetsusingblock_.md): Deprecated.
- [enumerateAssetsWithOptions:usingBlock:](alassetsgroup/enumerateassetswithoptions_usingblock_.md): Deprecated.
- [numberOfAssets](alassetsgroup/numberofassets.md): Deprecated.
- [posterImage](alassetsgroup/posterimage.md): Deprecated.
- [setAssetsFilter:](alassetsgroup/setassetsfilter_.md): Deprecated.
- [valueForProperty:](alassetsgroup/valueforproperty_.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [ALAsset](alasset.md): Deprecated. An `ALAsset` object represents a photo or a video managed by the Photo application.
- [ALAssetRepresentation](alassetrepresentation.md): Deprecated. An `ALAssetRepresentation` object encapsulates one of the representations of a given [ALAsset](alasset.md) object.
- [ALAssetsFilter](alassetsfilter.md): Deprecated. `ALAssetsFilter` encapsulates filtering criteria to be used when retrieving assets from a group.
- [ALAssetsLibrary](alassetslibrary.md): Deprecated. An instance of `ALAssetsLibrary` provides access to the videos and photos that are under the control of the Photos application.
