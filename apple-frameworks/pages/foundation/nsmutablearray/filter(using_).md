> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/filter(using:)](https://developer.apple.com/documentation/foundation/nsmutablearray/filter(using:))

# filter(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against the array’s content and leaves only objects that match.

## Declaration

```swift
func filter(using predicate: NSPredicate)
```

## Parameters

- `predicate`: The predicate to evaluate against the array’s elements.

## See Also

### Related Documentation

- [filtered(using:)](../nsarray/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.

# filterUsingPredicate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against the array’s content and leaves only objects that match.

## Declaration

```objectivec
- (void) filterUsingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: The predicate to evaluate against the array’s elements.

## See Also

### Related Documentation

- [filteredArrayUsingPredicate:](../nsarray/filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
