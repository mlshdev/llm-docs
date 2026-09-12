> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/sort(_:context:)](https://developer.apple.com/documentation/foundation/nsmutablearray/sort(_:context:))

# sort(\_:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiver in ascending order as defined by the comparison function `compare`.

## Declaration

```swift
func sort(_ compare: (Any, Any, UnsafeMutableRawPointer?) -> Int, context: UnsafeMutableRawPointer?)
```

## Parameters

- `compare`: The comparison function to use to compare two elements at a time.

  The function’s parameters are two objects to compare and the context parameter, `context`. The function should return `NSOrderedAscending` if the first element is smaller than the second, `NSOrderedDescending` if the first element is larger than the second, and `NSOrderedSame` if the elements are equal.
- `context`: The context argument to be passed to the compare function.

<a id="Discussion"></a>

## Discussion

This approach allows the comparison to be based on some outside parameter, such as whether character sorting is case sensitive or case insensitive.

## See Also

### Related Documentation

- [sortedArray(\_:context:)](../nsarray/sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.

### Rearranging Content

- [exchangeObject(at:withObjectAt:)](exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sort(using:)](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sort(comparator:)](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [Comparator](../comparator.md) block.
- [sort(options:usingComparator:)](sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [Comparator](../comparator.md) block.
- [sort(using:)](sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.

# sortUsingFunction:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sorts the receiver in ascending order as defined by the comparison function `compare`.

## Declaration

```objectivec
- (void) sortUsingFunction:(long (*)(id, id, void *)) compare context:(void *) context;
```

## Parameters

- `compare`: The comparison function to use to compare two elements at a time.

  The function’s parameters are two objects to compare and the context parameter, `context`. The function should return `NSOrderedAscending` if the first element is smaller than the second, `NSOrderedDescending` if the first element is larger than the second, and `NSOrderedSame` if the elements are equal.
- `context`: The context argument to be passed to the compare function.

<a id="Discussion"></a>

## Discussion

This approach allows the comparison to be based on some outside parameter, such as whether character sorting is case sensitive or case insensitive.

## See Also

### Related Documentation

- [sortedArrayUsingFunction:context:](../nsarray/sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.

### Rearranging Content

- [exchangeObjectAtIndex:withObjectAtIndex:](exchangeobject%28at_withobjectat_%29.md): Exchanges the objects in the array at given indexes.
- [sortUsingDescriptors:](sort%28using_%29-4eh07.md): Sorts the receiver using a given array of sort descriptors.
- [sortUsingComparator:](sort%28comparator_%29.md): Sorts the receiver in ascending order using the comparison method specified by a given [NSComparator](../comparator.md) block.
- [sortWithOptions:usingComparator:](sort%28options_usingcomparator_%29.md): Sorts the receiver in ascending order using the specified options and the comparison method specified by a given [NSComparator](../comparator.md) block.
- [sortUsingSelector:](sort%28using_%29-537vs.md): Sorts the receiver in ascending order, as determined by the comparison method specified by a given selector.
