> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintent/pickuplocation](https://developer.apple.com/documentation/intents/inrequestrideintent/pickuplocation)

# pickupLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s starting location.

## Declaration

```swift
@NSCopying var pickupLocation: CLPlacemark? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which vehicles are in the vicinity and to dispatch the driver when the user books the ride.

## See Also

### Getting the Ride Details

- [rideOptionName](rideoptionname.md): The name of the ride option selected by the user.
- [partySize](partysize-39k7z.md): The number of passengers that the ride must accommodate.
- [scheduledPickupTime](scheduledpickuptime.md): The time at which to pick up the user.
- [dropOffLocation](dropofflocation.md): The user’s destination.

# pickupLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s starting location.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLPlacemark * pickupLocation;
```

```objectivec
@property (atomic, copy, readonly, nullable) CLPlacemark * pickupLocation;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine which vehicles are in the vicinity and to dispatch the driver when the user books the ride.

## See Also

### Getting the Ride Details

- [rideOptionName](rideoptionname.md): The name of the ride option selected by the user.
- [partySize](https://developer.apple.com/documentation/intents/inrequestrideintent/partysize-64kfc): The number of passengers that the ride must accommodate.
- [scheduledPickupTime](scheduledpickuptime.md): The time at which to pick up the user.
- [dropOffLocation](dropofflocation.md): The user’s destination.
