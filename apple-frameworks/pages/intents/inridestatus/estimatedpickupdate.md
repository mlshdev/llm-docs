> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/estimatedpickupdate](https://developer.apple.com/documentation/intents/inridestatus/estimatedpickupdate)

# estimatedPickupDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The estimated pickup time for the ride.

## Declaration

```swift
var estimatedPickupDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify the estimated date and time that your driver will pick up the user’s party. Siri and Maps display this information to the user.

The default value of this property is `nil`.

## See Also

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupEndDate](estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.
- [estimatedDropOffDate](estimateddropoffdate.md): The estimated drop-off time for the ride.

# estimatedPickupDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The estimated pickup time for the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDate * estimatedPickupDate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDate * estimatedPickupDate;
```

<a id="Discussion"></a>

## Discussion

Specify the estimated date and time that your driver will pick up the user’s party. Siri and Maps display this information to the user.

The default value of this property is `nil`.

## See Also

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupEndDate](estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.
- [estimatedDropOffDate](estimateddropoffdate.md): The estimated drop-off time for the ride.
