> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/foundation/nsmutablearray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the object at the index with the new object, possibly adding the object.

## Declaration

```objectivec
- (void) setObject:(ObjectType) obj atIndexedSubscript:(NSUInteger) idx;
```

## Parameters

- `obj`: The object with which to replace the object at index `idx` in the array. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `anObject` is `nil`.
- `idx`: The index of the object to be replaced. This value must not exceed the bounds of the array.

  > **Important**

  >  Raises an `NSRangeException` if `idx` is beyond the end of the array.

<a id="Discussion"></a>

## Discussion

This method has the same behavior as the [replaceObjectAtIndex:withObject:](replaceobject%28at_with_%29.md) method.

If `idx` is beyond the end of the array (that is, if `idx` is greater than the value returned by `count`), an [NSRangeException](../nsexceptionname/rangeexception.md) is raised.

You shouldn’t need to call this method directly. Instead, this method is called when setting an object by index using subscripting.

```objc
mutableArray[3] = @"someValue"; // equivalent to [mutableArray replaceObjectAtIndex:3 withObject:@"someValue"]
```

## See Also

### Related Documentation

- [objectAtIndexedSubscript:](../nsarray/subscript%28__%29.md): Returns the object at the specified index.
- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjectsAtIndexes:](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.

### Replacing Objects

- [replaceObjectAtIndex:withObject:](replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [replaceObjectsAtIndexes:withObjects:](replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjectsInRange:withObjectsFromArray:range:](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjectsInRange:withObjectsFromArray:](replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
- [setArray:](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.
