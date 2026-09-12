> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/replaceobjects(in:withobjectsfrom:)](https://developer.apple.com/documentation/foundation/nsmutablearray/replaceobjects(in:withobjectsfrom:))

# replaceObjects(in:withObjectsFrom:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.

## Declaration

```swift
func replaceObjects(in range: NSRange, withObjectsFrom otherArray: [Any])
```

## Parameters

- `range`: The range of objects to be replaced in (or removed from) the receiving array.
- `otherArray`: The array of objects from which to select replacements for the objects in `aRange`.

<a id="Discussion"></a>

## Discussion

If `otherArray` has fewer objects than are specified by `aRange`, the extra objects in the receiving array are removed. If `otherArray` has more objects than are specified by `aRange`, the extra objects from `otherArray` are inserted into the receiving array.

## See Also

### Related Documentation

- [removeObject(at:)](removeobject%28at_%29.md): Removes the object at `index` .
- [insert(\_:at:)](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Replacing Objects

- [replaceObject(at:with:)](replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [replaceObjects(at:with:)](replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjects(in:withObjectsFrom:range:)](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [setArray(\_:)](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

# replaceObjectsInRange:withObjectsFromArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.

## Declaration

```objectivec
- (void) replaceObjectsInRange:(NSRange) range withObjectsFromArray:(NSArray<id> *) otherArray;
```

## Parameters

- `range`: The range of objects to be replaced in (or removed from) the receiving array.
- `otherArray`: The array of objects from which to select replacements for the objects in `aRange`.

<a id="Discussion"></a>

## Discussion

If `otherArray` has fewer objects than are specified by `aRange`, the extra objects in the receiving array are removed. If `otherArray` has more objects than are specified by `aRange`, the extra objects from `otherArray` are inserted into the receiving array.

## See Also

### Related Documentation

- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes the object at `index` .
- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Replacing Objects

- [replaceObjectAtIndex:withObject:](replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Replaces the object at the index with the new object, possibly adding the object.
- [replaceObjectsAtIndexes:withObjects:](replaceobjects%28at_with_%29.md): Replaces the objects in the receiving array at locations specified with the objects from a given array.
- [replaceObjectsInRange:withObjectsFromArray:range:](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [setArray:](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.
