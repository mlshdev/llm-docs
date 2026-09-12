> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpurgeablestate/nonvolatile](https://developer.apple.com/documentation/metal/mtlpurgeablestate/nonvolatile)

# MTLPurgeableState.nonVolatile (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The contents of the resource aren’t allowed to be discarded.

## Declaration

```swift
case nonVolatile
```

## See Also

### Specifying purgeable states

- [MTLPurgeableState.keepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MTLPurgeableState.volatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MTLPurgeableState.empty](empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.

# MTLPurgeableStateNonVolatile (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The contents of the resource aren’t allowed to be discarded.

## Declaration

```objectivec
MTLPurgeableStateNonVolatile
```

## See Also

### Specifying purgeable states

- [MTLPurgeableStateKeepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MTLPurgeableStateVolatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MTLPurgeableStateEmpty](empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.
