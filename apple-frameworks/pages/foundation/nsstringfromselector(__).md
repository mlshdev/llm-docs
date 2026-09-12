> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstringfromselector(_:)](https://developer.apple.com/documentation/foundation/nsstringfromselector(_:))

# NSStringFromSelector(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of a given selector.

## Declaration

```swift
func NSStringFromSelector(_ aSelector: Selector) -> String
```

## Parameters

- `aSelector`: A selector.

<a id="return-value"></a>

## Return Value

A string representation of `aSelector`.

## See Also

### Type Lookup

- [NSClassFromString(\_:)](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass(\_:)](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString(\_:)](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromProtocol(\_:)](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString(\_:)](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.

# NSStringFromSelector (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of a given selector.

## Declaration

```objectivec
extern NSString *NSStringFromSelector(SEL aSelector);
```

## Parameters

- `aSelector`: A selector.

<a id="return-value"></a>

## Return Value

A string representation of `aSelector`.

## See Also

### Type Lookup

- [NSClassFromString](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromProtocol](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.
