> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/comparator](https://developer.apple.com/documentation/foundation/comparator)

# Comparator (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the signature for a block object used for comparison operations.

## Declaration

```swift
typealias Comparator = (Any, Any) -> ComparisonResult
```

<a id="Discussion"></a>

## Discussion

The arguments to the [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) are two objects to compare. The block returns an [ComparisonResult](comparisonresult.md) value to denote the ordering of the two objects.

You use `NSComparator` blocks in comparison operations such as `NSArray`’s [sortedArray(comparator:)](nsarray/sortedarray%28comparator_%29.md), for example:

```objc
NSArray *sortedArray = [array sortedArrayUsingComparator: ^(id obj1, id obj2) {
 
    if ([obj1 integerValue] > [obj2 integerValue]) {
        return (NSComparisonResult)NSOrderedDescending;
    }
 
    if ([obj1 integerValue] < [obj2 integerValue]) {
        return (NSComparisonResult)NSOrderedAscending;
    }
    return (NSComparisonResult)NSOrderedSame;
}];
```

## See Also

### Sorting

- [sortedArrayHint](nsarray/sortedarrayhint.md): Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArray(\_:context:hint:)](nsarray/sortedarray%28__context_hint_%29.md).
- [sortedArray(\_:context:)](nsarray/sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(\_:context:hint:)](nsarray/sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArray(using:)](nsarray/sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArray(using:)](nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.
- [sortedArray(comparator:)](nsarray/sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArray(options:usingComparator:)](nsarray/sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.

# NSComparator (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the signature for a block object used for comparison operations.

## Declaration

```objectivec
typedef enum NSComparisonResult (^)(id, id) NSComparator;
```

<a id="Discussion"></a>

## Discussion

The arguments to the [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) are two objects to compare. The block returns an [NSComparisonResult](comparisonresult.md) value to denote the ordering of the two objects.

You use `NSComparator` blocks in comparison operations such as `NSArray`’s [sortedArrayUsingComparator:](nsarray/sortedarray%28comparator_%29.md), for example:

```objc
NSArray *sortedArray = [array sortedArrayUsingComparator: ^(id obj1, id obj2) {
 
    if ([obj1 integerValue] > [obj2 integerValue]) {
        return (NSComparisonResult)NSOrderedDescending;
    }
 
    if ([obj1 integerValue] < [obj2 integerValue]) {
        return (NSComparisonResult)NSOrderedAscending;
    }
    return (NSComparisonResult)NSOrderedSame;
}];
```

## See Also

### Sorting

- [sortedArrayHint](nsarray/sortedarrayhint.md): Analyzes the array and returns a “hint” that speeds the sorting of the array when the hint is supplied to [sortedArrayUsingFunction:context:hint:](nsarray/sortedarray%28__context_hint_%29.md).
- [sortedArrayUsingFunction:context:](nsarray/sortedarray%28__context_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingFunction:context:hint:](nsarray/sortedarray%28__context_hint_%29.md): Returns a new array that lists the receiving array’s elements in ascending order as defined by the comparison function `comparator`.
- [sortedArrayUsingDescriptors:](nsarray/sortedarray%28using_%29-82wi1.md): Returns a copy of the receiving array sorted as specified by a given array of sort descriptors.
- [sortedArrayUsingSelector:](nsarray/sortedarray%28using_%29-9nhh9.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given selector.
- [sortedArrayUsingComparator:](nsarray/sortedarray%28comparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
- [sortedArrayWithOptions:usingComparator:](nsarray/sortedarray%28options_usingcomparator_%29.md): Returns an array that lists the receiving array’s elements in ascending order, as determined by the comparison method specified by a given `NSComparator` block.
