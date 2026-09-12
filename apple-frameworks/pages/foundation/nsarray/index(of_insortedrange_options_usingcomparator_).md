> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/index(of:insortedrange:options:usingcomparator:)](https://developer.apple.com/documentation/foundation/nsarray/index(of:insortedrange:options:usingcomparator:))

# index(of:inSortedRange:options:usingComparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.

## Declaration

```swift
func index(of obj: Any, inSortedRange r: NSRange, options opts: NSBinarySearchingOptions = [], usingComparator cmp: (Any, Any) -> ComparisonResult) -> Int
```

## Parameters

- `obj`: An object for which to search in the array.

  If this value is `nil`, throws an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md).
- `r`: The range within the array to search for `obj`.

  If `r` exceeds the bounds of the array (if the location plus length of the range is greater than the count of the array), throws an [rangeException](../nsexceptionname/rangeexception.md).
- `opts`: Options for the search. For possible values, see [NSBinarySearchingOptions](../nsbinarysearchingoptions.md).

  If you specify both [firstEqual](../nsbinarysearchingoptions/firstequal.md) and [lastEqual](../nsbinarysearchingoptions/lastequal.md), throws an `NSInvalidArgumentException`.
- `cmp`: A comparator block used to compare the object `obj` with elements in the array.

  If this value is `NULL`, throws an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md).

<a id="return-value"></a>

## Return Value

If the [insertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is not specified:

- If the `obj` is found and neither [firstEqual](../nsbinarysearchingoptions/firstequal.md) nor [lastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns an arbitrary matching object’s index.
- If the [firstEqual](../nsbinarysearchingoptions/firstequal.md) option is also specified, returns the lowest index of equal objects.
- If the [lastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the highest index of equal objects.
- If the object is not found, returns `NSNotFound`.

If the [insertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is specified, returns the index at which you should insert `obj` in order to maintain a sorted array:

- If the `obj` is found and neither [firstEqual](../nsbinarysearchingoptions/firstequal.md) nor [lastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns any equal or one larger index than any matching object’s index.
- If the [firstEqual](../nsbinarysearchingoptions/firstequal.md) option is also specified, returns the lowest index of equal objects.
- If the [lastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the highest index of equal objects.
- If the object is not found, returns the index of the least greater object, or the index at the end of the array if the object is larger than all other elements.

<a id="discussion"></a>

## Discussion

The elements in the array must have already been sorted using the comparator `cmp`.  If the array is not sorted, the result is undefined.

## See Also

### Finding Objects in an Array

- [index(of:)](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [index(of:in:)](index%28of_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectIdentical(to:)](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdentical(to:in:)](indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObject(passingTest:)](indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObject(options:passingTest:)](indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObject(at:options:passingTest:)](indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjects(passingTest:)](indexesofobjects%28passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block.
- [indexesOfObjects(options:passingTest:)](indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjects(at:options:passingTest:)](indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.

# indexOfObject:inSortedRange:options:usingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.

## Declaration

```objectivec
- (NSUInteger) indexOfObject:(ObjectType) obj inSortedRange:(NSRange) r options:(NSBinarySearchingOptions) opts usingComparator:(NSComparator) cmp;
```

## Parameters

- `obj`: An object for which to search in the array.

  If this value is `nil`, throws an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md).
- `r`: The range within the array to search for `obj`.

  If `r` exceeds the bounds of the array (if the location plus length of the range is greater than the count of the array), throws an [NSRangeException](../nsexceptionname/rangeexception.md).
- `opts`: Options for the search. For possible values, see [NSBinarySearchingOptions](../nsbinarysearchingoptions.md).

  If you specify both [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) and [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md), throws an `NSInvalidArgumentException`.
- `cmp`: A comparator block used to compare the object `obj` with elements in the array.

  If this value is `NULL`, throws an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md).

<a id="return-value"></a>

## Return Value

If the [NSBinarySearchingInsertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is not specified:

- If the `obj` is found and neither [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) nor [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns an arbitrary matching object’s index.
- If the [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) option is also specified, returns the lowest index of equal objects.
- If the [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the highest index of equal objects.
- If the object is not found, returns `NSNotFound`.

If the [NSBinarySearchingInsertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is specified, returns the index at which you should insert `obj` in order to maintain a sorted array:

- If the `obj` is found and neither [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) nor [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns any equal or one larger index than any matching object’s index.
- If the [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) option is also specified, returns the lowest index of equal objects.
- If the [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the highest index of equal objects.
- If the object is not found, returns the index of the least greater object, or the index at the end of the array if the object is larger than all other elements.

<a id="discussion"></a>

## Discussion

The elements in the array must have already been sorted using the comparator `cmp`.  If the array is not sorted, the result is undefined.

## See Also

### Finding Objects in an Array

- [indexOfObject:](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [indexOfObject:inRange:](index%28of_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectIdenticalTo:](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdenticalTo:inRange:](indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectPassingTest:](indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObjectWithOptions:passingTest:](indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObjectAtIndexes:options:passingTest:](indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsPassingTest:](indexesofobjects%28passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block.
- [indexesOfObjectsWithOptions:passingTest:](indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjectsAtIndexes:options:passingTest:](indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.
