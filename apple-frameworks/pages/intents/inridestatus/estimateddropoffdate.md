> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/estimateddropoffdate](https://developer.apple.com/documentation/intents/inridestatus/estimateddropoffdate)

# estimatedDropOffDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The estimated drop-off time for the ride.

## Declaration

```swift
var estimatedDropOffDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide an estimated time of arrival at the user’s destination.

The default value of this property is `nil`.

## See Also

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupDate](estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedPickupEndDate](estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.

# estimatedDropOffDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The estimated drop-off time for the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDate * estimatedDropOffDate;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDate * estimatedDropOffDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide an estimated time of arrival at the user’s destination.

The default value of this property is `nil`.

## See Also

### Accessing the Pickup and Drop Off Times

- [scheduledPickupTime](scheduledpickuptime.md): The scheduled pickup time for the user.
- [estimatedPickupDate](estimatedpickupdate.md): The estimated pickup time for the ride.
- [estimatedPickupEndDate](estimatedpickupenddate.md): The date after which the driver may stop waiting for the user.
