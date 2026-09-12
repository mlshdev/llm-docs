> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceidentification/reserved](https://developer.apple.com/documentation/coremidi/midicideviceidentification/reserved)

# reserved (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A reserved field whose value is always zero.

## Declaration

```swift
var reserved: (UInt8, UInt8, UInt8, UInt8, UInt8)
```

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](modelnumber.md): The device model number.
- [family](family.md): The group of familes to which the device belongs.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.

# reserved (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A reserved field whose value is always zero.

## Declaration

```objectivec
uint8_t reserved[5];
```

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](modelnumber.md): The device model number.
- [family](family.md): The group of familes to which the device belongs.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.
