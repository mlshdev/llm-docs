> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstate/active](https://developer.apple.com/documentation/fskit/fscontainerstate/active)

# FSContainerState.active (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The container is active, and one or more volumes are active.

## Declaration

```swift
case active
```

## See Also

### Container states

- [FSContainerState.notReady](notready.md): The container isn’t ready.
- [FSContainerState.blocked](blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerState.ready](ready.md): The container is ready, but inactive.

# FSContainerStateActive (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The container is active, and one or more volumes are active.

## Declaration

```objectivec
FSContainerStateActive
```

## See Also

### Container states

- [FSContainerStateNotReady](notready.md): The container isn’t ready.
- [FSContainerStateBlocked](blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerStateReady](ready.md): The container is ready, but inactive.
