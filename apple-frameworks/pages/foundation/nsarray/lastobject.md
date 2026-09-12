> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/lastobject](https://developer.apple.com/documentation/foundation/nsarray/lastobject)

# lastObject (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The last object in the array.

## Declaration

```swift
var lastObject: Any? { get }
```

<a id="Discussion"></a>

## Discussion

If the array is empty, returns `nil`.

## See Also

### Related Documentation

- [removeLastObject()](../nsmutablearray/removelastobject%28%29.md): Removes the object with the highest-valued index in the array

### Querying an Array

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [firstObject](firstobject.md): The first object in the array.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [subscript(\_:)](subscript%28__%29.md): Returns the object at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator()](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.

# lastObject (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The last object in the array.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ObjectType lastObject;
```

<a id="Discussion"></a>

## Discussion

If the array is empty, returns `nil`.

## See Also

### Related Documentation

- [removeLastObject](../nsmutablearray/removelastobject%28%29.md): Removes the object with the highest-valued index in the array

### Querying an Array

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [getObjects:](getobjects_.md): Deprecated. Copies all the objects contained in the array to `aBuffer`.
- [getObjects:range:](getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.
- [firstObject](firstobject.md): The first object in the array.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.
