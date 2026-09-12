> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassfromstring(_:)](https://developer.apple.com/documentation/foundation/nsclassfromstring(_:))

# NSClassFromString(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Obtains a class by name.

## Declaration

```swift
func NSClassFromString(_ aClassName: String) -> AnyClass?
```

## Parameters

- `aClassName`: The name of a class.

<a id="return-value"></a>

## Return Value

The class object named by `aClassName`, or `nil` if no class by that name is currently loaded. If `aClassName` is `nil`, returns `nil`.

## See Also

### Type Lookup

- [NSStringFromClass(\_:)](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString(\_:)](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector(\_:)](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol(\_:)](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString(\_:)](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.

# NSClassFromString (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Obtains a class by name.

## Declaration

```objectivec
extern ClassNSClassFromString(NSString *aClassName);
```

## Parameters

- `aClassName`: The name of a class.

<a id="return-value"></a>

## Return Value

The class object named by `aClassName`, or `nil` if no class by that name is currently loaded. If `aClassName` is `nil`, returns `nil`.

## See Also

### Type Lookup

- [NSStringFromClass](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSSelectorFromString](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.
