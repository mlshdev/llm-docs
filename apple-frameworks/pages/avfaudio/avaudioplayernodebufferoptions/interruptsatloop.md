> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioplayernodebufferoptions/interruptsatloop

# interruptsAtLoop (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that indicates the buffer interrupts any buffer in a playing state at its loop point.

## Declaration

```swift
static var interruptsAtLoop: AVAudioPlayerNodeBufferOptions { get }
```

## See Also

### Getting Standard Buffer Options

- [loops](loops.md): An option that indicates the buffer loops indefinitely.
- [interrupts](interrupts.md): An option that indicates the buffer interrupts any buffer in a playing state.

# AVAudioPlayerNodeBufferInterruptsAtLoop (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option that indicates the buffer interrupts any buffer in a playing state at its loop point.

## Declaration

```objectivec
AVAudioPlayerNodeBufferInterruptsAtLoop
```

## See Also

### Getting Standard Buffer Options

- [AVAudioPlayerNodeBufferLoops](loops.md): An option that indicates the buffer loops indefinitely.
- [AVAudioPlayerNodeBufferInterrupts](interrupts.md): An option that indicates the buffer interrupts any buffer in a playing state.
