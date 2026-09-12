> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernodebufferoptions/loops](https://developer.apple.com/documentation/avfaudio/avaudioplayernodebufferoptions/loops)

# loops (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that indicates the buffer loops indefinitely.

## Declaration

```swift
static var loops: AVAudioPlayerNodeBufferOptions { get }
```

## See Also

### Getting Standard Buffer Options

- [interrupts](interrupts.md): An option that indicates the buffer interrupts any buffer in a playing state.
- [interruptsAtLoop](interruptsatloop.md): An option that indicates the buffer interrupts any buffer in a playing state at its loop point.

# AVAudioPlayerNodeBufferLoops (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that indicates the buffer loops indefinitely.

## Declaration

```objectivec
AVAudioPlayerNodeBufferLoops
```

## See Also

### Getting Standard Buffer Options

- [AVAudioPlayerNodeBufferInterrupts](interrupts.md): An option that indicates the buffer interrupts any buffer in a playing state.
- [AVAudioPlayerNodeBufferInterruptsAtLoop](interruptsatloop.md): An option that indicates the buffer interrupts any buffer in a playing state at its loop point.
