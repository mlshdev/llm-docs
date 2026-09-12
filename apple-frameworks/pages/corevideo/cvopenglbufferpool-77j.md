> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvopenglbufferpool-77j](https://developer.apple.com/documentation/corevideo/cvopenglbufferpool-77j)

# CVOpenGLBufferPool (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A utility object for managing a set of recyclable OpenGL buffer objects.

## Topics

### Functions

- [CVOpenGLBufferPoolCreate(\_:\_:\_:\_:)](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolCreateOpenGLBuffer(\_:\_:\_:)](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes(\_:)](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes(\_:)](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolGetTypeID()](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.

### Data Types

- [CVOpenGLBufferPool](cvopenglbufferpool.md): A reference to an OpenGL buffer pool object.

### Constants

- [kCVOpenGLBufferPoolMaximumBufferAgeKey](kcvopenglbufferpoolmaximumbufferagekey.md): Deprecated. The maximum time that unused buffers should be kept before they are deallocated (type `CFAbsoluteTime`).
- [kCVOpenGLBufferPoolMinimumBufferCountKey](kcvopenglbufferpoolminimumbuffercountkey.md): Deprecated. The minimum number of buffers to be kept in the pool (type `CFNumber`).

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### OpenGL

- [CVOpenGLTextureCache](cvopengltexturecache-780.md): A cache used to create and manage OpenGL texture objects.
- [CVOpenGLTexture](cvopengltexture-782.md): A texture-based image buffer that supplies source image data to OpenGL.
- [CVOpenGLBuffer](cvopenglbuffer-77s.md): An image buffer used to store image data in video memory.

# CVOpenGLBufferPool (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A utility object for managing a set of recyclable OpenGL buffer objects.

## Topics

### Functions

- [CVOpenGLBufferPoolCreate](cvopenglbufferpoolcreate%28________%29.md): Deprecated. Creates a new OpenGL buffer pool.
- [CVOpenGLBufferPoolCreateOpenGLBuffer](cvopenglbufferpoolcreateopenglbuffer%28______%29.md): Deprecated. Creates a new OpenGL buffer from an OpenGL buffer pool.
- [CVOpenGLBufferPoolGetAttributes](cvopenglbufferpoolgetattributes%28__%29.md): Deprecated. Returns the pool attributes dictionary for an Open GL buffer pool.
- [CVOpenGLBufferPoolGetOpenGLBufferAttributes](cvopenglbufferpoolgetopenglbufferattributes%28__%29.md): Deprecated. Returns the attributes of OpenGL buffers that will be created from a buffer pool.
- [CVOpenGLBufferPoolGetTypeID](cvopenglbufferpoolgettypeid%28%29.md): Deprecated. Obtains the Core Foundation ID for the OpenGL buffer pool type.
- [CVOpenGLBufferPoolRetain](cvopenglbufferpoolretain.md): Deprecated. Retains an OpenGL buffer pool.
- [CVOpenGLBufferPoolRelease](cvopenglbufferpoolrelease.md): Deprecated. Releases an OpenGL buffer pool.

### Data Types

- [CVOpenGLBufferPoolRef](cvopenglbufferpool.md): A reference to an OpenGL buffer pool object.

### Constants

- [kCVOpenGLBufferPoolMaximumBufferAgeKey](kcvopenglbufferpoolmaximumbufferagekey.md): Deprecated. The maximum time that unused buffers should be kept before they are deallocated (type `CFAbsoluteTime`).
- [kCVOpenGLBufferPoolMinimumBufferCountKey](kcvopenglbufferpoolminimumbuffercountkey.md): Deprecated. The minimum number of buffers to be kept in the pool (type `CFNumber`).

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### OpenGL

- [CVOpenGLTextureCache](cvopengltexturecache-780.md): A cache used to create and manage OpenGL texture objects.
- [CVOpenGLTexture](cvopengltexture-782.md): A texture-based image buffer that supplies source image data to OpenGL.
- [CVOpenGLBuffer](cvopenglbuffer-77s.md): An image buffer used to store image data in video memory.
