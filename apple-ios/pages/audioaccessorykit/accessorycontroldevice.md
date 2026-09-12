> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit/accessorycontroldevice](https://developer.apple.com/documentation/audioaccessorykit/accessorycontroldevice)

# AccessoryControlDevice

**Framework:** AudioAccessoryKit  
**Kind:** Class  
**Availability:** iOS 26.4+

A configuration object that manages audio accessory capabilities and state.

## Declaration

```swift
final class AccessoryControlDevice
```

## Mentioned In

- [Supporting automatic audio switching for third-party accessories](supporting-automatic-audio-switching.md)

<a id="overview"></a>

## Overview

This class registers your paired audio accessory with the system and provides updates about your device’s state changes. The configuration lets the system intelligently switch the audio output device, based on information you provide the system, such as placement and connected devices.

## Topics

### Accessing the current configuration

- [current(for:)](accessorycontroldevice/current%28for_%29.md): Retrieves the accessory’s current configuration.

### Registering the device

- [register(\_:\_:)](accessorycontroldevice/register%28____%29.md): Registers the audio accessory with the system and activates its configured capabilities.

### Updating device state

- [update(\_:)](accessorycontroldevice/update%28__%29.md): Updates the accessory’s configuration.

### Inspecting the accessory

- [accessory](accessorycontroldevice/accessory.md): An AccessorySetupKit accessory that represents the audio device.
- [configuration](accessorycontroldevice/configuration-swift.property.md): The current configuration of the device.

### Defining device characteristics

- [AccessoryControlDevice.Placement](accessorycontroldevice/placement.md): The physical placement of an audio accessory.
- [AccessoryControlDevice.Capabilities](accessorycontroldevice/capabilities.md): A set of capabilities that an audio accessory supports.
- [AccessoryControlDevice.Configuration](accessorycontroldevice/configuration-swift.struct.md): The configuration for an accessory.

### Handling errors

- [AccessoryControlDevice.Error](accessorycontroldevice/error.md): An error that occurs during audio accessory configuration operations.
