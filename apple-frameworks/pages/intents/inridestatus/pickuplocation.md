> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/pickuplocation](https://developer.apple.com/documentation/intents/inridestatus/pickuplocation)

# pickupLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The starting location for the ride.

## Declaration

```swift
@NSCopying var pickupLocation: CLPlacemark? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the location where your driver will pick up the user. Do not include the pickup location in the[waypoints](waypoints.md) property.

The default value of this property is `nil`.

## See Also

### Accessing the Route Information

- [waypoints](waypoints.md): The intermediate waypoints for the journey.
- [dropOffLocation](dropofflocation.md): The destination of the user.

# pickupLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The starting location for the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) CLPlacemark * pickupLocation;
```

```objectivec
@property (atomic, copy, readwrite, nullable) CLPlacemark * pickupLocation;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the location where your driver will pick up the user. Do not include the pickup location in the[waypoints](waypoints.md) property.

The default value of this property is `nil`.

## See Also

### Accessing the Route Information

- [waypoints](waypoints.md): The intermediate waypoints for the journey.
- [dropOffLocation](dropofflocation.md): The destination of the user.
