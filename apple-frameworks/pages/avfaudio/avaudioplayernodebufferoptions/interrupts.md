> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayernodebufferoptions/interrupts](https://developer.apple.com/documentation/avfaudio/avaudioplayernodebufferoptions/interrupts)

# interrupts (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that indicates the buffer interrupts any buffer in a playing state.

## Declaration

```swift
static var interrupts: AVAudioPlayerNodeBufferOptions { get }
```

## See Also

### Getting Standard Buffer Options

- [loops](loops.md): An option that indicates the buffer loops indefinitely.
- [interruptsAtLoop](interruptsatloop.md): An option that indicates the buffer interrupts any buffer in a playing state at its loop point.

# AVAudioPlayerNodeBufferInterrupts (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that indicates the buffer interrupts any buffer in a playing state.

## Declaration

```objectivec
AVAudioPlayerNodeBufferInterrupts
```

## See Also

### Getting Standard Buffer Options

- [AVAudioPlayerNodeBufferLoops](loops.md): An option that indicates the buffer loops indefinitely.
- [AVAudioPlayerNodeBufferInterruptsAtLoop](interruptsatloop.md): An option that indicates the buffer interrupts any buffer in a playing state at its loop point.
