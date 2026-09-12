> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceinfo/manufacturerid](https://developer.apple.com/documentation/coremidi/midicideviceinfo/manufacturerid)

# manufacturerID (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

The MIDI System Exclusive (SysEx) ID of the device manufacturer.

> No longer supported for CoreMIDI

## Declaration

```swift
var manufacturerID: Data { get }
```

<a id="Discussion"></a>

## Discussion

This value is 3 bytes long.

The framework pads single-byte System Exclusive (SysEx) IDs with trailing zeros. For example, Apple’s SysEx ID, 0x11, is `0x110000`.

## See Also

### Inspecting a Device

- [family](family.md): Deprecated. The family to which the device belongs.
- [modelNumber](modelnumber.md): Deprecated. The model number of the device.
- [revisionLevel](revisionlevel.md): Deprecated. The revision number of the device model number.
- [midiDestination](mididestination.md): Deprecated. The MIDI destination the device’s MIDI entity uses for capability inquiries.

# manufacturerID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

The MIDI System Exclusive (SysEx) ID of the device manufacturer.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * manufacturerID;
```

<a id="Discussion"></a>

## Discussion

This value is 3 bytes long.

The framework pads single-byte System Exclusive (SysEx) IDs with trailing zeros. For example, Apple’s SysEx ID, 0x11, is `0x110000`.

## See Also

### Inspecting a Device

- [family](family.md): Deprecated. The family to which the device belongs.
- [modelNumber](modelnumber.md): Deprecated. The model number of the device.
- [revisionLevel](revisionlevel.md): Deprecated. The revision number of the device model number.
- [midiDestination](mididestination.md): Deprecated. The MIDI destination the device’s MIDI entity uses for capability inquiries.
