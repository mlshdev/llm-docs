> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecommandqueue()](https://developer.apple.com/documentation/metal/mtldevice/makecommandqueue())

# makeCommandQueue() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a queue you use to submit rendering and computation commands to a GPU.

## Declaration

```swift
func makeCommandQueue() -> (any MTLCommandQueue)?
```

<a id="return-value"></a>

## Return Value

A new [MTLCommandQueue](../mtlcommandqueue.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

A command queue can only submit commands to the GPU device instance that created it.

> **Important**

>  The command queues you create with this method allow up to 64 uncompleted command buffers at time.

This method is the equivalent of passing `64` to the [makeCommandQueue(maxCommandBufferCount:)](makecommandqueue%28maxcommandbuffercount_%29.md) method.

**Swift**

```swift
let commandQueue = device.makeCommandQueue(maxCommandBufferCount: 64)
```

**Objective-C**

```objective-c
id<MTLCommandQueue> commandQueue;

NSUInteger capacity = 64;
commandQueue = [device newCommandQueueWithMaxCommandBufferCount:capacity];
```

## See Also

### Creating command queues

- [makeCommandQueue(maxCommandBufferCount:)](makecommandqueue%28maxcommandbuffercount_%29.md): Creates a queue you use to submit rendering and computation commands to a GPU that has a fixed number of uncompleted command buffers.

# newCommandQueue (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a queue you use to submit rendering and computation commands to a GPU.

## Declaration

```objectivec
- (id<MTLCommandQueue>) newCommandQueue;
```

<a id="return-value"></a>

## Return Value

A new [MTLCommandQueue](../mtlcommandqueue.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Setting up a command structure](../setting-up-a-command-structure.md)

<a id="discussion"></a>

## Discussion

A command queue can only submit commands to the GPU device instance that created it.

> **Important**

>  The command queues you create with this method allow up to 64 uncompleted command buffers at time.

This method is the equivalent of passing `64` to the [newCommandQueueWithMaxCommandBufferCount:](makecommandqueue%28maxcommandbuffercount_%29.md) method.

**Swift**

```swift
let commandQueue = device.makeCommandQueue(maxCommandBufferCount: 64)
```

**Objective-C**

```objective-c
id<MTLCommandQueue> commandQueue;

NSUInteger capacity = 64;
commandQueue = [device newCommandQueueWithMaxCommandBufferCount:capacity];
```

## See Also

### Creating command queues

- [newCommandQueueWithMaxCommandBufferCount:](makecommandqueue%28maxcommandbuffercount_%29.md): Creates a queue you use to submit rendering and computation commands to a GPU that has a fixed number of uncompleted command buffers.
