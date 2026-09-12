> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontroller/invalidateauthorization(for:)](https://developer.apple.com/documentation/avrouting/avcustomroutingcontroller/invalidateauthorization(for:))

# invalidateAuthorization(for:) (Swift)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Revokes an app’s authorization to connect to a route.

## Declaration

```swift
func invalidateAuthorization(for route: AVCustomDeviceRoute)
```

## Parameters

- `route`: The route to invalidate authorization for.

<a id="Discussion"></a>

## Discussion

The route only becomes authorized again if the user selects it using the route picker.

## See Also

### Managing authorization

- [authorizedRoutes](authorizedroutes.md): A list of authorized routes.
- [authorizedRoutesDidChange](authorizedroutesdidchange.md): A notification the system posts when the list of authorized routes changes.

# invalidateAuthorizationForRoute: (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Revokes an app’s authorization to connect to a route.

## Declaration

```objectivec
- (void) invalidateAuthorizationForRoute:(AVCustomDeviceRoute *) route;
```

## Parameters

- `route`: The route to invalidate authorization for.

<a id="Discussion"></a>

## Discussion

The route only becomes authorized again if the user selects it using the route picker.

## See Also

### Managing authorization

- [authorizedRoutes](authorizedroutes.md): A list of authorized routes.
- [AVCustomRoutingControllerAuthorizedRoutesDidChangeNotification](authorizedroutesdidchange.md): A notification the system posts when the list of authorized routes changes.
