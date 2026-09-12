> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintentresponsecode/ready](https://developer.apple.com/documentation/intents/inlistcarsintentresponsecode/ready)

# INListCarsIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A response code that indicates you’re ready to provide a list of the user’s electric vehicles.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Use this code during the confirmation phase of intent handling to affirm you’re ready and able to act on the intent. The system generates an error if you use this code during the handling phase.

## See Also

### Constants

- [INListCarsIntentResponseCode.failure](failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.failureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.inProgress](inprogress.md): A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.
- [INListCarsIntentResponseCode.success](success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCode.unspecified](unspecified.md): A response code that indicates the absence of a genuine response code.

# INListCarsIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

A response code that indicates you’re ready to provide a list of the user’s electric vehicles.

## Declaration

```objectivec
INListCarsIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Use this code during the confirmation phase of intent handling to affirm you’re ready and able to act on the intent. The system generates an error if you use this code during the handling phase.

## See Also

### Constants

- [INListCarsIntentResponseCodeFailure](failure.md): A response code that indicates you’re unable to retrieve a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeFailureRequiringAppLaunch](failurerequiringapplaunch.md): A response code that indicates the system must launch your app before you can provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeInProgress](inprogress.md): A response code that indicates you’re in the process of retrieving a list of the user’s electric vehicles, but they are not yet available.
- [INListCarsIntentResponseCodeSuccess](success.md): A response code that indicates you’re able to provide a list of the user’s electric vehicles.
- [INListCarsIntentResponseCodeUnspecified](unspecified.md): A response code that indicates the absence of a genuine response code.
