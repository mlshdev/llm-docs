> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreambufferoptions/interruptsatloop](https://developer.apple.com/documentation/phase/phasepushstreambufferoptions/interruptsatloop)

# interruptsAtLoop (Swift)

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer begins processing when an existing buffer loops.

## Declaration

```swift
static var interruptsAtLoop: PHASEPushStreamBufferOptions { get }
```

## See Also

### Options

- [default](default.md): Indicates a buffer processes after existing buffers in the queue.
- [interrupts](interrupts.md): Indicates a buffer begins processing immediately.
- [loops](loops.md): Indicates a buffer restarts after it finishes processing.

# PHASEPushStreamBufferInterruptsAtLoop (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer begins processing when an existing buffer loops.

## Declaration

```objectivec
PHASEPushStreamBufferInterruptsAtLoop
```

## See Also

### Options

- [PHASEPushStreamBufferDefault](default.md): Indicates a buffer processes after existing buffers in the queue.
- [PHASEPushStreamBufferInterrupts](interrupts.md): Indicates a buffer begins processing immediately.
- [PHASEPushStreamBufferLoops](loops.md): Indicates a buffer restarts after it finishes processing.
