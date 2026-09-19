> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midideviceref

# MIDIDeviceRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A MIDI device that contains entities.

## Declaration

```swift
typealias MIDIDeviceRef = MIDIObjectRef
```

<a id="Discussion"></a>

## Discussion

A device object derives from [MIDIObjectRef](midiobjectref.md). It doesn’t have an owning object.

## See Also

### Managing Device Lifecyle

- [MIDIDeviceCreate(\_:\_:\_:\_:\_:)](mididevicecreate%28__________%29.md): Creates a new device object that corresponds to the available hardware.
- [MIDIDeviceDispose(\_:)](mididevicedispose%28__%29.md): Disposes of a MIDI device.

# MIDIDeviceRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A MIDI device that contains entities.

## Declaration

```objectivec
typedef MIDIObjectRef MIDIDeviceRef;
```

<a id="Discussion"></a>

## Discussion

A device object derives from [MIDIObjectRef](midiobjectref.md). It doesn’t have an owning object.

## See Also

### Managing Device Lifecyle

- [MIDIDeviceCreate](mididevicecreate%28__________%29.md): Creates a new device object that corresponds to the available hardware.
- [MIDIDeviceDispose](mididevicedispose%28__%29.md): Disposes of a MIDI device.
