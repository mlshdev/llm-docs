> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintent/rideoptionname](https://developer.apple.com/documentation/intents/inrequestrideintent/rideoptionname)

# rideOptionName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the ride option selected by the user.

## Declaration

```swift
@NSCopying var rideOptionName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

If the user requested a specific type of ride, this property specifies the name of that ride. Map this string to the [INRideOption](../inrideoption.md) object that most closely represents your company’s available rides. You can then use the ride option information to select a vehicle to fulfill the ride request.

You can define the names of ride options using custom vocabulary terms. For information on how to configure ride option names in your global vocabulary file, see [Registering Custom Vocabulary with SiriKit](../../sirikit/registering-custom-vocabulary-with-sirikit.md).

## See Also

### Getting the Ride Details

- [partySize](partysize-39k7z.md): The number of passengers that the ride must accommodate.
- [pickupLocation](pickuplocation.md): The user’s starting location.
- [scheduledPickupTime](scheduledpickuptime.md): The time at which to pick up the user.
- [dropOffLocation](dropofflocation.md): The user’s destination.

# rideOptionName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The name of the ride option selected by the user.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * rideOptionName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * rideOptionName;
```

<a id="Discussion"></a>

## Discussion

If the user requested a specific type of ride, this property specifies the name of that ride. Map this string to the [INRideOption](../inrideoption.md) object that most closely represents your company’s available rides. You can then use the ride option information to select a vehicle to fulfill the ride request.

You can define the names of ride options using custom vocabulary terms. For information on how to configure ride option names in your global vocabulary file, see [Registering Custom Vocabulary with SiriKit](../../sirikit/registering-custom-vocabulary-with-sirikit.md).

## See Also

### Getting the Ride Details

- [partySize](https://developer.apple.com/documentation/intents/inrequestrideintent/partysize-64kfc): The number of passengers that the ride must accommodate.
- [pickupLocation](pickuplocation.md): The user’s starting location.
- [scheduledPickupTime](scheduledpickuptime.md): The time at which to pick up the user.
- [dropOffLocation](dropofflocation.md): The user’s destination.
