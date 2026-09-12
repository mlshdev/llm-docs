> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablearray/add(_:)](https://developer.apple.com/documentation/foundation/nsmutablearray/add(_:))

# add(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts a given object at the end of the array.

## Declaration

```swift
func add(_ anObject: Any)
```

## Parameters

- `anObject`: The object to add to the end of the array’s content. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `anObject` is `nil`.

## See Also

### Related Documentation

- [remove(\_:)](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [setArray(\_:)](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

### Adding Objects

- [addObjects(from:)](addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.
- [insert(\_:at:)](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [insert(\_:at:)](insert%28__at_%29-73pln.md): Inserts the objects in the provided array into the receiving array at the specified indexes.

# addObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Inserts a given object at the end of the array.

## Declaration

```objectivec
- (void) addObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: The object to add to the end of the array’s content. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `anObject` is `nil`.

## See Also

### Related Documentation

- [removeObject:](remove%28__%29.md): Removes all occurrences in the array of a given object.
- [setArray:](setarray%28__%29.md): Sets the receiving array’s elements to those in another given array.

### Adding Objects

- [addObjectsFromArray:](addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.
- [insertObject:atIndex:](insert%28__at_%29-5dbx5.md): Inserts a given object into the array’s contents at a given index.
- [insertObjects:atIndexes:](insert%28__at_%29-73pln.md): Inserts the objects in the provided array into the receiving array at the specified indexes.
