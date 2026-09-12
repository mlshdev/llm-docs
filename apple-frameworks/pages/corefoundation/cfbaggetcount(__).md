> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfbaggetcount(_:)](https://developer.apple.com/documentation/corefoundation/cfbaggetcount(_:))

# CFBagGetCount(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values currently in a bag.

## Declaration

```swift
func CFBagGetCount(_ theBag: CFBag!) -> CFIndex
```

## Parameters

- `theBag`: The bag to examine.

<a id="return-value"></a>

## Return Value

The number of values in `theBag`.

## See Also

### Examining a Bag

- [CFBagContainsValue(\_:\_:)](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCountOfValue(\_:\_:)](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue(\_:\_:)](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent(\_:\_:\_:)](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues(\_:\_:)](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.

# CFBagGetCount (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of values currently in a bag.

## Declaration

```objectivec
extern CFIndex CFBagGetCount(CFBagRef theBag);
```

## Parameters

- `theBag`: The bag to examine.

<a id="return-value"></a>

## Return Value

The number of values in `theBag`.

## See Also

### Examining a Bag

- [CFBagContainsValue](cfbagcontainsvalue%28____%29.md): Reports whether or not a value is in a bag.
- [CFBagGetCountOfValue](cfbaggetcountofvalue%28____%29.md): Returns the number of times a value occurs in a bag.
- [CFBagGetValue](cfbaggetvalue%28____%29.md): Returns a requested value from a bag.
- [CFBagGetValueIfPresent](cfbaggetvalueifpresent%28______%29.md): Reports whether or not a value is in a bag, and returns that value indirectly if it exists.
- [CFBagGetValues](cfbaggetvalues%28____%29.md): Fills a buffer with values from a bag.
