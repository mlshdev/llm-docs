> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendelegate](https://developer.apple.com/documentation/cryptotokenkit/tktokendelegate)

# TKTokenDelegate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface that a token delegate implements to respond to session creation events.

## Declaration

```swift
protocol TKTokenDelegate : NSObjectProtocol
```

## Topics

### Delegate Methods

- [createSession(\_:)](tktokendelegate/createsession%28__%29.md): Tells the delegate to create a session for the specified token.
- [token(\_:terminateSession:)](tktokendelegate/token%28__terminatesession_%29.md): Tells the delegate to terminate the specified token session.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Session Creation

- [delegate](tktoken/delegate.md): The token delegate.

# TKTokenDelegate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The interface that a token delegate implements to respond to session creation events.

## Declaration

```objectivec
@protocol TKTokenDelegate <NSObject>
```

## Topics

### Delegate Methods

- [token:createSessionWithError:](tktokendelegate/createsession%28__%29.md): Tells the delegate to create a session for the specified token.
- [token:terminateSession:](tktokendelegate/token%28__terminatesession_%29.md): Tells the delegate to terminate the specified token session.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Session Creation

- [delegate](tktoken/delegate.md): The token delegate.
