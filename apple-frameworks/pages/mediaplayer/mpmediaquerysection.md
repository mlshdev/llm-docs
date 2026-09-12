> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquerysection](https://developer.apple.com/documentation/mediaplayer/mpmediaquerysection)

# MPMediaQuerySection (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A range of media items or media item collections from within a media query.

## Declaration

```swift
class MPMediaQuerySection
```

<a id="overview"></a>

## Overview

You can use sections when displaying a query’s items or collections in your app’s user interface. You obtain an array of media query sections by using the [itemSections](mpmediaquery/itemsections.md) or [collectionSections](mpmediaquery/collectionsections.md) properties of a media query (an instance of the [MPMediaQuery](mpmediaquery.md) class). The property values of a media query section are read-only.

## Topics

### Working with media query sections

- [title](mpmediaquerysection/title.md): The localized title of the media query section.
- [range](mpmediaquerysection/range.md): The range in the media query’s items or collections array that the media query section represents.

### Initializers

- [init(coder:)](mpmediaquerysection/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media item queries

- [Using filters to create specialized queries](using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuery](mpmediaquery.md): A query that specifies a set of media items from the device’s media library using a filter and a grouping type.
- [MPMediaPropertyPredicate](mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.
- [MPMediaPredicate](mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.

# MPMediaQuerySection (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A range of media items or media item collections from within a media query.

## Declaration

```objectivec
@interface MPMediaQuerySection : NSObject
```

<a id="overview"></a>

## Overview

You can use sections when displaying a query’s items or collections in your app’s user interface. You obtain an array of media query sections by using the [itemSections](mpmediaquery/itemsections.md) or [collectionSections](mpmediaquery/collectionsections.md) properties of a media query (an instance of the [MPMediaQuery](mpmediaquery.md) class). The property values of a media query section are read-only.

## Topics

### Working with media query sections

- [title](mpmediaquerysection/title.md): The localized title of the media query section.
- [range](mpmediaquerysection/range.md): The range in the media query’s items or collections array that the media query section represents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media item queries

- [Using filters to create specialized queries](using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuery](mpmediaquery.md): A query that specifies a set of media items from the device’s media library using a filter and a grouping type.
- [MPMediaPropertyPredicate](mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.
- [MPMediaPredicate](mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.
