> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/removeobject(at:)](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobject(at:))

# removeObject(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the object at `index` .

## Declaration

```swift
func removeObject(at index: Int)
```

## Parameters

- `index`: The index from which to remove the object in the array. The value must not exceed the bounds of the array.

  > **Important**

  >  Raises an exception `NSRangeException` if `index` is beyond the end of the array.

<a id="Discussion"></a>

## Discussion

To fill the gap, all elements beyond `index` are moved by subtracting 1 from their index.

## See Also

### Related Documentation

- [insert(\_:at:)](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Removing Objects

- [removeAllObjects()](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject()](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [remove(\_:)](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [remove(\_:in:)](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObjects(at:)](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObject(identicalTo:)](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObject(identicalTo:in:)](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjects(fromIndices:numIndices:)](removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjects(in:)](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjects(in:)](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.

# removeObjectAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the object at `index` .

## Declaration

```objectivec
- (void) removeObjectAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index from which to remove the object in the array. The value must not exceed the bounds of the array.

  > **Important**

  >  Raises an exception `NSRangeException` if `index` is beyond the end of the array.

<a id="Discussion"></a>

## Discussion

To fill the gap, all elements beyond `index` are moved by subtracting 1 from their index.

## See Also

### Related Documentation

- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.

### Removing Objects

- [removeAllObjects](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [removeObject:](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [removeObject:inRange:](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObjectsAtIndexes:](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObjectIdenticalTo:](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObjectIdenticalTo:inRange:](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjectsFromIndices:numIndices:](removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjectsInArray:](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjectsInRange:](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.
