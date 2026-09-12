> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriver](https://developer.apple.com/documentation/cryptotokenkit/tktokendriver)

# TKTokenDriver (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A base class for building token drivers.

## Declaration

```swift
class TKTokenDriver
```

<a id="overview"></a>

## Overview

When using the [TKTokenDriver](tktokendriver.md) class, implement the [TKTokenDriverDelegate](tktokendriverdelegate.md) protocol with the [tokenDriver(\_:tokenFor:)](tktokendriverdelegate/tokendriver%28__tokenfor_%29.md) method, which the system invokes when it requests the creation of a token instance. After you create the token driver, it can examine [keychainItems](tktoken/configuration-swift.class/keychainitems.md) and [configurationData](tktoken/configuration-swift.class/configurationdata.md) to implement your desired functionality.

An implementation can also access its associated token configuration using the [TKToken.Configuration](tktoken/configuration-swift.class.md) property.

> **Note**

>  When working with smart card tokens, use or inherit from the [TKSmartCardTokenDriver](tksmartcardtokendriver.md) subclass instead.

## Topics

### Responding to Token Creation

- [delegate](tktokendriver/delegate.md): The token driver delegate.
- [TKTokenDriverDelegate](tktokendriverdelegate.md): The interface that a token driver delegate implements to respond to token creation events.
- [TKTokenDriver.ClassID](tktokendriver/classid.md): The type of the class identifier for the token driver.
- [TKTokenDriver.Configuration](tktokendriver/configuration.md): A configuration for one class of token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardTokenDriver](tksmartcardtokendriver.md)

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
- [TKToken](tktoken.md): A representation of a hardware-based cryptographic token.
- [TKTokenSession](tktokensession.md): A token session that manages the authentication state of a token.

# TKTokenDriver (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A base class for building token drivers.

## Declaration

```objectivec
@interface TKTokenDriver : NSObject
```

<a id="overview"></a>

## Overview

When using the [TKTokenDriver](tktokendriver.md) class, implement the [TKTokenDriverDelegate](tktokendriverdelegate.md) protocol with the [tokenDriver:tokenForConfiguration:error:](tktokendriverdelegate/tokendriver%28__tokenfor_%29.md) method, which the system invokes when it requests the creation of a token instance. After you create the token driver, it can examine [keychainItems](tktoken/configuration-swift.class/keychainitems.md) and [configurationData](tktoken/configuration-swift.class/configurationdata.md) to implement your desired functionality.

An implementation can also access its associated token configuration using the [TKTokenConfiguration](tktoken/configuration-swift.class.md) property.

> **Note**

>  When working with smart card tokens, use or inherit from the [TKSmartCardTokenDriver](tksmartcardtokendriver.md) subclass instead.

## Topics

### Responding to Token Creation

- [delegate](tktokendriver/delegate.md): The token driver delegate.
- [TKTokenDriverDelegate](tktokendriverdelegate.md): The interface that a token driver delegate implements to respond to token creation events.
- [TKTokenDriverClassID](tktokendriver/classid.md): The type of the class identifier for the token driver.
- [TKTokenDriverConfiguration](tktokendriver/configuration.md): A configuration for one class of token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardTokenDriver](tksmartcardtokendriver.md)

## See Also

### Tokens

- [TKTokenWatcher](tktokenwatcher.md): An object that tracks the tokens available in the system.
- [TKToken](tktoken.md): A representation of a hardware-based cryptographic token.
- [TKTokenSession](tktokensession.md): A token session that manages the authentication state of a token.
