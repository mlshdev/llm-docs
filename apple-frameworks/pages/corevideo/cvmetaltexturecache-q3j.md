> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltexturecache-q3j](https://developer.apple.com/documentation/corevideo/cvmetaltexturecache-q3j)

# CVMetalTextureCache (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A cache used to create and manage Metal texture objects.

<a id="overview"></a>

## Overview

A Core Video Metal texture cache creates and manages [CVMetalTexture](cvmetaltexture.md) textures. You use a [CVMetalTextureCache](cvmetaltexturecache-q3j.md) object to directly read from or write to GPU-based Core Video image buffers in rendering, or for sharing data with Metal kernels. For example, you can use a Metal texture cache to present live output from a device’s camera in a 3D scene rendered with Metal.

## Topics

### Functions

- [CVMetalTextureCacheCreate(\_:\_:\_:\_:\_:)](cvmetaltexturecachecreate%28__________%29.md): Creates a new texture cache.
- [CVMetalTextureCacheCreateTextureFromImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheFlush(\_:\_:)](cvmetaltexturecacheflush%28____%29.md): Manually flushes the contents of the provided texture cache.
- [CVMetalTextureCacheGetTypeID()](cvmetaltexturecachegettypeid%28%29.md): Returns the Core Foundation type identifier for a Core Video Metal texture cache.

### Data Types

- [CVMetalTextureCache](cvmetaltexturecache.md): A reference to a Core Video Metal texture cache.

### Constants

- [Cache Attributes](cvmetaltexturecache-cache-attributes.md): Attributes specifying texture cache behavior, used with the [CVMetalTextureCacheCreate(\_:\_:\_:\_:\_:)](cvmetaltexturecachecreate%28__________%29.md) function.

### Related Documentation

- [Setting up a command structure](../metal/setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.

## See Also

### Metal

- [CVMetalTexture](cvmetaltexture-q3g.md): A texture-based image buffer that supplies source image data for use with the Metal framework.
- [CVMetalBufferCache](cvmetalbuffercache.md): A cache used to create and manage Metal buffer objects.

# CVMetalTextureCache (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A cache used to create and manage Metal texture objects.

<a id="overview"></a>

## Overview

A Core Video Metal texture cache creates and manages [CVMetalTextureRef](cvmetaltexture.md) textures. You use a [CVMetalTextureCache](cvmetaltexturecache-q3j.md) object to directly read from or write to GPU-based Core Video image buffers in rendering, or for sharing data with Metal kernels. For example, you can use a Metal texture cache to present live output from a device’s camera in a 3D scene rendered with Metal.

## Topics

### Functions

- [CVMetalTextureCacheCreate](cvmetaltexturecachecreate%28__________%29.md): Creates a new texture cache.
- [CVMetalTextureCacheCreateTextureFromImage](cvmetaltexturecachecreatetexturefromimage%28__________________%29.md): Creates a Core Video Metal texture buffer from an existing image buffer.
- [CVMetalTextureCacheFlush](cvmetaltexturecacheflush%28____%29.md): Manually flushes the contents of the provided texture cache.
- [CVMetalTextureCacheGetTypeID](cvmetaltexturecachegettypeid%28%29.md): Returns the Core Foundation type identifier for a Core Video Metal texture cache.

### Data Types

- [CVMetalTextureCacheRef](cvmetaltexturecache.md): A reference to a Core Video Metal texture cache.

### Constants

- [Cache Attributes](cvmetaltexturecache-cache-attributes.md): Attributes specifying texture cache behavior, used with the [CVMetalTextureCacheCreate](cvmetaltexturecachecreate%28__________%29.md) function.

### Related Documentation

- [Setting up a command structure](../metal/setting-up-a-command-structure.md): Discover how Metal executes commands on a GPU.

## See Also

### Metal

- [CVMetalTexture](cvmetaltexture-q3g.md): A texture-based image buffer that supplies source image data for use with the Metal framework.
- [CVMetalBufferCacheRef](cvmetalbuffercache.md): A cache used to create and manage Metal buffer objects.
