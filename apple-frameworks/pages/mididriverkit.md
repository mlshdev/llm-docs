> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mididriverkit](https://developer.apple.com/documentation/mididriverkit)

# MIDIDriverKit

**Interface language:** Objective-C

**Framework:** MIDIDriverKit  
**Kind:** Framework  
**Availability:** DriverKit 24.0+

Develop drivers for MIDI devices.

<a id="overview"></a>

## Overview

Use the MIDIDriverKit framework to implement a MIDI driver extension that communicates with Core MIDI. The framework handles all user-client communication between your driver extension and the Core MIDI server so you don’t need to implement a MIDI driver plug-in. You can also leverage other transport-based driver extension frameworks, such as [USBDriverKit](usbdriverkit.md), in your implementation.

## Topics

### Essentials

- [Creating a MIDI device driver](mididriverkit/creating-a-midi-device-driver.md): Implement a configurable virtual MIDI driver as a driver extension that runs in user space in macOS and iPadOS.
- [com.apple.developer.driverkit.family.midi](bundleresources/entitlements/com.apple.developer.driverkit.family.midi.md): A Boolean value that indicates whether to match the driver against devices that support MIDI.

### Classes

- [IOUserMIDIDestination](mididriverkit/iousermididestination.md)
- [IOUserMIDIDevice](mididriverkit/iousermididevice.md)
- [IOUserMIDIDriver](mididriverkit/iousermididriver.md)
- [IOUserMIDIEndpoint](mididriverkit/iousermidiendpoint.md)
- [IOUserMIDIEntity](mididriverkit/iousermidientity.md)
- [IOUserMIDIObject](mididriverkit/iousermidiobject.md)
- [IOUserMIDISource](mididriverkit/iousermidisource.md)

### Reference

- [MIDIDriverKit Constants](mididriverkit/mididriverkit-constants.md)
- [MIDIDriverKit Data Types](mididriverkit/mididriverkit-data-types.md)

### Namespaces

- [MIDIDriverKit](mididriverkit/mididriverkit.md)

### Macros

- [kIOUserMIDIDriverUserClientType](mididriverkit/kiousermididriveruserclienttype.md)
