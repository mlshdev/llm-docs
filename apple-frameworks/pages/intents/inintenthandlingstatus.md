> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenthandlingstatus](https://developer.apple.com/documentation/intents/inintenthandlingstatus)

# INIntentHandlingStatus (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the current state of the interaction.

## Declaration

```swift
enum INIntentHandlingStatus
```

## Topics

### Constants

- [INIntentHandlingStatus.unspecified](inintenthandlingstatus/unspecified.md): The status of the interaction is unknown. This is the default value.
- [INIntentHandlingStatus.ready](inintenthandlingstatus/ready.md): The intent is ready to be handled, but has not yet been handled.
- [INIntentHandlingStatus.inProgress](inintenthandlingstatus/inprogress.md): The Intents extension is in the process of handling the intent.
- [INIntentHandlingStatus.success](inintenthandlingstatus/success.md): The Intents extension successfully handled the intent.
- [INIntentHandlingStatus.failure](inintenthandlingstatus/failure.md): The Intents extension encountered an unrecoverable problem when handling the intent.
- [INIntentHandlingStatus.deferredToApplication](inintenthandlingstatus/deferredtoapplication.md): The Intents extension asked its associated app to handle the intent.
- [INIntentHandlingStatus.userConfirmationRequired](inintenthandlingstatus/userconfirmationrequired.md)

### Initializers

- [init(rawValue:)](inintenthandlingstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [INInteractionDirection](ininteractiondirection.md): Constants indicating whether the app is providing or receiving information.

# INIntentHandlingStatus (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the current state of the interaction.

## Declaration

```objectivec
enum INIntentHandlingStatus : NSInteger;
```

## Topics

### Constants

- [INIntentHandlingStatusUnspecified](inintenthandlingstatus/unspecified.md): The status of the interaction is unknown. This is the default value.
- [INIntentHandlingStatusReady](inintenthandlingstatus/ready.md): The intent is ready to be handled, but has not yet been handled.
- [INIntentHandlingStatusInProgress](inintenthandlingstatus/inprogress.md): The Intents extension is in the process of handling the intent.
- [INIntentHandlingStatusSuccess](inintenthandlingstatus/success.md): The Intents extension successfully handled the intent.
- [INIntentHandlingStatusFailure](inintenthandlingstatus/failure.md): The Intents extension encountered an unrecoverable problem when handling the intent.
- [INIntentHandlingStatusDeferredToApplication](inintenthandlingstatus/deferredtoapplication.md): The Intents extension asked its associated app to handle the intent.
- [INIntentHandlingStatusUserConfirmationRequired](inintenthandlingstatus/userconfirmationrequired.md)

## See Also

### Constants

- [INInteractionDirection](ininteractiondirection.md): Constants indicating whether the app is providing or receiving information.
