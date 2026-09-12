> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/indexesofobjects(passingtest:)](https://developer.apple.com/documentation/foundation/nsarray/indexesofobjects(passingtest:))

# indexesOfObjects(passingTest:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the indexes of objects in the array that pass a test in a given block.

## Declaration

```swift
func indexesOfObjects(passingTest predicate: (Any, Int, UnsafeMutablePointer<ObjCBool>) -> Bool) -> IndexSet
```

## Parameters

- `predicate`: The block to apply to elements in the array.

  The block takes three arguments:

  - **obj**: The element in the array.
  - **idx**: The index of the element in the array.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further enumeration of the array. If a block stops further enumeration, that block continues to run until it’s finished. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

  The block returns a Boolean value that indicates whether `obj` passed the test.

<a id="return-value"></a>

## Return Value

The indexes whose corresponding values in the array pass the test specified by `predicate`. If no objects in the array pass the test, returns an empty index set.

## See Also

### Finding Objects in an Array

- [index(of:)](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [index(of:in:)](index%28of_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectIdentical(to:)](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdentical(to:in:)](indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObject(passingTest:)](indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObject(options:passingTest:)](indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObject(at:options:passingTest:)](indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjects(options:passingTest:)](indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjects(at:options:passingTest:)](indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.
- [index(of:inSortedRange:options:usingComparator:)](index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.

# indexesOfObjectsPassingTest: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the indexes of objects in the array that pass a test in a given block.

## Declaration

```objectivec
- (NSIndexSet *) indexesOfObjectsPassingTest:(BOOL (^)(ObjectType obj, NSUInteger idx, BOOL *stop)) predicate;
```

## Parameters

- `predicate`: The block to apply to elements in the array.

  The block takes three arguments:

  - **obj**: The element in the array.
  - **idx**: The index of the element in the array.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further enumeration of the array. If a block stops further enumeration, that block continues to run until it’s finished. The `stop` argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

  The block returns a Boolean value that indicates whether `obj` passed the test.

<a id="return-value"></a>

## Return Value

The indexes whose corresponding values in the array pass the test specified by `predicate`. If no objects in the array pass the test, returns an empty index set.

## See Also

### Finding Objects in an Array

- [indexOfObject:](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [indexOfObject:inRange:](index%28of_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectIdenticalTo:](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdenticalTo:inRange:](indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectPassingTest:](indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObjectWithOptions:passingTest:](indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObjectAtIndexes:options:passingTest:](indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsWithOptions:passingTest:](indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjectsAtIndexes:options:passingTest:](indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexOfObject:inSortedRange:options:usingComparator:](index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.
