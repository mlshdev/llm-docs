> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceinfo/mididestination](https://developer.apple.com/documentation/coremidi/midicideviceinfo/mididestination)

# midiDestination (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

The MIDI destination the device’s MIDI entity uses for capability inquiries.

> No longer supported for CoreMIDI

## Declaration

```swift
var midiDestination: MIDIEndpointRef { get }
```

## See Also

### Inspecting a Device

- [manufacturerID](manufacturerid.md): Deprecated. The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [family](family.md): Deprecated. The family to which the device belongs.
- [modelNumber](modelnumber.md): Deprecated. The model number of the device.
- [revisionLevel](revisionlevel.md): Deprecated. The revision number of the device model number.

# midiDestination (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

The MIDI destination the device’s MIDI entity uses for capability inquiries.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@property (nonatomic, readonly) MIDIEndpointRef midiDestination;
```

## See Also

### Inspecting a Device

- [manufacturerID](manufacturerid.md): Deprecated. The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [family](family.md): Deprecated. The family to which the device belongs.
- [modelNumber](modelnumber.md): Deprecated. The model number of the device.
- [revisionLevel](revisionlevel.md): Deprecated. The revision number of the device model number.
