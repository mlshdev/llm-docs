> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraygetlastindexofvalue(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraygetlastindexofvalue(_:_:_:))

# CFArrayGetLastIndexOfValue(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches an array backward for a value.

## Declaration

```swift
func CFArrayGetLastIndexOfValue(_ theArray: CFArray!, _ range: CFRange, _ value: UnsafeRawPointer!) -> CFIndex
```

## Parameters

- `theArray`: The array to examine.
- `range`: The range within `theArray` to search. The range must not exceed the bounds of `theArray`. The range may be empty (length `0`). The search progresses from the highest index defined by the range to the lowest.
- `value`: The value for which to find a match in `theArray`. The equal callback provided when `theArray` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If value, or any other value in `theArray`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The highest index of the matching values in the range, or `-1` if no value in the range matched.

## See Also

### Examining an Array

- [CFArrayBSearchValues(\_:\_:\_:\_:\_:)](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue(\_:\_:\_:)](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount(\_:)](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue(\_:\_:\_:)](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue(\_:\_:\_:)](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetValues(\_:\_:\_:)](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.
- [CFArrayGetValueAtIndex(\_:\_:)](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.

# CFArrayGetLastIndexOfValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches an array backward for a value.

## Declaration

```objectivec
extern CFIndex CFArrayGetLastIndexOfValue(CFArrayRef theArray, CFRange range, const void *value);
```

## Parameters

- `theArray`: The array to examine.
- `range`: The range within `theArray` to search. The range must not exceed the bounds of `theArray`. The range may be empty (length `0`). The search progresses from the highest index defined by the range to the lowest.
- `value`: The value for which to find a match in `theArray`. The equal callback provided when `theArray` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If value, or any other value in `theArray`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The highest index of the matching values in the range, or `-1` if no value in the range matched.

## See Also

### Examining an Array

- [CFArrayBSearchValues](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetValues](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.
- [CFArrayGetValueAtIndex](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.
