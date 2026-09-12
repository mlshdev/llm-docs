> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/completed(outstanding:)](https://developer.apple.com/documentation/intents/inridecompletionstatus/completed(outstanding:))

# completed(outstanding:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.

## Declaration

```swift
class func completed(outstanding outstandingPaymentAmount: INCurrencyAmount) -> Self
```

## Parameters

- `outstandingPaymentAmount`: The amount of money owed by the user for the ride.

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the ride completed successfully but the user has not yet provided full payment. This method sets the [isCompleted](iscompleted.md) and [isOutstanding](isoutstanding.md) properties of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [isCanceled](iscanceled.md) and [isMissedPickup](ismissedpickup.md) properties to [false](https://developer.apple.com/documentation/swift/false). It also sets the [paymentAmount](paymentamount.md) property to the value in the `outstandingPaymentAmount` parameter. Your app can use that amount later to handle the payment.

After creating the object, assign a value to the object’s [completionUserActivity](completionuseractivity.md) property. Your user activity object should indicate that payment is still required in your app. Providing the user activity object lets SiriKit know that it should notify the user that your app needs to take additional steps.

## See Also

### Creating a Ride Completion Status Object

- [completed()](completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completed(settled:)](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completed(feedbackType:)](completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService()](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser()](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup()](canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.

# completedWithOutstandingPaymentAmount: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.

## Declaration

```objectivec
+ (instancetype) completedWithOutstandingPaymentAmount:(INCurrencyAmount *) outstandingPaymentAmount;
```

## Parameters

- `outstandingPaymentAmount`: The amount of money owed by the user for the ride.

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the ride completed successfully but the user has not yet provided full payment. This method sets the [completed](iscompleted.md) and [outstanding](isoutstanding.md) properties of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [canceled](iscanceled.md) and [missedPickup](ismissedpickup.md) properties to [false](https://developer.apple.com/documentation/swift/false). It also sets the [paymentAmount](paymentamount.md) property to the value in the `outstandingPaymentAmount` parameter. Your app can use that amount later to handle the payment.

After creating the object, assign a value to the object’s [completionUserActivity](completionuseractivity.md) property. Your user activity object should indicate that payment is still required in your app. Providing the user activity object lets SiriKit know that it should notify the user that your app needs to take additional steps.

## See Also

### Creating a Ride Completion Status Object

- [completed](completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completedWithSettledPaymentAmount:](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completedWithOutstandingFeedbackType:](completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup](canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.
