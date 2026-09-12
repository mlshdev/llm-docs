> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/removeobjects(fromindices:numindices:)](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects(fromindices:numindices:))

# removeObjects(fromIndices:numIndices:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 4.0) · iPadOS 2.0+ (deprecated in 4.0) · Mac Catalyst 2.0+ (deprecated in 4.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Removes the specified number of objects from the array, beginning at the specified index.

> Do not use this method, use [removeObjects(at:)](removeobjects%28at_%29.md) instead.

## Declaration

```swift
func removeObjects(fromIndices indices: UnsafeMutablePointer<Int>, numIndices cnt: Int)
```

## Parameters

- `indices`: A C array of the indices of the objects to remove from the receiving array.
- `cnt`: The number of objects to remove from the receiving array.

<a id="Discussion"></a>

## Discussion

This method is similar to [removeObject(at:)](removeobject%28at_%29.md), but it allows you to efficiently remove multiple objects with a single operation. If you sort the list of indexes in ascending order, you will improve the speed of this operation.

This method cannot be sent to a remote object with distributed objects.

<a id="Special-Considerations"></a>

### Special Considerations

This deprecated method uses a C array of indices. The [removeObjects(at:)](removeobjects%28at_%29.md) method uses an [NSIndexSet](../nsindexset.md) which provides a more efficient way of indexing into an array.

## See Also

### Related Documentation

- [init(capacity:)](init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.

### Removing Objects

- [removeAllObjects()](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject()](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [remove(\_:)](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [remove(\_:in:)](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObject(at:)](removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjects(at:)](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObject(identicalTo:)](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObject(identicalTo:in:)](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjects(in:)](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjects(in:)](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.

# removeObjectsFromIndices:numIndices: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 4.0) · iPadOS 2.0+ (deprecated in 4.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.6) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Removes the specified number of objects from the array, beginning at the specified index.

> Do not use this method, use [removeObjectsAtIndexes:](removeobjects%28at_%29.md) instead.

## Declaration

```objectivec
- (void) removeObjectsFromIndices:(NSUInteger *) indices numIndices:(NSUInteger) cnt;
```

## Parameters

- `indices`: A C array of the indices of the objects to remove from the receiving array.
- `cnt`: The number of objects to remove from the receiving array.

<a id="Discussion"></a>

## Discussion

This method is similar to [removeObjectAtIndex:](removeobject%28at_%29.md), but it allows you to efficiently remove multiple objects with a single operation. If you sort the list of indexes in ascending order, you will improve the speed of this operation.

This method cannot be sent to a remote object with distributed objects.

<a id="Special-Considerations"></a>

### Special Considerations

This deprecated method uses a C array of indices. The [removeObjectsAtIndexes:](removeobjects%28at_%29.md) method uses an [NSIndexSet](../nsindexset.md) which provides a more efficient way of indexing into an array.

## See Also

### Related Documentation

- [initWithCapacity:](init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.

### Removing Objects

- [removeAllObjects](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [removeObject:](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [removeObject:inRange:](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjectsAtIndexes:](removeobjects%28at_%29.md): Removes the objects at the specified indexes from the array.
- [removeObjectIdenticalTo:](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObjectIdenticalTo:inRange:](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjectsInArray:](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjectsInRange:](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.
