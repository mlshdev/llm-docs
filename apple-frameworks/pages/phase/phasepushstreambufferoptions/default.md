> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasepushstreambufferoptions/default](https://developer.apple.com/documentation/phase/phasepushstreambufferoptions/default)

# default (Swift)

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer processes after existing buffers in the queue.

## Declaration

```swift
static var `default`: PHASEPushStreamBufferOptions { get }
```

## See Also

### Options

- [interrupts](interrupts.md): Indicates a buffer begins processing immediately.
- [interruptsAtLoop](interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.
- [loops](loops.md): Indicates a buffer restarts after it finishes processing.

# PHASEPushStreamBufferDefault (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Indicates a buffer processes after existing buffers in the queue.

## Declaration

```objectivec
PHASEPushStreamBufferDefault
```

## See Also

### Options

- [PHASEPushStreamBufferInterrupts](interrupts.md): Indicates a buffer begins processing immediately.
- [PHASEPushStreamBufferInterruptsAtLoop](interruptsatloop.md): Indicates a buffer begins processing when an existing buffer loops.
- [PHASEPushStreamBufferLoops](loops.md): Indicates a buffer restarts after it finishes processing.
