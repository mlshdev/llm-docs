> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcollectionlist/enddate](https://developer.apple.com/documentation/photos/phcollectionlist/enddate)

# endDate (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The latest creation date among all assets in the collection list.

## Declaration

```swift
var endDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property applies only to collection lists whose type is [PHCollectionListType.momentList](../phcollectionlisttype/momentlist.md). For other collection list types, this property’s value is `nil`.

## See Also

### Reading Collection List Metadata

- [collectionListType](collectionlisttype.md): The type of asset collection group that the collection list represents.
- [PHCollectionListType](../phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](collectionlisttype.md) property and [fetchCollectionLists(with:subtype:options:)](fetchcollectionlists%28with_subtype_options_%29.md) method.
- [collectionListSubtype](collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [PHCollectionListSubtype](../phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](collectionlistsubtype.md) property and [fetchCollectionLists(with:subtype:options:)](fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentLists(with:containingMoment:options:)](fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentLists(with:options:)](fetchmomentlists%28with_options_%29.md) methods.
- [startDate](startdate.md): The earliest creation date among all assets in the collection list.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).

# endDate (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

The latest creation date among all assets in the collection list.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

This property applies only to collection lists whose type is [PHCollectionListTypeMomentList](../phcollectionlisttype/momentlist.md). For other collection list types, this property’s value is `nil`.

## See Also

### Reading Collection List Metadata

- [collectionListType](collectionlisttype.md): The type of asset collection group that the collection list represents.
- [PHCollectionListType](../phcollectionlisttype.md): Major distinctions between kinds of collection list, used by the [collectionListType](collectionlisttype.md) property and [fetchCollectionListsWithType:subtype:options:](fetchcollectionlists%28with_subtype_options_%29.md) method.
- [collectionListSubtype](collectionlistsubtype.md): The type of asset collection grouping the collection list represents.
- [PHCollectionListSubtype](../phcollectionlistsubtype.md): Major distinctions between kinds of collection list, used by the [collectionListSubtype](collectionlistsubtype.md) property and [fetchCollectionListsWithType:subtype:options:](fetchcollectionlists%28with_subtype_options_%29.md), [fetchMomentListsWithSubtype:containingMoment:options:](fetchmomentlists%28with_containingmoment_options_%29.md), and [fetchMomentListsWithSubtype:options:](fetchmomentlists%28with_options_%29.md) methods.
- [startDate](startdate.md): The earliest creation date among all assets in the collection list.
- [localizedLocationNames](localizedlocationnames.md): The names of locations grouped by the collection (an array of `NSString` objects).
