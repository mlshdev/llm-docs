> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpspurgeablestate](https://developer.apple.com/documentation/metalperformanceshaders/mpspurgeablestate)

# MPSPurgeableState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The purgeable state of an image’s underlying texture.

## Declaration

```swift
enum MPSPurgeableState
```

## Topics

### Constants

- [MPSPurgeableState.allocationDeferred](mpspurgeablestate/allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState(\_:)](mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableState.keepCurrent](mpspurgeablestate/keepcurrent.md): The current state is queried but doesn’t change.
- [MPSPurgeableState.nonVolatile](mpspurgeablestate/nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MPSPurgeableState.volatile](mpspurgeablestate/volatile.md): The system is allowed to discard the resource to free up memory.
- [MPSPurgeableState.empty](mpspurgeablestate/empty.md): The contents of the resource are or will be discarded.

### Initializers

- [init(rawValue:)](mpspurgeablestate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Methods

- [setPurgeableState(\_:)](mpsimage/setpurgeablestate%28__%29.md): Set (or query) the purgeable state of the image’s underlying texture.

# MPSPurgeableState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The purgeable state of an image’s underlying texture.

## Declaration

```objectivec
enum MPSPurgeableState : NSUInteger;
```

## Topics

### Constants

- [MPSPurgeableStateAllocationDeferred](mpspurgeablestate/allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState:](mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableStateKeepCurrent](mpspurgeablestate/keepcurrent.md): The current state is queried but doesn’t change.
- [MPSPurgeableStateNonVolatile](mpspurgeablestate/nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MPSPurgeableStateVolatile](mpspurgeablestate/volatile.md): The system is allowed to discard the resource to free up memory.
- [MPSPurgeableStateEmpty](mpspurgeablestate/empty.md): The contents of the resource are or will be discarded.

## See Also

### Methods

- [setPurgeableState:](mpsimage/setpurgeablestate%28__%29.md): Set (or query) the purgeable state of the image’s underlying texture.
