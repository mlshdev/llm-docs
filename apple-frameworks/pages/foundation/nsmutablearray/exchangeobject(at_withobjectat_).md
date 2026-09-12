> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/exchangeobject(at:withobjectat:)](https://developer.apple.com/documentation/foundation/nsmutablearray/exchangeobject(at:withobjectat:))

# exchangeObject(at:withObjectAt:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Exchanges the objects in the array at given indexes.

## Declaration

```swift
func exchangeObject(at idx1: Int, withObjectAt idx2: Int)
```

## Parameters

- `idx1`: The index of the object with which to replace the object at index `idx2`.
- `idx2`: The index of the object with which to replace the object at index `idx1`.

## See Also

### Rearranging Content

- [sort(using:)](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sort(comparator:)](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [Comparator](../comparator.md) block.
- [sort(options:usingComparator:)](sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [Comparator](../comparator.md) block.
- [sort(\_:context:)](sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.
- [sort(using:)](sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.

# exchangeObjectAtIndex:withObjectAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Exchanges the objects in the array at given indexes.

## Declaration

```objectivec
- (void) exchangeObjectAtIndex:(NSUInteger) idx1 withObjectAtIndex:(NSUInteger) idx2;
```

## Parameters

- `idx1`: The index of the object with which to replace the object at index `idx2`.
- `idx2`: The index of the object with which to replace the object at index `idx1`.

## See Also

### Rearranging Content

- [sortUsingDescriptors:](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sortUsingComparator:](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [NSComparator](../comparator.md) block.
- [sortWithOptions:usingComparator:](sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [NSComparator](../comparator.md) block.
- [sortUsingFunction:context:](sort%28__context_%29.md): Sorts the receiver in ascending order as defined by the comparison function `compare`.
- [sortUsingSelector:](sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.
