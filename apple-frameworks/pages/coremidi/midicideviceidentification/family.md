> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicideviceidentification/family](https://developer.apple.com/documentation/coremidi/midicideviceidentification/family)

# family (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The group of familes to which the device belongs.

## Declaration

```swift
var family: (UInt8, UInt8)
```

<a id="Discussion"></a>

## Discussion

This value is 2 bytes long.

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](modelnumber.md): The device model number.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.
- [reserved](reserved.md): A reserved field whose value is always zero.

# family (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The group of familes to which the device belongs.

## Declaration

```objectivec
uint8_t family[2];
```

<a id="Discussion"></a>

## Discussion

This value is 2 bytes long.

## See Also

### Configuring Device Identification

- [manufacturer](manufacturer.md): The MIDI System Exclusive (SysEx) ID of the device manufacturer.
- [modelNumber](modelnumber.md): The device model number.
- [revisionLevel](revisionlevel.md): The revision number of the device model number.
- [reserved](reserved.md): A reserved field whose value is always zero.
