> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/vehicle](https://developer.apple.com/documentation/intents/inridestatus/vehicle)

# vehicle (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The vehicle assigned to pick up the user.

## Declaration

```swift
@NSCopying var vehicle: INRideVehicle? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify information about the vehicle assigned to pick up the user. Siri and Maps display vehicle information to the user so that the user can identify the vehicle when it arrives.

The default value of this property is `nil`.

## See Also

### Accessing Ride Information

- [driver](driver.md): The driver providing the ride.
- [rideOption](rideoption.md): Information about the type of ride that you are offering to the user.

# vehicle (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The vehicle assigned to pick up the user.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INRideVehicle * vehicle;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INRideVehicle * vehicle;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify information about the vehicle assigned to pick up the user. Siri and Maps display vehicle information to the user so that the user can identify the vehicle when it arrives.

The default value of this property is `nil`.

## See Also

### Accessing Ride Information

- [driver](driver.md): The driver providing the ride.
- [rideOption](rideoption.md): Information about the type of ride that you are offering to the user.
