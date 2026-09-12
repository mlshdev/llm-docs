> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandbuffer/writetimestamp(counterheap:index:)](https://developer.apple.com/documentation/metal/mtl4commandbuffer/writetimestamp(counterheap:index:))

# writeTimestamp(counterHeap:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Writes a GPU timestamp into the given counter heap.

## Declaration

```swift
func writeTimestamp(counterHeap: any MTL4CounterHeap, index: Int)
```

## Parameters

- `counterHeap`: [MTL4CounterHeap](../mtl4counterheap.md) to write the timestamp into.
- `index`: The index within the [MTL4CounterHeap](../mtl4counterheap.md) that Metal writes the timestamp to.

<a id="discussion"></a>

## Discussion

This method captures a timestamp after work prior to this command in the command buffer is complete. Work after this call may or may not have started.

You are responsible for ensuring the `counterHeap` is of type [MTL4CounterHeapType.timestamp](../mtl4counterheaptype/timestamp.md).

# writeTimestampIntoHeap:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Writes a GPU timestamp into the given counter heap.

## Declaration

```objectivec
- (void) writeTimestampIntoHeap:(id<MTL4CounterHeap>) counterHeap atIndex:(NSUInteger) index;
```

## Parameters

- `counterHeap`: [MTL4CounterHeap](../mtl4counterheap.md) to write the timestamp into.
- `index`: The index within the [MTL4CounterHeap](../mtl4counterheap.md) that Metal writes the timestamp to.

<a id="discussion"></a>

## Discussion

This method captures a timestamp after work prior to this command in the command buffer is complete. Work after this call may or may not have started.

You are responsible for ensuring the `counterHeap` is of type [MTL4CounterHeapTypeTimestamp](../mtl4counterheaptype/timestamp.md).
