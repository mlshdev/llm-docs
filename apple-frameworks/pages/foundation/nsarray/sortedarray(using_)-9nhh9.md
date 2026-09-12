> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/sortedarray(using:)-9nhh9](https://developer.apple.com/documentation/foundation/nsarray/sortedarray(using:)-9nhh9)

# sortedArray(using:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.

## Declaration

```swift
func sortedArray(using comparator: Selector) -> [Any]
```

## Parameters

- `comparator`: A selector that identifies the method to use to compare two elements at a time. The method should return `NSOrderedAscending` if the receiving array is smaller than the argument, `NSOrderedDescending` if the receiving array is larger than the argument, and `NSOrderedSame` if they are equal.

<a id="return-value"></a>

## Return Value

An array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by the selector `comparator`.

<a id="Discussion"></a>

## Discussion

The new array contains references to the receiving array’s elements, not copies of them.

The `comparator` message is sent to each object in the array and has as its single argument another object in the array.

For example, an array of `NSString` objects can be sorted by using the [caseInsensitiveCompare(\_:)](../nsstring/caseinsensitivecompare%28__%29.md) method declared in the `NSString` class. Assuming `anArray` exists, a sorted version of the array can be created in this way:

```objc
     NSArray *sortedArray =
         [anArray sortedArrayUsingSelector:@selector(caseInsensitiveCompare:)];
```

## See Also

### Sorting

- [sortedArrayHint](sortedarrayhint.md): Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArray(\_:context:hint:)](sortedarray%28__context_hint_%29.md).
- [sortedArray(\_:context:)](sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(\_:context:hint:)](sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(using:)](sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArray(comparator:)](sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArray(options:usingComparator:)](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [Comparator](../comparator.md): Defines the signature for a block object used for comparison operations.

# sortedArrayUsingSelector: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.

## Declaration

```objectivec
- (NSArray<id> *) sortedArrayUsingSelector:(SEL) comparator;
```

## Parameters

- `comparator`: A selector that identifies the method to use to compare two elements at a time. The method should return `NSOrderedAscending` if the receiving array is smaller than the argument, `NSOrderedDescending` if the receiving array is larger than the argument, and `NSOrderedSame` if they are equal.

<a id="return-value"></a>

## Return Value

An array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by the selector `comparator`.

<a id="Discussion"></a>

## Discussion

The new array contains references to the receiving array’s elements, not copies of them.

The `comparator` message is sent to each object in the array and has as its single argument another object in the array.

For example, an array of `NSString` objects can be sorted by using the [caseInsensitiveCompare:](../nsstring/caseinsensitivecompare%28__%29.md) method declared in the `NSString` class. Assuming `anArray` exists, a sorted version of the array can be created in this way:

```objc
     NSArray *sortedArray =
         [anArray sortedArrayUsingSelector:@selector(caseInsensitiveCompare:)];
```

## See Also

### Sorting

- [sortedArrayHint](sortedarrayhint.md): Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArrayUsingFunction:context:hint:](sortedarray%28__context_hint_%29.md).
- [sortedArrayUsingFunction:context:](sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingFunction:context:hint:](sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingDescriptors:](sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArrayUsingComparator:](sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArrayWithOptions:usingComparator:](sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [NSComparator](../comparator.md): Defines the signature for a block object used for comparison operations.
