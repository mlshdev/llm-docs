> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsselectorfromstring(_:)](https://developer.apple.com/documentation/foundation/nsselectorfromstring(_:))

# NSSelectorFromString(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the selector with a given name.

## Declaration

```swift
func NSSelectorFromString(_ aSelectorName: String) -> Selector
```

## Parameters

- `aSelectorName`: A string of any length, with any characters, that represents the name of a selector.

<a id="return-value"></a>

## Return Value

The selector named by `aSelectorName`. If `aSelectorName` is `nil`, or cannot be converted to UTF-8 (this should be only due to insufficient memory), returns `(SEL)0`.

<a id="Discussion"></a>

## Discussion

To make a selector, [NSSelectorFromString(\_:)](nsselectorfromstring%28__%29.md) passes a UTF-8 encoded character representation of `aSelectorName` to [sel_registerName(\_:)](../objectivec/sel_registername%28__%29.md) and returns the value returned by that function. Note, therefore, that if the selector does not exist it is registered and the newly-registered selector is returned.

Recall that a colon (”:”) is part of a method name; `setHeight` is not the same as `setHeight:`.

## See Also

### Type Lookup

- [NSClassFromString(\_:)](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass(\_:)](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSStringFromSelector(\_:)](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol(\_:)](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString(\_:)](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.

# NSSelectorFromString (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the selector with a given name.

## Declaration

```objectivec
extern SELNSSelectorFromString(NSString *aSelectorName);
```

## Parameters

- `aSelectorName`: A string of any length, with any characters, that represents the name of a selector.

<a id="return-value"></a>

## Return Value

The selector named by `aSelectorName`. If `aSelectorName` is `nil`, or cannot be converted to UTF-8 (this should be only due to insufficient memory), returns `(SEL)0`.

<a id="Discussion"></a>

## Discussion

To make a selector, [NSSelectorFromString](nsselectorfromstring%28__%29.md) passes a UTF-8 encoded character representation of `aSelectorName` to [sel_registerName](../objectivec/sel_registername%28__%29.md) and returns the value returned by that function. Note, therefore, that if the selector does not exist it is registered and the newly-registered selector is returned.

Recall that a colon (”:”) is part of a method name; `setHeight` is not the same as `setHeight:`.

## See Also

### Type Lookup

- [NSClassFromString](nsclassfromstring%28__%29.md): Obtains a class by name.
- [NSStringFromClass](nsstringfromclass%28__%29.md): Returns the name of a class as a string.
- [NSStringFromSelector](nsstringfromselector%28__%29.md): Returns a string representation of a given selector.
- [NSStringFromProtocol](nsstringfromprotocol%28__%29.md): Returns the name of a protocol as a string.
- [NSProtocolFromString](nsprotocolfromstring%28__%29.md): Returns a the protocol with a given name.
