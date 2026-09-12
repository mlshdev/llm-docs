> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectiontype](https://developer.apple.com/documentation/photos/phassetcollectiontype)

# PHAssetCollectionType (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Major distinctions between kinds of asset collections, used by the [assetCollectionType](phassetcollection/assetcollectiontype.md) property and the [fetchAssetCollectionsContaining(\_:with:options:)](phassetcollection/fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollections(with:subtype:options:)](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) methods.

## Declaration

```swift
enum PHAssetCollectionType
```

## Topics

### Constants

- [PHAssetCollectionType.album](phassetcollectiontype/album.md): An album in the Photos app.
- [PHAssetCollectionType.smartAlbum](phassetcollectiontype/smartalbum.md): A smart album whose contents update dynamically.
- [PHAssetCollectionType.moment](phassetcollectiontype/moment.md): Deprecated. A moment in the Photos app.

### Initializers

- [init(rawValue:)](phassetcollectiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading Asset Collection Metadata

- [assetCollectionType](phassetcollection/assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md) property and the [fetchAssetCollections(with:subtype:options:)](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](phassetcollection/estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](phassetcollection/startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](phassetcollection/enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](phassetcollection/approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](phassetcollection/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# PHAssetCollectionType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Major distinctions between kinds of asset collections, used by the [assetCollectionType](phassetcollection/assetcollectiontype.md) property and the [fetchAssetCollectionsContainingAsset:withType:options:](phassetcollection/fetchassetcollectionscontaining%28__with_options_%29.md) and [fetchAssetCollectionsWithType:subtype:options:](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) methods.

## Declaration

```objectivec
enum PHAssetCollectionType : NSInteger;
```

## Topics

### Constants

- [PHAssetCollectionTypeAlbum](phassetcollectiontype/album.md): An album in the Photos app.
- [PHAssetCollectionTypeSmartAlbum](phassetcollectiontype/smartalbum.md): A smart album whose contents update dynamically.
- [PHAssetCollectionTypeMoment](phassetcollectiontype/moment.md): Deprecated. A moment in the Photos app.

## See Also

### Reading Asset Collection Metadata

- [assetCollectionType](phassetcollection/assetcollectiontype.md): The type of the asset collection, such as an album or a moment.
- [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md): The subtype of the asset collection.
- [PHAssetCollectionSubtype](phassetcollectionsubtype.md): Minor distinctions between kinds of asset collections, used by the [assetCollectionSubtype](phassetcollection/assetcollectionsubtype.md) property and the [fetchAssetCollectionsWithType:subtype:options:](phassetcollection/fetchassetcollections%28with_subtype_options_%29.md) method.
- [estimatedAssetCount](phassetcollection/estimatedassetcount.md): The estimated number of assets in the asset collection.
- [startDate](phassetcollection/startdate.md): The earliest creation date among all assets in the asset collection.
- [endDate](phassetcollection/enddate.md): The latest creation date among all assets in the asset collection.
- [approximateLocation](phassetcollection/approximatelocation.md): A location representing those of all assets in the collection.
- [localizedLocationNames](phassetcollection/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
