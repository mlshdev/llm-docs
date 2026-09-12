> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbaggetcountofvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbaggetcountofvalue(_:_:))

# CFBagGetCountOfValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of times a value occurs in a bag.

## Declaration

```swift
func CFBagGetCountOfValue(_ theBag: CFBag!, _ value: UnsafeRawPointer!) -> CFIndex
```

## Parameters

- `theBag`: The bag to examine.
- `value`: The value for which to find matches in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The number of times `value` occurs in `theBag`.

## See Also

### Examining a Bag

- [CFBagContainsValue(\_:\_:)](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount(\_:)](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetValue(\_:\_:)](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent(\_:\_:\_:)](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues(\_:\_:)](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.

# CFBagGetCountOfValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of times a value occurs in a bag.

## Declaration

```objectivec
extern CFIndex CFBagGetCountOfValue(CFBagRef theBag, const void *value);
```

## Parameters

- `theBag`: The bag to examine.
- `value`: The value for which to find matches in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

The number of times `value` occurs in `theBag`.

## See Also

### Examining a Bag

- [CFBagContainsValue](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetValue](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.
