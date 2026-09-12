> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/addingobjects(from:)](https://developer.apple.com/documentation/foundation/nsarray/addingobjects(from:))

# addingObjects(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.

## Declaration

```swift
func addingObjects(from otherArray: [Any]) -> [Any]
```

## Parameters

- `otherArray`: An array.

<a id="return-value"></a>

## Return Value

A new array that is a copy of the receiving array with the objects contained in `otherArray` added to the end.

## See Also

### Related Documentation

- [addObjects(from:)](../nsmutablearray/addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.

### Deriving New Arrays

- [adding(\_:)](adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [filtered(using:)](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
- [subarray(with:)](subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.

# arrayByAddingObjectsFromArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.

## Declaration

```objectivec
- (NSArray<id> *) arrayByAddingObjectsFromArray:(NSArray<id> *) otherArray;
```

## Parameters

- `otherArray`: An array.

<a id="return-value"></a>

## Return Value

A new array that is a copy of the receiving array with the objects contained in `otherArray` added to the end.

## See Also

### Related Documentation

- [addObjectsFromArray:](../nsmutablearray/addobjects%28from_%29.md): Adds the objects contained in another given array to the end of the receiving array’s content.

### Deriving New Arrays

- [arrayByAddingObject:](adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [filteredArrayUsingPredicate:](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
- [subarrayWithRange:](subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.
