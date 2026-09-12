> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4counterheap/resolvecounterrange:](https://developer.apple.com/documentation/metal/mtl4counterheap/resolvecounterrange:)

# resolveCounterRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Resolves heap data on the CPU timeline.

## Declaration

```objectivec
- (NSData *) resolveCounterRange:(NSRange) range;
```

## Parameters

- `range`: The range in the heap to resolve.

<a id="discussion"></a>

## Discussion

This method resolves heap data in the CPU timeline. Your app needs to ensure the GPU work has completed in order to retrieve the data correctly. You can alternatively resolve the heap data in the GPU timeline by calling [resolveCounterHeap:withRange:intoBuffer:waitFence:updateFence:](../mtl4commandbuffer/resolvecounterheap_withrange_intobuffer_waitfence_updatefence_.md).

- Returns a newly allocated autoreleased NSData containing tightly packed resolved heap counter values.

> **Note**

> When resolving counters in the CPU timeline, signaling an instance of [MTLSharedEvent](../mtlsharedevent.md) after any workloads write counters (and waiting on that signal on the CPU) is sufficient to ensure synchronization.
