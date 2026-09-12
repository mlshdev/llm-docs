> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/imagewithciimage:scale:orientation:](https://developer.apple.com/documentation/uikit/uiimage/imagewithciimage:scale:orientation:)

# imageWithCIImage:scale:orientation:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns an image object based on a Core Image object and the specified attributes.

## Declaration

```objectivec
+ (UIImage *) imageWithCIImage:(CIImage *) ciImage scale:(CGFloat) scale orientation:(UIImageOrientation) orientation;
```

## Parameters

- `ciImage`: The Core Image object to encapsulate.
- `scale`: The scale factor to use when interpreting the image data. Specifying a scale factor of 1.0 results in an image whose size matches the pixel-based dimensions of the image. Applying a different scale factor changes the size of the image as reported by the [size](size.md) property.
- `orientation`: The orientation of the image data. You can use this parameter to specify any rotation factors applied to the image.

<a id="return-value"></a>

## Return Value

A new image object.

## See Also

### Creating and initializing image objects

- [imageWithContentsOfFile:](imagewithcontentsoffile_.md): Creates and returns an image object by loading the image data from the file at the specified path.
- [imageWithData:](imagewithdata_.md): Creates and returns an image object that uses the specified image data.
- [imageWithData:scale:](imagewithdata_scale_.md): Creates and returns an image object that uses the specified image data and scale factor.
- [imageWithCGImage:](imagewithcgimage_.md): Creates and returns an image object representing the specified Quartz image.
- [imageWithCGImage:scale:orientation:](imagewithcgimage_scale_orientation_.md): Creates and returns an image object with the specified scale and orientation factors.
- [imageWithCIImage:](imagewithciimage_.md): Creates and returns an image object that contains a Core Image object.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes and returns the image object with the contents of the specified file.
- [initWithData:](init%28data_%29.md): Initializes and returns the image object with the specified data.
- [initWithData:scale:](init%28data_scale_%29.md): Initializes and returns the image object with the specified data and scale factor.
- [initWithCGImage:](init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [initWithCGImage:scale:orientation:](init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [initWithCIImage:](init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [initWithCIImage:scale:orientation:](init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](../uiimagereader-c.class.md)
- [UIImageReaderConfiguration](../uiimagereaderconfiguration.md): The properties that a reader uses to decode images.
