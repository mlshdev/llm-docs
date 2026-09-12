> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/driver](https://developer.apple.com/documentation/intents/inridestatus/driver)

# driver (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The driver providing the ride.

## Declaration

```swift
@NSCopying var driver: INRideDriver? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify information about the driver of the vehicle that is picking up the user. Siri displays the driver’s picture and telephone number to the user, who can use that identify and contact the driver.

The default value of this property is `nil`.

## See Also

### Accessing Ride Information

- [vehicle](vehicle.md): The vehicle assigned to pick up the user.
- [rideOption](rideoption.md): Information about the type of ride that you are offering to the user.

# driver (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The driver providing the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INRideDriver * driver;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INRideDriver * driver;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify information about the driver of the vehicle that is picking up the user. Siri displays the driver’s picture and telephone number to the user, who can use that identify and contact the driver.

The default value of this property is `nil`.

## See Also

### Accessing Ride Information

- [vehicle](vehicle.md): The vehicle assigned to pick up the user.
- [rideOption](rideoption.md): Information about the type of ride that you are offering to the user.
