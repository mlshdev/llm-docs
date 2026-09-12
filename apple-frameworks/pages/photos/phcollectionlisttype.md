> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlisttype](https://developer.apple.com/documentation/photos/phcollectionlisttype)

# PHCollectionListType (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Major distinctions between kinds of collection list, used by the [collectionListType](phcollectionlist/collectionlisttype.md) property and [fetchCollectionLists(with:subtype:options:)](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md) method.

## Declaration

```swift
enum PHCollectionListType
```

## Topics

### Constants

- [PHCollectionListType.momentList](phcollectionlisttype/momentlist.md): Deprecated. A group of asset collections of type [PHAssetCollectionType.moment](phassetcollectiontype/moment.md).
- [PHCollectionListType.folder](phcollectionlisttype/folder.md): A folder containing asset collections of type [PHAssetCollectionType.album](phassetcollectiontype/album.md) or [PHAssetCollectionType.smartAlbum](phassetcollectiontype/smartalbum.md).
- [PHCollectionListType.smartFolder](phcollectionlisttype/smartfolder.md): A smart folder synced to the device from .

### Initializers

- [init(rawValue:)](phcollectionlisttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading Collection List Metadata

- [collectionListType](phcollectionlist/collectionlisttype.md): The type of asset collection group that the collection list represents.
- [collectionListSubtype](phcollectionlist/collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [PHCollectionListSubtype](phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](phcollectionlist/collectionlistsubtype.md) property and [fetchCollectionLists(with:subtype:options:)](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentLists(with:containingMoment:options:)](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentLists(with:options:)](phcollectionlist/fetchmomentlists%28with_options_%29.md) methods.
- [startDate](phcollectionlist/startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](phcollectionlist/enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](phcollectionlist/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# PHCollectionListType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Major distinctions between kinds of collection list, used by the [collectionListType](phcollectionlist/collectionlisttype.md) property and [fetchCollectionListsWithType:subtype:options:](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md) method.

## Declaration

```objectivec
enum PHCollectionListType : NSInteger;
```

## Topics

### Constants

- [PHCollectionListTypeMomentList](phcollectionlisttype/momentlist.md): Deprecated. A group of asset collections of type [PHAssetCollectionTypeMoment](phassetcollectiontype/moment.md).
- [PHCollectionListTypeFolder](phcollectionlisttype/folder.md): A folder containing asset collections of type [PHAssetCollectionTypeAlbum](phassetcollectiontype/album.md) or [PHAssetCollectionTypeSmartAlbum](phassetcollectiontype/smartalbum.md).
- [PHCollectionListTypeSmartFolder](phcollectionlisttype/smartfolder.md): A smart folder synced to the device from .

## See Also

### Reading Collection List Metadata

- [collectionListType](phcollectionlist/collectionlisttype.md): The type of asset collection group that the collection list represents.
- [collectionListSubtype](phcollectionlist/collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [PHCollectionListSubtype](phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](phcollectionlist/collectionlistsubtype.md) property and [fetchCollectionListsWithType:subtype:options:](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentListsWithSubtype:containingMoment:options:](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentListsWithSubtype:options:](phcollectionlist/fetchmomentlists%28with_options_%29.md) methods.
- [startDate](phcollectionlist/startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](phcollectionlist/enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](phcollectionlist/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
