> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/index(of:in:)](https://developer.apple.com/documentation/foundation/nsarray/index(of:in:))

# index(of:in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the lowest index within a specified range whose corresponding array value is equal to a given object .

## Declaration

```swift
func index(of anObject: Any, in range: NSRange) -> Int
```

## Parameters

- `anObject`: An object.
- `range`: The range of indexes in the array within which to search for `anObject`.

<a id="return-value"></a>

## Return Value

The lowest index within `range` whose corresponding array value is equal to `anObject`. If none of the objects within `range` is equal to `anObject`, returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

Starting at `range.location`, each element of the array is passed as an argument to an [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) message sent to `anObject` until a match is found or the end of the `range` is reached. Objects are considered equal if [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

This method raises an [rangeException](../nsexceptionname/rangeexception.md) exception if the `range` parameter represents a range that doesn’t exist in the array.

## See Also

### Related Documentation

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.

### Finding Objects in an Array

- [index(of:)](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [indexOfObjectIdentical(to:)](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdentical(to:in:)](indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObject(passingTest:)](indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObject(options:passingTest:)](indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObject(at:options:passingTest:)](indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjects(passingTest:)](indexesofobjects%28passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block.
- [indexesOfObjects(options:passingTest:)](indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjects(at:options:passingTest:)](indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.
- [index(of:inSortedRange:options:usingComparator:)](index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.

# indexOfObject:inRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the lowest index within a specified range whose corresponding array value is equal to a given object .

## Declaration

```objectivec
- (NSUInteger) indexOfObject:(ObjectType) anObject inRange:(NSRange) range;
```

## Parameters

- `anObject`: An object.
- `range`: The range of indexes in the array within which to search for `anObject`.

<a id="return-value"></a>

## Return Value

The lowest index within `range` whose corresponding array value is equal to `anObject`. If none of the objects within `range` is equal to `anObject`, returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

Starting at `range.location`, each element of the array is passed as an argument to an [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) message sent to `anObject` until a match is found or the end of the `range` is reached. Objects are considered equal if [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

This method raises an [NSRangeException](../nsexceptionname/rangeexception.md) exception if the `range` parameter represents a range that doesn’t exist in the array.

## See Also

### Related Documentation

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.

### Finding Objects in an Array

- [indexOfObject:](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.
- [indexOfObjectIdenticalTo:](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObjectIdenticalTo:inRange:](indexofobjectidentical%28to_in_%29.md): Returns the lowest index within a specified range whose corresponding array value is equal to a given object .
- [indexOfObjectPassingTest:](indexofobject%28passingtest_%29.md): Returns the index of the first object in the array that passes a test in a given block.
- [indexOfObjectWithOptions:passingTest:](indexofobject%28options_passingtest_%29.md): Returns the index of an object in the array that passes a test in a given block for a given set of enumeration options.
- [indexOfObjectAtIndexes:options:passingTest:](indexofobject%28at_options_passingtest_%29.md): Returns the index, from a given set of indexes, of the first object in the array that passes a test in a given block for a given set of enumeration options.
- [indexesOfObjectsPassingTest:](indexesofobjects%28passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block.
- [indexesOfObjectsWithOptions:passingTest:](indexesofobjects%28options_passingtest_%29.md): Returns the indexes of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexesOfObjectsAtIndexes:options:passingTest:](indexesofobjects%28at_options_passingtest_%29.md): Returns the indexes, from a given set of indexes, of objects in the array that pass a test in a given block for a given set of enumeration options.
- [indexOfObject:inSortedRange:options:usingComparator:](index%28of_insortedrange_options_usingcomparator_%29.md): Returns the index, within a specified range, of an object compared with elements in the array using a given `NSComparator` block.
