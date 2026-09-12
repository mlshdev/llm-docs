> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/setpurgeablestate(_:)](https://developer.apple.com/documentation/metal/mtlheap/setpurgeablestate(_:))

# setPurgeableState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Sets the purgeable state of the heap.

## Declaration

```swift
func setPurgeableState(_ state: MTLPurgeableState) -> MTLPurgeableState
```

## Parameters

- `state`: The desired purgeable state of the heap.

<a id="return-value"></a>

## Return Value

The previous purgeable state of the heap.

<a id="discussion"></a>

## Discussion

The heap purgeability state refers to its whole backing memory and affects all resources in the heap. Heaps can be marked purgeable but its resources cannot; the heap’s resources always reflect the heap’s purgeability state.

Refer to the [MTLPurgeableState](../mtlpurgeablestate.md) and [setPurgeableState(\_:)](../mtlresource/setpurgeablestate%28__%29.md) reference for further information.

# setPurgeableState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Sets the purgeable state of the heap.

## Declaration

```objectivec
- (MTLPurgeableState) setPurgeableState:(MTLPurgeableState) state;
```

## Parameters

- `state`: The desired purgeable state of the heap.

<a id="return-value"></a>

## Return Value

The previous purgeable state of the heap.

<a id="discussion"></a>

## Discussion

The heap purgeability state refers to its whole backing memory and affects all resources in the heap. Heaps can be marked purgeable but its resources cannot; the heap’s resources always reflect the heap’s purgeability state.

Refer to the [MTLPurgeableState](../mtlpurgeablestate.md) and [setPurgeableState:](../mtlresource/setpurgeablestate%28__%29.md) reference for further information.
