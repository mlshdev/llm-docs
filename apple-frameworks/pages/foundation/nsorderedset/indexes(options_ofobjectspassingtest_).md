> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsorderedset/indexes(options:ofobjectspassingtest:)](https://developer.apple.com/documentation/foundation/nsorderedset/indexes(options:ofobjectspassingtest:))

# indexes(options:ofObjectsPassingTest:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.

## Declaration

```swift
func indexes(options opts: NSEnumerationOptions = [], ofObjectsPassingTest predicate: (Any, Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> IndexSet
```

## Parameters

- `opts`: A bitmask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order).
- `predicate`: The block to apply to elements in the ordered set.

  The block takes three arguments:

  - **obj**: The element in the ordered set.
  - **Term**: The index of the element in the ordered set.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this value to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="return-value"></a>

## Return Value

The index whose corresponding value in the ordered set passes the test specified by `predicate` and `opts`. If the `opts` bitmask specifies reverse order, then the last item that matches is returned. Otherwise, the index of the first matching object is returned. If no objects in the ordered set pass the test, returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

By default, the enumeration starts with the first object and continues serially through the ordered set to the last object. You can specify [concurrent](../nsenumerationoptions/concurrent.md) and/or [reverse](../nsenumerationoptions/reverse.md) as enumeration options to modify this behavior.

> **Important**

>  If the block parameter or `s` is `nil`, this method raises an exception.

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
- [index(of:inSortedRange:options:usingComparator:)](index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the ordered set using a given NSComparator block.
- [index(ofObjectAt:options:passingTest:)](index%28ofobjectat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [index(ofObjectPassingTest:)](index%28ofobjectpassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [index(\_:ofObjectPassingTest:)](index%28__ofobjectpassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexes(ofObjectsAt:options:passingTest:)](indexes%28ofobjectsat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.

# indexesOfObjectsWithOptions:passingTest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.

## Declaration

```objectivec
- (NSIndexSet *) indexesOfObjectsWithOptions:(NSEnumerationOptions) opts passingTest:(BOOL (^)(ObjectType obj, NSUInteger idx, BOOL *stop)) predicate;
```

## Parameters

- `opts`: A bitmask that specifies the options for the enumeration (whether it should be performed concurrently and whether it should be performed in reverse order).
- `predicate`: The block to apply to elements in the ordered set.

  The block takes three arguments:

  - **obj**: The element in the ordered set.
  - **Term**: The index of the element in the ordered set.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the set. The `stop` argument is an out-only argument. You should only ever set this value to [true](https://developer.apple.com/documentation/swift/true) within the block.

<a id="return-value"></a>

## Return Value

The index whose corresponding value in the ordered set passes the test specified by `predicate` and `opts`. If the `opts` bitmask specifies reverse order, then the last item that matches is returned. Otherwise, the index of the first matching object is returned. If no objects in the ordered set pass the test, returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

By default, the enumeration starts with the first object and continues serially through the ordered set to the last object. You can specify [NSEnumerationConcurrent](../nsenumerationoptions/concurrent.md) and/or [NSEnumerationReverse](../nsenumerationoptions/reverse.md) as enumeration options to modify this behavior.

> **Important**

>  If the block parameter or `s` is `nil`, this method raises an exception.

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
- [indexOfObject:inSortedRange:options:usingComparator:](index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the ordered set using a given NSComparator block.
- [indexOfObjectAtIndexes:options:passingTest:](index%28ofobjectat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexOfObjectPassingTest:](index%28ofobjectpassingtest_%29.md): Returns the index of the object in the ordered set that passes a test in a given block.
- [indexOfObjectWithOptions:passingTest:](index%28__ofobjectpassingtest_%29.md): Returns the index of an object in the ordered set that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsAtIndexes:options:passingTest:](indexes%28ofobjectsat_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the object in the ordered set that passes a test in a given block for a given set of enumeration options.
