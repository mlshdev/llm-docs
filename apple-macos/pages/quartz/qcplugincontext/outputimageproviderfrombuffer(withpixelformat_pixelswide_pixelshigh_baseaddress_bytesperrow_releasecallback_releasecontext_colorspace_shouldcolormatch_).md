> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugincontext/outputimageproviderfrombuffer(withpixelformat:pixelswide:pixelshigh:baseaddress:bytesperrow:releasecallback:releasecontext:colorspace:shouldcolormatch:)](https://developer.apple.com/documentation/quartz/qcplugincontext/outputimageproviderfrombuffer(withpixelformat:pixelswide:pixelshigh:baseaddress:bytesperrow:releasecallback:releasecontext:colorspace:shouldcolormatch:))

# outputImageProviderFromBuffer(withPixelFormat:pixelsWide:pixelsHigh:baseAddress:bytesPerRow:releaseCallback:releaseContext:colorSpace:shouldColorMatch:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an image provider from a single memory buffer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func outputImageProviderFromBuffer(withPixelFormat format: String!, pixelsWide width: Int, pixelsHigh height: Int, baseAddress: UnsafeRawPointer!, bytesPerRow rowBytes: Int, releaseCallback callback: QCPlugInBufferReleaseCallback!, releaseContext context: UnsafeMutableRawPointer!, colorSpace: CGColorSpace!, shouldColorMatch colorMatch: Bool) -> Any!
```

## Parameters

- `format`: The pixel format of the memory buffer. This must be compatible with the color space.
- `width`: The width, in bytes, of the memory buffer.
- `height`: The height, in bytes, of the memory buffer.
- `baseAddress`: The base address of the memory buffer, which must be multiple of 16.
- `rowBytes`: The number of bytes per row of the memory buffer, which must be multiple of 16.
- `callback`: The release callback. Your callback must use this type definition:

  ```objc
  typedef void (*QCPlugInBufferReleaseCallback)(const void* address, void* context);
  ```

  If you name your callback function `MyQCPlugInBufferReleaseCallback`, you would declare it like this:

  ```objc
  void MyQCPlugInBufferReleaseCallback (const void address,
                void * context);
  ```

  Quartz Composer invokes your callback when the memory buffer is no longer needed. The callback can be called from any thread at any time
- `context`: The context to pass to the release callback.
- `colorSpace`: The color space of the memory buffer. This must be compatible with the pixel format.
- `colorMatch`: A Boolean that specifies whether Quartz Composer should color match the image. Pass  [false](https://developer.apple.com/documentation/swift/false) if the image is a mask or gradient or should not be color matched for some other reason. Otherwise, pass [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

An image provider.

<a id="Discussion"></a>

## Discussion

You must not modify the image until the release callback is invoked.

## See Also

### Getting an Image Provider

- [outputImageProviderFromTexture(withPixelFormat:pixelsWide:pixelsHigh:name:flipped:releaseCallback:releaseContext:colorSpace:shouldColorMatch:)](outputimageproviderfromtexture%28withpixelformat_pixelswide_pixelshigh_name_flipped_releasecallback_releasecontext_colorspace_shouldcolormatch_%29.md): Deprecated. Returns an image provider from an OpenGL texture.

# outputImageProviderFromBufferWithPixelFormat:pixelsWide:pixelsHigh:baseAddress:bytesPerRow:releaseCallback:releaseContext:colorSpace:shouldColorMatch: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns an image provider from a single memory buffer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (id) outputImageProviderFromBufferWithPixelFormat:(NSString *) format pixelsWide:(NSUInteger) width pixelsHigh:(NSUInteger) height baseAddress:(const void *) baseAddress bytesPerRow:(NSUInteger) rowBytes releaseCallback:(QCPlugInBufferReleaseCallback) callback releaseContext:(void *) context colorSpace:(CGColorSpaceRef) colorSpace shouldColorMatch:(BOOL) colorMatch;
```

## Parameters

- `format`: The pixel format of the memory buffer. This must be compatible with the color space.
- `width`: The width, in bytes, of the memory buffer.
- `height`: The height, in bytes, of the memory buffer.
- `baseAddress`: The base address of the memory buffer, which must be multiple of 16.
- `rowBytes`: The number of bytes per row of the memory buffer, which must be multiple of 16.
- `callback`: The release callback. Your callback must use this type definition:

  ```objc
  typedef void (*QCPlugInBufferReleaseCallback)(const void* address, void* context);
  ```

  If you name your callback function `MyQCPlugInBufferReleaseCallback`, you would declare it like this:

  ```objc
  void MyQCPlugInBufferReleaseCallback (const void address,
                void * context);
  ```

  Quartz Composer invokes your callback when the memory buffer is no longer needed. The callback can be called from any thread at any time
- `context`: The context to pass to the release callback.
- `colorSpace`: The color space of the memory buffer. This must be compatible with the pixel format.
- `colorMatch`: A Boolean that specifies whether Quartz Composer should color match the image. Pass  [false](https://developer.apple.com/documentation/swift/false) if the image is a mask or gradient or should not be color matched for some other reason. Otherwise, pass [true](https://developer.apple.com/documentation/swift/true).

<a id="return-value"></a>

## Return Value

An image provider.

<a id="Discussion"></a>

## Discussion

You must not modify the image until the release callback is invoked.

## See Also

### Getting an Image Provider

- [outputImageProviderFromTextureWithPixelFormat:pixelsWide:pixelsHigh:name:flipped:releaseCallback:releaseContext:colorSpace:shouldColorMatch:](outputimageproviderfromtexture%28withpixelformat_pixelswide_pixelshigh_name_flipped_releasecallback_releasecontext_colorspace_shouldcolormatch_%29.md): Deprecated. Returns an image provider from an OpenGL texture.
