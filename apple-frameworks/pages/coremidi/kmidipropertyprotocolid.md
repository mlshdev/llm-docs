> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/kmidipropertyprotocolid

# kMIDIPropertyProtocolID (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The native protocol in which the endpoint communicates.

## Declaration

```swift
let kMIDIPropertyProtocolID: CFString
```

<a id="Discussion"></a>

## Discussion

The system sets this value on endpoints when it creates them. Drivers can dynamically change the endpoint’s protocol as a result of a MIDI-CI negotiation, by setting this property.

Clients can observe changes to this property.

# kMIDIPropertyProtocolID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The native protocol in which the endpoint communicates.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyProtocolID;
```

<a id="Discussion"></a>

## Discussion

The system sets this value on endpoints when it creates them. Drivers can dynamically change the endpoint’s protocol as a result of a MIDI-CI negotiation, by setting this property.

Clients can observe changes to this property.
