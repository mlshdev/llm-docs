> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/hostcallbackinfo/init(hostuserdata:beatandtempoproc:musicaltimelocationproc:transportstateproc:transportstateproc2:)

# init(hostUserData:beatAndTempoProc:musicalTimeLocationProc:transportStateProc:transportStateProc2:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
init(hostUserData: UnsafeMutableRawPointer?, beatAndTempoProc: HostCallback_GetBeatAndTempo?, musicalTimeLocationProc: HostCallback_GetMusicalTimeLocation?, transportStateProc: HostCallback_GetTransportState?, transportStateProc2: HostCallback_GetTransportState2?)
```
