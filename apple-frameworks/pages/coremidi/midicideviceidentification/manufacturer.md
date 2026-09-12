> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceidentification/manufacturer](https://developer.apple.com/documentation/coremidi/midicideviceidentification/manufacturer)

# manufacturer (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The MIDI System Exclusive (SysEx) ID of the device manufacturer.

## Declaration

```swift
var manufacturer: (UInt8, UInt8, UInt8)
```

<a id="Discussion"></a>

## Discussion

This value is 3 bytes long.

The framework pads single-byte System Exclusive (SysEx) IDs with trailing zeros. For example, Apple’s SysEx ID, 0x11, is `0x110000`.

## See Also

### Configuring Device Identification

- [modelNumber](modelnumber.md): The device model number.
- [family](family.md): The group of familes to which the device belongs.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.
- [reserved](reserved.md): A reserved field whose value is always zero.

# manufacturer (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The MIDI System Exclusive (SysEx) ID of the device manufacturer.

## Declaration

```objectivec
uint8_t manufacturer[3];
```

<a id="Discussion"></a>

## Discussion

This value is 3 bytes long.

The framework pads single-byte System Exclusive (SysEx) IDs with trailing zeros. For example, Apple’s SysEx ID, 0x11, is `0x110000`.

## See Also

### Configuring Device Identification

- [modelNumber](modelnumber.md): The device model number.
- [family](family.md): The group of familes to which the device belongs.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.
- [reserved](reserved.md): A reserved field whose value is always zero.
