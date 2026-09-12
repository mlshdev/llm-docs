> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningpipelinestate/intermediatesheapsize](https://developer.apple.com/documentation/metal/mtl4machinelearningpipelinestate/intermediatesheapsize)

# intermediatesHeapSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtain the size of the heap, in bytes, this pipeline requires during the execution.

## Declaration

```swift
var intermediatesHeapSize: Int { get }
```

<a id="discussion"></a>

## Discussion

Use this value to allocate a [MTLHeap](../mtlheap.md) instance of sufficient size that you can then provide to [dispatchNetwork(intermediatesHeap:)](../mtl4machinelearningcommandencoder/dispatchnetwork%28intermediatesheap_%29.md).

Metal uses this heap to store intermediate data as it executes the pipeline. It is your responsibility to provide a heap at least as large as this property requests.

# intermediatesHeapSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Obtain the size of the heap, in bytes, this pipeline requires during the execution.

## Declaration

```objectivec
@property (readonly) NSUInteger intermediatesHeapSize;
```

<a id="discussion"></a>

## Discussion

Use this value to allocate a [MTLHeap](../mtlheap.md) instance of sufficient size that you can then provide to [dispatchNetworkWithIntermediatesHeap:](../mtl4machinelearningcommandencoder/dispatchnetwork%28intermediatesheap_%29.md).

Metal uses this heap to store intermediate data as it executes the pipeline. It is your responsibility to provide a heap at least as large as this property requests.
