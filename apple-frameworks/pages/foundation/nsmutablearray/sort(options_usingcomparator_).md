> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/sort(options:usingcomparator:)](https://developer.apple.com/documentation/foundation/nsmutablearray/sort(options:usingcomparator:))

# sort(options:usingComparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [Comparator](../comparator.md) block.

## Declaration

```swift
func sort(options opts: NSSortOptions = [], usingComparator cmptr: (Any, Any) -> ComparisonResult)
```

## Parameters

- `opts`: A bitmask that specifies the options for the sort (whether it should be performed concurrently and whether it should be performed stably).
- `cmptr`: A comparator block.

## See Also

### Related Documentation

- [sortedArray(using:)](../nsarray/sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.

### Rearranging Content

- [exchangeObject(at:withObjectAt:)](exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sort(using:)](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sort(comparator:)](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [Comparator](../comparator.md) block.
- [sort(\_:context:)](sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.
- [sort(using:)](sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.

# sortWithOptions:usingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [NSComparator](../comparator.md) block.

## Declaration

```objectivec
- (void) sortWithOptions:(NSSortOptions) opts usingComparator:(NSComparator) cmptr;
```

## Parameters

- `opts`: A bitmask that specifies the options for the sort (whether it should be performed concurrently and whether it should be performed stably).
- `cmptr`: A comparator block.

## See Also

### Related Documentation

- [sortedArrayUsingDescriptors:](../nsarray/sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.

### Rearranging Content

- [exchangeObjectAtIndex:withObjectAtIndex:](exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sortUsingDescriptors:](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sortUsingComparator:](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [NSComparator](../comparator.md) block.
- [sortUsingFunction:context:](sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.
- [sortUsingSelector:](sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.
