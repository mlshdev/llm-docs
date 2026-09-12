> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus/iscanceled](https://developer.apple.com/documentation/intents/inridecompletionstatus/iscanceled)

# isCanceled (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean value indicating whether someone canceled the ride for any reason.

## Declaration

```swift
var isCanceled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when someone canceled the ride. It is [false](https://developer.apple.com/documentation/swift/false) when the user was successfully picked up. The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [isCompleted](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [isMissedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [isOutstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.

# canceled (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A Boolean value indicating whether someone canceled the ride for any reason.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCanceled) BOOL canceled;
```

```objectivec
@property (atomic, readonly, getter=isCanceled) BOOL canceled;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when someone canceled the ride. It is [false](https://developer.apple.com/documentation/swift/false) when the user was successfully picked up. The method you use to create an instance of this class automatically sets the value of this property.

## See Also

### Getting the Status Information

- [completed](iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [missedPickup](ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [outstanding](isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](paymentamount.md): The amount paid or still outstanding for the ride.
