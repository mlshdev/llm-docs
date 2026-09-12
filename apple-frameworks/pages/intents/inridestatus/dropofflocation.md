> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/dropofflocation](https://developer.apple.com/documentation/intents/inridestatus/dropofflocation)

# dropOffLocation (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The destination of the user.

## Declaration

```swift
@NSCopying var dropOffLocation: CLPlacemark? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the final destination for the ride. Do not include the pickup location in the[waypoints](waypoints.md) property.

The default value of this property is `nil`.

## See Also

### Accessing the Route Information

- [pickupLocation](pickuplocation.md): The starting location for the ride.
- [waypoints](waypoints.md): The intermediate waypoints for the journey.

# dropOffLocation (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The destination of the user.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) CLPlacemark * dropOffLocation;
```

```objectivec
@property (atomic, copy, readwrite, nullable) CLPlacemark * dropOffLocation;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the final destination for the ride. Do not include the pickup location in the[waypoints](waypoints.md) property.

The default value of this property is `nil`.

## See Also

### Accessing the Route Information

- [pickupLocation](pickuplocation.md): The starting location for the ride.
- [waypoints](waypoints.md): The intermediate waypoints for the journey.
