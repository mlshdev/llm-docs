> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamsocksproxyconfiguration/versionkey](https://developer.apple.com/documentation/foundation/streamsocksproxyconfiguration/versionkey)

# versionKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.

## Declaration

```swift
static let versionKey: StreamSOCKSProxyConfiguration
```

<a id="Discussion"></a>

## Discussion

If this key is not present, `NSStreamSOCKSProxyVersion5` is used by default.

## See Also

### Type Properties

- [hostKey](hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [passwordKey](passwordkey.md): Value is an `NSString` object containing the user’s password.
- [portKey](portkey.md): Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.
- [userKey](userkey.md): Value is an `NSString` object containing the user’s name.

# NSStreamSOCKSProxyVersionKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.

## Declaration

```objectivec
extern NSStreamSOCKSProxyConfiguration const NSStreamSOCKSProxyVersionKey;
```

<a id="Discussion"></a>

## Discussion

If this key is not present, `NSStreamSOCKSProxyVersion5` is used by default.

## See Also

### Type Properties

- [NSStreamSOCKSProxyHostKey](hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [NSStreamSOCKSProxyPasswordKey](passwordkey.md): Value is an `NSString` object containing the user’s password.
- [NSStreamSOCKSProxyPortKey](portkey.md): Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.
- [NSStreamSOCKSProxyUserKey](userkey.md): Value is an `NSString` object containing the user’s name.
