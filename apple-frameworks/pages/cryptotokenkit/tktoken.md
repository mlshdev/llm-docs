> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken](https://developer.apple.com/documentation/cryptotokenkit/tktoken)

# TKToken (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of a hardware-based cryptographic token.

## Declaration

```swift
class TKToken
```

<a id="overview"></a>

## Overview

> **Note**

>  When working with smart card tokens, use or inherit from the [TKSmartCardToken](tksmartcardtoken.md) subclass instead.

## Topics

### Creating Tokens

- [init(tokenDriver:instanceID:)](tktoken/init%28tokendriver_instanceid_%29.md): Initializes a token with the driver you specify.
- [TKToken.InstanceID](tktoken/instanceid.md): A type that represents the instance identifier of a token.

### Responding to Session Creation

- [delegate](tktoken/delegate.md): The token delegate.
- [TKTokenDelegate](tktokendelegate.md): The interface that a token delegate implements to respond to session creation events.

### Accessing the Driver

- [tokenDriver](tktoken/tokendriver.md): The token driver.

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.

### Configuring the Token

- [configuration](tktoken/configuration-swift.property.md): The current configuration for a token.
- [TKToken.Configuration](tktoken/configuration-swift.class.md): A token’s configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardToken](tksmartcardtoken.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tokens

- [TKTokenWatcher](tktokenwatcher.md): An object that tracks the tokens available in the system.
- [TKTokenDriver](tktokendriver.md): A base class for building token drivers.
- [TKTokenSession](tktokensession.md): A token session that manages the authentication state of a token.

# TKToken (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A representation of a hardware-based cryptographic token.

## Declaration

```objectivec
@interface TKToken : NSObject
```

<a id="overview"></a>

## Overview

> **Note**

>  When working with smart card tokens, use or inherit from the [TKSmartCardToken](tksmartcardtoken.md) subclass instead.

## Topics

### Creating Tokens

- [initWithTokenDriver:instanceID:](tktoken/init%28tokendriver_instanceid_%29.md): Initializes a token with the driver you specify.
- [TKTokenInstanceID](tktoken/instanceid.md): A type that represents the instance identifier of a token.

### Responding to Session Creation

- [delegate](tktoken/delegate.md): The token delegate.
- [TKTokenDelegate](tktokendelegate.md): The interface that a token delegate implements to respond to session creation events.

### Accessing the Driver

- [tokenDriver](tktoken/tokendriver.md): The token driver.

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainItem](tktokenkeychainitem.md): An abstract base class for managing a token’s contents as keychain items.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.

### Configuring the Token

- [configuration](tktoken/configuration-swift.property.md): The current configuration for a token.
- [TKTokenConfiguration](tktoken/configuration-swift.class.md): A token’s configuration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardToken](tksmartcardtoken.md)

## See Also

### Tokens

- [TKTokenWatcher](tktokenwatcher.md): An object that tracks the tokens available in the system.
- [TKTokenDriver](tktokendriver.md): A base class for building token drivers.
- [TKTokenSession](tktokensession.md): A token session that manages the authentication state of a token.
