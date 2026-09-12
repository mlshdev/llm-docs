> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/groupingtype](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/groupingtype)

# groupingType (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The grouping for collections retrieved with the media query.

## Declaration

```swift
var groupingType: MPMediaGrouping { get set }
```

<a id="Discussion"></a>

## Discussion

The default grouping type is [MPMediaGrouping.title](../mpmediagrouping/title.md). See [MPMediaGrouping](../mpmediagrouping.md) for the list of available grouping types.

## See Also

### Configuring media queries

- [filterPredicates](filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate(\_:)](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate(\_:)](removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [itemSections](itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.

# groupingType (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The grouping for collections retrieved with the media query.

## Declaration

```objectivec
@property (nonatomic) MPMediaGrouping groupingType;
```

<a id="Discussion"></a>

## Discussion

The default grouping type is [MPMediaGroupingTitle](../mpmediagrouping/title.md). See [MPMediaGrouping](../mpmediagrouping.md) for the list of available grouping types.

## See Also

### Configuring media queries

- [filterPredicates](filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate:](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate:](removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [itemSections](itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.
