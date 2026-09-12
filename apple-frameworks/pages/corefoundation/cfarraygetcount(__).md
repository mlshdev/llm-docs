> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfarraygetcount(_:)](https://developer.apple.com/documentation/corefoundation/cfarraygetcount(_:))

# CFArrayGetCount(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values currently in an array.

## Declaration

```swift
func CFArrayGetCount(_ theArray: CFArray!) -> CFIndex
```

## Parameters

- `theArray`: The array to examine.

<a id="return-value"></a>

## Return Value

The number of values in `theArray`.

## See Also

### Examining an Array

- [CFArrayBSearchValues(\_:\_:\_:\_:\_:)](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue(\_:\_:\_:)](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCountOfValue(\_:\_:\_:)](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue(\_:\_:\_:)](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue(\_:\_:\_:)](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValues(\_:\_:\_:)](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.
- [CFArrayGetValueAtIndex(\_:\_:)](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.

# CFArrayGetCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values currently in an array.

## Declaration

```objectivec
extern CFIndex CFArrayGetCount(CFArrayRef theArray);
```

## Parameters

- `theArray`: The array to examine.

<a id="return-value"></a>

## Return Value

The number of values in `theArray`.

## See Also

### Examining an Array

- [CFArrayBSearchValues](cfarraybsearchvalues%28__________%29.md): Searches an array for a value using a binary search algorithm.
- [CFArrayContainsValue](cfarraycontainsvalue%28______%29.md): Reports whether or not a value is in an array.
- [CFArrayGetCountOfValue](cfarraygetcountofvalue%28______%29.md): Counts the number of times a given value occurs in an array.
- [CFArrayGetFirstIndexOfValue](cfarraygetfirstindexofvalue%28______%29.md): Searches an array forward for a value.
- [CFArrayGetLastIndexOfValue](cfarraygetlastindexofvalue%28______%29.md): Searches an array backward for a value.
- [CFArrayGetValues](cfarraygetvalues%28______%29.md): Fills a buffer with values from an array.
- [CFArrayGetValueAtIndex](cfarraygetvalueatindex%28____%29.md): Retrieves a value at a given index.
