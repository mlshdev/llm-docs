> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/adding(_:)](https://developer.apple.com/documentation/foundation/nsarray/adding(_:))

# adding(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array that is a copy of the receiving array with a given object added to the end.

## Declaration

```swift
func adding(_ anObject: Any) -> [Any]
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

A new array that is a copy of the receiving array with `anObject` added to the end.

<a id="Discussion"></a>

## Discussion

If `anObject` is `nil`, an `NSInvalidArgumentException` is raised.

## See Also

### Related Documentation

- [add(\_:)](../nsmutablearray/add%28__%29.md): Inserts a given object at the end of the array.

### Deriving New Arrays

- [addingObjects(from:)](addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [filtered(using:)](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
- [subarray(with:)](subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.

# arrayByAddingObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array that is a copy of the receiving array with a given object added to the end.

## Declaration

```objectivec
- (NSArray<id> *) arrayByAddingObject:(ObjectType) anObject;
```

## Parameters

- `anObject`: An object.

<a id="return-value"></a>

## Return Value

A new array that is a copy of the receiving array with `anObject` added to the end.

<a id="Discussion"></a>

## Discussion

If `anObject` is `nil`, an `NSInvalidArgumentException` is raised.

## See Also

### Related Documentation

- [addObject:](../nsmutablearray/add%28__%29.md): Inserts a given object at the end of the array.

### Deriving New Arrays

- [arrayByAddingObjectsFromArray:](addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [filteredArrayUsingPredicate:](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
- [subarrayWithRange:](subarray%28with_%29.md): Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.
