> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapropertypredicate](https://developer.apple.com/documentation/mediaplayer/mpmediapropertypredicate)

# MPMediaPropertyPredicate (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of predicates for defining a filter in a media query.

## Declaration

```swift
class MPMediaPropertyPredicate
```

<a id="overview"></a>

## Overview

Use one or more `MPMediaPropertyPredicate` objects to define the filter in a media query to retrieve a subset of media items from the Music library. A predicate in this context is a statement of a logical condition that you want to test each media item against. The query retrieves the items that satisfy that condition.

You define Music library queries, and retrieve query results, using the [MPMediaQuery](mpmediaquery.md) class. [MPMediaItem](mpmediaitem.md) and [MPMediaItemCollection](mpmediaitemcollection.md) describe the media items and media item collections that you can retrieve with a query.

## Topics

### Creating media property predicates

- [init(value:forProperty:)](mpmediapropertypredicate/init%28value_forproperty_%29.md): Creates a media property predicate with the default comparison type.
- [init(value:forProperty:comparisonType:)](mpmediapropertypredicate/init%28value_forproperty_comparisontype_%29.md): Creates a media property predicate with a specified comparison type.

### Examining media property predicates

- [property](mpmediapropertypredicate/property.md): The property that the media property predicate uses when you invoke a query.
- [value](mpmediapropertypredicate/value.md): The value that the media property predicate matches against when you invoke a query.
- [comparisonType](mpmediapropertypredicate/comparisontype.md): The type of matching comparison that the media property predicate performs when you invoke a query.

### Supporting types

- [MPMediaPredicateComparison](mpmediapredicatecomparison.md): Logical comparison types for media queries.

## Relationships

### Inherits From

- [MPMediaPredicate](mpmediapredicate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media item queries

- [Using filters to create specialized queries](using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuery](mpmediaquery.md): A query that specifies a set of media items from the device’s media library using a filter and a grouping type.
- [MPMediaQuerySection](mpmediaquerysection.md): A range of media items or media item collections from within a media query.
- [MPMediaPredicate](mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.

# MPMediaPropertyPredicate (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of predicates for defining a filter in a media query.

## Declaration

```objectivec
@interface MPMediaPropertyPredicate : MPMediaPredicate
```

<a id="overview"></a>

## Overview

Use one or more `MPMediaPropertyPredicate` objects to define the filter in a media query to retrieve a subset of media items from the Music library. A predicate in this context is a statement of a logical condition that you want to test each media item against. The query retrieves the items that satisfy that condition.

You define Music library queries, and retrieve query results, using the [MPMediaQuery](mpmediaquery.md) class. [MPMediaItem](mpmediaitem.md) and [MPMediaItemCollection](mpmediaitemcollection.md) describe the media items and media item collections that you can retrieve with a query.

## Topics

### Creating media property predicates

- [predicateWithValue:forProperty:](mpmediapropertypredicate/init%28value_forproperty_%29.md): Creates a media property predicate with the default comparison type.
- [predicateWithValue:forProperty:comparisonType:](mpmediapropertypredicate/init%28value_forproperty_comparisontype_%29.md): Creates a media property predicate with a specified comparison type.

### Examining media property predicates

- [property](mpmediapropertypredicate/property.md): The property that the media property predicate uses when you invoke a query.
- [value](mpmediapropertypredicate/value.md): The value that the media property predicate matches against when you invoke a query.
- [comparisonType](mpmediapropertypredicate/comparisontype.md): The type of matching comparison that the media property predicate performs when you invoke a query.

### Supporting types

- [MPMediaPredicateComparison](mpmediapredicatecomparison.md): Logical comparison types for media queries.

## Relationships

### Inherits From

- [MPMediaPredicate](mpmediapredicate.md)

## See Also

### Media item queries

- [Using filters to create specialized queries](using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuery](mpmediaquery.md): A query that specifies a set of media items from the device’s media library using a filter and a grouping type.
- [MPMediaQuerySection](mpmediaquerysection.md): A range of media items or media item collections from within a media query.
- [MPMediaPredicate](mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.
