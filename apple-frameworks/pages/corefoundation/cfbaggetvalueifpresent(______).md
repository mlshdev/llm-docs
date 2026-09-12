> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbaggetvalueifpresent(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfbaggetvalueifpresent(_:_:_:))

# CFBagGetValueIfPresent(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a value is in a bag, and returns that value indirectly if it exists.

## Declaration

```swift
func CFBagGetValueIfPresent(_ theBag: CFBag!, _ candidate: UnsafeRawPointer!, _ value: UnsafeMutablePointer<UnsafeRawPointer?>!) -> Bool
```

## Parameters

- `theBag`: The bag to be searched.
- `candidate`: The value for which to find matches in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `candidate`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.
- `value`: A pointer to a value object. Set to the matching value if it exists in the bag, otherwise `NULL`. If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if `value` is present in `theBag`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the value returned in `value` may not have the same pointer equality as `candidate`.

## See Also

### Examining a Bag

- [CFBagContainsValue(\_:\_:)](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount(\_:)](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue(\_:\_:)](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue(\_:\_:)](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValues(\_:\_:)](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.

# CFBagGetValueIfPresent (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Reports whether or not a value is in a bag, and returns that value indirectly if it exists.

## Declaration

```objectivec
extern Boolean CFBagGetValueIfPresent(CFBagRef theBag, const void *candidate, const void **value);
```

## Parameters

- `theBag`: The bag to be searched.
- `candidate`: The value for which to find matches in `theBag`. The equal callback provided when `theBag` was created is used to compare. If the equal callback was `NULL`, pointer equality (in C, ==) is used. If `candidate`, or any other value in `theBag`, is not understood by the equal callback, the behavior is undefined.
- `value`: A pointer to a value object. Set to the matching value if it exists in the bag, otherwise `NULL`. If the value is a Core Foundation object, ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if `value` is present in `theBag`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Depending on the implementation of the equal callback specified when creating `theBag`, the value returned in `value` may not have the same pointer equality as `candidate`.

## See Also

### Examining a Bag

- [CFBagContainsValue](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValues](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.
