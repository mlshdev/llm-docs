> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpspurgeablestate/keepcurrent](https://developer.apple.com/documentation/metalperformanceshaders/mpspurgeablestate/keepcurrent)

# MPSPurgeableState.keepCurrent (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The current state is queried but doesn’t change.

## Declaration

```swift
case keepCurrent
```

<a id="discussion"></a>

## Discussion

Using this option keeps the current state unchanged. It is equivalent to [MTLPurgeableState.keepCurrent](../../metal/mtlpurgeablestate/keepcurrent.md).

## See Also

### Constants

- [MPSPurgeableState.allocationDeferred](allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState(\_:)](../mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableState.nonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MPSPurgeableState.volatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MPSPurgeableState.empty](empty.md): The contents of the resource are or will be discarded.

# MPSPurgeableStateKeepCurrent (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The current state is queried but doesn’t change.

## Declaration

```objectivec
MPSPurgeableStateKeepCurrent
```

<a id="discussion"></a>

## Discussion

Using this option keeps the current state unchanged. It is equivalent to [MTLPurgeableStateKeepCurrent](../../metal/mtlpurgeablestate/keepcurrent.md).

## See Also

### Constants

- [MPSPurgeableStateAllocationDeferred](allocationdeferred.md): The image’s underlying texture hasn’t been allocated yet. Attempts to set another purgeable state using the [setPurgeableState:](../mpsimage/setpurgeablestate%28__%29.md) method will be ignored.
- [MPSPurgeableStateNonVolatile](nonvolatile.md): The contents of the resource aren’t allowed to be discarded.
- [MPSPurgeableStateVolatile](volatile.md): The system is allowed to discard the resource to free up memory.
- [MPSPurgeableStateEmpty](empty.md): The contents of the resource are or will be discarded.
