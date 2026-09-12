> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceidentification](https://developer.apple.com/documentation/coremidi/midicideviceidentification)

# MIDICIDeviceIdentification (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes a MIDI-CI device.

## Declaration

```swift
struct MIDICIDeviceIdentification
```

## Topics

### Configuring Device Identification

- [manufacturer](midicideviceidentification/manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](midicideviceidentification/modelnumber.md): The device model number.
- [family](midicideviceidentification/family.md): The group of familes to which the device belongs.
- [revisionLevel](midicideviceidentification/revisionlevel.md): The revision number of the device model number.
- [reserved](midicideviceidentification/reserved.md): A reserved field whose value is always zero.

### Initializers

- [init()](midicideviceidentification/init%28%29.md)
- [init(manufacturer:family:modelNumber:revisionLevel:reserved:)](midicideviceidentification/init%28manufacturer_family_modelnumber_revisionlevel_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Inspecting a Responder

- [MIDICIInitiatiorMUID](midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceInfo](midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.

# MIDICIDeviceIdentification (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that describes a MIDI-CI device.

## Declaration

```objectivec
struct MIDICIDeviceIdentification;
```

## Topics

### Configuring Device Identification

- [manufacturer](midicideviceidentification/manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](midicideviceidentification/modelnumber.md): The device model number.
- [family](midicideviceidentification/family.md): The group of familes to which the device belongs.
- [revisionLevel](midicideviceidentification/revisionlevel.md): The revision number of the device model number.
- [reserved](midicideviceidentification/reserved.md): A reserved field whose value is always zero.

## See Also

### Inspecting a Responder

- [MIDICIInitiatiorMUID](midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceInfo](midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.
