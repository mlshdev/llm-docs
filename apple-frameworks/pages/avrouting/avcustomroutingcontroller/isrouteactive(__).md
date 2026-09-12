> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontroller/isrouteactive(_:)](https://developer.apple.com/documentation/avrouting/avcustomroutingcontroller/isrouteactive(_:))

# isRouteActive(\_:) (Swift)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a route is active.

## Declaration

```swift
func isRouteActive(_ route: AVCustomDeviceRoute) -> Bool
```

## Parameters

- `route`: A route for determining its active state.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the route is in an active state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Activating a route

- [setActive(\_:for:)](setactive%28__for_%29.md): Sets the active state of a route.

# isRouteActive: (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether a route is active.

## Declaration

```objectivec
- (BOOL) isRouteActive:(AVCustomDeviceRoute *) route;
```

## Parameters

- `route`: A route for determining its active state.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the route is in an active state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Activating a route

- [setActive:forRoute:](setactive%28__for_%29.md): Sets the active state of a route.
