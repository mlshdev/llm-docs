> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midipacketlist/builder/withunsafepointer(_:)

# withUnsafePointer(\_:)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS

## Declaration

```swift
func withUnsafePointer<Result>(_ body: (UnsafePointer<MIDIPacketList>) -> Result) -> Result
```
