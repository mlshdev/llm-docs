> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecommandqueue(maxcommandbuffercount:)](https://developer.apple.com/documentation/metal/mtldevice/makecommandqueue(maxcommandbuffercount:))

# makeCommandQueue(maxCommandBufferCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a queue you use to submit rendering and computation commands to a GPU that has a fixed number of uncompleted command buffers.

## Declaration

```swift
func makeCommandQueue(maxCommandBufferCount: Int) -> (any MTLCommandQueue)?
```

## Parameters

- `maxCommandBufferCount`: An integer that sets the maximum number of uncompleted command buffers the queue can allow.

<a id="return-value"></a>

## Return Value

A new [MTLCommandQueue](../mtlcommandqueue.md) instance if the method completed successfully; otherwise `nil`.

<a id="discussion"></a>

## Discussion

A Command queue can only submit commands to the GPU device instance that created it.

## See Also

### Creating command queues

- [makeCommandQueue()](makecommandqueue%28%29.md): Creates a queue you use to submit rendering and computation commands to a GPU.

# newCommandQueueWithMaxCommandBufferCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a queue you use to submit rendering and computation commands to a GPU that has a fixed number of uncompleted command buffers.

## Declaration

```objectivec
- (id<MTLCommandQueue>) newCommandQueueWithMaxCommandBufferCount:(NSUInteger) maxCommandBufferCount;
```

## Parameters

- `maxCommandBufferCount`: An integer that sets the maximum number of uncompleted command buffers the queue can allow.

<a id="return-value"></a>

## Return Value

A new [MTLCommandQueue](../mtlcommandqueue.md) instance if the method completed successfully; otherwise `nil`.

<a id="discussion"></a>

## Discussion

A Command queue can only submit commands to the GPU device instance that created it.

## See Also

### Creating command queues

- [newCommandQueue](makecommandqueue%28%29.md): Creates a queue you use to submit rendering and computation commands to a GPU.
