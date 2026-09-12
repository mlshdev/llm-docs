> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecounterheap(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makecounterheap(descriptor:))

# makeCounterHeap(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new counter heap configured from a counter heap descriptor.

## Declaration

```swift
func makeCounterHeap(descriptor: MTL4CounterHeapDescriptor) throws -> any MTL4CounterHeap
```

## Parameters

- `descriptor`: [MTL4CounterHeapDescriptor](../mtl4counterheapdescriptor.md) instance that configures the [MTL4CounterHeap](../mtl4counterheap.md) instance.

<a id="return-value"></a>

## Return Value

A [MTL4CounterHeap](../mtl4counterheap.md) instance, or `nil` if the function failed.

# newCounterHeapWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new counter heap configured from a counter heap descriptor.

## Declaration

```objectivec
- (id<MTL4CounterHeap>) newCounterHeapWithDescriptor:(MTL4CounterHeapDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: [MTL4CounterHeapDescriptor](../mtl4counterheapdescriptor.md) instance that configures the [MTL4CounterHeap](../mtl4counterheap.md) instance.
- `error`: Optional pointer to a `NSError` instance that Metal uses to describe the failure if this function fails.

<a id="return-value"></a>

## Return Value

A [MTL4CounterHeap](../mtl4counterheap.md) instance, or `nil` if the function failed.
