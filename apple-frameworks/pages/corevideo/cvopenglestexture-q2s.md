> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglestexture-q2s](https://developer.apple.com/documentation/corevideo/cvopenglestexture-q2s)

# CVOpenGLESTexture (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A texture-based image buffer that supplies source image data to OpenGL ES.

<a id="overview"></a>

## Overview

Core Video OpenGL ES textures are texture-based image buffers the system uses to supply source image data to OpenGL.

## Topics

### Inspecting Textures

The functions in this section operate on Core Video texture-based image buffers derived from the `CVOpenGLESTextureRef` type.

- [CVOpenGLESTextureGetTarget(\_:)](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName(\_:)](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetCleanTexCoords(\_:\_:\_:\_:\_:)](cvopenglestexturegetcleantexcoords%28__________%29.md): Deprecated. Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVOpenGLESTextureIsFlipped(\_:)](cvopenglestextureisflipped%28__%29.md): Deprecated. Returns whether the image is flipped vertically or not.
- [CVOpenGLESTextureGetTypeID()](cvopenglestexturegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture-based image buffer.

### Data Types

- [CVOpenGLESTexture](cvopenglestexture.md): A reference to a Core Video texture-based image buffer.

## See Also

### OpenGL ES

- [CVOpenGLESTextureCache](cvopenglestexturecache-q2r.md): A cache used to create and manage OpenGL ES texture objects.

# CVOpenGLESTexture (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A texture-based image buffer that supplies source image data to OpenGL ES.

<a id="overview"></a>

## Overview

Core Video OpenGL ES textures are texture-based image buffers the system uses to supply source image data to OpenGL.

## Topics

### Inspecting Textures

The functions in this section operate on Core Video texture-based image buffers derived from the `CVOpenGLESTextureRef` type.

- [CVOpenGLESTextureGetTarget](cvopenglestexturegettarget%28__%29.md): Deprecated. Returns the texture target for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetName](cvopenglestexturegetname%28__%29.md): Deprecated. Returns the texture target name for a `CVOpenGLESTextureRef`.
- [CVOpenGLESTextureGetCleanTexCoords](cvopenglestexturegetcleantexcoords%28__________%29.md): Deprecated. Returns convenient normalized texture coordinates for the part of the image that should be displayed.
- [CVOpenGLESTextureIsFlipped](cvopenglestextureisflipped%28__%29.md): Deprecated. Returns whether the image is flipped vertically or not.
- [CVOpenGLESTextureGetTypeID](cvopenglestexturegettypeid%28%29.md): Deprecated. Returns the Core Foundation type identifier for a Core Video texture-based image buffer.

### Data Types

- [CVOpenGLESTextureRef](cvopenglestexture.md): A reference to a Core Video texture-based image buffer.

## See Also

### OpenGL ES

- [CVOpenGLESTextureCache](cvopenglestexturecache-q2r.md): A cache used to create and manage OpenGL ES texture objects.
