> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage](https://developer.apple.com/documentation/coreimage/ciimage)

# CIImage (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A representation of an image to be processed or produced by Core Image filters.

## Declaration

```swift
class CIImage
```

## Mentioned In

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md)
- [Selectively Focusing on an Image](selectively-focusing-on-an-image.md)
- [Customizing Image Transitions](customizing-image-transitions.md)

<a id="overview"></a>

## Overview

You use `CIImage` objects in conjunction with other Core Image classes—such as [CIFilter](cifilter-swift.class.md), [CIContext](cicontext.md), [CIVector](civector.md), and [CIColor](cicolor.md)—to take advantage of the built-in Core Image filters when processing images. You can create `CIImage` objects with data supplied from a variety of sources, including Quartz 2D images, Core Video image buffers ([CVImageBuffer](../corevideo/cvimagebuffer.md)), URL-based objects, and `NSData` objects.

Although a `CIImage` object has image data associated with it, it is not an image. You can think of a `CIImage` object as an image “recipe.” A `CIImage` object has all the information necessary to produce an image, but Core Image doesn’t actually render an image until it is told to do so. This lazy evaluation allows Core Image to operate as efficiently as possible. To show a `CIImage` object as an on-screen image, you can display it as a [UIImage](../uikit/uiimage.md) in [UIImageView](../uikit/uiimageview.md):

**Swift**

```swift
guard let imageURL = Bundle.main.url(forResource: "YourJPEGName", withExtension: "JPG") else {
    print("Could not find image")
    return
}
guard let let ciImage = CIImage(contentsOf: imageURL) else {
    print("Could not create CIImage")
    return
}
let uiImage = UIImage(ciImage: ciImage)
let imageView = UIImageView(image: uiImage)    
self.view.addSubview(imageView)
```

**Objective-C**

```objc
NSURL* imageURL = [[NSBundle mainBundle] URLForResource:@"YourJPEGName" withExtension:@"JPG"];
CIImage* ciImage = [CIImage imageWithContentsOfURL:imageURL];
UIImage* uiImage = [UIImage imageWithCIImage:ciImage];
UIImageView* imageView = [[UIImageView alloc] initWithImage:uiImage];
[self.view addSubview:imageView];
```

`CIContext`  and `CIImage` objects are immutable, which means each can be shared safely among threads. Multiple threads can use the same GPU or CPU `CIContext` object to render `CIImage` objects.  However, this is not the case for `CIFilter` objects, which are mutable. A `CIFilter` object cannot be shared safely among threads.  If you app is multithreaded, each thread must create its own `CIFilter` objects. Otherwise, your app could behave unexpectedly.

Core Image also provides auto-adjustment methods. These methods analyze an image for common deficiencies and return a set of filters to correct those deficiencies. The filters are preset with values for improving image quality by altering values for skin tones, saturation, contrast, and shadows and for removing red-eye or other artifacts caused by flash. (See Getting Autoadjustment Filters.)

