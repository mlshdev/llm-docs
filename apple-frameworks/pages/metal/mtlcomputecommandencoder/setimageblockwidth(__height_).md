> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setimageblockwidth(_:height:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setimageblockwidth(_:height:))

# setImageblockWidth(\_:height:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Sets the size, in pixels, of imageblock data in tile memory.

## Declaration

```swift
func setImageblockWidth(_ width: Int, height: Int)
```

## Parameters

- `width`: The width of the imageblock, in pixels.
- `height`: The height of the imageblock, in pixels.

<a id="discussion"></a>

## Discussion

> **Important**

>  The sum of all threadgroup memory allocations (whether made using this method or directly in the shader) can’t exceed the device limits for threadgroup memory. Check threadgroup memory limits with the [staticThreadgroupMemoryLength](../mtlcomputepipelinestate/staticthreadgroupmemorylength.md) property.

Both imageblocks and threadgroup memory share the available space you can reserve in tile memory, so the sum of these allocations can’t exceed the maximum total tile memory limit. To find the amount of memory used by an imageblock, call [imageblockMemoryLength(forDimensions:)](../mtlcomputepipelinestate/imageblockmemorylength%28fordimensions_%29.md). Kernels accessing an imageblock argument from threadgroup memory have the `[[threadgroup_imageblock]]` attribute.

To learn more about using imageblocks, see the following sections in the [Metal Shading Language Specification](https://developer.apple.com/metal/metal-shading-language-specification.pdf#//apple_ref/doc/uid/TP40014364-CH4-SW5):

- For information on the `threadgroup_imageblock` address space, see Section 4.5.
- For information on the `imageblock` type, see Section 2.11.

## See Also

### Configuring tile memory

- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a block of threadgroup memory.

# setImageblockWidth:height: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Sets the size, in pixels, of imageblock data in tile memory.

## Declaration

```objectivec
- (void) setImageblockWidth:(NSUInteger) width height:(NSUInteger) height;
```

## Parameters

- `width`: The width of the imageblock, in pixels.
- `height`: The height of the imageblock, in pixels.

<a id="discussion"></a>

## Discussion

> **Important**

>  The sum of all threadgroup memory allocations (whether made using this method or directly in the shader) can’t exceed the device limits for threadgroup memory. Check threadgroup memory limits with the [staticThreadgroupMemoryLength](../mtlcomputepipelinestate/staticthreadgroupmemorylength.md) property.

Both imageblocks and threadgroup memory share the available space you can reserve in tile memory, so the sum of these allocations can’t exceed the maximum total tile memory limit. To find the amount of memory used by an imageblock, call [imageblockMemoryLengthForDimensions:](../mtlcomputepipelinestate/imageblockmemorylength%28fordimensions_%29.md). Kernels accessing an imageblock argument from threadgroup memory have the `[[threadgroup_imageblock]]` attribute.

To learn more about using imageblocks, see the following sections in the [Metal Shading Language Specification](https://developer.apple.com/metal/metal-shading-language-specification.pdf#//apple_ref/doc/uid/TP40014364-CH4-SW5):

- For information on the `threadgroup_imageblock` address space, see Section 4.5.
- For information on the `imageblock` type, see Section 2.11.

## See Also

### Configuring tile memory

- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a block of threadgroup memory.
