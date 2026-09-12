> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollection/approximatelocation](https://developer.apple.com/documentation/photos/phassetcollection/approximatelocation)

# approximateLocation (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A location representing those of all assets in the collection.

## Declaration

```swift
var approximateLocation: CLLocation? { get }
```

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location. A moment can contain photos from several locations in close proximity. In such cases, this property describes the general area containing the locations of all assets in the moment.

This property applies only to asset collections whose type is [PHAssetCollectionType.moment](../phassetcollectiontype/moment.md). For other asset collection types, this property’s value is `nil`.

## See Also

### Reading Asset Collection Metadata

- [assetCollectionType](assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [PHAssetCollectionType](../phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](assetcollectiontype.md) property and the [fetchAssetCollectionsContaining(\_:with:options:)](fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](../phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](assetcollectionsubtype.md) property and the [fetchAssetCollections(with:subtype:options:)](fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](enddate.md): The latest creation date among all assets in the asset collection.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# approximateLocation (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A location representing those of all assets in the collection.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CLLocation * approximateLocation;
```

<a id="Discussion"></a>

## Discussion

The Photos app automatically creates moments to group assets by time and location. A moment can contain photos from several locations in close proximity. In such cases, this property describes the general area containing the locations of all assets in the moment.

This property applies only to asset collections whose type is [PHAssetCollectionTypeMoment](../phassetcollectiontype/moment.md). For other asset collection types, this property’s value is `nil`.

## See Also

### Reading Asset Collection Metadata

- [assetCollectionType](assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [PHAssetCollectionType](../phassetcollectiontype.md): Major distinctions between kinds of asset collections, used by the [assetCollectionType](assetcollectiontype.md) property and the [fetchAssetCollectionsContainingAsset:withType:options:](fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md) methods.
- [assetCollectionSubtype](assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](../phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](assetcollectionsubtype.md) property and the [fetchAssetCollectionsWithType:subtype:options:](fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](enddate.md): The latest creation date among all assets in the asset collection.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
