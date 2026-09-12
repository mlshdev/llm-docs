> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstate/blocked](https://developer.apple.com/documentation/fskit/fscontainerstate/blocked)

# FSContainerState.blocked (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.

## Declaration

```swift
case blocked
```

<a id="discussion"></a>

## Discussion

This state implies that the error has a resolution that would allow the container to become ready, such as correcting an incorrect password.

## See Also

### Container states

- [FSContainerState.notReady](notready.md): The container isn’t ready.
- [FSContainerState.ready](ready.md): The container is ready, but inactive.
- [FSContainerState.active](active.md): The container is active, and one or more volumes are active.

# FSContainerStateBlocked (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.

## Declaration

```objectivec
FSContainerStateBlocked
```

<a id="discussion"></a>

## Discussion

This state implies that the error has a resolution that would allow the container to become ready, such as correcting an incorrect password.

## See Also

### Container states

- [FSContainerStateNotReady](notready.md): The container isn’t ready.
- [FSContainerStateReady](ready.md): The container is ready, but inactive.
- [FSContainerStateActive](active.md): The container is active, and one or more volumes are active.
