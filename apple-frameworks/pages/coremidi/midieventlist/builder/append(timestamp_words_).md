> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midieventlist/builder/append(timestamp:words:)

# append(timestamp:words:)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

## Declaration

```swift
@discardableResult func append(timestamp: MIDITimeStamp, words: [UInt32]) -> UnsafePointer<MIDIEventPacket>?
```
