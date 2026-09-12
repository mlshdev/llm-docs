> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/addobjects(from:)](https://developer.apple.com/documentation/foundation/nsmutablearray/addobjects(from:))

# addObjects(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the objects contained in another given array to the end of the receiving array’s content.

## Declaration

```swift
func addObjects(from otherArray: [Any])
```

## Parameters

- `otherArray`: An array of objects to add to the end of the receiving array’s content.

## See Also

### Related Documentation

- [remove(\_:)](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [setArray(\_:)](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

### Adding Objects

- [add(\_:)](add%28__%29.md): Inserts a given object at the end of the array.
- [insert(\_:at:)](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [insert(\_:at:)](insert%28__at_%29-73pln.md): Inserts the objects in the provided array into the receiving array at the specified indexes.

# addObjectsFromArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the objects contained in another given array to the end of the receiving array’s content.

## Declaration

```objectivec
- (void) addObjectsFromArray:(NSArray<id> *) otherArray;
```

## Parameters

- `otherArray`: An array of objects to add to the end of the receiving array’s content.

## See Also

### Related Documentation

- [removeObject:](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [setArray:](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

### Adding Objects

- [addObject:](add%28__%29.md): Inserts a given object at the end of the array.
- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [insertObjects:atIndexes:](insert%28__at_%29-73pln.md): Inserts the objects in the provided array into the receiving array at the specified indexes.
