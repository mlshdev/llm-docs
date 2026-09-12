> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsprotocolfromstring(_:)](https://developer.apple.com/documentation/foundation/nsprotocolfromstring(_:))

# NSProtocolFromString(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a the protocol with a given name.

## Declaration

```swift
func NSProtocolFromString(_ namestr: String) -> Protocol?
```

## Parameters

- `namestr`: The name of a protocol.

<a id="return-value"></a>

## Return Value

The protocol object named by `namestr`, or `nil` if no protocol by that name is currently loaded. If `namestr` is `nil`, returns `nil`.

## See Also

### Type Lookup

- [NSClassFromString(\_:)](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass(\_:)](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString(\_:)](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector(\_:)](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol(\_:)](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.

# NSProtocolFromString (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a the protocol with a given name.

## Declaration

```objectivec
extern Protocol *NSProtocolFromString(NSString *namestr);
```

## Parameters

- `namestr`: The name of a protocol.

<a id="return-value"></a>

## Return Value

The protocol object named by `namestr`, or `nil` if no protocol by that name is currently loaded. If `namestr` is `nil`, returns `nil`.

## See Also

### Type Lookup

- [NSClassFromString](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
