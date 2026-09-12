> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecommandallocator(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makecommandallocator(descriptor:))

# makeCommandAllocator(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command allocator from a command allocator descriptor.

## Declaration

```swift
func makeCommandAllocator(descriptor: MTL4CommandAllocatorDescriptor) throws -> any MTL4CommandAllocator
```

## Parameters

- `descriptor`: A [MTL4CommandAllocatorDescriptor](../mtl4commandallocatordescriptor.md) instance that configures the [MTL4CommandAllocator](../mtl4commandallocator.md) instance.

<a id="return-value"></a>

## Return Value

A [MTL4CommandAllocator](../mtl4commandallocator.md) instance, or `nil` if the function failed.

# newCommandAllocatorWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new command allocator from a command allocator descriptor.

## Declaration

```objectivec
- (id<MTL4CommandAllocator>) newCommandAllocatorWithDescriptor:(MTL4CommandAllocatorDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A [MTL4CommandAllocatorDescriptor](../mtl4commandallocatordescriptor.md) instance that configures the [MTL4CommandAllocator](../mtl4commandallocator.md) instance.
- `error`: Optional pointer to a `NSError` instance that Metal uses to describe the failure if this function fails.

<a id="return-value"></a>

## Return Value

A [MTL4CommandAllocator](../mtl4commandallocator.md) instance, or `nil` if the function failed.
