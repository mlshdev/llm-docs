> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstringfromclass(_:)](https://developer.apple.com/documentation/foundation/nsstringfromclass(_:))

# NSStringFromClass(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the name of a class as a string.

## Declaration

```swift
func NSStringFromClass(_ aClass: AnyClass) -> String
```

## Parameters

- `aClass`: A class.

<a id="return-value"></a>

## Return Value

A string containing the name of `aClass`. If `aClass` is `nil`, returns `nil`.

## See Also

### Type Lookup

- [NSClassFromString(\_:)](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSSelectorFromString(\_:)](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector(\_:)](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol(\_:)](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString(\_:)](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.

# NSStringFromClass (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the name of a class as a string.

## Declaration

```objectivec
extern NSString *NSStringFromClass(Class aClass);
```

## Parameters

- `aClass`: A class.

<a id="return-value"></a>

## Return Value

A string containing the name of `aClass`. If `aClass` is `nil`, returns `nil`.

## See Also

### Type Lookup

- [NSClassFromString](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSSelectorFromString](nsselectorfromstring%28__%29.md): Returns the selector with a given name.
- [NSStringFromSelector](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.
