> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avrouting/avcustomroutingcontroller/authorizedroutesdidchange](https://developer.apple.com/documentation/avrouting/avcustomroutingcontroller/authorizedroutesdidchange)

# authorizedRoutesDidChange (Swift)

**Framework:** AVRouting  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A notification the system posts when the list of authorized routes changes.

## Declaration

```swift
class let authorizedRoutesDidChange: NSNotification.Name
```

## See Also

### Managing authorization

- [authorizedRoutes](authorizedroutes.md): A list of authorized routes.
- [invalidateAuthorization(for:)](invalidateauthorization%28for_%29.md): Revokes an app’s authorization to connect to a route.

# AVCustomRoutingControllerAuthorizedRoutesDidChangeNotification (Objective-C)

**Framework:** AVRouting  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A notification the system posts when the list of authorized routes changes.

## Declaration

```objectivec
extern NSNotificationName const AVCustomRoutingControllerAuthorizedRoutesDidChangeNotification;
```

## See Also

### Managing authorization

- [authorizedRoutes](authorizedroutes.md): A list of authorized routes.
- [invalidateAuthorizationForRoute:](invalidateauthorization%28for_%29.md): Revokes an app’s authorization to connect to a route.
