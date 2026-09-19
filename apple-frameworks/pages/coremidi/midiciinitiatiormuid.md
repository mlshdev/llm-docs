> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiciinitiatiormuid

# MIDICIInitiatiorMUID (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The unique MIDI-CI negotiation identifier to use for a responder connection.

## Declaration

```swift
typealias MIDICIInitiatiorMUID = NSNumber
```

<a id="Discussion"></a>

## Discussion

As required by the MIDI-CI specification, this value is a randomly assigned 28-bit integer.

## See Also

### Inspecting a Responder

- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceIdentification](midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [MIDICIDeviceInfo](midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.

# MIDICIInitiatiorMUID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The unique MIDI-CI negotiation identifier to use for a responder connection.

## Declaration

```objectivec
typedef NSNumber * MIDICIInitiatiorMUID;
```

<a id="Discussion"></a>

## Discussion

As required by the MIDI-CI specification, this value is a randomly assigned 28-bit integer.

## See Also

### Inspecting a Responder

- [initiators](midiciresponder/initiators.md): Deprecated. An array of initiators.
- [MIDICIDeviceIdentification](midicideviceidentification.md): A structure that describes a MIDI-CI device.
- [MIDICIDeviceInfo](midicideviceinfo.md): Deprecated. An object that provides basic information about a MIDI-CI device.
- [deviceInfo](midiciresponder/deviceinfo.md): Deprecated. The MIDI-CI device’s information.
