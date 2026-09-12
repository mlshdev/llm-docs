> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetaltexture-q3g](https://developer.apple.com/documentation/corevideo/cvmetaltexture-q3g)

# CVMetalTexture (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A texture-based image buffer that supplies source image data for use with the Metal framework.

<a id="Overview"></a>

## Overview

A Core Video Metal Texture is a texture-based image buffer that supplies source image data for use with the Metal framework.

## Topics

### Inspecting Textures

- [CVMetalTextureGetTexture(\_:)](cvmetaltexturegettexture%28__%29.md): Returns the Metal texture object for the image buffer.
- [CVMetalTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureIsFlipped(\_:)](cvmetaltextureisflipped%28__%29.md): Returns a Boolean value indicating whether the texture image is vertically flipped.
- [CVMetalTextureGetTypeID()](cvmetaltexturegettypeid%28%29.md): Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.

### Data Types

- [CVMetalTexture](cvmetaltexture.md): A reference to a CoreVideo Metal texture-based image buffer.

## See Also

### Metal

- [CVMetalTextureCache](cvmetaltexturecache-q3j.md): A cache used to create and manage Metal texture objects.
- [CVMetalBufferCache](cvmetalbuffercache.md): A cache used to create and manage Metal buffer objects.

# CVMetalTexture (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A texture-based image buffer that supplies source image data for use with the Metal framework.

<a id="Overview"></a>

## Overview

A Core Video Metal Texture is a texture-based image buffer that supplies source image data for use with the Metal framework.

## Topics

### Inspecting Textures

- [CVMetalTextureGetTexture](cvmetaltexturegettexture%28__%29.md): Returns the Metal texture object for the image buffer.
- [CVMetalTextureGetCleanTexCoords](cvmetaltexturegetcleantexcoords%28__________%29.md): Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVMetalTextureIsFlipped](cvmetaltextureisflipped%28__%29.md): Returns a Boolean value indicating whether the texture image is vertically flipped.
- [CVMetalTextureGetTypeID](cvmetaltexturegettypeid%28%29.md): Returns the Core Foundation type identifier for a CoreVideo Metal texture-based image buffer.

### Data Types

- [CVMetalTextureRef](cvmetaltexture.md): A reference to a CoreVideo Metal texture-based image buffer.

## See Also

### Metal

- [CVMetalTextureCache](cvmetaltexturecache-q3j.md): A cache used to create and manage Metal texture objects.
- [CVMetalBufferCacheRef](cvmetalbuffercache.md): A cache used to create and manage Metal buffer objects.
