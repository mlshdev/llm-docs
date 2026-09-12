> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/pixelbuffer](https://developer.apple.com/documentation/coreimage/ciimage/pixelbuffer)

# pixelBuffer (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The CoreVideo pixel buffer this image was created from, if applicable.

## Declaration

```swift
var pixelBuffer: CVPixelBuffer? { get }
```

<a id="Discussion"></a>

## Discussion

If this image was create using the [init(cvPixelBuffer:)](init%28cvpixelbuffer_%29-3wng7.md) initializer, this property’s value is the [CVPixelBuffer](../../corevideo/cvpixelbuffer.md) object that provides the image’s underlying image data. Do not modify the contents of this pixel buffer; doing so will cause undefined rendering results.

Otherwise, this property’s value is `nil`—in this case you can obtain a pixel buffer by rendering the image with the [CIContext](../cicontext.md) [render(\_:to:)](../cicontext/render%28__to_%29.md) method.

## See Also

### Accessing Original Image Content

- [cgImage](cgimage.md): The CoreGraphics image object this image was created from, if applicable.
- [depthData](depthdata.md): Depth data associated with the image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](semanticsegmentationmatte.md)

# pixelBuffer (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The CoreVideo pixel buffer this image was created from, if applicable.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CVPixelBufferRef pixelBuffer;
```

<a id="Discussion"></a>

## Discussion

If this image was create using the [initWithCVPixelBuffer:](init%28cvpixelbuffer_%29-3wng7.md) initializer, this property’s value is the [CVPixelBufferRef](../../corevideo/cvpixelbuffer.md) object that provides the image’s underlying image data. Do not modify the contents of this pixel buffer; doing so will cause undefined rendering results.

Otherwise, this property’s value is `nil`—in this case you can obtain a pixel buffer by rendering the image with the [CIContext](../cicontext.md) [render:toCVPixelBuffer:](../cicontext/render%28__to_%29.md) method.

## See Also

### Accessing Original Image Content

- [CGImage](cgimage.md): The CoreGraphics image object this image was created from, if applicable.
- [depthData](depthdata.md): Depth data associated with the image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](semanticsegmentationmatte.md)
