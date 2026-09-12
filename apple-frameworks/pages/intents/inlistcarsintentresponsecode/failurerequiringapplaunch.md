> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintentresponsecode/failurerequiringapplaunch](https://developer.apple.com/documentation/intents/inlistcarsintentresponsecode/failurerequiringapplaunch)

# INListCarsIntentResponseCode.failureRequiringAppLaunch (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.

## Declaration

```swift
case failureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

The system launches the host app when you specify this code. Use this response code when there is a failure that the host app can resolve. Don’t use this code for general errors, or to force a user into the host app even when the extension can handle the intent.

## See Also

### Constants

- [INListCarsIntentResponseCode.failure](failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.inProgress](inprogress.md): A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.
- [INListCarsIntentResponseCode.ready](ready.md): A response code that indicates you’re ready to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.success](success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.unspecified](unspecified.md): A response code that indicates the absence of a genuine response code.

# INListCarsIntentResponseCodeFailureRequiringAppLaunch (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.

## Declaration

```objectivec
INListCarsIntentResponseCodeFailureRequiringAppLaunch
```

<a id="Discussion"></a>

## Discussion

The system launches the host app when you specify this code. Use this response code when there is a failure that the host app can resolve. Don’t use this code for general errors, or to force a user into the host app even when the extension can handle the intent.

## See Also

### Constants

- [INListCarsIntentResponseCodeFailure](failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeInProgress](inprogress.md): A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.
- [INListCarsIntentResponseCodeReady](ready.md): A response code that indicates you’re ready to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeSuccess](success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeUnspecified](unspecified.md): A response code that indicates the absence of a genuine response code.
