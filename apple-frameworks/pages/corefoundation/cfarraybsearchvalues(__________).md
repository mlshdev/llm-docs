> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraybsearchvalues(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraybsearchvalues(_:_:_:_:_:))

# CFArrayBSearchValues(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches an array for a value using a binary search algorithm.

## Declaration

```swift
func CFArrayBSearchValues(_ theArray: CFArray!, _ range: CFRange, _ value: UnsafeRawPointer!, _ comparator: CFComparatorFunction!, _ context: UnsafeMutableRawPointer!) -> CFIndex
```

## Parameters

- `theArray`: An array, sorted from least to greatest according to the `comparator` function.
- `range`: The range within `theArray` to search. The range must not exceed the bounds of `theArray`. The range may be empty (length `0`).
- `value`: The value for which to find a match in `theArray`. If `value`, or any other value in `theArray`, is not understood by the `comparator` callback, the behavior is undefined.
- `comparator`: The function with the comparator function type signature that is used in the binary search operation to compare values in `theArray` with the given value. If there are values in the range that the `comparator` function does not expect or cannot properly compare, the behavior is undefined.
- `context`: A pointer-sized program-defined value, which is passed as the third argument to the `comparator` function, but is otherwise unused by this function. If the context is not what is expected by the `comparator` function, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The return value is one of the following:

<a id="discussion"></a>

## Discussion

- The index of a value that matched, if the target value matches one or more in the range.
- Greater than or equal to the end point of the range, if the value is greater than all the values in the range.
- The index of the value greater than the target value, if the value lies between two of (or less than all of) the values in the range.

## See Also

### Examining an Array

- [CFArrayContainsValue(\_:\_:\_:)](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount(\_:)](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue(\_:\_:\_:)](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue(\_:\_:\_:)](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue(\_:\_:\_:)](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValues(\_:\_:\_:)](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.
- [CFArrayGetValueAtIndex(\_:\_:)](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.

# CFArrayBSearchValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches an array for a value using a binary search algorithm.

## Declaration

```objectivec
extern CFIndex CFArrayBSearchValues(CFArrayRef theArray, CFRange range, const void *value, CFComparatorFunction comparator, void *context);
```

## Parameters

- `theArray`: An array, sorted from least to greatest according to the `comparator` function.
- `range`: The range within `theArray` to search. The range must not exceed the bounds of `theArray`. The range may be empty (length `0`).
- `value`: The value for which to find a match in `theArray`. If `value`, or any other value in `theArray`, is not understood by the `comparator` callback, the behavior is undefined.
- `comparator`: The function with the comparator function type signature that is used in the binary search operation to compare values in `theArray` with the given value. If there are values in the range that the `comparator` function does not expect or cannot properly compare, the behavior is undefined.
- `context`: A pointer-sized program-defined value, which is passed as the third argument to the `comparator` function, but is otherwise unused by this function. If the context is not what is expected by the `comparator` function, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The return value is one of the following:

<a id="discussion"></a>

## Discussion

- The index of a value that matched, if the target value matches one or more in the range.
- Greater than or equal to the end point of the range, if the value is greater than all the values in the range.
- The index of the value greater than the target value, if the value lies between two of (or less than all of) the values in the range.

## See Also

### Examining an Array

- [CFArrayContainsValue](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValues](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.
- [CFArrayGetValueAtIndex](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.
