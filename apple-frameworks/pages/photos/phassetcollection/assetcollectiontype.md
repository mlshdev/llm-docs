> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/assetcollectiontype](https://developer.apple.com/documentation/photos/phassetcollection/assetcollectiontype)

# assetCollectionType (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The type of the asset collection, such as an album or a moment.

## Declaration

```swift
var assetCollectionType: PHAssetCollectionType { get }
```

<a id="Discussion"></a>

## Discussion

See [PHAssetCollectionType](../phassetcollectiontype.md) for possible values.

## See Also

### Reading Asset Collection Metadata

- [PHAssetCollectionType](../phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](assetcollectiontype.md) property and the [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](../phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](assetcollectionsubtype.md) property and the [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# assetCollectionType (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The type of the asset collection, such as an album or a moment.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) PHAssetCollectionType assetCollectionType;
```

<a id="Discussion"></a>

## Discussion

See [PHAssetCollectionType](../phassetcollectiontype.md) for possible values.

## See Also

### Reading Asset Collection Metadata

- [PHAssetCollectionType](../phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](assetcollectiontype.md) property and the [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](../phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](assetcollectionsubtype.md) property and the [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
