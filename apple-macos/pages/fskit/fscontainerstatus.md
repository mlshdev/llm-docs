> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fscontainerstatus](https://developer.apple.com/documentation/fskit/fscontainerstatus)

# FSContainerStatus (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that represents a container’s status.

## Declaration

```swift
class FSContainerStatus
```

<a id="overview"></a>

## Overview

This type contains two properties:

- The [state](fscontainerstatus/state.md) value that indicates the state of the container, such as [FSContainerState.ready](fscontainerstate/ready.md) or [FSContainerState.blocked](fscontainerstate/blocked.md).
- The [status](fscontainerstatus/status.md) is an error (optional in Swift, nullable in Objective-C) that provides further information about the state, such as why the container is blocked.

Examples of statuses that require intervention include errors that indicate the container isn’t ready (POSIX `EAGAIN` or `ENOTCONN`), the container needs authentication (`ENEEDAUTH`), or that authentication failed (`EAUTH`). The status can also be an informative error, such as the FSKit error [FSError.Code.statusOperationInProgress](fserror/code/statusoperationinprogress.md).

## Topics

### Creating a container status instance

- [active(status:)](fscontainerstatus/active%28status_%29.md): Returns a active container status instance with the provided error status.
- [blocked(status:)](fscontainerstatus/blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [notReady(status:)](fscontainerstatus/notready%28status_%29.md): Returns a not-ready container status instance with the provided error status.
- [ready(status:)](fscontainerstatus/ready%28status_%29.md): Returns a ready container status instance with the provided error status.

### Inspecting status properties

- [state](fscontainerstatus/state.md): A value that represents the container state, such as ready, active, or blocked.
- [FSContainerState](fscontainerstate.md): An enumeration of container state values.
- [status](fscontainerstatus/status.md): An optional error that provides further information about the state.

### Using common status values

- [active](fscontainerstatus/active.md): A status that represents an active container with no error.
- [ready](fscontainerstatus/ready.md): A status that represents a ready container with no error.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Containers

- [FSContainerIdentifier](fscontaineridentifier.md): A type that identifies a container.

# FSContainerStatus (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that represents a container’s status.

## Declaration

```objectivec
@interface FSContainerStatus : NSObject
```

<a id="overview"></a>

## Overview

This type contains two properties:

- The [state](fscontainerstatus/state.md) value that indicates the state of the container, such as [FSContainerStateReady](fscontainerstate/ready.md) or [FSContainerStateBlocked](fscontainerstate/blocked.md).
- The [status](fscontainerstatus/status.md) is an error (optional in Swift, nullable in Objective-C) that provides further information about the state, such as why the container is blocked.

Examples of statuses that require intervention include errors that indicate the container isn’t ready (POSIX `EAGAIN` or `ENOTCONN`), the container needs authentication (`ENEEDAUTH`), or that authentication failed (`EAUTH`). The status can also be an informative error, such as the FSKit error [FSErrorStatusOperationInProgress](fserror/code/statusoperationinprogress.md).

## Topics

### Creating a container status instance

- [activeWithStatus:](fscontainerstatus/active%28status_%29.md): Returns a active container status instance with the provided error status.
- [blockedWithStatus:](fscontainerstatus/blocked%28status_%29.md): Returns a blocked container status instance with the provided error status.
- [notReadyWithStatus:](fscontainerstatus/notready%28status_%29.md): Returns a not-ready container status instance with the provided error status.
- [readyWithStatus:](fscontainerstatus/ready%28status_%29.md): Returns a ready container status instance with the provided error status.

### Inspecting status properties

- [state](fscontainerstatus/state.md): A value that represents the container state, such as ready, active, or blocked.
- [FSContainerState](fscontainerstate.md): An enumeration of container state values.
- [status](fscontainerstatus/status.md): An optional error that provides further information about the state.

### Using common status values

- [active](fscontainerstatus/active.md): A status that represents an active container with no error.
- [ready](fscontainerstatus/ready.md): A status that represents a ready container with no error.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Containers

- [FSContainerIdentifier](fscontaineridentifier.md): A type that identifies a container.
