> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelrideintentresponsecode/failure](https://developer.apple.com/documentation/intents/incancelrideintentresponsecode/failure)

# INCancelRideIntentResponseCode.failure (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

You were unable to cancel the ride.

## Declaration

```swift
case failure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from canceling the ride. When specifying this code, SiriKit may fall back to other options that include letting the user cancel the ride in your app.

## See Also

### Constants

- [INCancelRideIntentResponseCode.unspecified](unspecified.md): There is no specified response code.
- [INCancelRideIntentResponseCode.ready](ready.md): You are ready to handle the intent.
- [INCancelRideIntentResponseCode.success](success.md): You successfully canceled the ride.

# INCancelRideIntentResponseCodeFailure (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

You were unable to cancel the ride.

## Declaration

```objectivec
INCancelRideIntentResponseCodeFailure
```

<a id="Discussion"></a>

## Discussion

Use this code for both transient and unrecoverable errors that prevented you from canceling the ride. When specifying this code, SiriKit may fall back to other options that include letting the user cancel the ride in your app.

## See Also

### Constants

- [INCancelRideIntentResponseCodeUnspecified](unspecified.md): There is no specified response code.
- [INCancelRideIntentResponseCodeReady](ready.md): You are ready to handle the intent.
- [INCancelRideIntentResponseCodeSuccess](success.md): You successfully canceled the ride.
