> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtokensession](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokensession)

# TKSmartCardTokenSession (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token session that is based on a smart card token.

## Declaration

```swift
class TKSmartCardTokenSession
```

## Mentioned In

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md)

<a id="overview"></a>

## Overview

You can use the [smartCard](tksmartcardtokensession/smartcard.md) property to access and send APDUs to the underlying smart card.

## Topics

### Accessing the Smart Card

- [smartCard](tksmartcardtokensession/smartcard.md): Deprecated. The smart card for the active exclusive session and selected application.

### Instance Methods

- [getSmartCard()](tksmartcardtokensession/getsmartcard%28%29.md)

## Relationships

### Inherits From

- [TKTokenSession](tktokensession.md)

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
- [TKSmartCardTokenDriver](tksmartcardtokendriver.md): The driver that acts as an entry point for smart card app extensions.
- [TKSmartCardToken](tksmartcardtoken.md): A representation of a smart card based cryptographic token.

# TKSmartCardTokenSession (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token session that is based on a smart card token.

## Declaration

```objectivec
@interface TKSmartCardTokenSession : TKTokenSession
```

## Mentioned In

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md)

<a id="overview"></a>

## Overview

You can use the [smartCard](tksmartcardtokensession/smartcard.md) property to access and send APDUs to the underlying smart card.

## Topics

### Accessing the Smart Card

- [smartCard](tksmartcardtokensession/smartcard.md): Deprecated. The smart card for the active exclusive session and selected application.

### Instance Methods

- [getSmartCardWithError:](tksmartcardtokensession/getsmartcard%28%29.md)

## Relationships

### Inherits From

- [TKTokenSession](tktokensession.md)

## See Also

### Smart Card App Extensions

- [Authenticating Users with a Cryptographic Token](authenticating-users-with-a-cryptographic-token.md): Grant access to user accounts and the keychain by creating a smart card app extension.
- [Configuring Smart Card Authentication](configuring-smart-card-authentication.md): Set preferences for smart card authentication operations, including those on managed devices.
- [TKSmartCardTokenDriver](tksmartcardtokendriver.md): The driver that acts as an entry point for smart card app extensions.
- [TKSmartCardToken](tksmartcardtoken.md): A representation of a smart card based cryptographic token.
