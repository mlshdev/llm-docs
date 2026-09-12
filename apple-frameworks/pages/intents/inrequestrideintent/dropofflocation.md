> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintent/dropofflocation](https://developer.apple.com/documentation/intents/inrequestrideintent/dropofflocation)

# dropOffLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s destination.

## Declaration

```swift
@NSCopying var dropOffLocation: CLPlacemark? { get }
```

<a id="Discussion"></a>

## Discussion

When booking the ride, you can communicate this information to the driver.

## See Also

### Getting the Ride Details

- [rideOptionName](rideoptionname.md): The name of the ride option selected by the user.
- [partySize](partysize-39k7z.md): The number of passengers that the ride must accommodate.
- [pickupLocation](pickuplocation.md): The user’s starting location.
- [scheduledPickupTime](scheduledpickuptime.md): The time at which to pick up the user.

# dropOffLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The user’s destination.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CLPlacemark * dropOffLocation;
```

```objectivec
@property (atomic, copy, readonly, nullable) CLPlacemark * dropOffLocation;
```

<a id="Discussion"></a>

## Discussion

When booking the ride, you can communicate this information to the driver.

## See Also

### Getting the Ride Details

- [rideOptionName](rideoptionname.md): The name of the ride option selected by the user.
- [partySize](https://developer.apple.com/documentation/intents/inrequestrideintent/partysize-64kfc): The number of passengers that the ride must accommodate.
- [pickupLocation](pickuplocation.md): The user’s starting location.
- [scheduledPickupTime](scheduledpickuptime.md): The time at which to pick up the user.
