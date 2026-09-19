> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiooutputunitmidicallbacks/init(userdata:midieventproc:midisysexproc:)

# init(userData:MIDIEventProc:MIDISysExProc:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
init(userData: UnsafeMutableRawPointer?, MIDIEventProc: (UnsafeMutableRawPointer?, UInt32, UInt32, UInt32, UInt32) -> Void, MIDISysExProc: (UnsafeMutableRawPointer?, UnsafePointer<UInt8>, UInt32) -> Void)
```
