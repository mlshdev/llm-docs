> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceroutingmanager](https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager)

# MediaDeviceRoutingManager

**Framework:** Media Device  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An object used by a [MediaDeviceExtension](mediadeviceextension.md) to report device discovery, state changes, and playback events back to the system.

## Declaration

```swift
@MainActor final class MediaDeviceRoutingManager
```

## Topics

### Instance Methods

- [activatedDevice(\_:session:)](mediadeviceroutingmanager/activateddevice%28__session_%29.md): Notifies the system that a device has been successfully activated and is ready for use.
- [discoveryFailed(\_:)](mediadeviceroutingmanager/discoveryfailed%28__%29.md): Reports a discovery failure to the system, indicating that the extension was unable to search for devices.
- [failedToActivateDevice(\_:session:error:)](mediadeviceroutingmanager/failedtoactivatedevice%28__session_error_%29.md): Reports a device activation failure to the system so it can inform the user and clean up the session.
- [foundDevice(\_:)](mediadeviceroutingmanager/founddevice%28__%29.md): Notifies the system of a new media device, so it can be included in device lists for users to select.
- [lostDevice(\_:)](mediadeviceroutingmanager/lostdevice%28__%29.md): Removes a device from the system’s device lists so users can no longer select it.
- [receiveData(\_:fromApplication:session:)](mediadeviceroutingmanager/receivedata%28__fromapplication_session_%29.md): Delivers data received from a remote application to the system for processing.
- [reportQualityMetricsPassed(\_:forSession:)](mediadeviceroutingmanager/reportqualitymetricspassed%28__forsession_%29.md): Reports whether the realtime sample delivery session has met its quality KPIs.
- [requestPairingCode(for:session:reason:authorizationMethod:)](mediadeviceroutingmanager/requestpairingcode%28for_session_reason_authorizationmethod_%29.md): Presents a pairing user interface so the user can enter authorization credentials for a device.
- [sessionFailed(\_:error:)](mediadeviceroutingmanager/sessionfailed%28__error_%29.md): Reports an unrecoverable session error to the system so it can end the session and inform the user.
- [started(application:playbackControl:session:)](mediadeviceroutingmanager/started%28application_playbackcontrol_session_%29.md): Notifies the system that a remote application has successfully started on the target device.
- [updateDevices(\_:)](mediadeviceroutingmanager/updatedevices%28__%29.md): Notifies the system that one or more devices have changed state, so their information can be refreshed in device lists.
- [volumeChanged(for:)](mediadeviceroutingmanager/volumechanged%28for_%29.md): Notifies the system that the volume state has changed on a remote device.

### Type Methods

- [routingManager(for:)](mediadeviceroutingmanager/routingmanager%28for_%29.md): Returns the shared routing manager instance for a media device extension.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session and system communication

- [MediaOutputSession](mediaoutputsession.md): Represents a media output session for playing content on a remote device.
- [RealtimeSampleHandling](realtimesamplehandling.md): A protocol that extends a media device extension to support realtime sample delivery.
- [MediaDeviceError](mediadeviceerror.md): An error returned by MediaDeviceExtension operations.
