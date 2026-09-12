> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/removefilterpredicate(_:)](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/removefilterpredicate(_:))

# removeFilterPredicate(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes a filter predicate from a query.

## Declaration

```swift
func removeFilterPredicate(_ predicate: MPMediaPredicate)
```

## Parameters

- `predicate`: The media predicate to remove from the set of predicates for the query.

## See Also

### Configuring media queries

- [filterPredicates](filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate(\_:)](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [groupingType](groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.

# removeFilterPredicate: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes a filter predicate from a query.

## Declaration

```objectivec
- (void) removeFilterPredicate:(MPMediaPredicate *) predicate;
```

## Parameters

- `predicate`: The media predicate to remove from the set of predicates for the query.

## See Also

### Configuring media queries

- [filterPredicates](filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate:](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [groupingType](groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.
