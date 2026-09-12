> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension](https://developer.apple.com/documentation/mediadevice/mediadeviceextension)

# MediaDeviceExtension

**Framework:** Media Device  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A protocol that defines the requirements of a media device extension that discovers, activates, and plays media on a remote device.

## Declaration

```swift
@MainActor protocol MediaDeviceExtension : AppExtension
```

## Mentioned In

- [Creating a media device extension](creating-a-media-device-extension.md)

<a id="overview"></a>

## Overview

The extension requires the `com.apple.developer.media-device-extension` entitlement. As part of this entitlement an ID for your protocol needs to be specified. This same identifier must also be declared in the extension’s Info.plist as the `UTTypeIdentifier`. If the identifier in the entitlement and Info.plist do not match, the extension will not be run. This ID value can be used by other apps that use the `AVSystemRouting` framework and which intend to make use of an extension of this type.

The display name of the extension is sourced from the value of the `UTTypeDescription` key in the extension’s Info.plist. It may be presented in user interfaces.

## Topics

### Instance Properties

- [protocolType](mediadeviceextension/protocoltype.md): The communication protocol that this extension implements.
- [supportsSimultaneousSessions](mediadeviceextension/supportssimultaneoussessions.md): Indicates whether the extension supports handling simultaneous media sessions via `MediaOutputSession`.

### Instance Methods

- [activateDevice(\_:session:for:)](mediadeviceextension/activatedevice%28__session_for_%29.md): Called when the user activates a device via a user interface.
- [changeVolume(by:for:)](mediadeviceextension/changevolume%28by_for_%29.md): Changes the volume by a specified number of increments for the specified device.
- [connectUsingPairingCode(\_:to:session:)](mediadeviceextension/connectusingpairingcode%28__to_session_%29.md): Called after the user has input their authorization into a user interface. Use the Security framework’s keychain to store any derived key material.
- [deactivateDevice(\_:session:)](mediadeviceextension/deactivatedevice%28__session_%29.md): Called when the user deactivates a device via a user interface.
- [isDeviceMuted(\_:)](mediadeviceextension/isdevicemuted%28__%29.md): Gets the current mute state for the specified device.
- [muteDevice(\_:)](mediadeviceextension/mutedevice%28__%29.md): Mutes the audio output for the specified device.
- [sendData(\_:toApplication:session:)](mediadeviceextension/senddata%28__toapplication_session_%29.md): Called when an app sends data to a remote application.
- [setVolume(\_:for:)](mediadeviceextension/setvolume%28__for_%29.md): Sets the volume level for the specified device.
- [startDeviceDiscovery()](mediadeviceextension/startdevicediscovery%28%29.md): Called when a user action requires discovered devices to be displayed.
- [startSession(\_:identifier:url:)](mediadeviceextension/startsession%28__identifier_url_%29.md): Called when media playback or a remote application should be started on a remote device.
- [stopDeviceDiscovery()](mediadeviceextension/stopdevicediscovery%28%29.md): Called when the user dismisses the UI element that is showing devices.
- [stopSession(\_:)](mediadeviceextension/stopsession%28__%29.md): Called when the application stops media playback.
- [volume(for:)](mediadeviceextension/volume%28for_%29.md): Gets the current volume level for the specified device.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)

### Inherited By

- [RealtimeSampleHandling](realtimesamplehandling.md)

## See Also

### Essentials

- [Creating a media device extension](creating-a-media-device-extension.md): Provide a way for people to find, connect to, and control your media device by adding a device extension in your iOS app.
- [Routing media to third-party devices](../avsystemrouting/routing-media-to-third-party-devices.md): Respond to routing events and control playback on a TV, speaker, or other media device.
- [MediaDeviceExtensionConfiguration](mediadeviceextensionconfiguration.md): Configuration for the app extension.
