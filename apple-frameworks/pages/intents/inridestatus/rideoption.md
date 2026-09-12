> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/rideoption](https://developer.apple.com/documentation/intents/inridestatus/rideoption)

# rideOption (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Information about the type of ride that you are offering to the user.

## Declaration

```swift
@NSCopying var rideOption: INRideOption? { get set }
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

Use this property to identify the type of ride that the user selected. An [INRideOption](../inrideoption.md) object contains pricing information, disclaimers, and information about the number of people that the ride can accommodate. Siri and Maps display this information to the user as needed.

The default value of this property is `nil`.

## See Also

### Accessing Ride Information

- [vehicle](vehicle.md): The vehicle assigned to pick up the user.
- [driver](driver.md): The driver providing the ride.

# rideOption (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Information about the type of ride that you are offering to the user.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INRideOption * rideOption;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INRideOption * rideOption;
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

Use this property to identify the type of ride that the user selected. An [INRideOption](../inrideoption.md) object contains pricing information, disclaimers, and information about the number of people that the ride can accommodate. Siri and Maps display this information to the user as needed.

The default value of this property is `nil`.

## See Also

### Accessing Ride Information

- [vehicle](vehicle.md): The vehicle assigned to pick up the user.
- [driver](driver.md): The driver providing the ride.
