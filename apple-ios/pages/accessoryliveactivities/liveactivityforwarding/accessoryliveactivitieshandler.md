> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/liveactivityforwarding/accessoryliveactivitieshandler](https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/accessoryliveactivitieshandler)

# LiveActivityForwarding.AccessoryLiveActivitiesHandler

**Framework:** Accessory Live Activities  
**Kind:** Protocol  
**Availability:** iOS 26.5+ · iPadOS 26.5+

A protocol that defines methods for handling Live Activity life cycle events in your accessory’s data provider extension.

## Declaration

```swift
protocol AccessoryLiveActivitiesHandler : Sendable
```

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](../receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Implement this protocol to receive forwarded Live Activity content and life cycle updates in your [AccessoryDataProvider](../../accessorytransportextension/accessorydataprovider.md) extension.

Each `AccessoryLiveActivitiesHandler` object has one corresponding [LiveActivityForwarding.Session](session.md).

## Topics

### Managing the session life cycle

- [activate(for:)](accessoryliveactivitieshandler/activate%28for_%29.md): Establishes communication between the data provider extension and the system.
- [sessionInvalidated()](accessoryliveactivitieshandler/sessioninvalidated%28%29.md): Indicates that the system invalidated the session and stopped sending Live Activity updates.

### Receiving Live Activity updates

- [activityUpdated(\_:)](accessoryliveactivitieshandler/activityupdated%28__%29.md): Provides an updated Live Activity.
- [activityUpdatedForAlert(\_:)](accessoryliveactivitieshandler/activityupdatedforalert%28__%29.md): Provides an updated Live Activity and requests confirmation that the accessory displayed an alert.

### Receiving data from your accessory

- [messageReceived(\_:)](accessoryliveactivitieshandler/messagereceived%28__%29.md): Delivers a message from the paired accessory to your data provider extension.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Live Activity forwarding

- [LiveActivityForwarding.Session](session.md): An object that represents the active connection between your data provider extension and the system.
