> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpool-77o](https://developer.apple.com/documentation/corevideo/cvpixelbufferpool-77o)

# CVPixelBufferPool (Swift)

**Framework:** Core Video  
**Kind:** API Collection

A utility object for managing a recyclable set of pixel buffer objects.

## Topics

### Creating pools

- [CVPixelBufferPoolCreate(\_:\_:\_:\_:)](cvpixelbufferpoolcreate%28________%29.md): Creates a pixel buffer pool using the allocator and attributes that you specify.
- [CVPixelBufferPoolCreatePixelBuffer(\_:\_:\_:)](cvpixelbufferpoolcreatepixelbuffer%28______%29.md): Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.
- [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md): Creates a new pixel buffer with auxiliary attributes from the pool.

### Flushing pools

- [CVPixelBufferPoolFlush(\_:\_:)](cvpixelbufferpoolflush%28____%29.md): Frees pixel buffers from the pool based on the options that you specify.

### Inspecting pools

- [CVPixelBufferPoolGetAttributes(\_:)](cvpixelbufferpoolgetattributes%28__%29.md): The pool attributes dictionary for a pixel buffer pool.
- [CVPixelBufferPoolGetPixelBufferAttributes(\_:)](cvpixelbufferpoolgetpixelbufferattributes%28__%29.md): The attributes of pixel buffers which the system creates using the pool you specify.
- [CVPixelBufferPoolGetTypeID()](cvpixelbufferpoolgettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer pool type.

### Data types

- [CVPixelBufferPool](cvpixelbufferpool.md): A reference to a pixel buffer pool object.
- [CVPixelBufferPoolFlushFlags](cvpixelbufferpoolflushflags.md): The flags to pass to flush the pool.

### Constants

- [kCVPixelBufferPoolMinimumBufferCountKey](kcvpixelbufferpoolminimumbuffercountkey.md): The key that sets the minimum number of pixel buffers in the pool.
- [kCVPixelBufferPoolMaximumBufferAgeKey](kcvpixelbufferpoolmaximumbufferagekey.md): The key that sets how long the pool keeps an unused buffer before it ages out.
- [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md): The key that limits the number of pixel buffers the pool allocates.

### Notifications

- [kCVPixelBufferPoolFreeBufferNotification](kcvpixelbufferpoolfreebuffernotification.md): A notification that the system posts if a buffer becomes available after it fails to create a pixel buffer with auxiliary attributes because it exceeded the threshold you specified.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.

# CVPixelBufferPool (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

A utility object for managing a recyclable set of pixel buffer objects.

## Topics

### Creating pools

- [CVPixelBufferPoolCreate](cvpixelbufferpoolcreate%28________%29.md): Creates a pixel buffer pool using the allocator and attributes that you specify.
- [CVPixelBufferPoolCreatePixelBuffer](cvpixelbufferpoolcreatepixelbuffer%28______%29.md): Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.
- [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md): Creates a new pixel buffer with auxiliary attributes from the pool.

### Flushing pools

- [CVPixelBufferPoolFlush](cvpixelbufferpoolflush%28____%29.md): Frees pixel buffers from the pool based on the options that you specify.

### Inspecting pools

- [CVPixelBufferPoolGetAttributes](cvpixelbufferpoolgetattributes%28__%29.md): The pool attributes dictionary for a pixel buffer pool.
- [CVPixelBufferPoolGetPixelBufferAttributes](cvpixelbufferpoolgetpixelbufferattributes%28__%29.md): The attributes of pixel buffers which the system creates using the pool you specify.
- [CVPixelBufferPoolGetTypeID](cvpixelbufferpoolgettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer pool type.

### Retaining and releasing pools

- [CVPixelBufferPoolRetain](cvpixelbufferpoolretain.md): Retains the pixel buffer pool that you specify.
- [CVPixelBufferPoolRelease](cvpixelbufferpoolrelease.md): Releases a pixel buffer pool.

### Data types

- [CVPixelBufferPoolRef](cvpixelbufferpool.md): A reference to a pixel buffer pool object.
- [CVPixelBufferPoolFlushFlags](cvpixelbufferpoolflushflags.md): The flags to pass to flush the pool.

### Constants

- [kCVPixelBufferPoolMinimumBufferCountKey](kcvpixelbufferpoolminimumbuffercountkey.md): The key that sets the minimum number of pixel buffers in the pool.
- [kCVPixelBufferPoolMaximumBufferAgeKey](kcvpixelbufferpoolmaximumbufferagekey.md): The key that sets how long the pool keeps an unused buffer before it ages out.
- [kCVPixelBufferPoolAllocationThresholdKey](kcvpixelbufferpoolallocationthresholdkey.md): The key that limits the number of pixel buffers the pool allocates.

### Notifications

- [kCVPixelBufferPoolFreeBufferNotification](kcvpixelbufferpoolfreebuffernotification.md): A notification that the system posts if a buffer becomes available after it fails to create a pixel buffer with auxiliary attributes because it exceeded the threshold you specified.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.
