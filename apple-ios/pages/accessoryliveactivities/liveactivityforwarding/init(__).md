> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/liveactivityforwarding/init(_:)](https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/init(_:))

# init(\_:)

**Framework:** Accessory Live Activities  
**Kind:** Initializer  
**Availability:** iOS 26.5+ · iPadOS 26.5+

Creates an object you use to manage Live Activity forwarding for your accessory.

## Declaration

```swift
init(_ handlerFactory: @escaping @Sendable () -> any LiveActivityForwarding.AccessoryLiveActivitiesHandler)
```

## Parameters

- `handlerFactory`: A closure that creates one new [LiveActivityForwarding.AccessoryLiveActivitiesHandler](accessoryliveactivitieshandler.md) instance for each new Live Activity session.

<a id="Overview"></a>

## Overview

The system calls the handler factory closure once for each Live Activity session and creates a new corresponding handler instance that receives updates for the life cycle of the Live Activity session.

## See Also

### Requesting Live Activity forwarding

- [authorization(forAccessory:)](authorization%28foraccessory_%29.md): Checks whether someone permits the system to forward Live Activities to the given accessory.
- [presentAuthorizationSheet(forAccessory:)](presentauthorizationsheet%28foraccessory_%29.md): Presents the system UI that allows people to manage their permission to forward Live Activities to an accessory.
- [featureID](featureid.md): A constant you use to configure your data provider extension’s capability to forward Live Activities to your accessory.
