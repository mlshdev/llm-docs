> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4counterheap/invalidatecounterrange(_:)

# invalidateCounterRange(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Invalidates a range of entries in this counter heap.

## Declaration

```swift
func invalidateCounterRange(_ range: Range<Int>)
```

## Parameters

- `range`: A heap index range to invalidate.

<a id="discussion"></a>

## Discussion

The effect of this call is immediate on the CPU timeline. You are responsible for ensuring that this counter heap is not currently in use on the GPU.

> **Note**

> Invalidated entries produce 0 when resolved.
