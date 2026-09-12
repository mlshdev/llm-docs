> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/setarray(_:)](https://developer.apple.com/documentation/foundation/nsmutablearray/setarray(_:))

# setArray(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the receiving array’s elements to those in another given array.

## Declaration

```swift
func setArray(_ otherArray: [Any])
```

## Parameters

- `otherArray`: The array of objects with which to replace the receiving array’s content.

## See Also

### Related Documentation

- [insert(\_:at:)](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [addObjects(from:)](addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.

### Replacing Objects

- [replaceObject(at:with:)](replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [replaceObjects(at:with:)](replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjects(in:withObjectsFrom:range:)](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjects(in:withObjectsFrom:)](replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.

# setArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the receiving array’s elements to those in another given array.

## Declaration

```objectivec
- (void) setArray:(NSArray<id> *) otherArray;
```

## Parameters

- `otherArray`: The array of objects with which to replace the receiving array’s content.

## See Also

### Related Documentation

- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [addObjectsFromArray:](addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.

### Replacing Objects

- [replaceObjectAtIndex:withObject:](replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Replaces the object at the index with the new object, possibly adding the object.
- [replaceObjectsAtIndexes:withObjects:](replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjectsInRange:withObjectsFromArray:range:](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjectsInRange:withObjectsFromArray:](replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
