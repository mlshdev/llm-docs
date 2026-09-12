> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/hostcallbackinfo](https://developer.apple.com/documentation/audiotoolbox/hostcallbackinfo)

# HostCallbackInfo (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The time- and transport-related callback functions for an audio unit.

## Declaration

```swift
struct HostCallbackInfo
```

## Topics

### Initializers

- [init()](hostcallbackinfo/init%28%29.md)
- [init(hostUserData:beatAndTempoProc:musicalTimeLocationProc:transportStateProc:transportStateProc2:)](hostcallbackinfo/init%28hostuserdata_beatandtempoproc_musicaltimelocationproc_transportstateproc_transportstateproc2_%29.md)

### Instance Properties

- [beatAndTempoProc](hostcallbackinfo/beatandtempoproc.md): Your callback function that provides beat and tempo information to an audio unit. May be `NULL`.
- [hostUserData](hostcallbackinfo/hostuserdata.md): Custom data specified by your application. May be `NULL`.
- [musicalTimeLocationProc](hostcallbackinfo/musicaltimelocationproc.md): Your callback function that provides musical timeline information to an audio unit. May be `NULL`.
- [transportStateProc](hostcallbackinfo/transportstateproc.md): Your callback function that provides audio transport state information (*play*, *rewind*, and so on) to an audio unit. May be `NULL`.
- [transportStateProc2](hostcallbackinfo/transportstateproc2.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### General

- [Other Plug-In Formats](1534082-other-plug-in-formats.md)
- [RenderQuality](1534177-renderquality.md): Render quality settings for audio units.
- [General Audio Unit Properties](general-audio-unit-properties.md): Properties that apply to any audio unit.

# HostCallbackInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The time- and transport-related callback functions for an audio unit.

## Declaration

```objectivec
struct HostCallbackInfo;
```

## Topics

### Instance Properties

- [beatAndTempoProc](hostcallbackinfo/beatandtempoproc.md): Your callback function that provides beat and tempo information to an audio unit. May be `NULL`.
- [hostUserData](hostcallbackinfo/hostuserdata.md): Custom data specified by your application. May be `NULL`.
- [musicalTimeLocationProc](hostcallbackinfo/musicaltimelocationproc.md): Your callback function that provides musical timeline information to an audio unit. May be `NULL`.
- [transportStateProc](hostcallbackinfo/transportstateproc.md): Your callback function that provides audio transport state information (*play*, *rewind*, and so on) to an audio unit. May be `NULL`.
- [transportStateProc2](hostcallbackinfo/transportstateproc2.md)

## See Also

### General

- [Other Plug-In Formats](1534082-other-plug-in-formats.md)
- [RenderQuality](1534177-renderquality.md): Render quality settings for audio units.
- [General Audio Unit Properties](general-audio-unit-properties.md): Properties that apply to any audio unit.
