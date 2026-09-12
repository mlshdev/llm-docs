> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpspurgeablestate/volatile](https://developer.apple.com/documentation/metalperformanceshaders/mpspurgeablestate/volatile)

# MPSPurgeableState.volatile (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The system is allowed to discard the resource to free up memory.

## Declaration

```swift
case volatile
```

<a id="Overview"></a>

## Overview

Use this value to indicate that a resource is volatile and, therefore, the system may purge the data if it needs to make more memory available. This value is equivalent to [MTLPurgeableState.volatile](../../metal/mtlpurgeablestate/volatile.md).

## See Also

### Constants

- [MPSPurgeableState.allocationDeferred](allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState(\_:)](../mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableState.keepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MPSPurgeableState.nonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MPSPurgeableState.empty](empty.md): The contents of the resource are or will be discarded.

# MPSPurgeableStateVolatile (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The system is allowed to discard the resource to free up memory.

## Declaration

```objectivec
MPSPurgeableStateVolatile
```

<a id="Overview"></a>

## Overview

Use this value to indicate that a resource is volatile and, therefore, the system may purge the data if it needs to make more memory available. This value is equivalent to [MTLPurgeableStateVolatile](../../metal/mtlpurgeablestate/volatile.md).

## See Also

### Constants

- [MPSPurgeableStateAllocationDeferred](allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState:](../mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableStateKeepCurrent](keepcurrent.md): The current state is queried but doesn’t change.
- [MPSPurgeableStateNonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MPSPurgeableStateEmpty](empty.md): The contents of the resource are or will be discarded.
