> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/getobjects:range:](https://developer.apple.com/documentation/foundation/nsarray/getobjects:range:)

# getObjects:range:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies references to objects contained in the array that fall within the specified range to `aBuffer`.

## Declaration

```objectivec
- (void) getObjects:(ObjectType[]) objects range:(NSRange) range;
```

## Parameters

- `objects`: A C array of objects of size at least the length of the range specified by `aRange`.
- `range`: A range within the bounds of the array.

  If the location plus the length of the range is greater than the count of the array, this method raises an [NSRangeException](../nsexceptionname/rangeexception.md).

<a id="Discussion"></a>

## Discussion

The method copies into `aBuffer` references to objects in the array in the range specified by `aRange`; the size of the buffer must therefore be at least the length of the range multiplied by the size of an object reference, as shown in the following example (this is solely for illustration—you should typically not create a buffer simply to iterate over the contents of an array):

```objc
NSArray *mArray = // an array with at least six elements...;
id *objects;
 
NSRange range = NSMakeRange(2, 4);
objects = malloc(sizeof(id) * range.length);
 
[mArray getObjects:objects range:range];
 
for (i = 0; i < range.length; i++) {
    NSLog(@"objects: %@", objects[i]);
}
free(objects);
```

## See Also

### Related Documentation

- [arrayWithObjects:count:](init%28objects_count_%29-7dct1.md): Creates and returns an array that includes a given number of objects from a given C array.

### Querying an Array

- [containsObject:](contains%28__%29.md): Returns a Boolean value that indicates whether a given object is present in the array.
- [count](count.md): The number of objects in the array.
- [getObjects:](getobjects_.md): Deprecated. Copies all the objects contained in the array to `aBuffer`.
- [firstObject](firstobject.md): The first object in the array.
- [lastObject](lastobject.md): The last object in the array.
- [objectAtIndex:](object%28at_%29.md): Returns the object located at the specified index.
- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the object at the specified index.
- [objectsAtIndexes:](objects%28at_%29.md): Returns an array containing the objects in the array at the indexes specified by a given index set.
- [objectEnumerator](objectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array.
- [reverseObjectEnumerator](reverseobjectenumerator%28%29.md): Returns an enumerator object that lets you access each object in the array, in reverse order.
