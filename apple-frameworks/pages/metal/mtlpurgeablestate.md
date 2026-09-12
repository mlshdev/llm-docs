> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpurgeablestate](https://developer.apple.com/documentation/metal/mtlpurgeablestate)

# MTLPurgeableState (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The purgeable state of the resource.

## Declaration

```swift
enum MTLPurgeableState
```

## Topics

### Specifying purgeable states

- [MTLPurgeableState.keepCurrent](mtlpurgeablestate/keepcurrent.md): The current state is queried but doesn’t change.
- [MTLPurgeableState.nonVolatile](mtlpurgeablestate/nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MTLPurgeableState.volatile](mtlpurgeablestate/volatile.md): The system is allowed to discard the resource to free up memory.
- [MTLPurgeableState.empty](mtlpurgeablestate/empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.

### Initializers

- [init(rawValue:)](mtlpurgeablestate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the purgeable state of the resource

- [setPurgeableState(\_:)](mtlresource/setpurgeablestate%28__%29.md): Specifies or queries the resource’s purgeable state.

# MTLPurgeableState (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The purgeable state of the resource.

## Declaration

```objectivec
enum MTLPurgeableState : NSUInteger;
```

## Topics

### Specifying purgeable states

- [MTLPurgeableStateKeepCurrent](mtlpurgeablestate/keepcurrent.md): The current state is queried but doesn’t change.
- [MTLPurgeableStateNonVolatile](mtlpurgeablestate/nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MTLPurgeableStateVolatile](mtlpurgeablestate/volatile.md): The system is allowed to discard the resource to free up memory.
- [MTLPurgeableStateEmpty](mtlpurgeablestate/empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.

## See Also

### Setting the purgeable state of the resource

- [setPurgeableState:](mtlresource/setpurgeablestate%28__%29.md): Specifies or queries the resource’s purgeable state.
