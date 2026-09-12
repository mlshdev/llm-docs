> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/contains(_:)](https://developer.apple.com/documentation/foundation/nsarray/contains(_:))

# contains(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given object is present in the array.

## Declaration

```swift
func contains(_ anObject: Any) -> Bool
```

## Parameters

- `anObject`: An object to look for in the array.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `anObject` is present in the array, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Starting at index `0`, each element of the array is checked for equality with `anObject` until a match is found or the end of the array is reached.  Objects are considered equal if [isEqual(\_:)](../../objectivec/nsobjectprotocol/isequal%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

To determine if the array contains a particular instance of an object, you can test for identity rather than equality by calling the [indexOfObjectIdentical(to:)](indexofobjectidentical%28to_%29.md) method and comparing the return value to [NSNotFound](../nsnotfound-9t5v2.md).

## See Also

### Related Documentation

- [indexOfObjectIdentical(to:)](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [index(of:)](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.

### Querying an Array

- [count](count.md): The number of objects in the array.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator()](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.

# containsObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given object is present in the array.

## Declaration

```objectivec
- (BOOL) containsObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: An object to look for in the array.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `anObject` is present in the array, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Starting at index `0`, each element of the array is checked for equality with `anObject` until a match is found or the end of the array is reached.  Objects are considered equal if [isEqual:](../../objectivec/nsobjectprotocol/isequal%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true).

To determine if the array contains a particular instance of an object, you can test for identity rather than equality by calling the [indexOfObjectIdenticalTo:](indexofobjectidentical%28to_%29.md) method and comparing the return value to [NSNotFound](../nsnotfound-9t5v2.md).

## See Also

### Related Documentation

- [indexOfObjectIdenticalTo:](indexofobjectidentical%28to_%29.md): Returns the lowest index whose corresponding array value is identical to a given object.
- [indexOfObject:](index%28of_%29.md): Returns the lowest index whose corresponding array value is equal to a given object.

### Querying an Array

- [count](count.md): The number of objects in the array.
- [getObjects:](getobjects_.md): Deprecated. Copies all the objects contained in the array to `aBuffer`.
- [getObjects:range:](getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.
