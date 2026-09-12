> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtokendriver](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokendriver)

# TKSmartCardTokenDriver (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The driver that acts as an entry point for smart card app extensions.

## Declaration

```swift
class TKSmartCardTokenDriver
```

## Mentioned In

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md)

## Topics

### Responding to Token Creation

- [TKSmartCardTokenDriverDelegate](tksmartcardtokendriverdelegate.md): The interface that a smart card token driver delegate implements to respond to token creation events.

## Relationships

### Inherits From

- [TKTokenDriver](tktokendriver.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Smart Card App Extensions

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md): Grant access to user accounts and the keychain by creating a smart card app extension.
- [Configuring Smart Card Authentication](configuring-smart-card-authentication.md): Set preferences for smart card authentication operations, including those on managed devices.
- [TKSmartCardToken](tksmartcardtoken.md): A representation of a smart card based cryptographic token.
- [TKSmartCardTokenSession](tksmartcardtokensession.md): A token session that is based on a smart card token.

# TKSmartCardTokenDriver (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The driver that acts as an entry point for smart card app extensions.

## Declaration

```objectivec
@interface TKSmartCardTokenDriver : TKTokenDriver
```

## Mentioned In

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md)

## Topics

### Responding to Token Creation

- [TKSmartCardTokenDriverDelegate](tksmartcardtokendriverdelegate.md): The interface that a smart card token driver delegate implements to respond to token creation events.

## Relationships

### Inherits From

- [TKTokenDriver](tktokendriver.md)

## See Also

### Smart Card App Extensions

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md): Grant access to user accounts and the keychain by creating a smart card app extension.
- [Configuring Smart Card Authentication](configuring-smart-card-authentication.md): Set preferences for smart card authentication operations, including those on managed devices.
- [TKSmartCardToken](tksmartcardtoken.md): A representation of a smart card based cryptographic token.
- [TKSmartCardTokenSession](tksmartcardtokensession.md): A token session that is based on a smart card token.
