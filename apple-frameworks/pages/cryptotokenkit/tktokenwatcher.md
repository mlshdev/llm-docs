> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenwatcher](https://developer.apple.com/documentation/cryptotokenkit/tktokenwatcher)

# TKTokenWatcher (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that tracks the tokens available in the system.

## Declaration

```swift
class TKTokenWatcher
```

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](using-cryptographic-assets-stored-on-a-smart-card.md)

<a id="overview"></a>

## Overview

Create a token watcher and register an insertion handler to be notified when tokens are added to the system. You can also add removal handlers for specific tokens to be notified when those tokens are removed from the system.

## Topics

### Creating Token Watchers

- [init()](tktokenwatcher/init%28%29.md): Initializes a token watcher.
- [init(insertionHandler:)](tktokenwatcher/init%28insertionhandler_%29.md): Deprecated. Initializes a token watcher with the specified insertion handler.

### Accessing Token Identifiers

- [tokenIDs](tktokenwatcher/tokenids.md): The token IDs currently available in the system.

### Configuring Handlers

- [addRemovalHandler(\_:forTokenID:)](tktokenwatcher/addremovalhandler%28__fortokenid_%29.md): Adds a removal handler for the specified token ID.
- [setInsertionHandler(\_:)](tktokenwatcher/setinsertionhandler%28__%29.md): Sets an insertion handler closure to be called when a new token is inserted into the system.

### Classes

- [TKTokenWatcher.TokenInfo](tktokenwatcher/tokeninfo.md)

### Instance Methods

- [tokenInfo(forTokenID:)](tktokenwatcher/tokeninfo%28fortokenid_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tokens

- [TKTokenDriver](tktokendriver.md): A base class for building token drivers.
- [TKToken](tktoken.md): A representation of a hardware-based cryptographic token.
- [TKTokenSession](tktokensession.md): A token session that manages the authentication state of a token.

# TKTokenWatcher (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that tracks the tokens available in the system.

## Declaration

```objectivec
@interface TKTokenWatcher : NSObject
```

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](using-cryptographic-assets-stored-on-a-smart-card.md)

<a id="overview"></a>

## Overview

Create a token watcher and register an insertion handler to be notified when tokens are added to the system. You can also add removal handlers for specific tokens to be notified when those tokens are removed from the system.

## Topics

### Creating Token Watchers

- [init](tktokenwatcher/init%28%29.md): Initializes a token watcher.
- [initWithInsertionHandler:](tktokenwatcher/init%28insertionhandler_%29.md): Deprecated. Initializes a token watcher with the specified insertion handler.

### Accessing Token Identifiers

- [tokenIDs](tktokenwatcher/tokenids.md): The token IDs currently available in the system.

### Configuring Handlers

- [addRemovalHandler:forTokenID:](tktokenwatcher/addremovalhandler%28__fortokenid_%29.md): Adds a removal handler for the specified token ID.
- [setInsertionHandler:](tktokenwatcher/setinsertionhandler%28__%29.md): Sets an insertion handler closure to be called when a new token is inserted into the system.

### Instance Methods

- [tokenInfoForTokenID:](tktokenwatcher/tokeninfo%28fortokenid_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Tokens

- [TKTokenDriver](tktokendriver.md): A base class for building token drivers.
- [TKToken](tktoken.md): A representation of a hardware-based cryptographic token.
- [TKTokenSession](tktokensession.md): A token session that manages the authentication state of a token.
