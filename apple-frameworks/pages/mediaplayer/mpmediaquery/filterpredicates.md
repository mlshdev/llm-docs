> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/filterpredicates](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/filterpredicates)

# filterPredicates (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The media property predicates of the media query.

## Declaration

```swift
var filterPredicates: Set<MPMediaPredicate>? { get set }
```

<a id="Discussion"></a>

## Discussion

The General Media Item Property Keys and Podcast Item Property Keys enumerations in [MPMediaItem](../mpmediaitem.md) contain the keys you can use to construct predicates.

## See Also

### Configuring media queries

- [addFilterPredicate(\_:)](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate(\_:)](removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.

# filterPredicates (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The media property predicates of the media query.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSSet<MPMediaPredicate *> * filterPredicates;
```

<a id="Discussion"></a>

## Discussion

The General Media Item Property Keys and Podcast Item Property Keys enumerations in [MPMediaItem](../mpmediaitem.md) contain the keys you can use to construct predicates.

## See Also

### Configuring media queries

- [addFilterPredicate:](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate:](removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.
