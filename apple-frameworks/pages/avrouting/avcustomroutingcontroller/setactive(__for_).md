> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontroller/setactive(_:for:)](https://developer.apple.com/documentation/avrouting/avcustomroutingcontroller/setactive(_:for:))

# setActive(\_:for:) (Swift)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Sets the active state of a route.

## Declaration

```swift
func setActive(_ active: Bool, for route: AVCustomDeviceRoute)
```

## Parameters

- `active`: A Boolean value that indicates whether the route is active.
- `route`: A route to change the active state for.

<a id="Discussion"></a>

## Discussion

Set the value to [false](https://developer.apple.com/documentation/swift/false) if the connection to the route becomes unavailable, and set it to [true](https://developer.apple.com/documentation/swift/true) after you reestablish the connection.

## See Also

### Activating a route

- [isRouteActive(\_:)](isrouteactive%28__%29.md): Returns a Boolean value that indicates whether a route is active.

# setActive:forRoute: (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Sets the active state of a route.

## Declaration

```objectivec
- (void) setActive:(BOOL) active forRoute:(AVCustomDeviceRoute *) route;
```

## Parameters

- `active`: A Boolean value that indicates whether the route is active.
- `route`: A route to change the active state for.

<a id="Discussion"></a>

## Discussion

Set the value to [false](https://developer.apple.com/documentation/swift/false) if the connection to the route becomes unavailable, and set it to [true](https://developer.apple.com/documentation/swift/true) after you reestablish the connection.

## See Also

### Activating a route

- [isRouteActive:](isrouteactive%28__%29.md): Returns a Boolean value that indicates whether a route is active.
