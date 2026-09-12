> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/paymentamount](https://developer.apple.com/documentation/intents/inridecompletionstatus/paymentamount)

# paymentAmount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The amount paid or still outstanding for the ride.

## Declaration

```swift
var paymentAmount: INCurrencyAmount? { get }
```

<a id="Discussion"></a>

## Discussion

When you use the [completed(settled:)](completed%28settled_%29.md) method to create instances of this class, this property stores the final amount paid by the user for the ride. When you use the [completed(outstanding:)](completed%28outstanding_%29.md) method to create instances of this class, this property stores any unpaid costs that your app and must settle.

Use the [isOutstanding](isoutstanding.md) property to determine if the user still needs to pay the amount in this property.

## See Also

### Getting the Status Information

- [isCompleted](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [isCanceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [isMissedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [isOutstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.

# paymentAmount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The amount paid or still outstanding for the ride.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) INCurrencyAmount * paymentAmount;
```

```objectivec
@property (atomic, strong, readonly, nullable) INCurrencyAmount * paymentAmount;
```

<a id="Discussion"></a>

## Discussion

When you use the [completedWithSettledPaymentAmount:](completed%28settled_%29.md) method to create instances of this class, this property stores the final amount paid by the user for the ride. When you use the [completedWithOutstandingPaymentAmount:](completed%28outstanding_%29.md) method to create instances of this class, this property stores any unpaid costs that your app and must settle.

Use the [outstanding](isoutstanding.md) property to determine if the user still needs to pay the amount in this property.

## See Also

### Getting the Status Information

- [completed](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [canceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [missedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [outstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.
