> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midieventpacket/builder/withunsafepointer(_:)](https://developer.apple.com/documentation/coremidi/midieventpacket/builder/withunsafepointer(_:))

# withUnsafePointer(\_:)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

## Declaration

```swift
func withUnsafePointer<Result>(_ body: (UnsafePointer<MIDIEventPacket>) -> Result) -> Result
```
