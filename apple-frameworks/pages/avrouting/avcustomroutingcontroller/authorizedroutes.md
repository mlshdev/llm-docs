> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontroller/authorizedroutes](https://developer.apple.com/documentation/avrouting/avcustomroutingcontroller/authorizedroutes)

# authorizedRoutes (Swift)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A list of authorized routes.

## Declaration

```swift
var authorizedRoutes: [AVCustomDeviceRoute] { get }
```

<a id="Discussion"></a>

## Discussion

After a user activates a route, it remains authorized for a certain amount of time even if the connection to the route is temporarily unavailable. Your app may reactivate any one of these routes when appropriate, but it needs to inform the system by calling [setActive(\_:for:)](setactive%28__for_%29.md).

## See Also

### Managing authorization

- [authorizedRoutesDidChange](authorizedroutesdidchange.md): A notification the system posts when the list of authorized routes changes.
- [invalidateAuthorization(for:)](invalidateauthorization%28for_%29.md): Revokes an app’s authorization to connect to a route.

# authorizedRoutes (Objective-C)

**Framework:** AVRouting  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A list of authorized routes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCustomDeviceRoute *> * authorizedRoutes;
```

<a id="Discussion"></a>

## Discussion

After a user activates a route, it remains authorized for a certain amount of time even if the connection to the route is temporarily unavailable. Your app may reactivate any one of these routes when appropriate, but it needs to inform the system by calling [setActive:forRoute:](setactive%28__for_%29.md).

## See Also

### Managing authorization

- [AVCustomRoutingControllerAuthorizedRoutesDidChangeNotification](authorizedroutesdidchange.md): A notification the system posts when the list of authorized routes changes.
- [invalidateAuthorizationForRoute:](invalidateauthorization%28for_%29.md): Revokes an app’s authorization to connect to a route.
