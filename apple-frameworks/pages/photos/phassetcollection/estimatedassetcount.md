> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/estimatedassetcount](https://developer.apple.com/documentation/photos/phassetcollection/estimatedassetcount)

# estimatedAssetCount (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The estimated number of assets in the asset collection.

## Declaration

```swift
var estimatedAssetCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This count may not match the current number of assets in the collection. To get the most recent count, fetch the collection’s assets with the [fetchAssets(in:options:)](../phasset/fetchassets%28in_options_%29.md) method and read the [count](../phfetchresult/count.md) property of the fetch result.

If asset count information is not available for the collection, this property’s value is `NSNotFound`.

## See Also

### Reading Asset Collection Metadata

- [assetCollectionType](assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [PHAssetCollectionType](../phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](assetcollectiontype.md) property and the [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](../phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](assetcollectionsubtype.md) property and the [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md) method.
- [startDate](startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# estimatedAssetCount (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The estimated number of assets in the asset collection.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSUInteger estimatedAssetCount;
```

<a id="Discussion"></a>

## Discussion

This count may not match the current number of assets in the collection. To get the most recent count, fetch the collection’s assets with the [fetchAssetsInAssetCollection:options:](../phasset/fetchassets%28in_options_%29.md) method and read the [count](../phfetchresult/count.md) property of the fetch result.

If asset count information is not available for the collection, this property’s value is `NSNotFound`.

## See Also

### Reading Asset Collection Metadata

- [assetCollectionType](assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [PHAssetCollectionType](../phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](assetcollectiontype.md) property and the [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](../phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](assetcollectionsubtype.md) property and the [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md) method.
- [startDate](startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
