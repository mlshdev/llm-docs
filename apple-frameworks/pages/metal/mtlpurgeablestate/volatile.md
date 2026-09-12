> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpurgeablestate/volatile](https://developer.apple.com/documentation/metal/mtlpurgeablestate/volatile)

# MTLPurgeableState.volatile (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The system is allowed to discard the resource to free up memory.

## Declaration

```swift
case volatile
```

## Mentioned In

- [Reducing the memory footprint of Metal apps](../reducing-the-memory-footprint-of-metal-apps.md)

## See Also

### Specifying purgeable states

- [MTLPurgeableState.keepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MTLPurgeableState.nonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MTLPurgeableState.empty](empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.

# MTLPurgeableStateVolatile (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The system is allowed to discard the resource to free up memory.

## Declaration

```objectivec
MTLPurgeableStateVolatile
```

## Mentioned In

- [Reducing the memory footprint of Metal apps](../reducing-the-memory-footprint-of-metal-apps.md)

## See Also

### Specifying purgeable states

- [MTLPurgeableStateKeepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MTLPurgeableStateNonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MTLPurgeableStateEmpty](empty.md): A state that indicates to the system that it needs to consider the contents of a resource as invalid, typically because you’re discarding it.
