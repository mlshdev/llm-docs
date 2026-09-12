> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aumidievent/length](https://developer.apple.com/documentation/audiotoolbox/aumidievent/length)

# length (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of valid MIDI bytes in the data field. For most MIDI events this value is usually `1`, `2`, or `3`, but it can be longer for system-exclusive events.

## Declaration

```swift
var length: UInt16
```

# length (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of valid MIDI bytes in the data field. For most MIDI events this value is usually `1`, `2`, or `3`, but it can be longer for system-exclusive events.

## Declaration

```objectivec
uint16_t length;
```
