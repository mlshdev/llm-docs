> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresource/setpurgeablestate(_:)](https://developer.apple.com/documentation/metal/mtlresource/setpurgeablestate(_:))

# setPurgeableState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Specifies or queries the resource’s purgeable state.

## Declaration

```swift
func setPurgeableState(_ state: MTLPurgeableState) -> MTLPurgeableState
```

## Parameters

- `state`: The desired purgeable state of a resource.

<a id="return-value"></a>

## Return Value

The prior purgeable state of the resource.

## Mentioned In

- [Reducing the memory footprint of Metal apps](../reducing-the-memory-footprint-of-metal-apps.md)

<a id="discussion"></a>

## Discussion

If `state` is [MTLPurgeableState.keepCurrent](../mtlpurgeablestate/keepcurrent.md), the method returns the current purgeable state without changing it.

If `state` is [MTLPurgeableState.nonVolatile](../mtlpurgeablestate/nonvolatile.md), the resource is marked to inform the caller that the data should not be discarded.

If `state` is [MTLPurgeableState.empty](../mtlpurgeablestate/empty.md), the resource is marked as data that can be discarded, because the caller no longer needs the contents of the resource.

If `state` is [MTLPurgeableState.volatile](../mtlpurgeablestate/volatile.md), the resource is marked as data that can be discarded, even if the caller may need the resource. `MTLResource` objects can be made purgeable, even if the caller may need the resource, where the implementation can reclaim the underlying storage at any time without informing the app. Purgeable resources may enable an app to keep larger caches of idle memory that may be useful again in the future without the risk of preventing the allocation of more important memory.

When you use purgeable memory, make sure the block of memory is locked before you access it. This locking mechanism ensures that auto-removal policies don’t discard the data while you are accessing it. Similarly, the locking mechanism ensures that the virtual memory system has not already discarded the data.

## See Also

### Setting the purgeable state of the resource

- [MTLPurgeableState](../mtlpurgeablestate.md): The purgeable state of the resource.

# setPurgeableState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Specifies or queries the resource’s purgeable state.

## Declaration

```objectivec
- (MTLPurgeableState) setPurgeableState:(MTLPurgeableState) state;
```

## Parameters

- `state`: The desired purgeable state of a resource.

<a id="return-value"></a>

## Return Value

The prior purgeable state of the resource.

## Mentioned In

- [Reducing the memory footprint of Metal apps](../reducing-the-memory-footprint-of-metal-apps.md)

<a id="discussion"></a>

## Discussion

If `state` is [MTLPurgeableStateKeepCurrent](../mtlpurgeablestate/keepcurrent.md), the method returns the current purgeable state without changing it.

If `state` is [MTLPurgeableStateNonVolatile](../mtlpurgeablestate/nonvolatile.md), the resource is marked to inform the caller that the data should not be discarded.

If `state` is [MTLPurgeableStateEmpty](../mtlpurgeablestate/empty.md), the resource is marked as data that can be discarded, because the caller no longer needs the contents of the resource.

If `state` is [MTLPurgeableStateVolatile](../mtlpurgeablestate/volatile.md), the resource is marked as data that can be discarded, even if the caller may need the resource. `MTLResource` objects can be made purgeable, even if the caller may need the resource, where the implementation can reclaim the underlying storage at any time without informing the app. Purgeable resources may enable an app to keep larger caches of idle memory that may be useful again in the future without the risk of preventing the allocation of more important memory.

When you use purgeable memory, make sure the block of memory is locked before you access it. This locking mechanism ensures that auto-removal policies don’t discard the data while you are accessing it. Similarly, the locking mechanism ensures that the virtual memory system has not already discarded the data.

## See Also

### Setting the purgeable state of the resource

- [MTLPurgeableState](../mtlpurgeablestate.md): The purgeable state of the resource.
