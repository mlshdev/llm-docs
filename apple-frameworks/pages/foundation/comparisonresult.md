> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/comparisonresult](https://developer.apple.com/documentation/foundation/comparisonresult)

# ComparisonResult (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate sort order.

## Declaration

```swift
@frozen enum ComparisonResult
```

<a id="overview"></a>

## Overview

These constants are used to indicate how items in a request are ordered, from the first one given in a method invocation or function call to the last (that is, left to right in code).

## Topics

### Creating a comparison result

- [init(rawValue:)](comparisonresult/init%28rawvalue_%29.md)

### Constants

- [ComparisonResult.orderedAscending](comparisonresult/orderedascending.md): The left operand is smaller than the right operand.
- [ComparisonResult.orderedSame](comparisonresult/orderedsame.md): The two operands are equal.
- [ComparisonResult.orderedDescending](comparisonresult/ordereddescending.md): The left operand is greater than the right operand.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sorting

- [NSSortDescriptor](nssortdescriptor.md): An immutable description of how to order a collection of objects according to a property common to all the objects.
- [SortDescriptor](sortdescriptor.md): A serializable description of how to sort numerics and strings.
- [SortComparator](sortcomparator.md): A comparison algorithm for a specified type.
- [ComparableComparator](comparablecomparator.md): A comparator that compares types according to their conformance to the comparable protocol.
- [KeyPathComparator](keypathcomparator.md): A comparator that uses another sort comparator to provide the comparison of values at a key path.
- [SortOrder](sortorder.md): The orderings that you can perform sorts with.

# NSComparisonResult (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate sort order.

## Declaration

```objectivec
enum NSComparisonResult : NSInteger;
```

<a id="overview"></a>

## Overview

These constants are used to indicate how items in a request are ordered, from the first one given in a method invocation or function call to the last (that is, left to right in code).

## Topics

### Constants

- [NSOrderedAscending](comparisonresult/orderedascending.md): The left operand is smaller than the right operand.
- [NSOrderedSame](comparisonresult/orderedsame.md): The two operands are equal.
- [NSOrderedDescending](comparisonresult/ordereddescending.md): The left operand is greater than the right operand.

## See Also

### Sorting

- [NSSortDescriptor](nssortdescriptor.md): An immutable description of how to order a collection of objects according to a property common to all the objects.
