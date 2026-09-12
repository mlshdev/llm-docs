> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/ismissedpickup](https://developer.apple.com/documentation/intents/inridecompletionstatus/ismissedpickup)

# isMissedPickup (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean value indicating whether someone canceled the ride because the user was never picked up.

## Declaration

```swift
var isMissedPickup: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when your ride service did not pick up of the user, otherise it is [false](https://developer.apple.com/documentation/swift/false). The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [isCompleted](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [isCanceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [isOutstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.

# missedPickup (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean value indicating whether someone canceled the ride because the user was never picked up.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMissedPickup) BOOL missedPickup;
```

```objectivec
@property (atomic, readonly, getter=isMissedPickup) BOOL missedPickup;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when your ride service did not pick up of the user, otherise it is [false](https://developer.apple.com/documentation/swift/false). The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [completed](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [canceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [outstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.
