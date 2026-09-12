> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/commit:count:options:](https://developer.apple.com/documentation/metal/mtl4commandqueue/commit:count:options:)

# commit:count:options:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enqueues an array of command buffer instances for execution with a set of options.

## Declaration

```objectivec
- (void) commit:(id<MTL4CommandBuffer> const[]) commandBuffers count:(NSUInteger) count options:(MTL4CommitOptions *) options;
```

## Parameters

- `commandBuffers`: An array of [MTL4CommandBuffer](../mtl4commandbuffer.md).
- `count`: The number of [MTL4CommandBuffer](../mtl4commandbuffer.md) instances in the `commandBuffers` array.
- `options`: An instance of [MTL4CommitOptions](../mtl4commitoptions.md) that configures the commit operation.

<a id="discussion"></a>

## Discussion

Provide an [MTL4CommitOptions](../mtl4commitoptions.md) instance to configure the commit operation.

The order in which you sort the command buffers in the array is meaningful, especially when it contains suspending/resuming render passes. A suspending/resuming render pass is a render pass you create by calling [renderCommandEncoderWithDescriptor:options:](../mtl4commandbuffer/makerendercommandencoder%28descriptor_options_%29.md), and provide `MTL4RenderEncoderOptionSuspending` or `MTL4RenderEncoderOptionResuming` for the `options` parameter.

If your command buffers contain suspend/resume render passes, ensure that the first command buffer only suspends, and the last one only resumes. Additionally, make sure that all intermediate command buffers are both suspending and resuming.

When you commit work from multiple threads, modifying and reusing the same options instance, you are responsible for externally synchronizing access to it.
