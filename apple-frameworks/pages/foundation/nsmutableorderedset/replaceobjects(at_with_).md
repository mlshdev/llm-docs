> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/replaceobjects(at:with:)](https://developer.apple.com/documentation/foundation/nsmutableorderedset/replaceobjects(at:with:))

# replaceObjects(at:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the objects at the specified indexes with the new objects.

## Declaration

```swift
func replaceObjects(at indexes: IndexSet, with objects: [Any])
```

## Parameters

- `indexes`: The indexes of the objects to be replaced.
- `objects`: The objects with which to replace the objects in the receiving mutable ordered set at the indexes specified by indexes.

  The count of locations in `indexes` must equal the count of objects.

<a id="Discussion"></a>

## Discussion

The indexes in `indexes` are used in the same order as the objects in `objects`.

## See Also

### Adding, Removing, and Reordering Entries

- [add(\_:)](add%28__%29.md): Appends a given object to the end of the mutable ordered set, if it is not already a member.
- [add(\_:count:)](add%28__count_%29.md): Appends the given number of objects from a given C array to the end of the mutable ordered set.
- [addObjects(from:)](addobjects%28from_%29.md): Appends to the end of the mutable ordered set each object contained in a given array that is not already a member.
- [insert(\_:at:)](insert%28__at_%29-7qg51.md): Inserts the given object at the specified index of the mutable ordered set, if it is not already a member.
- [insert(\_:at:)](insert%28__at_%29-3ncnm.md): Inserts the objects in the array at the specified indexes.
- [remove(\_:)](remove%28__%29.md): Removes a given object from the mutable ordered set.
- [removeObject(at:)](removeobject%28at_%29.md): Removes a the object at the specified index from the mutable ordered set.
- [removeObjects(at:)](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the mutable ordered set.
- [removeObjects(in:)](removeobjects%28in_%29-8h2kh.md): Removes the objects in the array from the mutable ordered set.
- [removeObjects(in:)](removeobjects%28in_%29-9jkis.md): Removes from the mutable ordered set each of the objects within a given range.
- [removeAllObjects()](removeallobjects%28%29.md): Removes all the objects from the mutable ordered set.
- [replaceObject(at:with:)](replaceobject%28at_with_%29.md): Replaces the object at the specified index with the new object.
- [replaceObjects(in:with:count:)](replaceobjects%28in_with_count_%29.md): Replaces the objects in the receiving mutable ordered set at the range with the specified number of objects from a given C array.
- [setObject(\_:at:)](setobject%28__at_%29.md): Appends or replaces the object at the specified index.
- [moveObjects(at:to:)](moveobjects%28at_to_%29.md): Moves the objects at the specified indexes to the new location.

# replaceObjectsAtIndexes:withObjects: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the objects at the specified indexes with the new objects.

## Declaration

```objectivec
- (void) replaceObjectsAtIndexes:(NSIndexSet *) indexes withObjects:(NSArray<id> *) objects;
```

## Parameters

- `indexes`: The indexes of the objects to be replaced.
- `objects`: The objects with which to replace the objects in the receiving mutable ordered set at the indexes specified by indexes.

  The count of locations in `indexes` must equal the count of objects.

<a id="Discussion"></a>

## Discussion

The indexes in `indexes` are used in the same order as the objects in `objects`.

## See Also

### Adding, Removing, and Reordering Entries

- [addObject:](add%28__%29.md): Appends a given object to the end of the mutable ordered set, if it is not already a member.
- [addObjects:count:](add%28__count_%29.md): Appends the given number of objects from a given C array to the end of the mutable ordered set.
- [addObjectsFromArray:](addobjects%28from_%29.md): Appends to the end of the mutable ordered set each object contained in a given array that is not already a member.
- [insertObject:atIndex:](insert%28__at_%29-7qg51.md): Inserts the given object at the specified index of the mutable ordered set, if it is not already a member.
- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Replaces the given object at the specified index of the mutable ordered set.
- [insertObjects:atIndexes:](insert%28__at_%29-3ncnm.md): Inserts the objects in the array at the specified indexes.
- [removeObject:](remove%28__%29.md): Removes a given object from the mutable ordered set.
- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes a the object at the specified index from the mutable ordered set.
- [removeObjectsAtIndexes:](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the mutable ordered set.
- [removeObjectsInArray:](removeobjects%28in_%29-8h2kh.md): Removes the objects in the array from the mutable ordered set.
- [removeObjectsInRange:](removeobjects%28in_%29-9jkis.md): Removes from the mutable ordered set each of the objects within a given range.
- [removeAllObjects](removeallobjects%28%29.md): Removes all the objects from the mutable ordered set.
- [replaceObjectAtIndex:withObject:](replaceobject%28at_with_%29.md): Replaces the object at the specified index with the new object.
- [replaceObjectsInRange:withObjects:count:](replaceobjects%28in_with_count_%29.md): Replaces the objects in the receiving mutable ordered set at the range with the specified number of objects from a given C array.
- [setObject:atIndex:](setobject%28__at_%29.md): Appends or replaces the object at the specified index.
