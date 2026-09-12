> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamsocksproxyconfiguration/passwordkey](https://developer.apple.com/documentation/foundation/streamsocksproxyconfiguration/passwordkey)

# passwordKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSString` object containing the user’s password.

## Declaration

```swift
static let passwordKey: StreamSOCKSProxyConfiguration
```

## See Also

### Type Properties

- [hostKey](hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [portKey](portkey.md): Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.
- [userKey](userkey.md): Value is an `NSString` object containing the user’s name.
- [versionKey](versionkey.md): Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.

# NSStreamSOCKSProxyPasswordKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSString` object containing the user’s password.

## Declaration

```objectivec
extern NSStreamSOCKSProxyConfiguration const NSStreamSOCKSProxyPasswordKey;
```

## See Also

### Type Properties

- [NSStreamSOCKSProxyHostKey](hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [NSStreamSOCKSProxyPortKey](portkey.md): Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.
- [NSStreamSOCKSProxyUserKey](userkey.md): Value is an `NSString` object containing the user’s name.
- [NSStreamSOCKSProxyVersionKey](versionkey.md): Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.
