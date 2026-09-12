> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbagcontainsvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbagcontainsvalue(_:_:))

# CFBagContainsValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a value is in a bag.

## Declaration

```swift
func CFBagContainsValue(_ theBag: CFBag!, _ value: UnsafeRawPointer!) -> Bool
```

## Parameters

- `theBag`: The bag to examine.
- `value`: The value to match in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

`true` if `value` is contained in `theBag`, otherwise `false`.

## See Also

### Examining a Bag

- [CFBagGetCount(\_:)](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue(\_:\_:)](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue(\_:\_:)](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent(\_:\_:\_:)](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues(\_:\_:)](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.

# CFBagContainsValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a value is in a bag.

## Declaration

```objectivec
extern Boolean CFBagContainsValue(CFBagRef theBag, const void *value);
```

## Parameters

- `theBag`: The bag to examine.
- `value`: The value to match in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

`true` if `value` is contained in `theBag`, otherwise `false`.

## See Also

### Examining a Bag

- [CFBagGetCount](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.
