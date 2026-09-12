> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/completed()](https://developer.apple.com/documentation/intents/inridecompletionstatus/completed())

# completed() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an instance of this class that indicates the ride completed successfully.

## Declaration

```swift
class func completed() -> Self
```

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

This method sets the [isCompleted](iscompleted.md) property of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [isCanceled](iscanceled.md), [isMissedPickup](ismissedpickup.md), and [isOutstanding](isoutstanding.md) properties to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Ride Completion Status Object

- [completed(settled:)](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completed(outstanding:)](completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [completed(feedbackType:)](completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService()](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser()](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup()](canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.

# completed (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an instance of this class that indicates the ride completed successfully.

## Declaration

```objectivec
+ (instancetype) completed;
```

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

This method sets the [completed](iscompleted.md) property of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [canceled](iscanceled.md), [missedPickup](ismissedpickup.md), and [outstanding](isoutstanding.md) properties to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Ride Completion Status Object

- [completedWithSettledPaymentAmount:](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completedWithOutstandingPaymentAmount:](completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [completedWithOutstandingFeedbackType:](completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup](canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.
