> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/removeobjects(in:)-1udmn](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects(in:)-1udmn)

# removeObjects(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the array each of the objects within a given range.

## Declaration

```swift
func removeObjects(in range: NSRange)
```

## Parameters

- `range`: The range of the objects to be removed from the array.

<a id="Discussion"></a>

## Discussion

The objects are removed using [removeObject(at:)](removeobject%28at_%29.md).

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
- [removeObjects(in:)](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.

# removeObjectsInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes from the array each of the objects within a given range.

## Declaration

```objectivec
- (void) removeObjectsInRange:(NSRange) range;
```

## Parameters

- `range`: The range of the objects to be removed from the array.

<a id="Discussion"></a>

## Discussion

The objects are removed using [removeObjectAtIndex:](removeobject%28at_%29.md).

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
- [removeObjectsInArray:](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
