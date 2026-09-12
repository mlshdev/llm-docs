> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciresponder/initiators](https://developer.apple.com/documentation/coremidi/midiciresponder/initiators)

# initiators (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An array of initiators.

> No longer supported for CoreMIDI

## Declaration

```swift
var initiators: [MIDICIInitiatiorMUID] { get }
```

## See Also

### Inspecting a Responder

- [MIDICIInitiatiorMUID](../midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [MIDICIDeviceIdentification](../midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [MIDICIDeviceInfo](../midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](deviceinfo.md): Deprecated. The MIDI-CI device’s information.

# initiators (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An array of initiators.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * initiators;
```

## See Also

### Inspecting a Responder

- [MIDICIInitiatiorMUID](../midiciinitiatiormuid.md): The unique MIDI-CI negotiation identifier to use for a responder connection.
- [MIDICIDeviceIdentification](../midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [MIDICIDeviceInfo](../midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](deviceinfo.md): Deprecated. The MIDI-CI device’s information.
