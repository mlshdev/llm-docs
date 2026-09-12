> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuebuffer/mpacketdescriptions](https://developer.apple.com/documentation/audiotoolbox/audioqueuebuffer/mpacketdescriptions)

# mPacketDescriptions (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An array of `AudioStreamPacketDescription` structures for the buffer.

## Declaration

```swift
var mPacketDescriptions: UnsafeMutablePointer<AudioStreamPacketDescription>? { get }
```

# mPacketDescriptions (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An array of `AudioStreamPacketDescription` structures for the buffer.

## Declaration

```objectivec
AudioStreamPacketDescription * const mPacketDescriptions;
```
