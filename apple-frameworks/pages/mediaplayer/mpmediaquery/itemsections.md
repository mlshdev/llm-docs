> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/itemsections](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/itemsections)

# itemSections (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array representing the section grouping of the query’s specified media items.

## Declaration

```swift
var itemSections: [MPMediaQuerySection]? { get }
```

<a id="Discussion"></a>

## Discussion

This property consists of an array of [MPMediaQuerySection](../mpmediaquerysection.md) instances. The value of this property may be `nil` if there’s no appropriate section grouping of the media items.

## See Also

### Configuring media queries

- [filterPredicates](filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate(\_:)](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate(\_:)](removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](groupingtype.md): The grouping for collections retrieved with the media query.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.

# itemSections (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array representing the section grouping of the query’s specified media items.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<MPMediaQuerySection *> * itemSections;
```

<a id="Discussion"></a>

## Discussion

This property consists of an array of [MPMediaQuerySection](../mpmediaquerysection.md) instances. The value of this property may be `nil` if there’s no appropriate section grouping of the media items.

## See Also

### Configuring media queries

- [filterPredicates](filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate:](addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate:](removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](groupingtype.md): The grouping for collections retrieved with the media query.
- [collectionSections](collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](../mpmediagrouping.md): Keys used to configure a media query.