For a discussion of all the methods you can use to create `CIImage` objects on iOS and macOS, see [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

## Topics

### Creating an Image

- [empty()](ciimage/empty%28%29.md): Creates and returns an empty image object.
- [init(image:)](ciimage/init%28image_%29.md): Initializes an image object with the specified UIKit image object.
- [init(image:options:)](ciimage/init%28image_options_%29.md): Initializes an image object with the specified UIKit image object, using the specified options.
- [init(contentsOf:)](ciimage/init%28contentsof_%29.md): Initializes an image object by reading an image from a URL.
- [init(contentsOf:options:)](ciimage/init%28contentsof_options_%29.md): Initializes an image object by reading an image from a URL, using the specified options.
- [init(cgImage:)](ciimage/init%28cgimage_%29-2kvvb.md): Initializes an image object with a Quartz 2D image.
- [init(cgImage:options:)](ciimage/init%28cgimage_options_%29-8663h.md): Initializes an image object with a Quartz 2D image, using the specified options.
- [init(cgImageSource:index:options:)](ciimage/init%28cgimagesource_index_options_%29-e2bz.md)
- [init(data:)](ciimage/init%28data_%29.md): Initializes an image object with the supplied image data.
- [init(data:options:)](ciimage/init%28data_options_%29.md): Initializes an image object with the supplied image data, using the specified options.
- [init(bitmapData:bytesPerRow:size:format:colorSpace:)](ciimage/init%28bitmapdata_bytesperrow_size_format_colorspace_%29.md): Initializes an image object with bitmap data.
- [init(bitmapImageRep:)](ciimage/init%28bitmapimagerep_%29.md): Initializes an image object with the specified bitmap image representation.
- [init(imageProvider:size:\_:format:colorSpace:options:)](ciimage/init%28imageprovider_size___format_colorspace_options_%29.md): Initializes an image object based on pixels from an image provider object.
- [init(depthData:)](ciimage/init%28depthdata_%29.md)
- [init(depthData:options:)](ciimage/init%28depthdata_options_%29.md)
- [init(portaitEffectsMatte:)](ciimage/init%28portaiteffectsmatte_%29.md)
- [init(portaitEffectsMatte:options:)](ciimage/init%28portaiteffectsmatte_options_%29.md)
- [init(semanticSegmentationMatte:)](ciimage/init%28semanticsegmentationmatte_%29.md)
- [init(semanticSegmentationMatte:options:)](ciimage/init%28semanticsegmentationmatte_options_%29.md)
- [init(cvImageBuffer:)](ciimage/init%28cvimagebuffer_%29-7wmzq.md): Initializes an image object from the contents of a Core Video image buffer.
- [init(cvImageBuffer:options:)](ciimage/init%28cvimagebuffer_options_%29-8upim.md): Initializes an image object from the contents of a Core Video image buffer, using the specified options.
- [init(cvPixelBuffer:)](ciimage/init%28cvpixelbuffer_%29-3wng7.md): Initializes an image object from the contents of a Core Video pixel buffer.
- [init(cvPixelBuffer:options:)](ciimage/init%28cvpixelbuffer_options_%29-9x2pz.md): Initializes an image object from the contents of a Core Video pixel buffer using the specified options.
- [init(mtlTexture:options:)](ciimage/init%28mtltexture_options_%29-67uvj.md): Initializes an image object with data supplied by a Metal texture.
- [init(ioSurface:)](ciimage/init%28iosurface_%29-5e9yc.md): Initializes an image with the contents of an IOSurface.
- [init(ioSurface:options:)](ciimage/init%28iosurface_options_%29-48cta.md): Initializes, using the specified options, an image with the contents of an IOSurface.

### Creating an Image by Modifying an Existing Image

- [applyingFilter(\_:parameters:)](ciimage/applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [applyingFilter(\_:)](ciimage/applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [transformed(by:)](ciimage/transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [transformed(by:highQualityDownsample:)](ciimage/transformed%28by_highqualitydownsample_%29.md)
- [cropped(to:)](ciimage/cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [oriented(forExifOrientation:)](ciimage/oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [clampedToExtent()](ciimage/clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [clamped(to:)](ciimage/clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [composited(over:)](ciimage/composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [convertingWorkingSpaceToLab()](ciimage/convertingworkingspacetolab%28%29.md)
- [convertingLabToWorkingSpace()](ciimage/convertinglabtoworkingspace%28%29.md)
- [matchedToWorkingSpace(from:)](ciimage/matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [matchedFromWorkingSpace(to:)](ciimage/matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [premultiplyingAlpha()](ciimage/premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [unpremultiplyingAlpha()](ciimage/unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [settingAlphaOne(in:)](ciimage/settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.
- [applyingGaussianBlur(sigma:)](ciimage/applyinggaussianblur%28sigma_%29.md): Create an image by applying a gaussian blur to the receiver.
- [settingProperties(\_:)](ciimage/settingproperties%28__%29.md): Return a new image by changing the receiver’s metadata properties.
- [insertingIntermediate()](ciimage/insertingintermediate%28%29.md): Create an image that inserts a intermediate that is cacheable
- [insertingIntermediate(cache:)](ciimage/insertingintermediate%28cache_%29.md): Create an image that inserts a intermediate that is cacheable.

### Creating Solid Colors

- [init(color:)](ciimage/init%28color_%29.md): Initializes an image of infinite extent whose entire content is the specified color.
- [black](ciimage/black.md)
- [blue](ciimage/blue.md)
- [clear](ciimage/clear.md)
- [cyan](ciimage/cyan.md)
- [gray](ciimage/gray.md)
- [green](ciimage/green.md)
- [magenta](ciimage/magenta.md)
- [red](ciimage/red.md)
- [white](ciimage/white.md)
- [yellow](ciimage/yellow.md)

### Getting Image Information

- [definition](ciimage/definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](ciimage/extent.md): A rectangle that specifies the extent of the image.
- [properties](ciimage/properties.md): Returns the metadata properties dictionary of the image.
- [url](ciimage/url.md): The URL from which the image was loaded.
- [colorSpace](ciimage/colorspace.md): The color space of the image.
- [orientationTransform(forExifOrientation:)](ciimage/orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.

### Drawing Images

- [draw(at:from:operation:fraction:)](ciimage/draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [draw(in:from:operation:fraction:)](ciimage/draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system

### Getting Autoadjustment Filters

- [autoAdjustmentFilters()](ciimage/autoadjustmentfilters%28%29.md): Returns all possible automatically selected and configured filters for adjusting the image.
- [autoAdjustmentFilters(options:)](ciimage/autoadjustmentfilters%28options_%29.md): Returns a subset of automatically selected and configured filters for adjusting the image.
- [Autoadjustment Keys](autoadjustment-keys.md): Constants used as keys in the options dictionary for the [autoAdjustmentFilters(options:)](ciimage/autoadjustmentfilters%28options_%29.md) method.

### Working with Filter Regions of Interest

- [regionOfInterest(for:in:)](ciimage/regionofinterest%28for_in_%29.md): Returns the region of interest for the filter chain that generates the image.

### Working with Orientation

- [oriented(\_:)](ciimage/oriented%28__%29.md): Transforms the original image by a given orientation.
- [orientationTransform(for:)](ciimage/orientationtransform%28for_%29.md): The affine transform for changing the image to the given orientation.

### Sampling the Image

- [samplingNearest()](ciimage/samplingnearest%28%29.md): Create an image by changing the receiver’s sample mode to nearest neighbor.
- [samplingLinear()](ciimage/samplinglinear%28%29.md): Create an image by changing the receiver’s sample mode to bilinear interpolation.

### Accessing Original Image Content

- [cgImage](ciimage/cgimage.md): The CoreGraphics image object this image was created from, if applicable.
- [pixelBuffer](ciimage/pixelbuffer.md): The CoreVideo pixel buffer this image was created from, if applicable.
- [depthData](ciimage/depthdata.md): Depth data associated with the image.
- [portraitEffectsMatte](ciimage/portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](ciimage/semanticsegmentationmatte.md)

### Image Dictionary Keys

Constants used as keys in the options dictionary when initializing an image.

- [CIImageOption](ciimageoption.md)

### AutoAdjustment Keys

Constants used as keys in the options dictionary for the [autoAdjustmentFilters(options:)](ciimage/autoadjustmentfilters%28options_%29.md) method.

- [CIImageAutoAdjustmentOption](ciimageautoadjustmentoption.md)

### Deprecated

- [init(cgLayer:)](ciimage/init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [init(cgLayer:options:)](ciimage/init%28cglayer_options_%29-3p3l3.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object, using the specified options.
- [init(texture:size:flipped:colorSpace:)](ciimage/init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [init(texture:size:flipped:options:)](ciimage/init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [init(ioSurface:plane:format:options:)](ciimage/init%28iosurface_plane_format_options_%29-93isn.md): Deprecated. Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.
- [textureTarget](ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [textureFormat](ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.

### Instance Properties

- [contentHeadroom](ciimage/contentheadroom.md): Returns the content headroom of the image.
- [isOpaque](ciimage/isopaque.md): Returns YES if the image is known to have and alpha value of `1.0` over the entire image extent.
- [metalTexture](ciimage/metaltexture.md)
- [contentAverageLightLevel](ciimage/contentaveragelightlevel.md): Returns the content average light level of the image.

### Instance Methods

- [applyingGainMap(\_:)](ciimage/applyinggainmap%28__%29.md): Create an image that applies a gain map Core Image image to the received Core Image image.
- [applyingGainMap(\_:headroom:)](ciimage/applyinggainmap%28__headroom_%29.md): Create an image that applies a gain map Core Image image with a specified headroom to the received Core Image image.
- [insertingTiledIntermediate()](ciimage/insertingtiledintermediate%28%29.md): Create an image that inserts a intermediate that is cached in tiles
- [settingContentAverageLightLevel(\_:)](ciimage/settingcontentaveragelightlevel%28__%29.md): Create an image by changing the receiver’s contentAverageLightLevel property.
- [settingContentHeadroom(\_:)](ciimage/settingcontentheadroom%28__%29.md): Create an image by changing the receiver’s contentHeadroom property.

### Initializers

- [init(CGImage:)](ciimage/init%28cgimage_%29-5vlch.md)
- [init(CGImage:)](ciimage/init%28cgimage_%29-8cm8a.md)
- [init(CGImage:options:)](ciimage/init%28cgimage_options_%29-1ksqh.md)
- [init(CGImage:options:)](ciimage/init%28cgimage_options_%29-28wtj.md)
- [init(CGImageSource:index:options:)](ciimage/init%28cgimagesource_index_options_%29-2dium.md)
- [init(CGImageSource:index:options:)](ciimage/init%28cgimagesource_index_options_%29-4b3fz.md)
- [init(CGLayer:)](ciimage/init%28cglayer_%29-3wseb.md): Deprecated.
- [init(CGLayer:)](ciimage/init%28cglayer_%29-8o853.md): Deprecated.
- [init(CGLayer:options:)](ciimage/init%28cglayer_options_%29-34jjk.md): Deprecated.
- [init(CGLayer:options:)](ciimage/init%28cglayer_options_%29-8su8t.md): Deprecated.
- [init(CVImageBuffer:)](ciimage/init%28cvimagebuffer_%29-6k44w.md)
- [init(CVImageBuffer:)](ciimage/init%28cvimagebuffer_%29-9fq4l.md)
- [init(CVImageBuffer:options:)](ciimage/init%28cvimagebuffer_options_%29-79c2d.md)
- [init(CVImageBuffer:options:)](ciimage/init%28cvimagebuffer_options_%29-7g0yo.md)
- [init(CVPixelBuffer:)](ciimage/init%28cvpixelbuffer_%29-1z0mw.md)
- [init(CVPixelBuffer:)](ciimage/init%28cvpixelbuffer_%29-5p2mz.md)
- [init(CVPixelBuffer:options:)](ciimage/init%28cvpixelbuffer_options_%29-6rkzb.md)
- [init(CVPixelBuffer:options:)](ciimage/init%28cvpixelbuffer_options_%29-8i44g.md)
- [init(IOSurface:)](ciimage/init%28iosurface_%29-72me3.md)
- [init(IOSurface:)](ciimage/init%28iosurface_%29-7dwj8.md)
- [init(IOSurface:options:)](ciimage/init%28iosurface_options_%29-4dwl5.md)
- [init(IOSurface:options:)](ciimage/init%28iosurface_options_%29-7qdsg.md)
- [init(IOSurface:plane:format:options:)](ciimage/init%28iosurface_plane_format_options_%29-7k35r.md): Deprecated.
- [init(MTLTexture:options:)](ciimage/init%28mtltexture_options_%29-510vm.md)
- [init(MTLTexture:options:)](ciimage/init%28mtltexture_options_%29-5ou1j.md)
- [init(coder:)](ciimage/init%28coder_%29.md)
- [init(contentsOfURL:)](ciimage/init%28contentsofurl_%29-1e9r3.md)
- [init(contentsOfURL:)](ciimage/init%28contentsofurl_%29-9vlbb.md)
- [init(contentsOfURL:options:)](ciimage/init%28contentsofurl_options_%29-7g3lx.md)
- [init(contentsOfURL:options:)](ciimage/init%28contentsofurl_options_%29-93guu.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md): Apply effects such as sepia tint, highlight strengthening, and scaling to images.
- [CIContext](cicontext.md): The Core Image context class provides an evaluation context for Core Image processing with Metal, OpenGL, or OpenCL.

# CIImage (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A representation of an image to be processed or produced by Core Image filters.

## Declaration

```objectivec
@interface CIImage : NSObject
```

## Mentioned In

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md)
- [Selectively Focusing on an Image](selectively-focusing-on-an-image.md)
- [Customizing Image Transitions](customizing-image-transitions.md)

<a id="overview"></a>

## Overview

You use `CIImage` objects in conjunction with other Core Image classes—such as [CIFilter](cifilter-swift.class.md), [CIContext](cicontext.md), [CIVector](civector.md), and [CIColor](cicolor.md)—to take advantage of the built-in Core Image filters when processing images. You can create `CIImage` objects with data supplied from a variety of sources, including Quartz 2D images, Core Video image buffers ([CVImageBufferRef](../corevideo/cvimagebuffer.md)), URL-based objects, and `NSData` objects.

Although a `CIImage` object has image data associated with it, it is not an image. You can think of a `CIImage` object as an image “recipe.” A `CIImage` object has all the information necessary to produce an image, but Core Image doesn’t actually render an image until it is told to do so. This lazy evaluation allows Core Image to operate as efficiently as possible. To show a `CIImage` object as an on-screen image, you can display it as a [UIImage](../uikit/uiimage.md) in [UIImageView](../uikit/uiimageview.md):

**Swift**

```swift
guard let imageURL = Bundle.main.url(forResource: "YourJPEGName", withExtension: "JPG") else {
    print("Could not find image")
    return
}
guard let let ciImage = CIImage(contentsOf: imageURL) else {
    print("Could not create CIImage")
    return
}
let uiImage = UIImage(ciImage: ciImage)
let imageView = UIImageView(image: uiImage)    
self.view.addSubview(imageView)
```

**Objective-C**

```objc
NSURL* imageURL = [[NSBundle mainBundle] URLForResource:@"YourJPEGName" withExtension:@"JPG"];
CIImage* ciImage = [CIImage imageWithContentsOfURL:imageURL];
UIImage* uiImage = [UIImage imageWithCIImage:ciImage];
UIImageView* imageView = [[UIImageView alloc] initWithImage:uiImage];
[self.view addSubview:imageView];
```

`CIContext`  and `CIImage` objects are immutable, which means each can be shared safely among threads. Multiple threads can use the same GPU or CPU `CIContext` object to render `CIImage` objects.  However, this is not the case for `CIFilter` objects, which are mutable. A `CIFilter` object cannot be shared safely among threads.  If you app is multithreaded, each thread must create its own `CIFilter` objects. Otherwise, your app could behave unexpectedly.

Core Image also provides auto-adjustment methods. These methods analyze an image for common deficiencies and return a set of filters to correct those deficiencies. The filters are preset with values for improving image quality by altering values for skin tones, saturation, contrast, and shadows and for removing red-eye or other artifacts caused by flash. (See Getting Autoadjustment Filters.)

For a discussion of all the methods you can use to create `CIImage` objects on iOS and macOS, see [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185).

## Topics

### Creating an Image

- [emptyImage](ciimage/empty%28%29.md): Creates and returns an empty image object.
- [initWithImage:](ciimage/init%28image_%29.md): Initializes an image object with the specified UIKit image object.
- [initWithImage:options:](ciimage/init%28image_options_%29.md): Initializes an image object with the specified UIKit image object, using the specified options.
- [initWithContentsOfURL:](ciimage/init%28contentsof_%29.md): Initializes an image object by reading an image from a URL.
- [imageWithContentsOfURL:](ciimage/imagewithcontentsofurl_.md): Creates and returns an image object from the contents of a file.
- [initWithContentsOfURL:options:](ciimage/init%28contentsof_options_%29.md): Initializes an image object by reading an image from a URL, using the specified options.
- [imageWithContentsOfURL:options:](ciimage/imagewithcontentsofurl_options_.md): Creates and returns an image object from the contents of a file, using the specified options.
- [imageWithCGImage:](ciimage/imagewithcgimage_.md): Creates and returns an image object from a Quartz 2D image.
- [initWithCGImage:](ciimage/init%28cgimage_%29-2kvvb.md): Initializes an image object with a Quartz 2D image.
- [imageWithCGImage:options:](ciimage/imagewithcgimage_options_.md): Creates and returns an image object from a Quartz 2D image using the specified options.
- [initWithCGImage:options:](ciimage/init%28cgimage_options_%29-8663h.md): Initializes an image object with a Quartz 2D image, using the specified options.
- [imageWithCGImageSource:index:options:](ciimage/imagewithcgimagesource_index_options_.md)
- [initWithCGImageSource:index:options:](ciimage/init%28cgimagesource_index_options_%29-e2bz.md)
- [imageWithData:](ciimage/imagewithdata_.md): Creates and returns an image object initialized with the supplied image data.
- [initWithData:](ciimage/init%28data_%29.md): Initializes an image object with the supplied image data.
- [imageWithData:options:](ciimage/imagewithdata_options_.md): Creates and returns an image object initialized with the supplied image data, using the specified options.
- [initWithData:options:](ciimage/init%28data_options_%29.md): Initializes an image object with the supplied image data, using the specified options.
- [imageWithBitmapData:bytesPerRow:size:format:colorSpace:](ciimage/imagewithbitmapdata_bytesperrow_size_format_colorspace_.md): Creates and returns an image object from bitmap data.
- [initWithBitmapData:bytesPerRow:size:format:colorSpace:](ciimage/init%28bitmapdata_bytesperrow_size_format_colorspace_%29.md): Initializes an image object with bitmap data.
- [initWithBitmapImageRep:](ciimage/init%28bitmapimagerep_%29.md): Initializes an image object with the specified bitmap image representation.
- [imageWithImageProvider:size::format:colorSpace:options:](ciimage/imagewithimageprovider_size__format_colorspace_options_.md): Create an image object based on pixels from an image provider object.
- [initWithImageProvider:size::format:colorSpace:options:](ciimage/init%28imageprovider_size___format_colorspace_options_%29.md): Initializes an image object based on pixels from an image provider object.
- [imageWithDepthData:](ciimage/imagewithdepthdata_.md)
- [initWithDepthData:](ciimage/init%28depthdata_%29.md)
- [imageWithDepthData:options:](ciimage/imagewithdepthdata_options_.md)
- [initWithDepthData:options:](ciimage/init%28depthdata_options_%29.md)
- [imageWithPortaitEffectsMatte:](ciimage/imagewithportaiteffectsmatte_.md)
- [initWithPortaitEffectsMatte:](ciimage/init%28portaiteffectsmatte_%29.md)
- [imageWithPortaitEffectsMatte:options:](ciimage/imagewithportaiteffectsmatte_options_.md)
- [initWithPortaitEffectsMatte:options:](ciimage/init%28portaiteffectsmatte_options_%29.md)
- [imageWithSemanticSegmentationMatte:](ciimage/imagewithsemanticsegmentationmatte_.md)
- [initWithSemanticSegmentationMatte:](ciimage/init%28semanticsegmentationmatte_%29.md)
- [imageWithSemanticSegmentationMatte:options:](ciimage/imagewithsemanticsegmentationmatte_options_.md)
- [initWithSemanticSegmentationMatte:options:](ciimage/init%28semanticsegmentationmatte_options_%29.md)
- [imageWithCVImageBuffer:](ciimage/imagewithcvimagebuffer_.md): Creates and returns an image object from the contents of `CVImageBuffer` object.
- [initWithCVImageBuffer:](ciimage/init%28cvimagebuffer_%29-7wmzq.md): Initializes an image object from the contents of a Core Video image buffer.
- [imageWithCVImageBuffer:options:](ciimage/imagewithcvimagebuffer_options_.md): Creates and returns an image object from the contents of `CVImageBuffer` object, using the specified options.
- [initWithCVImageBuffer:options:](ciimage/init%28cvimagebuffer_options_%29-8upim.md): Initializes an image object from the contents of a Core Video image buffer, using the specified options.
- [imageWithCVPixelBuffer:](ciimage/imagewithcvpixelbuffer_.md): Creates and returns an image object from the contents of `CVPixelBuffer` object.
- [initWithCVPixelBuffer:](ciimage/init%28cvpixelbuffer_%29-3wng7.md): Initializes an image object from the contents of a Core Video pixel buffer.
- [imageWithCVPixelBuffer:options:](ciimage/imagewithcvpixelbuffer_options_.md): Creates and returns an image object from the contents of `CVPixelBuffer` object, using the specified options.
- [initWithCVPixelBuffer:options:](ciimage/init%28cvpixelbuffer_options_%29-9x2pz.md): Initializes an image object from the contents of a Core Video pixel buffer using the specified options.
- [imageWithMTLTexture:options:](ciimage/imagewithmtltexture_options_.md): Creates and returns an image object with data supplied by a Metal texture.
- [initWithMTLTexture:options:](ciimage/init%28mtltexture_options_%29-67uvj.md): Initializes an image object with data supplied by a Metal texture.
- [imageWithIOSurface:](ciimage/imagewithiosurface_.md): Creates and returns an image from the contents of an IOSurface.
- [initWithIOSurface:](ciimage/init%28iosurface_%29-5e9yc.md): Initializes an image with the contents of an IOSurface.
- [initWithIOSurface:options:](ciimage/init%28iosurface_options_%29-48cta.md): Initializes, using the specified options, an image with the contents of an IOSurface.

### Creating an Image by Modifying an Existing Image

- [imageByApplyingFilter:withInputParameters:](ciimage/applyingfilter%28__parameters_%29.md): Returns a new image created by applying a filter to the original image with the specified name and parameters.
- [imageByApplyingFilter:](ciimage/applyingfilter%28__%29.md): Applies the filter to an image and returns the output.
- [imageByApplyingTransform:](ciimage/transformed%28by_%29.md): Returns a new image that represents the original image after applying an affine transform.
- [imageByApplyingTransform:highQualityDownsample:](ciimage/transformed%28by_highqualitydownsample_%29.md)
- [imageByCroppingToRect:](ciimage/cropped%28to_%29.md): Returns a new image with a cropped portion of the original image.
- [imageByApplyingOrientation:](ciimage/oriented%28forexiforientation_%29.md): Returns a new image created by transforming the original image to the specified EXIF orientation.
- [imageByClampingToExtent](ciimage/clampedtoextent%28%29.md): Returns a new image created by making the pixel colors along its edges extend infinitely in all directions.
- [imageByClampingToRect:](ciimage/clamped%28to_%29.md): Returns a new image created by cropping to a specified area, then making the pixel colors along the edges of the cropped image extend infinitely in all directions.
- [imageByCompositingOverImage:](ciimage/composited%28over_%29.md): Returns a new image created by compositing the original image over the specified destination image.
- [imageByConvertingWorkingSpaceToLab](ciimage/convertingworkingspacetolab%28%29.md)
- [imageByConvertingLabToWorkingSpace](ciimage/convertinglabtoworkingspace%28%29.md)
- [imageByColorMatchingColorSpaceToWorkingSpace:](ciimage/matchedtoworkingspace%28from_%29.md): Returns a new image created by color matching from the specified color space to the context’s working color space.
- [imageByColorMatchingWorkingSpaceToColorSpace:](ciimage/matchedfromworkingspace%28to_%29.md): Returns a new image created by color matching from the context’s working color space to the specified color space.
- [imageByPremultiplyingAlpha](ciimage/premultiplyingalpha%28%29.md): Returns a new image created by multiplying the image’s RGB values by its alpha values.
- [imageByUnpremultiplyingAlpha](ciimage/unpremultiplyingalpha%28%29.md): Returns a new image created by dividing the image’s RGB values by its alpha values.
- [imageBySettingAlphaOneInExtent:](ciimage/settingalphaone%28in_%29.md): Returns a new image created by setting all alpha values to 1.0 within the specified rectangle and to 0.0 outside of that area.
- [imageByApplyingGaussianBlurWithSigma:](ciimage/applyinggaussianblur%28sigma_%29.md): Create an image by applying a gaussian blur to the receiver.
- [imageBySettingProperties:](ciimage/settingproperties%28__%29.md): Return a new image by changing the receiver’s metadata properties.
- [imageByInsertingIntermediate](ciimage/insertingintermediate%28%29.md): Create an image that inserts a intermediate that is cacheable
- [imageByInsertingIntermediate:](ciimage/insertingintermediate%28cache_%29.md): Create an image that inserts a intermediate that is cacheable.

### Creating Solid Colors

- [initWithColor:](ciimage/init%28color_%29.md): Initializes an image of infinite extent whose entire content is the specified color.
- [imageWithColor:](ciimage/imagewithcolor_.md): Creates and returns an image of infinite extent whose entire content is the specified color.
- [blackImage](ciimage/black.md)
- [blueImage](ciimage/blue.md)
- [clearImage](ciimage/clear.md)
- [cyanImage](ciimage/cyan.md)
- [grayImage](ciimage/gray.md)
- [greenImage](ciimage/green.md)
- [magentaImage](ciimage/magenta.md)
- [redImage](ciimage/red.md)
- [whiteImage](ciimage/white.md)
- [yellowImage](ciimage/yellow.md)

### Getting Image Information

- [definition](ciimage/definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](ciimage/extent.md): A rectangle that specifies the extent of the image.
- [properties](ciimage/properties.md): Returns the metadata properties dictionary of the image.
- [url](ciimage/url.md): The URL from which the image was loaded.
- [colorSpace](ciimage/colorspace.md): The color space of the image.
- [imageTransformForOrientation:](ciimage/orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.

### Drawing Images

- [drawAtPoint:fromRect:operation:fraction:](ciimage/draw%28at_from_operation_fraction_%29.md): Draws all or part of the image at the specified point in the current coordinate system.
- [drawInRect:fromRect:operation:fraction:](ciimage/draw%28in_from_operation_fraction_%29.md): Draws all or part of the image in the specified rectangle in the current coordinate system

### Getting Autoadjustment Filters

- [autoAdjustmentFilters](ciimage/autoadjustmentfilters%28%29.md): Returns all possible automatically selected and configured filters for adjusting the image.
- [autoAdjustmentFiltersWithOptions:](ciimage/autoadjustmentfilters%28options_%29.md): Returns a subset of automatically selected and configured filters for adjusting the image.
- [Autoadjustment Keys](autoadjustment-keys.md): Constants used as keys in the options dictionary for the [autoAdjustmentFiltersWithOptions:](ciimage/autoadjustmentfilters%28options_%29.md) method.

### Working with Filter Regions of Interest

- [regionOfInterestForImage:inRect:](ciimage/regionofinterest%28for_in_%29.md): Returns the region of interest for the filter chain that generates the image.

### Working with Orientation

- [imageByApplyingCGOrientation:](ciimage/oriented%28__%29.md): Transforms the original image by a given orientation.
- [imageTransformForCGOrientation:](ciimage/orientationtransform%28for_%29.md): The affine transform for changing the image to the given orientation.

### Sampling the Image

- [imageBySamplingNearest](ciimage/samplingnearest%28%29.md): Create an image by changing the receiver’s sample mode to nearest neighbor.
- [imageBySamplingLinear](ciimage/samplinglinear%28%29.md): Create an image by changing the receiver’s sample mode to bilinear interpolation.

### Accessing Original Image Content

- [CGImage](ciimage/cgimage.md): The CoreGraphics image object this image was created from, if applicable.
- [pixelBuffer](ciimage/pixelbuffer.md): The CoreVideo pixel buffer this image was created from, if applicable.
- [depthData](ciimage/depthdata.md): Depth data associated with the image.
- [portraitEffectsMatte](ciimage/portraiteffectsmatte.md): The portrait effects matte associated with the image.
- [semanticSegmentationMatte](ciimage/semanticsegmentationmatte.md)

### Image Dictionary Keys

Constants used as keys in the options dictionary when initializing an image.

- [CIImageOption](ciimageoption.md)

### AutoAdjustment Keys

Constants used as keys in the options dictionary for the [autoAdjustmentFiltersWithOptions:](ciimage/autoadjustmentfilters%28options_%29.md) method.

- [CIImageAutoAdjustmentOption](ciimageautoadjustmentoption.md)

### Deprecated

- [imageWithCGLayer:](ciimage/imagewithcglayer_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object.
- [imageWithCGLayer:options:](ciimage/imagewithcglayer_options_.md): Deprecated. Creates and returns an image object from the contents supplied by a `CGLayer` object, using the specified options.
- [initWithCGLayer:](ciimage/init%28cglayer_%29-2lgo6.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object.
- [initWithCGLayer:options:](ciimage/init%28cglayer_options_%29-3p3l3.md): Deprecated. Initializes an image object from the contents supplied by a CGLayer object, using the specified options.
- [imageWithTexture:size:flipped:colorSpace:](ciimage/imagewithtexture_size_flipped_colorspace_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [imageWithTexture:size:flipped:options:](ciimage/imagewithtexture_size_flipped_options_.md): Deprecated. Creates and returns an image object initialized with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:colorSpace:](ciimage/init%28texture_size_flipped_colorspace_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [initWithTexture:size:flipped:options:](ciimage/init%28texture_size_flipped_options_%29.md): Deprecated. Initializes an image object with data supplied by an OpenGL texture.
- [imageWithIOSurface:options:](ciimage/imagewithiosurface_options_.md): Creates, using the specified options, and returns an image from the contents of an IOSurface.
- [initWithIOSurface:plane:format:options:](ciimage/init%28iosurface_plane_format_options_%29-93isn.md): Deprecated. Initializes, using the specified format and options, an image with the contents of a specific data plane in an IOSurface.
- [kCIImageTextureTarget](ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [kCIImageTextureFormat](ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.

### Instance Properties

- [contentHeadroom](ciimage/contentheadroom.md): Returns the content headroom of the image.
- [opaque](ciimage/isopaque.md): Returns YES if the image is known to have and alpha value of `1.0` over the entire image extent.
- [metalTexture](ciimage/metaltexture.md)
- [contentAverageLightLevel](ciimage/contentaveragelightlevel.md): Returns the content average light level of the image.

### Instance Methods

- [imageByApplyingGainMap:](ciimage/applyinggainmap%28__%29.md): Create an image that applies a gain map Core Image image to the received Core Image image.
- [imageByApplyingGainMap:headroom:](ciimage/applyinggainmap%28__headroom_%29.md): Create an image that applies a gain map Core Image image with a specified headroom to the received Core Image image.
- [imageByInsertingTiledIntermediate](ciimage/insertingtiledintermediate%28%29.md): Create an image that inserts a intermediate that is cached in tiles
- [imageBySettingContentAverageLightLevel:](ciimage/settingcontentaveragelightlevel%28__%29.md): Create an image by changing the receiver’s contentAverageLightLevel property.
- [imageBySettingContentHeadroom:](ciimage/settingcontentheadroom%28__%29.md): Create an image by changing the receiver’s contentHeadroom property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AttachableAsImage](https://developer.apple.com/documentation/testing/attachableasimage)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Essentials

- [Processing an Image Using Built-in Filters](processing-an-image-using-built-in-filters.md): Apply effects such as sepia tint, highlight strengthening, and scaling to images.
- [CIContext](cicontext.md): The Core Image context class provides an evaluation context for Core Image processing with Metal, OpenGL, or OpenCL.
