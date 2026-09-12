> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepadsnapshotdatav100/version](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepadsnapshotdatav100/version)

# version (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A value that indicates the version number of the data structure.

> Use the [withMicroGamepad()](../gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```swift
var version: UInt16
```

<a id="discussion"></a>

## Discussion

For the structure defined here, the Game Controller framework uses a value of `0x0100`.

## See Also

### Instance Properties

- [buttonA](buttona.md): Deprecated. The value of the A button.
- [buttonX](buttonx.md): Deprecated.
- [dpadX](dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [size](size.md): Deprecated. The size of the recorded structure, in bytes.

# version (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that indicates the version number of the data structure.

## Declaration

```objectivec
uint16_t version;
```

<a id="discussion"></a>

## Discussion

For the structure defined here, the Game Controller framework uses a value of `0x0100`.

## See Also

### Instance Properties

- [buttonA](buttona.md): Deprecated. The value of the A button.
- [buttonX](buttonx.md): Deprecated.
- [dpadX](dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [size](size.md): Deprecated. The size of the recorded structure, in bytes.
