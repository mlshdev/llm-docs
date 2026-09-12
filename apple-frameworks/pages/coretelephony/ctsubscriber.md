> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctsubscriber](https://developer.apple.com/documentation/coretelephony/ctsubscriber)

# CTSubscriber (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+

A cellular network subscriber.

## Declaration

```swift
class CTSubscriber
```

## Topics

### Identifying the subscriber

- [identifier](ctsubscriber/identifier.md): An implementation-defined identifier used to correlate this subscriber with information vended by other APIs.

### Working with a delegate

- [delegate](ctsubscriber/delegate.md): A delegate that receives updates on the subscriber information.

### Managing the carrier token

- [carrierToken](ctsubscriber/carriertoken.md): A data object containing authorization information about the subscriber.
- [refreshCarrierToken()](ctsubscriber/refreshcarriertoken%28%29.md): Attempts to refresh the carrier token.
- [CTSubscriberTokenRefreshed](ctsubscribertokenrefreshed.md): Deprecated. The name of the notification indicating that the carrier token is available.

### Detecting a SIM

- [isSIMInserted](ctsubscriber/issiminserted.md): A Boolean property that indicates whether a SIM is present.

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

### Subscriber information

- [CTSubscriberDelegate](ctsubscriberdelegate.md): A protocol to handle changes to subscriber information.
- [CTSubscriberInfo](ctsubscriberinfo.md): An object that provides an array of cellular network subscribers.

# CTSubscriber (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+

A cellular network subscriber.

## Declaration

```objectivec
@interface CTSubscriber : NSObject
```

## Topics

### Identifying the subscriber

- [identifier](ctsubscriber/identifier.md): An implementation-defined identifier used to correlate this subscriber with information vended by other APIs.

### Working with a delegate

- [delegate](ctsubscriber/delegate.md): A delegate that receives updates on the subscriber information.

### Managing the carrier token

- [carrierToken](ctsubscriber/carriertoken.md): A data object containing authorization information about the subscriber.
- [refreshCarrierToken](ctsubscriber/refreshcarriertoken%28%29.md): Attempts to refresh the carrier token.
- [CTSubscriberTokenRefreshed](ctsubscribertokenrefreshed.md): Deprecated. The name of the notification indicating that the carrier token is available.

### Detecting a SIM

- [SIMInserted](ctsubscriber/issiminserted.md): A Boolean property that indicates whether a SIM is present.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Subscriber information

- [CTSubscriberDelegate](ctsubscriberdelegate.md): A protocol to handle changes to subscriber information.
- [CTSubscriberInfo](ctsubscriberinfo.md): An object that provides an array of cellular network subscribers.
