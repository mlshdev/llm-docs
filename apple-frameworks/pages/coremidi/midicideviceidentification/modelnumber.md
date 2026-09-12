> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceidentification/modelnumber](https://developer.apple.com/documentation/coremidi/midicideviceidentification/modelnumber)

# modelNumber (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The device model number.

## Declaration

```swift
var modelNumber: (UInt8, UInt8)
```

<a id="Discussion"></a>

## Discussion

This value is 2 bytes long.

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [family](family.md): The group of familes to which the device belongs.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.
- [reserved](reserved.md): A reserved field whose value is always zero.

# modelNumber (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The device model number.

## Declaration

```objectivec
uint8_t modelNumber[2];
```

<a id="Discussion"></a>

## Discussion

This value is 2 bytes long.

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [family](family.md): The group of familes to which the device belongs.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.
- [reserved](reserved.md): A reserved field whose value is always zero.
