> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintent/partysize-39k7z](https://developer.apple.com/documentation/intents/inrequestrideintent/partysize-39k7z)

# partySize

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 3.2+

The number of passengers that the ride must accommodate.

## Declaration

```swift
@nonobjc final var partySize: Int? { get }
```

<a id="Discussion"></a>

## Discussion

The party size includes the total number of passengers.

## See Also

### Getting the Ride Details

- [rideOptionName](rideoptionname.md): The name of the ride option selected by the user.
- [pickupLocation](pickuplocation.md): The user’s starting location.
- [scheduledPickupTime](scheduledpickuptime.md): The time at which to pick up the user.
- [dropOffLocation](dropofflocation.md): The user’s destination.
