> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makeparallelrendercommandencoder(descriptor:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makeparallelrendercommandencoder(descriptor:))

# makeParallelRenderCommandEncoder(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a parallel render command encoder from a descriptor.

## Declaration

```swift
func makeParallelRenderCommandEncoder(descriptor renderPassDescriptor: MTLRenderPassDescriptor) -> (any MTLParallelRenderCommandEncoder)?
```

## Parameters

- `renderPassDescriptor`: An [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance that configures the [MTLParallelRenderCommandEncoder](../mtlparallelrendercommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

An [MTLParallelRenderCommandEncoder](../mtlparallelrendercommandencoder.md) instance can create multiple, independent render command encoders that contribute to the same render pass on different threads.

# parallelRenderCommandEncoderWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a parallel render command encoder from a descriptor.

## Declaration

```objectivec
- (id<MTLParallelRenderCommandEncoder>) parallelRenderCommandEncoderWithDescriptor:(MTLRenderPassDescriptor *) renderPassDescriptor;
```

## Parameters

- `renderPassDescriptor`: An [MTLRenderPassDescriptor](../mtlrenderpassdescriptor.md) instance that configures the [MTLParallelRenderCommandEncoder](../mtlparallelrendercommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

An [MTLParallelRenderCommandEncoder](../mtlparallelrendercommandencoder.md) instance can create multiple, independent render command encoders that contribute to the same render pass on different threads.
