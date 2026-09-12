> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsexpressiondescription](https://developer.apple.com/documentation/coredata/nsexpressiondescription)

# NSExpressionDescription (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that describes an expression to include with a fetch request.

## Declaration

```swift
class NSExpressionDescription
```

<a id="overview"></a>

## Overview

An expression description describes a value that a fetch request returns, which doesn’t appear as an attribute or relationship on an entity. For example, expressions can aggregate data, or  transform an attribute’s value. You add expression descriptions to a fetch request using the [propertiesToFetch](nsfetchrequest/propertiestofetch.md) method.

> **Important**

>  Don’t add expression descriptions to the [properties](nsentitydescription/properties.md) array of [NSEntityDescription](nsentitydescription.md).

## Topics

### Configuring the Expression Description

- [expression](nsexpressiondescription/expression.md): The expression to evaluate.
- [resultType](nsexpressiondescription/resulttype.md): The attribute type of the expression’s result.
- [expressionResultType](nsexpressiondescription/expressionresulttype.md): Deprecated. The attribute type of the expression’s result.

### Deprecated

- [Deprecated Symbols](nsexpressiondescription-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSPropertyDescription](nspropertydescription.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Specifying Fetch Constraints

- [predicate](nsfetchrequest/predicate.md): The predicate of the fetch request.
- [fetchLimit](nsfetchrequest/fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](nsfetchrequest/fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](nsfetchrequest/fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](nsfetchrequest/affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSFetchedPropertyDescription](nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.

# NSExpressionDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An object that describes an expression to include with a fetch request.

## Declaration

```objectivec
@interface NSExpressionDescription : NSPropertyDescription
```

<a id="overview"></a>

## Overview

An expression description describes a value that a fetch request returns, which doesn’t appear as an attribute or relationship on an entity. For example, expressions can aggregate data, or  transform an attribute’s value. You add expression descriptions to a fetch request using the [propertiesToFetch](nsfetchrequest/propertiestofetch.md) method.

> **Important**

>  Don’t add expression descriptions to the [properties](nsentitydescription/properties.md) array of [NSEntityDescription](nsentitydescription.md).

## Topics

### Configuring the Expression Description

- [expression](nsexpressiondescription/expression.md): The expression to evaluate.
- [expressionResultType](nsexpressiondescription/expressionresulttype.md): Deprecated. The attribute type of the expression’s result.

### Deprecated

- [Deprecated Symbols](nsexpressiondescription-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSPropertyDescription](nspropertydescription.md)

## See Also

### Specifying Fetch Constraints

- [predicate](nsfetchrequest/predicate.md): The predicate of the fetch request.
- [fetchLimit](nsfetchrequest/fetchlimit.md): The fetch limit of the fetch request.
- [fetchOffset](nsfetchrequest/fetchoffset.md): The fetch offset of the fetch request.
- [fetchBatchSize](nsfetchrequest/fetchbatchsize.md): The batch size of the objects specified in the fetch request.
- [affectedStores](nsfetchrequest/affectedstores.md): An array of persistent stores specified for the fetch request.
- [NSFetchRequestExpression](nsfetchrequestexpression.md): An expression that evaluates the result of a fetch request on a managed object context.
- [NSFetchedPropertyDescription](nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.
