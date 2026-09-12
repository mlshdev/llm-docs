> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/completed(feedbacktype:)](https://developer.apple.com/documentation/intents/inridecompletionstatus/completed(feedbacktype:))

# completed(feedbackType:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.

## Declaration

```swift
class func completed(feedbackType: INRideFeedbackTypeOptions = []) -> Self
```

## Parameters

- `feedbackType`: The type of feedback you want from the user. You can ask the user to provide feedback on the driver, leave a tip, or both.

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the ride completed successfully and you want the user to provide a tip or feedback about the ride. This method sets the `isCompleted` and [isOutstanding](isoutstanding.md) properties of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [isCanceled](iscanceled.md) and [isMissedPickup](ismissedpickup.md) properties to [false](https://developer.apple.com/documentation/swift/false). If you ask the user to specify a tip, assign values to the [defaultTippingOptions](defaulttippingoptions.md) property representing proposed tip amounts.

If your Intents extension supports the [INSendRideFeedbackIntent](../insendridefeedbackintent.md), SiriKit delivers that intent when feedback from the last ride is still needed. If you don’t support the intent, you can still assign a value to the [completionUserActivity](completionuseractivity.md) property to allow the collection of feedback from your app.

## See Also

### Creating a Ride Completion Status Object

- [completed()](completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completed(settled:)](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completed(outstanding:)](completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [canceledByService()](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser()](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup()](canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.

# completedWithOutstandingFeedbackType: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.

## Declaration

```objectivec
+ (instancetype) completedWithOutstandingFeedbackType:(INRideFeedbackTypeOptions) feedbackType;
```

## Parameters

- `feedbackType`: The type of feedback you want from the user. You can ask the user to provide feedback on the driver, leave a tip, or both.

<a id="return-value"></a>

## Return Value

An initialized [INRideCompletionStatus](../inridecompletionstatus.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when the ride completed successfully and you want the user to provide a tip or feedback about the ride. This method sets the `isCompleted` and [outstanding](isoutstanding.md) properties of the returned object to [true](https://developer.apple.com/documentation/swift/true), and it sets the [canceled](iscanceled.md) and [missedPickup](ismissedpickup.md) properties to [false](https://developer.apple.com/documentation/swift/false). If you ask the user to specify a tip, assign values to the [defaultTippingOptions](defaulttippingoptions.md) property representing proposed tip amounts.

If your Intents extension supports the [INSendRideFeedbackIntent](../insendridefeedbackintent.md), SiriKit delivers that intent when feedback from the last ride is still needed. If you don’t support the intent, you can still assign a value to the [completionUserActivity](completionuseractivity.md) property to allow the collection of feedback from your app.

## See Also

### Creating a Ride Completion Status Object

- [completed](completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completedWithSettledPaymentAmount:](completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completedWithOutstandingPaymentAmount:](completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [canceledByService](canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser](canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup](canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.
