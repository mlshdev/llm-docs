> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fscontainerstate/notready

# FSContainerState.notReady (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The container isn’t ready.

## Declaration

```swift
case notReady
```

## See Also

### Container states

- [FSContainerState.blocked](blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerState.ready](ready.md): The container is ready, but inactive.
- [FSContainerState.active](active.md): The container is active, and one or more volumes are active.

# FSContainerStateNotReady (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The container isn’t ready.

## Declaration

```objectivec
FSContainerStateNotReady
```

## See Also

### Container states

- [FSContainerStateBlocked](blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerStateReady](ready.md): The container is ready, but inactive.
- [FSContainerStateActive](active.md): The container is active, and one or more volumes are active.
