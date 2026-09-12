> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/index(of:insortedrange:options:usingcomparator:)](https://developer.apple.com/documentation/foundation/nsorderedset/index(of:insortedrange:options:usingcomparator:))

# index(of:inSortedRange:options:usingComparator:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index, within a specified range, of an object compared with elements in the ordered set using a given NSComparator block.

## Declaration

```swift
func index(of object: Any, inSortedRange range: NSRange, options opts: NSBinarySearchingOptions = [], usingComparator cmp: (Any, Any) -> ComparisonResult) -> Int
```

## Parameters

- `object`: An object for which to search in the ordered set.

  If this value is `nil`, throws an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md).
- `range`: The range within the array to search for `object`.

  If r exceeds the bounds of the ordered set (if the location plus length of the range is greater than the count of the ordered set), throws an [rangeException](../nsexceptionname/rangeexception.md).
- `opts`: Options for the search. For possible values, see [NSBinarySearchingOptions](../nsbinarysearchingoptions.md).
- `cmp`: A comparator block used to compare the object obj with elements in the ordered set.

  If this value is `NULL`, throws an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md).

<a id="return-value"></a>

## Return Value

If the [insertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is not specified:

- If the `object` is found and neither [firstEqual](../nsbinarysearchingoptions/firstequal.md) nor [lastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns the matching object’s index.
- If the [firstEqual](../nsbinarysearchingoptions/firstequal.md) or [lastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the index of equal objects.
- If the object is not found, returns `NSNotFound`.

If the [insertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is specified, returns the index at which you should insert `obj` in order to maintain a sorted array:

- If the `object` is found and neither [firstEqual](../nsbinarysearchingoptions/firstequal.md) nor [lastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns the matching object’s index.
- If the [firstEqual](../nsbinarysearchingoptions/firstequal.md) or  [lastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the index of the equal objects.
- If the object is not found, returns the index of the least greater object, or the index at the end of the array if the object is larger than all other elements.

<a id="discussion"></a>

## Discussion

The elements in the ordered set  must have already been sorted using the comparator `cmp`. If the ordered set is not sorted, the result is undefined.

## See Also

### Accessing Set Members

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the ordered set.
- [enumerateObjects(at:options:using:)](enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the ordered set at the specified indexes.
- [enumerateObjects(\_:)](enumerateobjects%28__%29.md): Executes a given block using each object in the ordered set.
- [enumerateObjects(options:using:)](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [firstObject](firstobject.md): The first object in the ordered set.
- [lastObject](lastobject.md): The last object in the ordered set.
- [object(at:)](object%28at_%29.md): Returns the object at the specified index of the set.
- [subscript(\_:)](subscript%28__%29.md): Returns the object at the specified index of the set.
- [objects(at:)](objects%28at_%29.md): Returns the objects in the ordered set at the specified indexes.
- [index(of:)](index%28of_%29.md): Returns the index of the specified object.
- [index(ofObjectAt:options:passingTest:)](index%28ofobjectat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [index(ofObjectPassingTest:)](index%28ofobjectpassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [index(\_:ofObjectPassingTest:)](index%28__ofobjectpassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexes(ofObjectsAt:options:passingTest:)](indexes%28ofobjectsat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexes(ofObjectsPassingTest:)](indexes%28ofobjectspassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.

# indexOfObject:inSortedRange:options:usingComparator: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index, within a specified range, of an object compared with elements in the ordered set using a given NSComparator block.

## Declaration

```objectivec
- (NSUInteger) indexOfObject:(ObjectType) object inSortedRange:(NSRange) range options:(NSBinarySearchingOptions) opts usingComparator:(NSComparator) cmp;
```

## Parameters

- `object`: An object for which to search in the ordered set.

  If this value is `nil`, throws an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md).
- `range`: The range within the array to search for `object`.

  If r exceeds the bounds of the ordered set (if the location plus length of the range is greater than the count of the ordered set), throws an [NSRangeException](../nsexceptionname/rangeexception.md).
- `opts`: Options for the search. For possible values, see [NSBinarySearchingOptions](../nsbinarysearchingoptions.md).
- `cmp`: A comparator block used to compare the object obj with elements in the ordered set.

  If this value is `NULL`, throws an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md).

<a id="return-value"></a>

## Return Value

If the [NSBinarySearchingInsertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is not specified:

- If the `object` is found and neither [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) nor [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns the matching object’s index.
- If the [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) or [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the index of equal objects.
- If the object is not found, returns `NSNotFound`.

If the [NSBinarySearchingInsertionIndex](../nsbinarysearchingoptions/insertionindex.md) option is specified, returns the index at which you should insert `obj` in order to maintain a sorted array:

- If the `object` is found and neither [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) nor [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) is specified, returns the matching object’s index.
- If the [NSBinarySearchingFirstEqual](../nsbinarysearchingoptions/firstequal.md) or  [NSBinarySearchingLastEqual](../nsbinarysearchingoptions/lastequal.md) option is also specified, returns the index of the equal objects.
- If the object is not found, returns the index of the least greater object, or the index at the end of the array if the object is larger than all other elements.

<a id="discussion"></a>

## Discussion

The elements in the ordered set  must have already been sorted using the comparator `cmp`. If the ordered set is not sorted, the result is undefined.

## See Also

### Accessing Set Members

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the ordered set.
- [enumerateObjectsAtIndexes:options:usingBlock:](enumerateobjects%28at_options_using_%29.md): Executes a given block using the objects in the ordered set at the specified indexes.
- [enumerateObjectsUsingBlock:](enumerateobjects%28__%29.md): Executes a given block using each object in the ordered set.
- [enumerateObjectsWithOptions:usingBlock:](enumerateobjects%28options_using_%29.md): Executes a given block using each object in the set, using the specified enumeration options.
- [firstObject](firstobject.md): The first object in the ordered set.
- [lastObject](lastobject.md): The last object in the ordered set.
- [objectAtIndex:](object%28at_%29.md): Returns the object at the specified index of the set.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object at the specified index of the set.
- [objectsAtIndexes:](objects%28at_%29.md): Returns the objects in the ordered set at the specified indexes.
- [indexOfObject:](index%28of_%29.md): Returns the index of the specified object.
- [indexOfObjectAtIndexes:options:passingTest:](index%28ofobjectat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexOfObjectPassingTest:](index%28ofobjectpassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [indexOfObjectWithOptions:passingTest:](index%28__ofobjectpassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsAtIndexes:options:passingTest:](indexes%28ofobjectsat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsPassingTest:](indexes%28ofobjectspassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
