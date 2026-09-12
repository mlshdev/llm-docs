> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/removeobjects(at:)](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects(at:))

# removeObjects(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the objects at the specified indexes from the array.

## Declaration

```swift
func removeObjects(at indexes: IndexSet)
```

## Parameters

- `indexes`: The indexes of the objects to remove from the array. The locations specified by `indexes` must lie within the bounds of the array.

<a id="Discussion"></a>

## Discussion

This method is similar to [removeObject(at:)](removeobject%28at_%29.md), but allows you to efficiently remove multiple objects with a single operation. `indexes` specifies the locations of objects to be removed given the state of the array when the method is invoked, as illustrated in the following example:

```objc
NSMutableArray *array = [NSMutableArray arrayWithObjects: @"one", @"a", @"two", @"b", @"three", @"four", nil];
NSMutableIndexSet *indexes = [NSMutableIndexSet indexSetWithIndex:1];
[indexes addIndex:3];
[array removeObjectsAtIndexes:indexes];
NSLog(@"array: %@", array);
 
// Output: array: (one, two, three, four)
```

If `indexes` is `nil`, this method raises an exception.

## See Also

### Related Documentation

- [init(capacity:)](init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.

### Removing Objects

- [removeAllObjects()](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject()](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [remove(\_:)](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [remove(\_:in:)](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObject(at:)](removeobject%28at_%29.md): Removes the object at `index` .
- [removeObject(identicalTo:)](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObject(identicalTo:in:)](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjects(fromIndices:numIndices:)](removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjects(in:)](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjects(in:)](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.

# removeObjectsAtIndexes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes the objects at the specified indexes from the array.

## Declaration

```objectivec
- (void) removeObjectsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `indexes`: The indexes of the objects to remove from the array. The locations specified by `indexes` must lie within the bounds of the array.

<a id="Discussion"></a>

## Discussion

This method is similar to [removeObjectAtIndex:](removeobject%28at_%29.md), but allows you to efficiently remove multiple objects with a single operation. `indexes` specifies the locations of objects to be removed given the state of the array when the method is invoked, as illustrated in the following example:

```objc
NSMutableArray *array = [NSMutableArray arrayWithObjects: @"one", @"a", @"two", @"b", @"three", @"four", nil];
NSMutableIndexSet *indexes = [NSMutableIndexSet indexSetWithIndex:1];
[indexes addIndex:3];
[array removeObjectsAtIndexes:indexes];
NSLog(@"array: %@", array);
 
// Output: array: (one, two, three, four)
```

If `indexes` is `nil`, this method raises an exception.

## See Also

### Related Documentation

- [initWithCapacity:](init%28capacity_%29.md): Returns an array, initialized with enough memory to initially hold a given number of objects.

### Removing Objects

- [removeAllObjects](removeallobjects%28%29.md): Empties the array of all its elements.
- [removeLastObject](removelastobject%28%29.md): Removes the object with the highest-valued index in the array
- [removeObject:](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [removeObject:inRange:](remove%28__in_%29.md): Removes all occurrences within a specified range in the array of a given object.
- [removeObjectAtIndex:](removeobject%28at_%29.md): Removes the object at `index` .
- [removeObjectIdenticalTo:](removeobject%28identicalto_%29.md): Removes all occurrences of a given object in the array.
- [removeObjectIdenticalTo:inRange:](removeobject%28identicalto_in_%29.md): Removes all occurrences of `anObject` within the specified range in the array.
- [removeObjectsFromIndices:numIndices:](removeobjects%28fromindices_numindices_%29.md): Deprecated. Removes the specified number of objects from the array, beginning at the specified index.
- [removeObjectsInArray:](removeobjects%28in_%29-4yb26.md): Removes from the receiving array the objects in another given array.
- [removeObjectsInRange:](removeobjects%28in_%29-1udmn.md): Removes from the array each of the objects within a given range.
