> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/isoutstanding](https://developer.apple.com/documentation/intents/inridecompletionstatus/isoutstanding)

# isOutstanding (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean indicating whether payment is still outstanding.

## Declaration

```swift
var isOutstanding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when your ride service is still waiting for payment from the user. It is [false](https://developer.apple.com/documentation/swift/false) after the user successfully paid for the ride. The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [isCompleted](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [isCanceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [isMissedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.

# outstanding (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean indicating whether payment is still outstanding.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isOutstanding) BOOL outstanding;
```

```objectivec
@property (atomic, readonly, getter=isOutstanding) BOOL outstanding;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when your ride service is still waiting for payment from the user. It is [false](https://developer.apple.com/documentation/swift/false) after the user successfully paid for the ride. The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [completed](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [canceled](iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [missedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.
