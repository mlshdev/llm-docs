> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraygetvalues(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraygetvalues(_:_:_:))

# CFArrayGetValues(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with values from an array.

## Declaration

```swift
func CFArrayGetValues(_ theArray: CFArray!, _ range: CFRange, _ values: UnsafeMutablePointer<UnsafeRawPointer?>!)
```

## Parameters

- `theArray`: The array to examine.
- `range`: The range of values within `theArray` to retrieve. The range must lie within the bounds of `theArray`. The range may be empty (length `0`), in which case no values are put into the buffer `values`.
- `values`: A C array of pointer-sized values to be filled with values from `theArray`. The values in the C array are in the same order as they appear in `theArray`. If this value is not a valid pointer to a C array of at least `range.length` pointers, the behavior is undefined. If the values are Core Foundation objects, ownership follows [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining an Array

- [CFArrayBSearchValues(\_:\_:\_:\_:\_:)](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue(\_:\_:\_:)](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount(\_:)](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue(\_:\_:\_:)](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue(\_:\_:\_:)](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue(\_:\_:\_:)](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValueAtIndex(\_:\_:)](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.

# CFArrayGetValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with values from an array.

## Declaration

```objectivec
extern void CFArrayGetValues(CFArrayRef theArray, CFRange range, const void **values);
```

## Parameters

- `theArray`: The array to examine.
- `range`: The range of values within `theArray` to retrieve. The range must lie within the bounds of `theArray`. The range may be empty (length `0`), in which case no values are put into the buffer `values`.
- `values`: A C array of pointer-sized values to be filled with values from `theArray`. The values in the C array are in the same order as they appear in `theArray`. If this value is not a valid pointer to a C array of at least `range.length` pointers, the behavior is undefined. If the values are Core Foundation objects, ownership follows [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining an Array

- [CFArrayBSearchValues](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValueAtIndex](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.
