> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/subarray(with:)](https://developer.apple.com/documentation/foundation/nsarray/subarray(with:))

# subarray(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.

## Declaration

```swift
func subarray(with range: NSRange) -> [Any]
```

## Parameters

- `range`: A range within the receiving array’s range of elements.

<a id="return-value"></a>

## Return Value

A new array containing the receiving array’s elements that fall within the limits specified by `range`.

<a id="Discussion"></a>

## Discussion

If `range` isn’t within the receiving array’s range of elements, an `NSRangeException` is raised.

For example, the following code example creates an array containing the elements found in the first half of `wholeArray` (assuming `wholeArray` exists).

```objc
NSArray *halfArray;
NSRange theRange;
 
theRange.location = 0;
theRange.length = [wholeArray count] / 2;
 
halfArray = [wholeArray subarrayWithRange:theRange];
```

## See Also

### Deriving New Arrays

- [adding(\_:)](adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [addingObjects(from:)](addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [filtered(using:)](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.

# subarrayWithRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new array containing the receiving array’s elements that fall within the limits specified by a given range.

## Declaration

```objectivec
- (NSArray<id> *) subarrayWithRange:(NSRange) range;
```

## Parameters

- `range`: A range within the receiving array’s range of elements.

<a id="return-value"></a>

## Return Value

A new array containing the receiving array’s elements that fall within the limits specified by `range`.

<a id="Discussion"></a>

## Discussion

If `range` isn’t within the receiving array’s range of elements, an `NSRangeException` is raised.

For example, the following code example creates an array containing the elements found in the first half of `wholeArray` (assuming `wholeArray` exists).

```objc
NSArray *halfArray;
NSRange theRange;
 
theRange.location = 0;
theRange.length = [wholeArray count] / 2;
 
halfArray = [wholeArray subarrayWithRange:theRange];
```

## See Also

### Deriving New Arrays

- [arrayByAddingObject:](adding%28__%29.md): Returns a new array that is a copy of the receiving array with a given object added to the end.
- [arrayByAddingObjectsFromArray:](addingobjects%28from_%29.md): Returns a new array that is a copy of the receiving array with the objects contained in another array added to the end.
- [filteredArrayUsingPredicate:](filtered%28using_%29.md): Evaluates a given predicate against each object in the receiving array and returns a new array containing the objects for which the predicate returns true.
