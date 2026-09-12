> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makemtl4commandqueue(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makemtl4commandqueue(descriptor:))

# makeMTL4CommandQueue(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command queue from a queue descriptor.

## Declaration

```swift
func makeMTL4CommandQueue(descriptor: MTL4CommandQueueDescriptor) throws -> any MTL4CommandQueue
```

## Parameters

- `descriptor`: A [MTL4CommandQueueDescriptor](../mtl4commandqueuedescriptor.md) instance that configures the [MTL4CommandQueue](../mtl4commandqueue.md) instance.

<a id="return-value"></a>

## Return Value

A [MTL4CommandQueue](../mtl4commandqueue.md) instance, or `nil` if the function failed.

# newMTL4CommandQueueWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command queue from a queue descriptor.

## Declaration

```objectivec
- (id<MTL4CommandQueue>) newMTL4CommandQueueWithDescriptor:(MTL4CommandQueueDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A [MTL4CommandQueueDescriptor](../mtl4commandqueuedescriptor.md) instance that configures the [MTL4CommandQueue](../mtl4commandqueue.md) instance.
- `error`: Optional pointer to a `NSError` instance that Metal uses to describe the failure if this function fails.

<a id="return-value"></a>

## Return Value

A [MTL4CommandQueue](../mtl4commandqueue.md) instance, or `nil` if the function failed.
