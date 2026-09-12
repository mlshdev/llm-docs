> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlistsubtype](https://developer.apple.com/documentation/photos/phcollectionlistsubtype)

# PHCollectionListSubtype (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Major distinctions between kinds of collection list, used by the [collectionListSubtype](phcollectionlist/collectionlistsubtype.md) property and [fetchCollectionLists(with:subtype:options:)](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentLists(with:containingMoment:options:)](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentLists(with:options:)](phcollectionlist/fetchmomentlists%28with_options_%29.md) methods.

## Declaration

```swift
enum PHCollectionListSubtype
```

## Topics

### Constants

- [PHCollectionListSubtype.momentListCluster](phcollectionlistsubtype/momentlistcluster.md): Deprecated. The collection list is a moment cluster, grouping several related moments.
- [PHCollectionListSubtype.momentListYear](phcollectionlistsubtype/momentlistyear.md): Deprecated. The collection list is a moment year, grouping all moments from one or more calendar years.
- [PHCollectionListSubtype.regularFolder](phcollectionlistsubtype/regularfolder.md): The collection list is a folder containing albums or other folders.
- [PHCollectionListSubtype.rootFolder](phcollectionlistsubtype/rootfolder.md): The collection list that contains the top-level user collections.
- [PHCollectionListSubtype.smartFolderEvents](phcollectionlistsubtype/smartfolderevents.md): The collection list is a smart folder containing one or more Events synced from a Mac.
- [PHCollectionListSubtype.smartFolderFaces](phcollectionlistsubtype/smartfolderfaces.md): The collection list is a smart folder containing one or more Faces groups synced from a Mac.
- [PHCollectionListSubtype.any](phcollectionlistsubtype/any.md): Use this value to fetch collection lists of all possible subtypes.

### Initializers

- [init(rawValue:)](phcollectionlistsubtype/init%28rawvalue_%29.md)

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
- [PHCollectionListType](phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](phcollectionlist/collectionlisttype.md) property and [fetchCollectionLists(with:subtype:options:)](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md) method.
- [collectionListSubtype](phcollectionlist/collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [startDate](phcollectionlist/startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](phcollectionlist/enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](phcollectionlist/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# PHCollectionListSubtype (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

Major distinctions between kinds of collection list, used by the [collectionListSubtype](phcollectionlist/collectionlistsubtype.md) property and [fetchCollectionListsWithType:subtype:options:](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentListsWithSubtype:containingMoment:options:](phcollectionlist/fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentListsWithSubtype:options:](phcollectionlist/fetchmomentlists%28with_options_%29.md) methods.

## Declaration

```objectivec
enum PHCollectionListSubtype : NSInteger;
```

## Topics

### Constants

- [PHCollectionListSubtypeMomentListCluster](phcollectionlistsubtype/momentlistcluster.md): Deprecated. The collection list is a moment cluster, grouping several related moments.
- [PHCollectionListSubtypeMomentListYear](phcollectionlistsubtype/momentlistyear.md): Deprecated. The collection list is a moment year, grouping all moments from one or more calendar years.
- [PHCollectionListSubtypeRegularFolder](phcollectionlistsubtype/regularfolder.md): The collection list is a folder containing albums or other folders.
- [PHCollectionListSubtypeRootFolder](phcollectionlistsubtype/rootfolder.md): The collection list that contains the top-level user collections.
- [PHCollectionListSubtypeSmartFolderEvents](phcollectionlistsubtype/smartfolderevents.md): The collection list is a smart folder containing one or more Events synced from a Mac.
- [PHCollectionListSubtypeSmartFolderFaces](phcollectionlistsubtype/smartfolderfaces.md): The collection list is a smart folder containing one or more Faces groups synced from a Mac.
- [PHCollectionListSubtypeAny](phcollectionlistsubtype/any.md): Use this value to fetch collection lists of all possible subtypes.

## See Also

### Reading Collection List Metadata

- [collectionListType](phcollectionlist/collectionlisttype.md): The type of asset collection group that the collection list represents.
- [PHCollectionListType](phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](phcollectionlist/collectionlisttype.md) property and [fetchCollectionListsWithType:subtype:options:](phcollectionlist/fetchcollectionlists%28with_subtype_options_%29.md) method.
- [collectionListSubtype](phcollectionlist/collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [startDate](phcollectionlist/startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](phcollectionlist/enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](phcollectionlist/localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
