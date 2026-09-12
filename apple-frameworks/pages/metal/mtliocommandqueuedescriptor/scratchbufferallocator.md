> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandqueuedescriptor/scratchbufferallocator](https://developer.apple.com/documentation/metal/mtliocommandqueuedescriptor/scratchbufferallocator)

# scratchBufferAllocator (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An optional memory allocator that you implement to manage the scratch memory that an input/output command queue requests.

## Declaration

```swift
var scratchBufferAllocator: (any MTLIOScratchBufferAllocator)? { get set }
```

<a id="discussion"></a>

## Discussion

Your app can manage an input/output command queue’s scratch memory by an implementing [MTLIOScratchBufferAllocator](../mtlioscratchbufferallocator.md) in one of your types, and assigning an instance of it to [scratchBufferAllocator](scratchbufferallocator.md). Otherwise, set to `nil` to instruct the input/output command queue to allocate and manage its own scratch buffers.

> **Note**

>  An input/output command queue uses scratch buffers for memory-intensives tasks, including loading textures and decompressing asset files.

# scratchBufferAllocator (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An optional memory allocator that you implement to manage the scratch memory that an input/output command queue requests.

## Declaration

```objectivec
@property (retain, readwrite, nullable) id<MTLIOScratchBufferAllocator> scratchBufferAllocator;
```

<a id="discussion"></a>

## Discussion

Your app can manage an input/output command queue’s scratch memory by an implementing [MTLIOScratchBufferAllocator](../mtlioscratchbufferallocator.md) in one of your types, and assigning an instance of it to [scratchBufferAllocator](scratchbufferallocator.md). Otherwise, set to `nil` to instruct the input/output command queue to allocate and manage its own scratch buffers.

> **Note**

>  An input/output command queue uses scratch buffers for memory-intensives tasks, including loading textures and decompressing asset files.
