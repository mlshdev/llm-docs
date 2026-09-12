> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningcommandencoder/dispatchnetwork(intermediatesheap:)](https://developer.apple.com/documentation/metal/mtl4machinelearningcommandencoder/dispatchnetwork(intermediatesheap:))

# dispatchNetwork(intermediatesHeap:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Dispatches a machine learning network using the current pipeline state and argument table.

## Declaration

```swift
func dispatchNetwork(intermediatesHeap heap: any MTLHeap)
```

## Parameters

- `heap`: A heap that Metal can use to allocate intermediate tensors.

<a id="discussion"></a>

## Discussion

This method takes a parameter consisting of a `MTLHeap` that Metal can use to allocate intermediate tensors. You can query the minimum size Metal requires for this heap by calling [intermediatesHeapSize](../mtl4machinelearningpipelinestate/intermediatesheapsize.md).

# dispatchNetworkWithIntermediatesHeap: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Dispatches a machine learning network using the current pipeline state and argument table.

## Declaration

```objectivec
- (void) dispatchNetworkWithIntermediatesHeap:(id<MTLHeap>) heap;
```

## Parameters

- `heap`: A heap that Metal can use to allocate intermediate tensors.

<a id="discussion"></a>

## Discussion

This method takes a parameter consisting of a `MTLHeap` that Metal can use to allocate intermediate tensors. You can query the minimum size Metal requires for this heap by calling [intermediatesHeapSize](../mtl4machinelearningpipelinestate/intermediatesheapsize.md).
