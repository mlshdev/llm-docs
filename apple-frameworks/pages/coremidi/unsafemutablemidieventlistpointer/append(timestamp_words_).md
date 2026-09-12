> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/unsafemutablemidieventlistpointer/append(timestamp:words:)](https://developer.apple.com/documentation/coremidi/unsafemutablemidieventlistpointer/append(timestamp:words:))

# append(timestamp:words:)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS

## Declaration

```swift
@discardableResult mutating func append(timestamp: MIDITimeStamp, words: [UInt32]) -> UnsafePointer<MIDIEventPacket>?
```
