> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/audioaccessorykit](https://developer.apple.com/documentation/audioaccessorykit)

# AudioAccessoryKit

**Framework:** AudioAccessoryKit  
**Kind:** Framework  
**Availability:** iOS 26.4+

Support audio features like automatic audio switching.

<a id="overview"></a>

## Overview

AudioAccessoryKit makes it possible for third-party audio accessory manufacturers to provide headphone information to the system to support automatic audio switching. For example, when someone takes off their earbuds, their iPhone can route audio to its speakers.  The accessory’s companion app updates the earbuds’ placement from [AccessoryControlDevice.Placement.inEar](audioaccessorykit/accessorycontroldevice/placement/inear.md) to [AccessoryControlDevice.Placement.offHead](audioaccessorykit/accessorycontroldevice/placement/offhead.md). iOS reroutes the audio intelligently, rather than continuing to play audio on the distant accessory.

Your companion app pairs the accessory using [AccessorySetupKit](accessorysetupkit.md), then uses AudioAccessoryKit to register the accessory’s capabilities, such as [placement](audioaccessorykit/accessorycontroldevice/capabilities/placement.md).  In addition to placement information, your accessory communicates connected audio sources. To participate in automatic audio switching, keep the system up-to-date about your accessory’s state changes.

> **Important**

>  This framework supports iPhone and iPad only. You can develop and test an app that uses this framework on devices in any region.
>
> Customer installations of your app can use the framework only on devices located in the EU that are signed in with an Apple Account with an EU country or region.

## Topics

### Essentials

- [Supporting automatic audio switching for third-party accessories](audioaccessorykit/supporting-automatic-audio-switching.md): Configure your audio accessory to support seamless audio routing between connected devices.

### Audio configuration

- [AccessoryControlDevice](audioaccessorykit/accessorycontroldevice.md): A configuration object that manages audio accessory capabilities and state.

### Device characteristics

- [AccessoryControlDevice.Placement](audioaccessorykit/accessorycontroldevice/placement.md): The physical placement of an audio accessory.
- [AccessoryControlDevice.Capabilities](audioaccessorykit/accessorycontroldevice/capabilities.md): A set of capabilities that an audio accessory supports.
- [AccessoryControlDevice.Configuration](audioaccessorykit/accessorycontroldevice/configuration-swift.struct.md): The configuration for an accessory.

### Errors

- [AccessoryControlDevice.Error](audioaccessorykit/accessorycontroldevice/error.md): An error that occurs during audio accessory configuration operations.

### Classes

- [AudioAccessoryHeadTracking](audioaccessorykit/audioaccessoryheadtracking.md)

### Structures

- [AccessorySensorUpdates](audioaccessorykit/accessorysensorupdates.md): Subscribes to a stream of raw sensor data packets from a connected accessory.

### Enumerations

- [AudioAccessoryError](audioaccessorykit/audioaccessoryerror.md)
