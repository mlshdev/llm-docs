> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstringfromprotocol(_:)](https://developer.apple.com/documentation/foundation/nsstringfromprotocol(_:))

# NSStringFromProtocol(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the name of a protocol as a string.

## Declaration

```swift
func NSStringFromProtocol(_ proto: Protocol) -> String
```

## Parameters

- `proto`: A protocol.

<a id="return-value"></a>

## Return Value

A string containing the name of `proto`.

## See Also

### Type Lookup

- [NSClassFromString(\_:)](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass(\_:)](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString(\_:)](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector(\_:)](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSProtocolFromString(\_:)](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.

# NSStringFromProtocol (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the name of a protocol as a string.

## Declaration

```objectivec
extern NSString *NSStringFromProtocol(Protocol *proto);
```

## Parameters

- `proto`: A protocol.

<a id="return-value"></a>

## Return Value

A string containing the name of `proto`.

## See Also

### Type Lookup

- [NSClassFromString](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSProtocolFromString](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.
