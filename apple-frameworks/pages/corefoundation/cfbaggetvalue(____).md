> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbaggetvalue(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbaggetvalue(_:_:))

# CFBagGetValue(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a requested value from a bag.

## Declaration

```swift
func CFBagGetValue(_ theBag: CFBag!, _ value: UnsafeRawPointer!) -> UnsafeRawPointer!
```

## Parameters

- `theBag`: The bag to examine.
- `value`: The value for which to find matches in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

A pointer to `value`, or `NULL` if `value` is not in `theBag`. If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the value returned may not have the same pointer equality as `value`.

## See Also

### Examining a Bag

- [CFBagContainsValue(\_:\_:)](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount(\_:)](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue(\_:\_:)](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValueIfPresent(\_:\_:\_:)](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues(\_:\_:)](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.

# CFBagGetValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a requested value from a bag.

## Declaration

```objectivec
extern const void *CFBagGetValue(CFBagRef theBag, const void *value);
```

## Parameters

- `theBag`: The bag to examine.
- `value`: The value for which to find matches in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `value`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.

<a id="return-value"></a>

## Return Value

A pointer to `value`, or `NULL` if `value` is not in `theBag`. If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the value returned may not have the same pointer equality as `value`.

## See Also

### Examining a Bag

- [CFBagContainsValue](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValueIfPresent](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.
