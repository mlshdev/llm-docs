> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/reverseobjectenumerator()](https://developer.apple.com/documentation/foundation/nsarray/reverseobjectenumerator())

# reverseObjectEnumerator() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each object in the array, in reverse order.

## Declaration

```swift
func reverseObjectEnumerator() -> NSEnumerator
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each object in the array, in order, from the element at the highest index down to the element at index `0`.

<a id="Discussion"></a>

## Discussion

When you use this method with mutable subclasses of `NSArray`, you must not modify the array during enumeration.

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)). Fast enumeration is available in macOS 10.5 and later and iOS 2.0 and later.

## See Also

### Related Documentation

- [nextObject()](../nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

### Querying an Array

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.

# reverseObjectEnumerator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an enumerator object that lets you access each object in the array, in reverse order.

## Declaration

```objectivec
- (NSEnumerator<id> *) reverseObjectEnumerator;
```

<a id="return-value"></a>

## Return Value

An enumerator object that lets you access each object in the array, in order, from the element at the highest index down to the element at index `0`.

<a id="Discussion"></a>

## Discussion

When you use this method with mutable subclasses of `NSArray`, you must not modify the array during enumeration.

It is more efficient to use the fast enumeration protocol (see [NSFastEnumeration](../nsfastenumeration.md)). Fast enumeration is available in macOS 10.5 and later and iOS 2.0 and later.

## See Also

### Related Documentation

- [nextObject](../nsenumerator/nextobject%28%29.md): Returns the next object from the collection being enumerated.

### Querying an Array

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [getObjects:](getobjects_.md): Deprecated. Copies all the objects contained in the array to `aBuffer`.
- [getObjects:range:](getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
