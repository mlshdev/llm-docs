> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/cgimage](https://developer.apple.com/documentation/coreimage/ciimage/cgimage)

# cgImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The CoreGraphics image object this image was created from, if applicable.

## Declaration

```swift
var cgImage: CGImage? { get }
```

<a id="Discussion"></a>

## Discussion

If this image was created using the [init(cgImage:)](init%28cgimage_%29-2kvvb.md) or [init(contentsOf:)](init%28contentsof_%29.md) initializer, this property’s value is the [CGImage](../../coregraphics/cgimage.md) object that provides the image’s underlying image data. Otherwise, this property’s value is `nil`—in this case you can obtain a CoreGraphics image by rendering the image with the [CIContext](../cicontext.md) [createCGImage(\_:from:)](../cicontext/createcgimage%28__from_%29.md) method.

## See Also

### Accessing Original Image Content

- [pixelBuffer](pixelbuffer.md): The CoreVideo pixel buffer this image was created from, if applicable.
- [depthData](depthdata.md): Depth data associated with the image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](semanticsegmentationmatte.md)

# CGImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The CoreGraphics image object this image was created from, if applicable.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CGImageRef CGImage;
```

<a id="Discussion"></a>

## Discussion

If this image was created using the [initWithCGImage:](init%28cgimage_%29-2kvvb.md) or [initWithContentsOfURL:](init%28contentsof_%29.md) initializer, this property’s value is the [CGImageRef](../../coregraphics/cgimage.md) object that provides the image’s underlying image data. Otherwise, this property’s value is `nil`—in this case you can obtain a CoreGraphics image by rendering the image with the [CIContext](../cicontext.md) [createCGImage:fromRect:](../cicontext/createcgimage%28__from_%29.md) method.

## See Also

### Accessing Original Image Content

- [pixelBuffer](pixelbuffer.md): The CoreVideo pixel buffer this image was created from, if applicable.
- [depthData](depthdata.md): Depth data associated with the image.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](semanticsegmentationmatte.md)
