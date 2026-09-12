> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraygetvalueatindex(_:_:)](https://developer.apple.com/documentation/corefoundation/cfarraygetvalueatindex(_:_:))

# CFArrayGetValueAtIndex(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Retrieves a value at a given index.

## Declaration

```swift
func CFArrayGetValueAtIndex(_ theArray: CFArray!, _ idx: CFIndex) -> UnsafeRawPointer!
```

## Parameters

- `theArray`: The array to examine.
- `idx`: The index of the value to retrieve. If the index is outside the index space of `theArray` (`0` to `N-1` inclusive (where `N` is the count of `theArray`), the behavior is undefined.

<a id="return-value"></a>

## Return Value

The value at the `idx` index in `theArray`. If the return value is a Core Foundation Object, ownership follows [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining an Array

- [CFArrayBSearchValues(\_:\_:\_:\_:\_:)](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue(\_:\_:\_:)](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount(\_:)](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue(\_:\_:\_:)](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue(\_:\_:\_:)](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue(\_:\_:\_:)](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValues(\_:\_:\_:)](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.

# CFArrayGetValueAtIndex (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Retrieves a value at a given index.

## Declaration

```objectivec
extern const void *CFArrayGetValueAtIndex(CFArrayRef theArray, CFIndex idx);
```

## Parameters

- `theArray`: The array to examine.
- `idx`: The index of the value to retrieve. If the index is outside the index space of `theArray` (`0` to `N-1` inclusive (where `N` is the count of `theArray`), the behavior is undefined.

<a id="return-value"></a>

## Return Value

The value at the `idx` index in `theArray`. If the return value is a Core Foundation Object, ownership follows [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

## See Also

### Examining an Array

- [CFArrayBSearchValues](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCount](cfarraygetcount%28__%29.md): Returns the number of values currently in an array.
- [CFArrayGetCountOfValue](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValues](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.
