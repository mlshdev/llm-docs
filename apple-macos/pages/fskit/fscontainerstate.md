> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstate](https://developer.apple.com/documentation/fskit/fscontainerstate)

# FSContainerState (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of container state values.

## Declaration

```swift
enum FSContainerState
```

<a id="overview"></a>

## Overview

This enumeration represents values for a container’s state engine. Containers start in the [FSContainerState.notReady](fscontainerstate/notready.md) state.

## Topics

### Container states

- [FSContainerState.notReady](fscontainerstate/notready.md): The container isn’t ready.
- [FSContainerState.blocked](fscontainerstate/blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerState.ready](fscontainerstate/ready.md): The container is ready, but inactive.
- [FSContainerState.active](fscontainerstate/active.md): The container is active, and one or more volumes are active.

### Working with raw values

- [init(rawValue:)](fscontainerstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting status properties

- [state](fscontainerstatus/state.md): A value that represents the container state, such as ready, active, or blocked.
- [status](fscontainerstatus/status.md): An optional error that provides further information about the state.

# FSContainerState (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

An enumeration of container state values.

## Declaration

```objectivec
enum FSContainerState : NSInteger;
```

<a id="overview"></a>

## Overview

This enumeration represents values for a container’s state engine. Containers start in the [FSContainerStateNotReady](fscontainerstate/notready.md) state.

## Topics

### Container states

- [FSContainerStateNotReady](fscontainerstate/notready.md): The container isn’t ready.
- [FSContainerStateBlocked](fscontainerstate/blocked.md): The container is blocked from transitioning from the not-ready state to the ready state by a potentially-recoverable error.
- [FSContainerStateReady](fscontainerstate/ready.md): The container is ready, but inactive.
- [FSContainerStateActive](fscontainerstate/active.md): The container is active, and one or more volumes are active.

## See Also

### Inspecting status properties

- [state](fscontainerstatus/state.md): A value that represents the container state, such as ready, active, or blocked.
- [status](fscontainerstatus/status.md): An optional error that provides further information about the state.
