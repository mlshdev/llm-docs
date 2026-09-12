> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/filtered(using:)](https://developer.apple.com/documentation/foundation/nsorderedset/filtered(using:))

# filtered(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against each object in the receiving ordered set and returns a new ordered set containing the objects for which the predicate returns true.

## Declaration

```swift
func filtered(using p: NSPredicate) -> NSOrderedSet
```

## Parameters

- `p`: The predicate against which to evaluate the receiving ordered set’s elements.

<a id="return-value"></a>

## Return Value

A new ordered set containing the objects in the receiving ordered set for which `p` returns true.

<a id="Discussion"></a>

## Discussion

For more details, see [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).

# filteredOrderedSetUsingPredicate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates a given predicate against each object in the receiving ordered set and returns a new ordered set containing the objects for which the predicate returns true.

## Declaration

```objectivec
- (NSOrderedSet<id> *) filteredOrderedSetUsingPredicate:(NSPredicate *) p;
```

## Parameters

- `p`: The predicate against which to evaluate the receiving ordered set’s elements.

<a id="return-value"></a>

## Return Value

A new ordered set containing the objects in the receiving ordered set for which `p` returns true.

<a id="Discussion"></a>

## Discussion

For more details, see [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789).
