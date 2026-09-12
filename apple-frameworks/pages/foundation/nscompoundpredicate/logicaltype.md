> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscompoundpredicate/logicaltype](https://developer.apple.com/documentation/foundation/nscompoundpredicate/logicaltype)

# NSCompoundPredicate.LogicalType (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe the possible types of a compound predicate.

## Declaration

```swift
enum LogicalType
```

## Topics

### Constants

- [NSCompoundPredicate.LogicalType.not](logicaltype/not.md): A logical NOT predicate.
- [NSCompoundPredicate.LogicalType.and](logicaltype/and.md): A logical AND predicate.
- [NSCompoundPredicate.LogicalType.or](logicaltype/or.md): A logical OR predicate.

### Initializers

- [init(rawValue:)](logicaltype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Information About a Compound Predicate

- [compoundPredicateType](compoundpredicatetype.md): The predicate type for the receiver.
- [subpredicates](subpredicates.md): The receiver’s subpredicates.

# NSCompoundPredicateType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that describe the possible types of a compound predicate.

## Declaration

```objectivec
enum NSCompoundPredicateType : NSUInteger;
```

## Topics

### Constants

- [NSNotPredicateType](logicaltype/not.md): A logical NOT predicate.
- [NSAndPredicateType](logicaltype/and.md): A logical AND predicate.
- [NSOrPredicateType](logicaltype/or.md): A logical OR predicate.

## See Also

### Getting Information About a Compound Predicate

- [compoundPredicateType](compoundpredicatetype.md): The predicate type for the receiver.
- [subpredicates](subpredicates.md): The receiver’s subpredicates.
