> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/objects(at:)](https://developer.apple.com/documentation/foundation/nsarray/objects(at:))

# objects(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the objects in the array at the indexes specified by a given index set.

## Declaration

```swift
func objects(at indexes: IndexSet) -> [Any]
```

<a id="return-value"></a>

## Return Value

An array containing the objects in the array at the indexes specified by `indexes`.

<a id="Discussion"></a>

## Discussion

The returned objects are in the ascending order of their indexes in `indexes`, so that object in returned array with higher index in indexes will follow the object with smaller index in `indexes`.

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any location in `indexes` exceeds the bounds of the array, `indexes` is `nil`.

## See Also

### Querying an Array

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object at the specified index.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator()](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.

# objectsAtIndexes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the objects in the array at the indexes specified by a given index set.

## Declaration

```objectivec
- (NSArray<id> *) objectsAtIndexes:(NSIndexSet *) indexes;
```

<a id="return-value"></a>

## Return Value

An array containing the objects in the array at the indexes specified by `indexes`.

<a id="Discussion"></a>

## Discussion

The returned objects are in the ascending order of their indexes in `indexes`, so that object in returned array with higher index in indexes will follow the object with smaller index in `indexes`.

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any location in `indexes` exceeds the bounds of the array, `indexes` is `nil`.

## See Also

### Querying an Array

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [getObjects:](getobjects_.md): Deprecated. Copies all the objects contained in the array to `aBuffer`.
- [getObjects:range:](getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object at the specified index.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.
