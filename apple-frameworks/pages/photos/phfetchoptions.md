> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions](https://developer.apple.com/documentation/photos/phfetchoptions)

# PHFetchOptions (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

## Declaration

```swift
class PHFetchOptions
```

## Mentioned In

- [Fetching Assets](../photokit/fetching-assets.md)

<a id="overview"></a>

## Overview

Using class methods on the [PHAsset](phasset.md), [PHCollection](phcollection.md), [PHAssetCollection](phassetcollection.md), and [PHCollectionList](phcollectionlist.md) classes to fetch assets or collections produces a [PHFetchResult](phfetchresult.md) object containing the requested objects. The options you specify control which objects the fetch result includes, how those objects are arranged in the fetch result, and how Photos should notify your app of changes to the fetch result.

Photos supports only a restricted set of keys for the [predicate](phfetchoptions/predicate.md) and [sortDescriptors](phfetchoptions/sortdescriptors.md) properties. The set of available keys depends on which class you’re using to fetch assets or collections. The following table lists the keys supported by each class:

| Class for Fetch Method | Supported Keys |
| --- | --- |
| [PHAsset](phasset.md) | `SELF`, [localIdentifier](phobject/localidentifier.md), [creationDate](phasset/creationdate.md), [modificationDate](phasset/modificationdate.md), [mediaType](phasset/mediatype.md), [mediaSubtypes](phasset/mediasubtypes.md), [duration](phasset/duration.md), [pixelWidth](phasset/pixelwidth.md), [pixelHeight](phasset/pixelheight.md), [isFavorite](phasset/isfavorite.md) (or `isFavorite`), [isHidden](phasset/ishidden.md) (or `isHidden`), [burstIdentifier](phasset/burstidentifier.md) |
| [PHAssetCollection](phassetcollection.md) | `SELF`, [localIdentifier](phobject/localidentifier.md), [localizedTitle](phcollection/localizedtitle.md) (or `title`), [startDate](phassetcollection/startdate.md), [endDate](phassetcollection/enddate.md), [estimatedAssetCount](phassetcollection/estimatedassetcount.md) |
| [PHCollectionList](phcollectionlist.md) | `SELF`, [localIdentifier](phobject/localidentifier.md), [localizedTitle](phcollection/localizedtitle.md) (or `title`), [startDate](phcollectionlist/startdate.md), [endDate](phcollectionlist/enddate.md) |
| [PHCollection](phcollection.md) (can fetch a mix of [PHCollectionList](phcollectionlist.md) and [PHAssetCollection](phassetcollection.md) objects) | `SELF`, [localIdentifier](phobject/localidentifier.md), [localizedTitle](phcollection/localizedtitle.md) (or `title`), [startDate](phcollectionlist/startdate.md), [endDate](phcollectionlist/enddate.md) |

## Topics

### Sorting and Filtering Fetch Results

- [predicate](phfetchoptions/predicate.md): A predicate that specifies which properties to select results by and that also specifies any constraints on selection.
- [sortDescriptors](phfetchoptions/sortdescriptors.md): A list of sort descriptors, specifying an order for the fetched objects.

### Subscribing to Changes

- [wantsIncrementalChangeDetails](phfetchoptions/wantsincrementalchangedetails.md): A Boolean value that determines whether your app receives detailed change information for the objects in the fetch result.

### Limiting Fetch Results

- [fetchLimit](phfetchoptions/fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](phfetchoptions/includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](phfetchoptions/includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](phfetchoptions/includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](phfetchoptions/prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

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

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.

# PHFetchOptions (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A set of options that affect the filtering, sorting, and management of results that Photos returns when you fetch asset or collection objects.

## Declaration

```objectivec
@interface PHFetchOptions : NSObject
```

## Mentioned In

- [Fetching Assets](../photokit/fetching-assets.md)

<a id="overview"></a>

## Overview

Using class methods on the [PHAsset](phasset.md), [PHCollection](phcollection.md), [PHAssetCollection](phassetcollection.md), and [PHCollectionList](phcollectionlist.md) classes to fetch assets or collections produces a [PHFetchResult](phfetchresult.md) object containing the requested objects. The options you specify control which objects the fetch result includes, how those objects are arranged in the fetch result, and how Photos should notify your app of changes to the fetch result.

Photos supports only a restricted set of keys for the [predicate](phfetchoptions/predicate.md) and [sortDescriptors](phfetchoptions/sortdescriptors.md) properties. The set of available keys depends on which class you’re using to fetch assets or collections. The following table lists the keys supported by each class:

| Class for Fetch Method | Supported Keys |
| --- | --- |
| [PHAsset](phasset.md) | `SELF`, [localIdentifier](phobject/localidentifier.md), [creationDate](phasset/creationdate.md), [modificationDate](phasset/modificationdate.md), [mediaType](phasset/mediatype.md), [mediaSubtypes](phasset/mediasubtypes.md), [duration](phasset/duration.md), [pixelWidth](phasset/pixelwidth.md), [pixelHeight](phasset/pixelheight.md), [favorite](phasset/isfavorite.md) (or `isFavorite`), [hidden](phasset/ishidden.md) (or `isHidden`), [burstIdentifier](phasset/burstidentifier.md) |
| [PHAssetCollection](phassetcollection.md) | `SELF`, [localIdentifier](phobject/localidentifier.md), [localizedTitle](phcollection/localizedtitle.md) (or `title`), [startDate](phassetcollection/startdate.md), [endDate](phassetcollection/enddate.md), [estimatedAssetCount](phassetcollection/estimatedassetcount.md) |
| [PHCollectionList](phcollectionlist.md) | `SELF`, [localIdentifier](phobject/localidentifier.md), [localizedTitle](phcollection/localizedtitle.md) (or `title`), [startDate](phcollectionlist/startdate.md), [endDate](phcollectionlist/enddate.md) |
| [PHCollection](phcollection.md) (can fetch a mix of [PHCollectionList](phcollectionlist.md) and [PHAssetCollection](phassetcollection.md) objects) | `SELF`, [localIdentifier](phobject/localidentifier.md), [localizedTitle](phcollection/localizedtitle.md) (or `title`), [startDate](phcollectionlist/startdate.md), [endDate](phcollectionlist/enddate.md) |

## Topics

### Sorting and Filtering Fetch Results

- [predicate](phfetchoptions/predicate.md): A predicate that specifies which properties to select results by and that also specifies any constraints on selection.
- [sortDescriptors](phfetchoptions/sortdescriptors.md): A list of sort descriptors, specifying an order for the fetched objects.

### Subscribing to Changes

- [wantsIncrementalChangeDetails](phfetchoptions/wantsincrementalchangedetails.md): A Boolean value that determines whether your app receives detailed change information for the objects in the fetch result.

### Limiting Fetch Results

- [fetchLimit](phfetchoptions/fetchlimit.md): The maximum number of objects to include in the fetch result.
- [includeAllBurstAssets](phfetchoptions/includeallburstassets.md): A Boolean value that determines whether the fetch result includes all assets from burst photo sequences.
- [includeHiddenAssets](phfetchoptions/includehiddenassets.md): A Boolean value that determines whether the fetch result includes assets marked as hidden.
- [includeAssetSourceTypes](phfetchoptions/includeassetsourcetypes.md): The set of source types for which to include assets in the fetch result.
- [prefetchAssetExtendedMetadata](phfetchoptions/prefetchassetextendedmetadata.md): A Boolean value to fetch `PHAssetExtendedMetadata` when the asset is also fetched.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Asset retrieval

- [Fetching Objects and Requesting Changes](../photokit/fetching-objects-and-requesting-changes.md): Get assets, asset collections, and collection lists matching a specified query.
- [PHAsset](phasset.md): A representation of an image, video, or Live Photo in the Photos library.
- [PHAssetCollection](phassetcollection.md): A representation of a Photos asset grouping, such as Moments, a user-created album, or a Smart Album.
- [PHCollection](phcollection.md): The abstract superclass for Photos asset collections and collection lists.
- [PHCollectionList](phcollectionlist.md): A group containing Photos asset collections, such as Moments, Years, or folders of user-created albums.
- [PHObject](phobject.md): The abstract superclass for Photos model objects, including assets and collections.
- [PHFetchResult](phfetchresult.md): An ordered list of assets or collections returned from a Photos fetch method.
