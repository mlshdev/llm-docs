> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auhosttransportstateflags/moving](https://developer.apple.com/documentation/audiotoolbox/auhosttransportstateflags/moving)

# moving (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates that the audio transport is moving.

## Declaration

```swift
static var moving: AUHostTransportStateFlags { get }
```

## See Also

### Constants

- [changed](changed.md): Indicates such state changes as start, stop, or seeking to another position in the timeline. Can be active if there was a change to the state of, or discontinuities in, the audio transport since the [AUHostTransportStateBlock](../auhosttransportstateblock.md) callback was last called.
- [cycling](cycling.md): Indicates that the host is cycling or looping.
- [recording](recording.md): Indicates that the host is recording, or is prepared to record. Can be active with or without a moving state.

# AUHostTransportStateMoving (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates that the audio transport is moving.

## Declaration

```objectivec
AUHostTransportStateMoving
```

## See Also

### Constants

- [AUHostTransportStateChanged](changed.md): Indicates such state changes as start, stop, or seeking to another position in the timeline. Can be active if there was a change to the state of, or discontinuities in, the audio transport since the [AUHostTransportStateBlock](../auhosttransportstateblock.md) callback was last called.
- [AUHostTransportStateCycling](cycling.md): Indicates that the host is cycling or looping.
- [AUHostTransportStateRecording](recording.md): Indicates that the host is recording, or is prepared to record. Can be active with or without a moving state.
