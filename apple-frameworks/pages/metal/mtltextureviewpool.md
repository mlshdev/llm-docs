> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureviewpool](https://developer.apple.com/documentation/metal/mtltextureviewpool)

# MTLTextureViewPool (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A pool of lightweight texture views.

## Declaration

```swift
protocol MTLTextureViewPool : MTLResourceViewPool
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Use texture view pools to create lightweight texture view objects of [MTLTexture](mtltexture.md) and [MTLBuffer](mtlbuffer.md) instances.

## Topics

### Instance Methods

- [setTextureView(buffer:descriptor:offset:bytesPerRow:index:)](mtltextureviewpool/settextureview%28buffer_descriptor_offset_bytesperrow_index_%29.md): Creates a new lightweight texture view of a buffer.
- [setTextureView(texture:descriptor:index:)](mtltextureviewpool/settextureview%28texture_descriptor_index_%29.md): Creates a new lightweight texture view.
- [setTextureView(texture:index:)](mtltextureviewpool/settextureview%28texture_index_%29.md): Copies a default texture view to a slot in this texture view pool at an index provided.

## Relationships

### Inherits From

- [MTLResourceViewPool](mtlresourceviewpool.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### View pools

- [MTLResourceViewPool](mtlresourceviewpool.md): Contains views over resources of a specific type, and allows you to manage those views.
- [MTLResourceViewPoolDescriptor](mtlresourceviewpooldescriptor.md): Provides parameters for creating a resource view pool.
- [MTLTextureViewDescriptor](mtltextureviewdescriptor.md)

# MTLTextureViewPool (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A pool of lightweight texture views.

## Declaration

```objectivec
@protocol MTLTextureViewPool <MTLResourceViewPool>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Use texture view pools to create lightweight texture view objects of [MTLTexture](mtltexture.md) and [MTLBuffer](mtlbuffer.md) instances.

## Topics

### Instance Methods

- [setTextureViewFromBuffer:descriptor:offset:bytesPerRow:atIndex:](mtltextureviewpool/settextureview%28buffer_descriptor_offset_bytesperrow_index_%29.md): Creates a new lightweight texture view of a buffer.
- [setTextureView:descriptor:atIndex:](mtltextureviewpool/settextureview%28texture_descriptor_index_%29.md): Creates a new lightweight texture view.
- [setTextureView:atIndex:](mtltextureviewpool/settextureview%28texture_index_%29.md): Copies a default texture view to a slot in this texture view pool at an index provided.

## Relationships

### Inherits From

- [MTLResourceViewPool](mtlresourceviewpool.md)

## See Also

### View pools

- [MTLResourceViewPool](mtlresourceviewpool.md): Contains views over resources of a specific type, and allows you to manage those views.
- [MTLResourceViewPoolDescriptor](mtlresourceviewpooldescriptor.md): Provides parameters for creating a resource view pool.
- [MTLTextureViewDescriptor](mtltextureviewdescriptor.md)
