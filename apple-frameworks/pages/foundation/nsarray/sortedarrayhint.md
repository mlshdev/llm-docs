> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/sortedarrayhint](https://developer.apple.com/documentation/foundation/nsarray/sortedarrayhint)

# sortedArrayHint (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArray(\_:context:hint:)](sortedarray%28__context_hint_%29.md).

## Declaration

```swift
var sortedArrayHint: Data { get }
```

## See Also

### Sorting

- [sortedArray(\_:context:)](sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(\_:context:hint:)](sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(using:)](sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArray(using:)](sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.
- [sortedArray(comparator:)](sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArray(options:usingComparator:)](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [Comparator](../comparator.md): Defines the signature for a block object used for comparison operations.

# sortedArrayHint (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArrayUsingFunction:context:hint:](sortedarray%28__context_hint_%29.md).

## Declaration

```objectivec
@property (copy, readonly) NSData * sortedArrayHint;
```

## See Also

### Sorting

- [sortedArrayUsingFunction:context:](sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingFunction:context:hint:](sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingDescriptors:](sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArrayUsingSelector:](sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.
- [sortedArrayUsingComparator:](sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArrayWithOptions:usingComparator:](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [NSComparator](../comparator.md): Defines the signature for a block object used for comparison operations.
