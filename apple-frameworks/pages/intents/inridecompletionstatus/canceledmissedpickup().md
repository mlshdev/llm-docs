> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/canceledmissedpickup()](https://developer.apple.com/documentation/intents/inridecompletionstatus/canceledmissedpickup())

# canceledMissedPickup() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.

## Declaration

```swift
class func canceledMissedPickup() -> Self
```

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when a missed pickup caused the cancellation of the ride. This method sets the [isCanceled](iscanceled.md) and [isMissedPickup](ismissedpickup.md) properties of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [isCompleted](iscompleted.md) and [isOutstanding](isoutstanding.md) properties to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Ride Completion Status Object

- [completed()](completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completed(settled:)](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completed(outstanding:)](completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [completed(feedbackType:)](completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService()](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser()](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.

# canceledMissedPickup (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.

## Declaration

```objectivec
+ (instancetype) canceledMissedPickup;
```

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when a missed pickup caused the cancellation of the ride. This method sets the [canceled](iscanceled.md) and [missedPickup](ismissedpickup.md) properties of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [completed](iscompleted.md) and [outstanding](isoutstanding.md) properties to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Ride Completion Status Object

- [completed](completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completedWithSettledPaymentAmount:](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completedWithOutstandingPaymentAmount:](completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [completedWithOutstandingFeedbackType:](completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
