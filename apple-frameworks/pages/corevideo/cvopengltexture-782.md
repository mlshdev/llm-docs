> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopengltexture-782](https://developer.apple.com/documentation/corevideo/cvopengltexture-782)

# CVOpenGLTexture (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A texture-based image buffer that supplies source image data to OpenGL.

<a id="overview"></a>

## Overview

Core Video OpenGL textures are texture-based image buffers used for supplying source image data to OpenGL.

## Topics

### Inspecting Textures

- [CVOpenGLTextureGetName(\_:)](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget(\_:)](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureIsFlipped(\_:)](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.
- [CVOpenGLTextureGetTypeID()](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.

### Data Types

- [CVOpenGLTexture](cvopengltexture.md): A reference to an OpenGL texture-based image buffer object.

## See Also

### OpenGL

- [CVOpenGLTextureCache](cvopengltexturecache-780.md): A cache used to create and manage OpenGL texture objects.
- [CVOpenGLBuffer](cvopenglbuffer-77s.md): An image buffer used to store image data in video memory.
- [CVOpenGLBufferPool](cvopenglbufferpool-77j.md): A utility object for managing a set of recyclable OpenGL buffer objects.

# CVOpenGLTexture (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A texture-based image buffer that supplies source image data to OpenGL.

<a id="overview"></a>

## Overview

Core Video OpenGL textures are texture-based image buffers used for supplying source image data to OpenGL.

## Topics

### Inspecting Textures

- [CVOpenGLTextureGetName](cvopengltexturegetname%28__%29.md): Deprecated. Returns the texture target name of a CoreVideo OpenGL texture.
- [CVOpenGLTextureGetTarget](cvopengltexturegettarget%28__%29.md): Deprecated. Returns the texture target (for example, `GL_TEXTURE_2D`) of an OpenGL texture.
- [CVOpenGLTextureGetCleanTexCoords](cvopengltexturegetcleantexcoords%28__________%29.md): Deprecated. Returns the texture coordinates for the part of the image that should be displayed.
- [CVOpenGLTextureIsFlipped](cvopengltextureisflipped%28__%29.md): Deprecated. Determines whether an OpenGL texture is flipped vertically.
- [CVOpenGLTextureGetTypeID](cvopengltexturegettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the Core Video OpenGL texture type.

### Retaining and Releasing Textures

- [CVOpenGLTextureRetain](cvopengltextureretain.md): Deprecated. Retains a Core Video OpenGL texture.
- [CVOpenGLTextureRelease](cvopengltexturerelease.md): Deprecated. Releases a Core Video OpenGL texture.

### Data Types

- [CVOpenGLTextureRef](cvopengltexture.md): A reference to an OpenGL texture-based image buffer object.

## See Also

### OpenGL

- [CVOpenGLTextureCache](cvopengltexturecache-780.md): A cache used to create and manage OpenGL texture objects.
- [CVOpenGLBuffer](cvopenglbuffer-77s.md): An image buffer used to store image data in video memory.
- [CVOpenGLBufferPool](cvopenglbufferpool-77j.md): A utility object for managing a set of recyclable OpenGL buffer objects.
