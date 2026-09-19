> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4commandbuffer/rendercommandencoderwithdescriptor:

# renderCommandEncoderWithDescriptor:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a render command encoder from a render pass descriptor.

## Declaration

```objectivec
- (id<MTL4RenderCommandEncoder>) renderCommandEncoderWithDescriptor:(MTL4RenderPassDescriptor *) descriptor;
```

## Parameters

- `descriptor`: Descriptor for the render pass.

<a id="return-value"></a>

## Return Value

The created [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md) instance, or `nil` if the function failed.
