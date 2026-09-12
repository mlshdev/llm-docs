> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenthandlingstatus/deferredtoapplication](https://developer.apple.com/documentation/intents/inintenthandlingstatus/deferredtoapplication)

# INIntentHandlingStatus.deferredToApplication (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The Intents extension asked its associated app to handle the intent.

## Declaration

```swift
case deferredToApplication
```

## See Also

### Constants

- [INIntentHandlingStatus.unspecified](unspecified.md): The status of the interaction is unknown. This is the default value.
- [INIntentHandlingStatus.ready](ready.md): The intent is ready to be handled, but has not yet been handled.
- [INIntentHandlingStatus.inProgress](inprogress.md): The Intents extension is in the process of handling the intent.
- [INIntentHandlingStatus.success](success.md): The Intents extension successfully handled the intent.
- [INIntentHandlingStatus.failure](failure.md): The Intents extension encountered an unrecoverable problem when handling the intent.
- [INIntentHandlingStatus.userConfirmationRequired](userconfirmationrequired.md)

# INIntentHandlingStatusDeferredToApplication (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The Intents extension asked its associated app to handle the intent.

## Declaration

```objectivec
INIntentHandlingStatusDeferredToApplication
```

## See Also

### Constants

- [INIntentHandlingStatusUnspecified](unspecified.md): The status of the interaction is unknown. This is the default value.
- [INIntentHandlingStatusReady](ready.md): The intent is ready to be handled, but has not yet been handled.
- [INIntentHandlingStatusInProgress](inprogress.md): The Intents extension is in the process of handling the intent.
- [INIntentHandlingStatusSuccess](success.md): The Intents extension successfully handled the intent.
- [INIntentHandlingStatusFailure](failure.md): The Intents extension encountered an unrecoverable problem when handling the intent.
- [INIntentHandlingStatusUserConfirmationRequired](userconfirmationrequired.md)
