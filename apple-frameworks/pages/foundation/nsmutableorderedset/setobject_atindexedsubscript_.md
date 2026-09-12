> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableorderedset/setobject:atindexedsubscript:](https://developer.apple.com/documentation/foundation/nsmutableorderedset/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the given object at the specified index of the mutable ordered set.

## Declaration

```objectivec
- (void) setObject:(ObjectType) obj atIndexedSubscript:(NSUInteger) idx;
```

## Parameters

- `obj`: The object to replace the set’s content.
- `idx`: The index in the mutable ordered set at which to insert `obj`. This value must not be greater than the count of elements in the array.

  > **Important**

  >  Important: Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `idx` is greater than the number of elements in the mutable ordered set.

<a id="Discussion"></a>

## Discussion

If the index is already occupied, the objects at index and beyond are shifted by adding `1` to their indices to make room.

This method is identical to [insertObject:atIndex:](insert%28__at_%29-7qg51.md).

## See Also

### Adding, Removing, and Reordering Entries

- [addObject:](add%28__%29.md): Appends a given object to the end of the mutable ordered set, if it is not already a member.
- [addObjects:count:](add%28__count_%29.md): Appends the given number of objects from a given C array to the end of the mutable ordered set.
- [addObjectsFromArray:](addobjects%28from_%29.md): Appends to the end of the mutable ordered set each object contained in a given array that is not already a member.
- [insertObject:atIndex:](insert%28__at_%29-7qg51.md): Inserts the given object at the specified index of the mutable ordered set, if it is not already a member.
- [insertObjects:atIndexes:](insert%28__at_%29-3ncnm.md): Inserts the objects in the array at the specified indexes.
- [removeObject:](remove%28__%29.md): Removes a given object from the mutable ordered set.
- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes a the object at the specified index from the mutable ordered set.
- [removeObjectsAtIndexes:](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the mutable ordered set.
- [removeObjectsInArray:](removeobjects%28in_%29-8h2kh.md): Removes the objects in the array from the mutable ordered set.
- [removeObjectsInRange:](removeobjects%28in_%29-9jkis.md): Removes from the mutable ordered set each of the objects within a given range.
- [removeAllObjects](removeallobjects%28%29.md): Removes all the objects from the mutable ordered set.
- [replaceObjectAtIndex:withObject:](replaceobject%28at_with_%29.md): Replaces the object at the specified index with the new object.
- [replaceObjectsAtIndexes:withObjects:](replaceobjects%28at_with_%29.md): Replaces the objects at the specified indexes with the new objects.
- [replaceObjectsInRange:withObjects:count:](replaceobjects%28in_with_count_%29.md): Replaces the objects in the receiving mutable ordered set at the range with the specified number of objects from a given C array.
- [setObject:atIndex:](setobject%28__at_%29.md): Appends or replaces the object at the specified index.
