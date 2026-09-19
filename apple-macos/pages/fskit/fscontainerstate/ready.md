> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fscontainerstate/ready

# FSContainerState.ready (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The container is ready, but inactive.

## Declaration

```swift
case ready
```

## See Also

### Container states

- [FSContainerState.notReady](notready.md): The container isn’t ready.
- [FSContainerState.blocked](blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerState.active](active.md): The container is active, and one or more volumes are active.

# FSContainerStateReady (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The container is ready, but inactive.

## Declaration

```objectivec
FSContainerStateReady
```

## See Also

### Container states

- [FSContainerStateNotReady](notready.md): The container isn’t ready.
- [FSContainerStateBlocked](blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerStateActive](active.md): The container is active, and one or more volumes are active.
