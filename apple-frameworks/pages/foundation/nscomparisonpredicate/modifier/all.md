> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/modifier/all](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier/all)

# NSComparisonPredicate.Modifier.all (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate to compare all entries in the destination of a to-many relationship.

## Declaration

```swift
case all
```

<a id="Discussion"></a>

## Discussion

The left hand side must be a collection. The corresponding predicate compares each value in the left hand side with the right hand side, and returns [false](https://developer.apple.com/documentation/swift/false) when it finds the first mismatch—or [true](https://developer.apple.com/documentation/swift/true) if all match.

## See Also

### Constants

- [NSComparisonPredicate.Modifier.direct](direct.md): A predicate to compare directly the left and right hand sides.
- [NSComparisonPredicate.Modifier.any](any.md): A predicate to match with any entry in the destination of a to-many relationship.

# NSAllPredicateModifier (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate to compare all entries in the destination of a to-many relationship.

## Declaration

```objectivec
NSAllPredicateModifier
```

<a id="Discussion"></a>

## Discussion

The left hand side must be a collection. The corresponding predicate compares each value in the left hand side with the right hand side, and returns [false](https://developer.apple.com/documentation/swift/false) when it finds the first mismatch—or [true](https://developer.apple.com/documentation/swift/true) if all match.

## See Also

### Constants

- [NSDirectPredicateModifier](direct.md): A predicate to compare directly the left and right hand sides.
- [NSAnyPredicateModifier](any.md): A predicate to match with any entry in the destination of a to-many relationship.
