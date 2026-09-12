> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/iscompleted](https://developer.apple.com/documentation/intents/inridecompletionstatus/iscompleted)

# isCompleted (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean value indicating whether the ride completed successfully.

## Declaration

```swift
var isCompleted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when your service completed the ride successfully, otherwise it is [false](https://developer.apple.com/documentation/swift/false). The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [isCanceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [isMissedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [isOutstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.

# completed (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean value indicating whether the ride completed successfully.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCompleted) BOOL completed;
```

```objectivec
@property (atomic, readonly, getter=isCompleted) BOOL completed;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when your service completed the ride successfully, otherwise it is [false](https://developer.apple.com/documentation/swift/false). The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [canceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [missedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [outstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.
