> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/removeobjects(in:)-4yb26](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects(in:)-4yb26)

# removeObjects(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving array the objects in another given array.

## Declaration

```swift
func removeObjects(in otherArray: [Any])
```

## Parameters

- `otherArray`: An array containing the objects to be removed from the receiving array.

<a id="Discussion"></a>

## Discussion

This method is similar to [remove(\_:)](remove%28__%29.md), but it allows you to efficiently remove large sets of objects with a single operation. If the receiving array does not contain objects in `otherArray`, the method has no effect (although it does incur the overhead of searching the contents).

This method assumes that all elements in `otherArray` respond to `hash` and `isEqual:`.

## See Also

### Removing Objects

- [removeAllObjects()](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject()](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [remove(\_:)](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [remove(\_:in:)](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObject(at:)](removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjects(at:)](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObject(identicalTo:)](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObject(identicalTo:in:)](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjects(fromIndices:numIndices:)](removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjects(in:)](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.

# removeObjectsInArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the receiving array the objects in another given array.

## Declaration

```objectivec
- (void) removeObjectsInArray:(NSArray<id> *) otherArray;
```

## Parameters

- `otherArray`: An array containing the objects to be removed from the receiving array.

<a id="Discussion"></a>

## Discussion

This method is similar to [removeObject:](remove%28__%29.md), but it allows you to efficiently remove large sets of objects with a single operation. If the receiving array does not contain objects in `otherArray`, the method has no effect (although it does incur the overhead of searching the contents).

This method assumes that all elements in `otherArray` respond to `hash` and `isEqual:`.

## See Also

### Removing Objects

- [removeAllObjects](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [removeObject:](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [removeObject:inRange:](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjectsAtIndexes:](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObjectIdenticalTo:](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObjectIdenticalTo:inRange:](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjectsFromIndices:numIndices:](removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjectsInRange:](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.
