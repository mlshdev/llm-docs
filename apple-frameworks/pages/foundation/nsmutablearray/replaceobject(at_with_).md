> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/replaceobject(at:with:)](https://developer.apple.com/documentation/foundation/nsmutablearray/replaceobject(at:with:))

# replaceObject(at:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the object at `index` with `anObject`.

## Declaration

```swift
func replaceObject(at index: Int, with anObject: Any)
```

## Parameters

- `index`: The index of the object to be replaced. This value must not exceed the bounds of the array.

  > **Important**

  >  Raises an `NSRangeException` if `index` is beyond the end of the array.
- `anObject`: The object with which to replace the object at index `index` in the array. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `anObject` is `nil`.

## See Also

### Related Documentation

- [removeObjects(at:)](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObject(at:)](removeobject%28at_%29.md): Removes the object at `index` .
- [insert(\_:at:)](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Replacing Objects

- [replaceObjects(at:with:)](replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjects(in:withObjectsFrom:range:)](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjects(in:withObjectsFrom:)](replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
- [setArray(\_:)](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

# replaceObjectAtIndex:withObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the object at `index` with `anObject`.

## Declaration

```objectivec
- (void) replaceObjectAtIndex:(NSUInteger) index withObject:(ObjectType) anObject;
```

## Parameters

- `index`: The index of the object to be replaced. This value must not exceed the bounds of the array.

  > **Important**

  >  Raises an `NSRangeException` if `index` is beyond the end of the array.
- `anObject`: The object with which to replace the object at index `index` in the array. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `anObject` is `nil`.

## See Also

### Related Documentation

- [removeObjectsAtIndexes:](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Replaces the object at the index with the new object, possibly adding the object.
- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes the object at `index` .
- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Replacing Objects

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Replaces the object at the index with the new object, possibly adding the object.
- [replaceObjectsAtIndexes:withObjects:](replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjectsInRange:withObjectsFromArray:range:](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjectsInRange:withObjectsFromArray:](replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
- [setArray:](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.
