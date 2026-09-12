> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionrendercontext/newpixelbuffer()](https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/newpixelbuffer())

# newPixelBuffer() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a pixel buffer to use for rendering.

> Use newReadOnlyPixelBuffer() instead

## Declaration

```swift
func newPixelBuffer() -> CVPixelBuffer?
```

<a id="return-value"></a>

## Return Value

A [CVPixelBuffer](../../corevideo/cvpixelbuffer.md) to use for rendering.

<a id="Discussion"></a>

## Discussion

The buffer’s [kCVImageBufferCleanApertureKey](../../corevideo/kcvimagebuffercleanaperturekey.md) and [kCVImageBufferPixelAspectRatioKey](../../corevideo/kcvimagebufferpixelaspectratiokey.md) attachments are set to match the current composition processor properties. You’re responsible for calling [CVBufferRelease](../../corevideo/cvbufferrelease.md) on the pixel buffer.

## See Also

### Creating the pixel buffer

- [makeMutablePixelBuffer()](makemutablepixelbuffer%28%29.md): Vends a CVMutablePixelBuffer to use for rendering. The buffer will have its kCVImageBufferCleanApertureKey and kCVImageBufferPixelAspectRatioKey attachments set to match the current composition processor properties.

# newPixelBuffer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns a pixel buffer to use for rendering.

## Declaration

```objectivec
- (CVPixelBufferRef) newPixelBuffer;
```

<a id="return-value"></a>

## Return Value

A [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md) to use for rendering.

<a id="Discussion"></a>

## Discussion

The buffer’s [kCVImageBufferCleanApertureKey](../../corevideo/kcvimagebuffercleanaperturekey.md) and [kCVImageBufferPixelAspectRatioKey](../../corevideo/kcvimagebufferpixelaspectratiokey.md) attachments are set to match the current composition processor properties. You’re responsible for calling [CVBufferRelease](../../corevideo/cvbufferrelease.md) on the pixel buffer.
