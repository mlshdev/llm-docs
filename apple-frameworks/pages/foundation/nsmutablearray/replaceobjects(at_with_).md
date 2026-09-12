> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/replaceobjects(at:with:)](https://developer.apple.com/documentation/foundation/nsmutablearray/replaceobjects(at:with:))

# replaceObjects(at:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the objects in the receiving array at locations specified with the objects from a given array.

## Declaration

```swift
func replaceObjects(at indexes: IndexSet, with objects: [Any])
```

## Parameters

- `indexes`: The indexes of the objects to be replaced.
- `objects`: The objects with which to replace the objects in the receiving array at the indexes specified by `indexes`. The count of locations in `indexes` must equal the count of `objects`.

<a id="Discussion"></a>

## Discussion

The indexes in `indexes` are used in the same order as the objects in `objects`.

If `objects` or `indexes` is `nil`, this method raises an exception.

## See Also

### Related Documentation

- [removeObject(at:)](removeobject%28at_%29.md): Removes the object at `index` .
- [insert(\_:at:)](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Replacing Objects

- [replaceObject(at:with:)](replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [replaceObjects(in:withObjectsFrom:range:)](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjects(in:withObjectsFrom:)](replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
- [setArray(\_:)](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

# replaceObjectsAtIndexes:withObjects: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the objects in the receiving array at locations specified with the objects from a given array.

## Declaration

```objectivec
- (void) replaceObjectsAtIndexes:(NSIndexSet *) indexes withObjects:(NSArray<id> *) objects;
```

## Parameters

- `indexes`: The indexes of the objects to be replaced.
- `objects`: The objects with which to replace the objects in the receiving array at the indexes specified by `indexes`. The count of locations in `indexes` must equal the count of `objects`.

<a id="Discussion"></a>

## Discussion

The indexes in `indexes` are used in the same order as the objects in `objects`.

If `objects` or `indexes` is `nil`, this method raises an exception.

## See Also

### Related Documentation

- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes the object at `index` .
- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Replacing Objects

- [replaceObjectAtIndex:withObject:](replaceobject%28at_with_%29.md): Replaces the object at `index` with `anObject`.
- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Replaces the object at the index with the new object, possibly adding the object.
- [replaceObjectsInRange:withObjectsFromArray:range:](replaceobjects%28in_withobjectsfrom_range_%29.md): Replaces the objects in the receiving array specified by one given range with the objects in another array specified by another range.
- [replaceObjectsInRange:withObjectsFromArray:](replaceobjects%28in_withobjectsfrom_%29.md): Replaces the objects in the receiving array specified by a given range with all of the objects from a given array.
- [setArray:](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.
