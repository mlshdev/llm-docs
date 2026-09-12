> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/maketexture(descriptor:offset:)](https://developer.apple.com/documentation/metal/mtlheap/maketexture(descriptor:offset:))

# makeTexture(descriptor:offset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a texture at a specified offset on the heap.

## Declaration

```swift
func makeTexture(descriptor: MTLTextureDescriptor, offset: Int) -> (any MTLTexture)?
```

## Parameters

- `descriptor`: A descriptor object that describes the properties of the texture.
- `offset`: The distance, in bytes, to place the texture relative to the start of the heap.

<a id="return-value"></a>

## Return Value

A new texture, or `nil` if the heap is not a placement heap.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapType.placement](../mtlheaptype/placement.md)
- The texture’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property
- The texture’s storage mode option needs to be [MTLStorageMode.memoryless](../mtlstoragemode/memoryless.md), or match the heap’s [storageMode](storagemode.md) property

> **Important**

>  Avoid potentially erratic behavior by aligning the texture correctly so that it doesn’t extend past the end of the heap.

Use the [heapBufferSizeAndAlign(length:options:)](../mtldevice/heapbuffersizeandalign%28length_options_%29.md) to determine the correct size and alignment.

> **Note**

>  The new texture can implicitly alias the underlying memory of other resources already in the heap within the overlapping half-open range of `[offset, offset + requiredSize)`.

## See Also

### Creating textures from a heap

- [makeTexture(descriptor:)](maketexture%28descriptor_%29.md): Creates a texture on the heap.

# newTextureWithDescriptor:offset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a texture at a specified offset on the heap.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithDescriptor:(MTLTextureDescriptor *) descriptor offset:(NSUInteger) offset;
```

## Parameters

- `descriptor`: A descriptor object that describes the properties of the texture.
- `offset`: The distance, in bytes, to place the texture relative to the start of the heap.

<a id="return-value"></a>

## Return Value

A new texture, or `nil` if the heap is not a placement heap.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapTypePlacement](../mtlheaptype/placement.md)
- The texture’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property
- The texture’s storage mode option needs to be [MTLStorageModeMemoryless](../mtlstoragemode/memoryless.md), or match the heap’s [storageMode](storagemode.md) property

> **Important**

>  Avoid potentially erratic behavior by aligning the texture correctly so that it doesn’t extend past the end of the heap.

Use the [heapBufferSizeAndAlignWithLength:options:](../mtldevice/heapbuffersizeandalign%28length_options_%29.md) to determine the correct size and alignment.

> **Note**

>  The new texture can implicitly alias the underlying memory of other resources already in the heap within the overlapping half-open range of `[offset, offset + requiredSize)`.

## See Also

### Creating textures from a heap

- [newTextureWithDescriptor:](maketexture%28descriptor_%29.md): Creates a texture on the heap.
