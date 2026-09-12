> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/scheduledpickuptime](https://developer.apple.com/documentation/intents/inridestatus/scheduledpickuptime)

# scheduledPickupTime (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The scheduled pickup time for the user.

## Declaration

```swift
@NSCopying var scheduledPickupTime: INDateComponentsRange? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the scheduled pickup time for the user. Use this property instead of the [estimatedPickupDate](estimatedpickupdate.md) and [estimatedPickupEndDate](estimatedpickupenddate.md) properties when you can guarantee the pickup time.

## See Also

### Accessing the Pickup and Drop Off Times

- [estimatedPickupDate](estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedPickupEndDate](estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.
- [estimatedDropOffDate](estimateddropoffdate.md): The estimated drop-off time for the ride.

# scheduledPickupTime (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The scheduled pickup time for the user.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INDateComponentsRange * scheduledPickupTime;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INDateComponentsRange * scheduledPickupTime;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the scheduled pickup time for the user. Use this property instead of the [estimatedPickupDate](estimatedpickupdate.md) and [estimatedPickupEndDate](estimatedpickupenddate.md) properties when you can guarantee the pickup time.

## See Also

### Accessing the Pickup and Drop Off Times

- [estimatedPickupDate](estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedPickupEndDate](estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.
- [estimatedDropOffDate](estimateddropoffdate.md): The estimated drop-off time for the ride.
