> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbaggetvalues(_:_:)](https://developer.apple.com/documentation/corefoundation/cfbaggetvalues(_:_:))

# CFBagGetValues(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with values from a bag.

## Declaration

```swift
func CFBagGetValues(_ theBag: CFBag!, _ values: UnsafeMutablePointer<UnsafeRawPointer?>!)
```

## Parameters

- `theBag`: The bag to examine.
- `values`: A C array of pointer-sized values to be filled with values from `theBag`. The value must be a valid C array of the appropriate type and size (that is, a size equal to the count of `theBag`).

## See Also

### Examining a Bag

- [CFBagContainsValue(\_:\_:)](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount(\_:)](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue(\_:\_:)](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue(\_:\_:)](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent(\_:\_:\_:)](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.

# CFBagGetValues (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Fills a buffer with values from a bag.

## Declaration

```objectivec
extern void CFBagGetValues(CFBagRef theBag, const void **values);
```

## Parameters

- `theBag`: The bag to examine.
- `values`: A C array of pointer-sized values to be filled with values from `theBag`. The value must be a valid C array of the appropriate type and size (that is, a size equal to the count of `theBag`).

## See Also

### Examining a Bag

- [CFBagContainsValue](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCount](cfbaggetcount%28__%29.md): Returns the number of values currently in a bag.
- [CFBagGetCountOfValue](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
