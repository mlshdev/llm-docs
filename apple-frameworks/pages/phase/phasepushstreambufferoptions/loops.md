> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasepushstreambufferoptions/loops

# loops (Swift)

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer restarts after it finishes processing.

## Declaration

```swift
static var loops: PHASEPushStreamBufferOptions { get }
```

## See Also

### Options

- [default](default.md): Indicates a buffer processes after existing buffers in the queue.
- [interrupts](interrupts.md): Indicates a buffer begins processing immediately.
- [interruptsAtLoop](interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.

# PHASEPushStreamBufferLoops (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer restarts after it finishes processing.

## Declaration

```objectivec
PHASEPushStreamBufferLoops
```

## See Also

### Options

- [PHASEPushStreamBufferDefault](default.md): Indicates a buffer processes after existing buffers in the queue.
- [PHASEPushStreamBufferInterrupts](interrupts.md): Indicates a buffer begins processing immediately.
- [PHASEPushStreamBufferInterruptsAtLoop](interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.
