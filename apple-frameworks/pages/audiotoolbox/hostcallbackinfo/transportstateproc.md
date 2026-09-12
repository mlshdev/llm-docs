> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/hostcallbackinfo/transportstateproc](https://developer.apple.com/documentation/audiotoolbox/hostcallbackinfo/transportstateproc)

# transportStateProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Your callback function that provides audio transport state information (*play*, *rewind*, and so on) to an audio unit. May be `NULL`.

## Declaration

```swift
var transportStateProc: HostCallback_GetTransportState?
```

# transportStateProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Your callback function that provides audio transport state information (*play*, *rewind*, and so on) to an audio unit. May be `NULL`.

## Declaration

```objectivec
HostCallback_GetTransportState transportStateProc;
```
