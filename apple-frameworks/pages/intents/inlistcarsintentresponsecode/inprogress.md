> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintentresponsecode/inprogress](https://developer.apple.com/documentation/intents/inlistcarsintentresponsecode/inprogress)

# INListCarsIntentResponseCode.inProgress (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.

## Declaration

```swift
case inProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase of intent handling if the request is likely to take more than a few seconds to complete.

## See Also

### Constants

- [INListCarsIntentResponseCode.failure](failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.ready](ready.md): A response code that indicates you’re ready to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.success](success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.unspecified](unspecified.md): A response code that indicates the absence of a genuine response code.

# INListCarsIntentResponseCodeInProgress (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.

## Declaration

```objectivec
INListCarsIntentResponseCodeInProgress
```

<a id="Discussion"></a>

## Discussion

Use this code during the handling phase of intent handling if the request is likely to take more than a few seconds to complete.

## See Also

### Constants

- [INListCarsIntentResponseCodeFailure](failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeReady](ready.md): A response code that indicates you’re ready to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeSuccess](success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeUnspecified](unspecified.md): A response code that indicates the absence of a genuine response code.
