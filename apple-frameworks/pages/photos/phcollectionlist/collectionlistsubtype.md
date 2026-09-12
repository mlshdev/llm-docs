> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/collectionlistsubtype](https://developer.apple.com/documentation/photos/phcollectionlist/collectionlistsubtype)

# collectionListSubtype (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The type of asset collection grouping the collection list represents.

## Declaration

```swift
var collectionListSubtype: PHCollectionListSubtype { get }
```

<a id="Discussion"></a>

## Discussion

Use subtypes to make minor distinctions between collection lists of the same type, such as moment clusters and moment years. See [PHCollectionListSubtype](../phcollectionlistsubtype.md).

## See Also

### Reading Collection List Metadata

- [collectionListType](collectionlisttype.md): The type of asset collection group that the collection list represents.
- [PHCollectionListType](../phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](collectionlisttype.md) property and [fetchCollectionLists(with:subtype:options:)](fetchcollectionlists%28with_subtype_options_%29.md) method.
- [PHCollectionListSubtype](../phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](collectionlistsubtype.md) property and [fetchCollectionLists(with:subtype:options:)](fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentLists(with:containingMoment:options:)](fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentLists(with:options:)](fetchmomentlists%28with_options_%29.md) methods.
- [startDate](startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# collectionListSubtype (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The type of asset collection grouping the collection list represents.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) PHCollectionListSubtype collectionListSubtype;
```

<a id="Discussion"></a>

## Discussion

Use subtypes to make minor distinctions between collection lists of the same type, such as moment clusters and moment years. See [PHCollectionListSubtype](../phcollectionlistsubtype.md).

## See Also

### Reading Collection List Metadata

- [collectionListType](collectionlisttype.md): The type of asset collection group that the collection list represents.
- [PHCollectionListType](../phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](collectionlisttype.md) property and [fetchCollectionListsWithType:subtype:options:](fetchcollectionlists%28with_subtype_options_%29.md) method.
- [PHCollectionListSubtype](../phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](collectionlistsubtype.md) property and [fetchCollectionListsWithType:subtype:options:](fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentListsWithSubtype:containingMoment:options:](fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentListsWithSubtype:options:](fetchmomentlists%28with_options_%29.md) methods.
- [startDate](startdate.md): The earliest creation date among all assets in the collection list.
- [endDate](enddate.md): The latest creation date among all assets in the collection list.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
