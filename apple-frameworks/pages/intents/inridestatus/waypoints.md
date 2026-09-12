> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/waypoints](https://developer.apple.com/documentation/intents/inridestatus/waypoints)

# waypoints (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The intermediate waypoints for the journey.

## Declaration

```swift
var waypoints: [CLPlacemark]? { get set }
```

<a id="Discussion"></a>

## Discussion

Specifying waypoints is optional. You might include waypoints when a single ride involves multiple stops—for example, to pick up or drop off additional members of the user’s party. Do not include the pickup and drop off locations among the waypoints.

The default value of this property is `nil`.

## See Also

### Accessing the Route Information

- [pickupLocation](pickuplocation.md): The starting location for the ride.
- [dropOffLocation](dropofflocation.md): The destination of the user.

# waypoints (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The intermediate waypoints for the journey.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<CLPlacemark *> * waypoints;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<CLPlacemark *> * waypoints;
```

<a id="Discussion"></a>

## Discussion

Specifying waypoints is optional. You might include waypoints when a single ride involves multiple stops—for example, to pick up or drop off additional members of the user’s party. Do not include the pickup and drop off locations among the waypoints.

The default value of this property is `nil`.

## See Also

### Accessing the Route Information

- [pickupLocation](pickuplocation.md): The starting location for the ride.
- [dropOffLocation](dropofflocation.md): The destination of the user.
