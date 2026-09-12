> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenthandlingstatus/failure](https://developer.apple.com/documentation/intents/inintenthandlingstatus/failure)

# INIntentHandlingStatus.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The Intents extension encountered an unrecoverable problem when handling the intent.

## Declaration

```swift
case failure
```

## See Also

### Constants

- [INIntentHandlingStatus.unspecified](unspecified.md): The status of the interaction is unknown. This is the default value.
- [INIntentHandlingStatus.ready](ready.md): The intent is ready to be handled, but has not yet been handled.
- [INIntentHandlingStatus.inProgress](inprogress.md): The Intents extension is in the process of handling the intent.
- [INIntentHandlingStatus.success](success.md): The Intents extension successfully handled the intent.
- [INIntentHandlingStatus.deferredToApplication](deferredtoapplication.md): The Intents extension asked its associated app to handle the intent.
- [INIntentHandlingStatus.userConfirmationRequired](userconfirmationrequired.md)

# INIntentHandlingStatusFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The Intents extension encountered an unrecoverable problem when handling the intent.

## Declaration

```objectivec
INIntentHandlingStatusFailure
```

## See Also

### Constants

- [INIntentHandlingStatusUnspecified](unspecified.md): The status of the interaction is unknown. This is the default value.
- [INIntentHandlingStatusReady](ready.md): The intent is ready to be handled, but has not yet been handled.
- [INIntentHandlingStatusInProgress](inprogress.md): The Intents extension is in the process of handling the intent.
- [INIntentHandlingStatusSuccess](success.md): The Intents extension successfully handled the intent.
- [INIntentHandlingStatusDeferredToApplication](deferredtoapplication.md): The Intents extension asked its associated app to handle the intent.
- [INIntentHandlingStatusUserConfirmationRequired](userconfirmationrequired.md)
