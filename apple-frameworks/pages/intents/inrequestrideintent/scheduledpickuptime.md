> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintent/scheduledpickuptime](https://developer.apple.com/documentation/intents/inrequestrideintent/scheduledpickuptime)

# scheduledPickupTime (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The time at which to pick up the user.

## Declaration

```swift
@NSCopying var scheduledPickupTime: INDateComponentsRange? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to schedule a vehicle to arrive at the specified time at the user’s location. Your handler for the [INGetRideStatusIntent](../ingetridestatusintent.md) object should also pick the most appropriate ride for the scheduled time.

## See Also

### Getting the Ride Details

- [rideOptionName](rideoptionname.md): The name of the ride option selected by the user.
- [partySize](partysize-39k7z.md): The number of passengers that the ride must accommodate.
- [pickupLocation](pickuplocation.md): The user’s starting location.
- [dropOffLocation](dropofflocation.md): The user’s destination.

# scheduledPickupTime (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The time at which to pick up the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * scheduledPickupTime;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * scheduledPickupTime;
```

<a id="Discussion"></a>

## Discussion

Use this property to schedule a vehicle to arrive at the specified time at the user’s location. Your handler for the [INGetRideStatusIntent](../ingetridestatusintent.md) object should also pick the most appropriate ride for the scheduled time.

## See Also

### Getting the Ride Details

- [rideOptionName](rideoptionname.md): The name of the ride option selected by the user.
- [partySize](https://developer.apple.com/documentation/intents/inrequestrideintent/partysize-64kfc): The number of passengers that the ride must accommodate.
- [pickupLocation](pickuplocation.md): The user’s starting location.
- [dropOffLocation](dropofflocation.md): The user’s destination.
