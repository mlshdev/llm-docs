> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpspurgeablestate/nonvolatile](https://developer.apple.com/documentation/metalperformanceshaders/mpspurgeablestate/nonvolatile)

# MPSPurgeableState.nonVolatile (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The contents of the resource aren’t allowed to be discarded.

## Declaration

```swift
case nonVolatile
```

<a id="Overview"></a>

## Overview

Use this option to mark the resource as non-volatile so the system doesn’t discard it. This is equivalent to [MTLPurgeableState.nonVolatile](../../metal/mtlpurgeablestate/nonvolatile.md).

## See Also

### Constants

- [MPSPurgeableState.allocationDeferred](allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState(\_:)](../mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableState.keepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MPSPurgeableState.volatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MPSPurgeableState.empty](empty.md): The contents of the resource are or will be discarded.

# MPSPurgeableStateNonVolatile (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The contents of the resource aren’t allowed to be discarded.

## Declaration

```objectivec
MPSPurgeableStateNonVolatile
```

<a id="Overview"></a>

## Overview

Use this option to mark the resource as non-volatile so the system doesn’t discard it. This is equivalent to [MTLPurgeableStateNonVolatile](../../metal/mtlpurgeablestate/nonvolatile.md).

## See Also

### Constants

- [MPSPurgeableStateAllocationDeferred](allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState:](../mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableStateKeepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MPSPurgeableStateVolatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MPSPurgeableStateEmpty](empty.md): The contents of the resource are or will be discarded.
