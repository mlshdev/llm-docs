> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/session

# LiveActivityForwarding.Session

**Framework:** Accessory Live Activities  
**Kind:** Class  
**Availability:** iOS 26.5+ · iPadOS 26.5+

An object that represents the active connection between your data provider extension and the system.

## Declaration

```swift
final class Session
```

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](../receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Each `Session` has one corresponding [LiveActivityForwarding.AccessoryLiveActivitiesHandler](accessoryliveactivitieshandler.md).

## Topics

### Working with Live Activities

- [liveActivities](session/liveactivities.md): The currently active Live Activities that the accessory is authorized to receive.

## Relationships

### Conforms To

- [AccessoryFeatureSession](../../accessorytransportextension/accessoryfeaturesession.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Live Activity forwarding

- [LiveActivityForwarding.AccessoryLiveActivitiesHandler](accessoryliveactivitieshandler.md): A protocol that defines methods for handling Live Activity life cycle events in your accessory’s data provider extension.
