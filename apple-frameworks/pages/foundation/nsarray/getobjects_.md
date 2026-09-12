> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/getobjects:](https://developer.apple.com/documentation/foundation/nsarray/getobjects:)

# getObjects:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Copies all the objects contained in the array to `aBuffer`.

> Use [getObjects:range:](getobjects_range_.md) instead.

## Declaration

```objectivec
- (void) getObjects:(ObjectType[]) objects;
```

## Parameters

- `objects`: A C array of objects of size at least the count of the array.

<a id="Discussion"></a>

## Discussion

The method copies into `aBuffer` all the objects in the array; the size of the buffer must therefore be at least the count of the array multiplied by the size of an object reference, as shown in the following example (note that this is just an example, you should typically not create a buffer simply to iterate over the contents of an array):

```objc
NSArray *mArray = // ...;
id *objects;
 
NSUInteger count = [mArray count];
objects = malloc(sizeof(id) * count);
 
[mArray getObjects:objects];
 
for (i = 0; i < count; i++) {
    NSLog(@"object at index %d: %@", i, objects[i]);
}
free(objects);
```

<a id="Special-Considerations"></a>

### Special Considerations

This deprecated method is unsafe because it could potentially cause buffer overruns.

## See Also

### Related Documentation

- [arrayWithObjects:count:](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.

### Querying an Array

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [getObjects:range:](getobjects_range_.md): Copies references to objects contained in the array that fall within the specified range to `aBuffer`.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.
