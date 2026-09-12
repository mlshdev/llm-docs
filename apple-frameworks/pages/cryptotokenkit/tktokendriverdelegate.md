> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriverdelegate](https://developer.apple.com/documentation/cryptotokenkit/tktokendriverdelegate)

# TKTokenDriverDelegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface that a token driver delegate implements to respond to token creation events.

## Declaration

```swift
protocol TKTokenDriverDelegate : NSObjectProtocol
```

## Topics

### Creating and Removing Tokens

- [tokenDriver(\_:terminateToken:)](tktokendriverdelegate/tokendriver%28__terminatetoken_%29.md): Tells the delegate to terminate the token you specify.
- [tokenDriver(\_:tokenFor:)](tktokendriverdelegate/tokendriver%28__tokenfor_%29.md): Creates a new token for the configuration you specify.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [TKSmartCardTokenDriverDelegate](tksmartcardtokendriverdelegate.md)

## See Also

### Responding to Token Creation

- [delegate](tktokendriver/delegate.md): The token driver delegate.
- [TKTokenDriver.ClassID](tktokendriver/classid.md): The type of the class identifier for the token driver.
- [TKTokenDriver.Configuration](tktokendriver/configuration.md): A configuration for one class of token.

# TKTokenDriverDelegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface that a token driver delegate implements to respond to token creation events.

## Declaration

```objectivec
@protocol TKTokenDriverDelegate <NSObject>
```

## Topics

### Creating and Removing Tokens

- [tokenDriver:terminateToken:](tktokendriverdelegate/tokendriver%28__terminatetoken_%29.md): Tells the delegate to terminate the token you specify.
- [tokenDriver:tokenForConfiguration:error:](tktokendriverdelegate/tokendriver%28__tokenfor_%29.md): Creates a new token for the configuration you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [TKSmartCardTokenDriverDelegate](tksmartcardtokendriverdelegate.md)

## See Also

### Responding to Token Creation

- [delegate](tktokendriver/delegate.md): The token driver delegate.
- [TKTokenDriverClassID](tktokendriver/classid.md): The type of the class identifier for the token driver.
- [TKTokenDriverConfiguration](tktokendriver/configuration.md): A configuration for one class of token.
