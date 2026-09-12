> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/streamsocksproxyconfiguration/portkey](https://developer.apple.com/documentation/foundation/streamsocksproxyconfiguration/portkey)

# portKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.

## Declaration

```swift
static let portKey: StreamSOCKSProxyConfiguration
```

## See Also

### Type Properties

- [hostKey](hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [passwordKey](passwordkey.md): Value is an `NSString` object containing the user’s password.
- [userKey](userkey.md): Value is an `NSString` object containing the user’s name.
- [versionKey](versionkey.md): Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.

# NSStreamSOCKSProxyPortKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSNumber` object containing an integer that represents the port on which the proxy listens.

## Declaration

```objectivec
extern NSStreamSOCKSProxyConfiguration const NSStreamSOCKSProxyPortKey;
```

## See Also

### Type Properties

- [NSStreamSOCKSProxyHostKey](hostkey.md): Value is an `NSString` object that represents the SOCKS proxy host.
- [NSStreamSOCKSProxyPasswordKey](passwordkey.md): Value is an `NSString` object containing the user’s password.
- [NSStreamSOCKSProxyUserKey](userkey.md): Value is an `NSString` object containing the user’s name.
- [NSStreamSOCKSProxyVersionKey](versionkey.md): Value is either `NSStreamSOCKSProxyVersion4` or `NSStreamSOCKSProxyVersion5`.
