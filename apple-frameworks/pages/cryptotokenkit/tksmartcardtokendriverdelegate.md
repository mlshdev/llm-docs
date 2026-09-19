> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokendriverdelegate

# TKSmartCardTokenDriverDelegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The interface that a smart card token driver delegate implements to respond to token creation events.

## Declaration

```swift
protocol TKSmartCardTokenDriverDelegate : TKTokenDriverDelegate
```

## Topics

### Delegate Methods

- [tokenDriver(\_:createTokenFor:aid:)](tksmartcardtokendriverdelegate/tokendriver%28__createtokenfor_aid_%29.md): Tells the delegate that a new Smart Card is detected.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [TKTokenDriverDelegate](tktokendriverdelegate.md)

# TKSmartCardTokenDriverDelegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The interface that a smart card token driver delegate implements to respond to token creation events.

## Declaration

```objectivec
@protocol TKSmartCardTokenDriverDelegate <TKTokenDriverDelegate>
```

## Topics

### Delegate Methods

- [tokenDriver:createTokenForSmartCard:AID:error:](tksmartcardtokendriverdelegate/tokendriver%28__createtokenfor_aid_%29.md): Tells the delegate that a new Smart Card is detected.

## Relationships

### Inherits From

- [TKTokenDriverDelegate](tktokendriverdelegate.md)
