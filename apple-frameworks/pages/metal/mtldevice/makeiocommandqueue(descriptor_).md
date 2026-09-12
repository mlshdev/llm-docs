> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeiocommandqueue(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makeiocommandqueue(descriptor:))

# makeIOCommandQueue(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an input/output command queue you use to submit commands that load assets from the file system into GPU resources or system memory.

## Declaration

```swift
func makeIOCommandQueue(descriptor: MTLIOCommandQueueDescriptor) throws -> any MTLIOCommandQueue
```

## Parameters

- `descriptor`: A descriptor instance that configures the command queue.

<a id="return-value"></a>

## Return Value

A new [MTLIOCommandQueue](../mtliocommandqueue.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

For information about using input/output command queues and file handles, see [Resource loading](../resource-loading.md).

# newIOCommandQueueWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an input/output command queue you use to submit commands that load assets from the file system into GPU resources or system memory.

## Declaration

```objectivec
- (id<MTLIOCommandQueue>) newIOCommandQueueWithDescriptor:(MTLIOCommandQueueDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A descriptor instance that configures the command queue.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLIOCommandQueue](../mtliocommandqueue.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

<a id="discussion"></a>

## Discussion

For information about using input/output command queues and file handles, see [Resource loading](../resource-loading.md).
