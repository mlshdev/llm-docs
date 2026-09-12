> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/commit()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/commit())

# commit() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Submits the command buffer to run on the GPU.

## Declaration

```swift
func commit()
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)
- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The [commit()](commit%28%29.md) method sends the command buffer to the [MTLCommandQueue](../mtlcommandqueue.md) instance that owns it, which then schedules it to run on the GPU. If your app calls [commit()](commit%28%29.md) for a command buffer that isn’t enqueued, the method effectively calls [enqueue()](enqueue%28%29.md) for you.

The [commit()](commit%28%29.md) method has several restrictions, including:

- You can commit a command buffer to its command queue only one time.
- You can only commit a command buffer when it doesn’t have an active encoder (see [MTLCommandBuffer](../mtlcommandbuffer.md) and [MTLCommandEncoder](../mtlcommandencoder.md)).
- You can’t encode additional commands to a command buffer after you commit it.
- You can’t call the [addScheduledHandler(\_:)](addscheduledhandler%28__%29.md) or [addCompletedHandler(\_:)](addcompletedhandler%28__%29.md) methods after you commit a command buffer.

The GPU starts the command buffer after it starts any command buffers that are ahead of it in the same command queue.

## See Also

### Submitting a command buffer

- [enqueue()](enqueue%28%29.md): Reserves the next available place for the command buffer in its command queue.

# commit (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Submits the command buffer to run on the GPU.

## Declaration

```objectivec
- (void) commit;
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)
- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The [commit](commit%28%29.md) method sends the command buffer to the [MTLCommandQueue](../mtlcommandqueue.md) instance that owns it, which then schedules it to run on the GPU. If your app calls [commit](commit%28%29.md) for a command buffer that isn’t enqueued, the method effectively calls [enqueue](enqueue%28%29.md) for you.

The [commit](commit%28%29.md) method has several restrictions, including:

- You can commit a command buffer to its command queue only one time.
- You can only commit a command buffer when it doesn’t have an active encoder (see [MTLCommandBuffer](../mtlcommandbuffer.md) and [MTLCommandEncoder](../mtlcommandencoder.md)).
- You can’t encode additional commands to a command buffer after you commit it.
- You can’t call the [addScheduledHandler:](addscheduledhandler%28__%29.md) or [addCompletedHandler:](addcompletedhandler%28__%29.md) methods after you commit a command buffer.

The GPU starts the command buffer after it starts any command buffers that are ahead of it in the same command queue.

## See Also

### Submitting a command buffer

- [enqueue](enqueue%28%29.md): Reserves the next available place for the command buffer in its command queue.
