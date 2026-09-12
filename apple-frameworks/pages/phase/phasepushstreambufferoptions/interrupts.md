> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreambufferoptions/interrupts](https://developer.apple.com/documentation/phase/phasepushstreambufferoptions/interrupts)

# interrupts (Swift)

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer begins processing immediately.

## Declaration

```swift
static var interrupts: PHASEPushStreamBufferOptions { get }
```

## See Also

### Options

- [default](default.md): Indicates a buffer processes after existing buffers in the queue.
- [interruptsAtLoop](interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.
- [loops](loops.md): Indicates a buffer restarts after it finishes processing.

# PHASEPushStreamBufferInterrupts (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer begins processing immediately.

## Declaration

```objectivec
PHASEPushStreamBufferInterrupts
```

## See Also

### Options

- [PHASEPushStreamBufferDefault](default.md): Indicates a buffer processes after existing buffers in the queue.
- [PHASEPushStreamBufferInterruptsAtLoop](interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.
- [PHASEPushStreamBufferLoops](loops.md): Indicates a buffer restarts after it finishes processing.
