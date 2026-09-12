> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlheap/maketexture(descriptor:)](https://developer.apple.com/documentation/metal/mtlheap/maketexture(descriptor:))

# makeTexture(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a texture on the heap.

## Declaration

```swift
func makeTexture(descriptor: MTLTextureDescriptor) -> (any MTLTexture)?
```

## Parameters

- `descriptor`: A descriptor object that describes the properties of the texture.

<a id="return-value"></a>

## Return Value

A new texture object backed by heap memory, or `nil` if the heap memory is full.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapType.automatic](../mtlheaptype/automatic.md)
- The texture’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property
- The texture’s storage mode option needs to be [MTLStorageMode.memoryless](../mtlstoragemode/memoryless.md), or match the heap’s [storageMode](storagemode.md) property

## See Also

### Creating textures from a heap

- [makeTexture(descriptor:offset:)](maketexture%28descriptor_offset_%29.md): Creates a texture at a specified offset on the heap.

# newTextureWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Creates a texture on the heap.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithDescriptor:(MTLTextureDescriptor *) descriptor;
```

## Parameters

- `descriptor`: A descriptor object that describes the properties of the texture.

<a id="return-value"></a>

## Return Value

A new texture object backed by heap memory, or `nil` if the heap memory is full.

<a id="discussion"></a>

## Discussion

You can call the method with the following restrictions:

- The heap’s type needs to be [MTLHeapTypeAutomatic](../mtlheaptype/automatic.md)
- The texture’s CPU cache mode option needs to match the heap’s [cpuCacheMode](cpucachemode.md) property
- The texture’s storage mode option needs to be [MTLStorageModeMemoryless](../mtlstoragemode/memoryless.md), or match the heap’s [storageMode](storagemode.md) property

## See Also

### Creating textures from a heap

- [newTextureWithDescriptor:offset:](maketexture%28descriptor_offset_%29.md): Creates a texture at a specified offset on the heap.
