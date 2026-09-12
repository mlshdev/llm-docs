> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/subscript(_:)](https://developer.apple.com/documentation/foundation/nsarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the object at the specified index.

## Declaration

```swift
subscript(idx: Int) -> Any { get }
```

```swift
subscript(idx: Int) -> Any { get set }
```

## Parameters

- `idx`: An index within the bounds of the array.

<a id="return-value"></a>

## Return Value

The object located at `idx`.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as the [object(at:)](object%28at_%29.md) method.

If `idx` is beyond the end of the array (that is, if `idx` is greater than or equal to the value returned by `count`), an [rangeException](../nsexceptionname/rangeexception.md) is raised.

You shouldn’t need to call this method directly. Instead, this method is called when accessing an object by index using subscripting.

```objc
id value = array[3]; // equivalent to [array objectAtIndex:3]
```

## See Also

### Querying an Array

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [object(at:)](object%28at_%29.md): Returns the object located at the specified index.
- [objects(at:)](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator()](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator()](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the object at the specified index.

## Declaration

```objectivec
- (ObjectType) objectAtIndexedSubscript:(NSUInteger) idx;
```

## Parameters

- `idx`: An index within the bounds of the array.

<a id="return-value"></a>

## Return Value

The object located at `idx`.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as the [objectAtIndex:](object%28at_%29.md) method.

If `idx` is beyond the end of the array (that is, if `idx` is greater than or equal to the value returned by `count`), an [NSRangeException](../nsexceptionname/rangeexception.md) is raised.

You shouldn’t need to call this method directly. Instead, this method is called when accessing an object by index using subscripting.

```objc
id value = array[3]; // equivalent to [array objectAtIndex:3]
```

## See Also

### Related Documentation

- [setObject:atIndexedSubscript:](../nsmutablearray/setobject_atindexedsubscript_.md): Replaces the object at the index with the new object, possibly adding the object.

### Querying an Array

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [getObjects:](getobjects_.md): Deprecated. Copies all the objects contained in the array to `aBuffer`.
- [getObjects:range:](getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.
