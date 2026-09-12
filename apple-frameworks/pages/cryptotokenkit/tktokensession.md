> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensession](https://developer.apple.com/documentation/cryptotokenkit/tktokensession)

# TKTokenSession (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token session that manages the authentication state of a token.

## Declaration

```swift
class TKTokenSession
```

<a id="overview"></a>

## Overview

A token session communicates with its delegate to perform operations with its token that are bound to the authentication state.

A session is always instantiated by a [TKToken](tktoken.md) instance through the token’s delegate when the framework detects access to the token from a new authentication session.

> **Important**

>  Never share the authentication status of a token, such as the PIN entered to unlock a smart card, with other token sessions.

## Topics

### Creating Token Sessions

- [init(token:)](tktokensession/init%28token_%29.md): Initializes a token session with the specified token.

### Responding to Authentication Events

- [delegate](tktokensession/delegate.md): The token session delegate.
- [TKTokenSessionDelegate](tktokensessiondelegate.md): The interface that a session instance delegate implements to respond to token session authentication events.

### Accessing the Token

- [token](tktokensession/token.md): The token to which the session is bound.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardTokenSession](tksmartcardtokensession.md)

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
- [TKToken](tktoken.md): A representation of a hardware-based cryptographic token.

# TKTokenSession (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A token session that manages the authentication state of a token.

## Declaration

```objectivec
@interface TKTokenSession : NSObject
```

<a id="overview"></a>

## Overview

A token session communicates with its delegate to perform operations with its token that are bound to the authentication state.

A session is always instantiated by a [TKToken](tktoken.md) instance through the token’s delegate when the framework detects access to the token from a new authentication session.

> **Important**

>  Never share the authentication status of a token, such as the PIN entered to unlock a smart card, with other token sessions.

## Topics

### Creating Token Sessions

- [initWithToken:](tktokensession/init%28token_%29.md): Initializes a token session with the specified token.

### Responding to Authentication Events

- [delegate](tktokensession/delegate.md): The token session delegate.
- [TKTokenSessionDelegate](tktokensessiondelegate.md): The interface that a session instance delegate implements to respond to token session authentication events.

### Accessing the Token

- [token](tktokensession/token.md): The token to which the session is bound.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKSmartCardTokenSession](tksmartcardtokensession.md)

## See Also

### Tokens

- [TKTokenWatcher](tktokenwatcher.md): An object that tracks the tokens available in the system.
- [TKTokenDriver](tktokendriver.md): A base class for building token drivers.
- [TKToken](tktoken.md): A representation of a hardware-based cryptographic token.
