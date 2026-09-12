> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/sort(using:)-537vs](https://developer.apple.com/documentation/foundation/nsmutablearray/sort(using:)-537vs)

# sort(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.

## Declaration

```swift
func sort(using comparator: Selector)
```

## Parameters

- `comparator`: A selector that specifies the comparison method to use to compare elements in the array.

  The `comparator` message is sent to each object in the array and has as its single argument another object in the array. The `comparator` method should return `NSOrderedAscending` if the array is smaller than the argument, `NSOrderedDescending` if the array is larger than the argument, and `NSOrderedSame` if they are equal.

## See Also

### Related Documentation

- [sortedArray(using:)](../nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.

### Rearranging Content

- [exchangeObject(at:withObjectAt:)](exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sort(using:)](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sort(comparator:)](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [Comparator](../comparator.md) block.
- [sort(options:usingComparator:)](sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [Comparator](../comparator.md) block.
- [sort(\_:context:)](sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.

# sortUsingSelector: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.

## Declaration

```objectivec
- (void) sortUsingSelector:(SEL) comparator;
```

## Parameters

- `comparator`: A selector that specifies the comparison method to use to compare elements in the array.

  The `comparator` message is sent to each object in the array and has as its single argument another object in the array. The `comparator` method should return `NSOrderedAscending` if the array is smaller than the argument, `NSOrderedDescending` if the array is larger than the argument, and `NSOrderedSame` if they are equal.

## See Also

### Related Documentation

- [sortedArrayUsingSelector:](../nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.

### Rearranging Content

- [exchangeObjectAtIndex:withObjectAtIndex:](exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sortUsingDescriptors:](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sortUsingComparator:](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [NSComparator](../comparator.md) block.
- [sortWithOptions:usingComparator:](sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [NSComparator](../comparator.md) block.
- [sortUsingFunction:context:](sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.
