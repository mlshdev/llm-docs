> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceidentification/revisionlevel](https://developer.apple.com/documentation/coremidi/midicideviceidentification/revisionlevel)

# revisionLevel (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The revision number of the device model number.

## Declaration

```swift
var revisionLevel: (UInt8, UInt8, UInt8, UInt8)
```

<a id="Discussion"></a>

## Discussion

This value is 2 bytes long.

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](modelnumber.md): The device model number.
- [family](family.md): The group of familes to which the device belongs.
- [reserved](reserved.md): A reserved field whose value is always zero.

# revisionLevel (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The revision number of the device model number.

## Declaration

```objectivec
uint8_t revisionLevel[4];
```

<a id="Discussion"></a>

## Discussion

This value is 2 bytes long.

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](modelnumber.md): The device model number.
- [family](family.md): The group of familes to which the device belongs.
- [reserved](reserved.md): A reserved field whose value is always zero.
