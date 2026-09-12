> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequestexpression](https://developer.apple.com/documentation/coredata/nsfetchrequestexpression)

# NSFetchRequestExpression (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An expression that evaluates the result of a fetch request on a managed object context.

## Declaration

```swift
class NSFetchRequestExpression
```

<a id="overview"></a>

## Overview

`NSFetchRequestExpression` inherits from [NSExpression](../foundation/nsexpression.md), which provides most of the basic behavior. The first argument must be an expression which evaluates to an `NSFetchRequest` object, and the second must be an expression which evaluates to an `NSManagedObjectContext` object. If you simply want the count for the request, the `countOnly` argument should be [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating a Fetch Request Expression

- [expression(forFetch:context:countOnly:)](nsfetchrequestexpression/expression%28forfetch_context_countonly_%29.md): Returns an expression which will evaluate to the result of executing a fetch request on a context.

### Examining a Fetch Request Expression

- [requestExpression](nsfetchrequestexpression/requestexpression.md): The expression for the receiver’s fetch request.
- [contextExpression](nsfetchrequestexpression/contextexpression.md): The expression for the receiver’s managed object context.
- [isCountOnlyRequest](nsfetchrequestexpression/iscountonlyrequest.md): Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.

### Constants

- [NSFetchRequestExpressionType](nsfetchrequestexpressiontype.md): This constant specifies the fetch request expression type.

## Relationships

### Inherits From

- [NSExpression](../foundation/nsexpression.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying Fetch Constraints

- [predicate](nsfetchrequest/predicate.md): The predicate of the fetch request.
- [fetchLimit](nsfetchrequest/fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](nsfetchrequest/fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](nsfetchrequest/fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](nsfetchrequest/affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSExpressionDescription](nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.

# NSFetchRequestExpression (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An expression that evaluates the result of a fetch request on a managed object context.

## Declaration

```objectivec
@interface NSFetchRequestExpression : NSExpression
```

<a id="overview"></a>

## Overview

`NSFetchRequestExpression` inherits from [NSExpression](../foundation/nsexpression.md), which provides most of the basic behavior. The first argument must be an expression which evaluates to an `NSFetchRequest` object, and the second must be an expression which evaluates to an `NSManagedObjectContext` object. If you simply want the count for the request, the `countOnly` argument should be [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Creating a Fetch Request Expression

- [expressionForFetch:context:countOnly:](nsfetchrequestexpression/expression%28forfetch_context_countonly_%29.md): Returns an expression which will evaluate to the result of executing a fetch request on a context.

### Examining a Fetch Request Expression

- [requestExpression](nsfetchrequestexpression/requestexpression.md): The expression for the receiver’s fetch request.
- [contextExpression](nsfetchrequestexpression/contextexpression.md): The expression for the receiver’s managed object context.
- [countOnlyRequest](nsfetchrequestexpression/iscountonlyrequest.md): Returns a Boolean value that indicates whether the receiver represents a count-only fetch request.

### Constants

- [NSFetchRequestExpressionType](nsfetchrequestexpressiontype.md): This constant specifies the fetch request expression type.

## Relationships

### Inherits From

- [NSExpression](../foundation/nsexpression.md)

## See Also

### Specifying Fetch Constraints

- [predicate](nsfetchrequest/predicate.md): The predicate of the fetch request.
- [fetchLimit](nsfetchrequest/fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](nsfetchrequest/fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](nsfetchrequest/fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](nsfetchrequest/affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSExpressionDescription](nsexpressiondescription.md): An object that describes an expression to include with a fetch request.
- [NSFetchedPropertyDescription](nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.
