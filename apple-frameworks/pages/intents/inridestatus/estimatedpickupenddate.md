> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/estimatedpickupenddate](https://developer.apple.com/documentation/intents/inridestatus/estimatedpickupenddate)

# estimatedPickupEndDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The date after which the driver may stop waiting for the user.

## Declaration

```swift
var estimatedPickupEndDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

If the user is not at the pickup location when the driver arrives, the driver usually waits for a short period of time to give the user time to arrive. This property species the time at which the driver may opt to cancel the ride altogether if the user does not show up.

## See Also

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupDate](estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedDropOffDate](estimateddropoffdate.md): The estimated drop-off time for the ride.

# estimatedPickupEndDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The date after which the driver may stop waiting for the user.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDate * estimatedPickupEndDate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDate * estimatedPickupEndDate;
```

<a id="Discussion"></a>

## Discussion

If the user is not at the pickup location when the driver arrives, the driver usually waits for a short period of time to give the user time to arrive. This property species the time at which the driver may opt to cancel the ride altogether if the user does not show up.

## See Also

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupDate](estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedDropOffDate](estimateddropoffdate.md): The estimated drop-off time for the ride.
