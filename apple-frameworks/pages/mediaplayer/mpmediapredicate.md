> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapredicate](https://developer.apple.com/documentation/mediaplayer/mpmediapredicate)

# MPMediaPredicate (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An abstract class that defines classes for filtering media in a media query.

## Declaration

```swift
class MPMediaPredicate
```

<a id="overview"></a>

## Overview

In media queries, a *predicate* is a statement of a logical condition that you want to test each media item against. The system returns the media items that satisfy the condition in the query result. Use this class’s concrete subclass, described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md), to define the filter in a media query to retrieve a subset of media items from the library. For more information about media queries, see [MPMediaQuery](mpmediaquery.md).

## Topics

### Initializers

- [init(coder:)](mpmediapredicate/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMediaPropertyPredicate](mpmediapropertypredicate.md)

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
- [MPMediaPropertyPredicate](mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.

# MPMediaPredicate (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An abstract class that defines classes for filtering media in a media query.

## Declaration

```objectivec
@interface MPMediaPredicate : NSObject
```

<a id="overview"></a>

## Overview

In media queries, a *predicate* is a statement of a logical condition that you want to test each media item against. The system returns the media items that satisfy the condition in the query result. Use this class’s concrete subclass, described in [MPMediaPropertyPredicate](mpmediapropertypredicate.md), to define the filter in a media query to retrieve a subset of media items from the library. For more information about media queries, see [MPMediaQuery](mpmediaquery.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMediaPropertyPredicate](mpmediapropertypredicate.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media item queries

- [Using filters to create specialized queries](using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuery](mpmediaquery.md): A query that specifies a set of media items from the device’s media library using a filter and a grouping type.
- [MPMediaQuerySection](mpmediaquerysection.md): A range of media items or media item collections from within a media query.
- [MPMediaPropertyPredicate](mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.
