> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagereaderconfiguration](https://developer.apple.com/documentation/uikit/uiimagereaderconfiguration)

# UIImageReaderConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The properties that a reader uses to decode images.

## Declaration

```objectivec
@interface UIImageReaderConfiguration : NSObject
```

## Topics

### Configuration properties

- [prefersHighDynamicRange](uiimagereaderconfiguration/prefershighdynamicrange.md): A Boolean value that indicates whether the image reader should decode the image as HDR when the type is capable of decoding in either SDR or HDR.
- [preferredThumbnailSize](uiimagereaderconfiguration/preferredthumbnailsize.md): The thumbnail size in pixels that the image reader makes the image.
- [preparesImagesForDisplay](uiimagereaderconfiguration/preparesimagesfordisplay.md): A Boolean value that indicates whether the image reader prepares the image for display.
- [pixelsPerInch](uiimagereaderconfiguration/pixelsperinch.md): The integral scale that the image reader applies to the image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating and initializing image objects

- [imageWithContentsOfFile:](uiimage/imagewithcontentsoffile_.md): Creates and returns an image object by loading the image data from the file at the specified path.
- [imageWithData:](uiimage/imagewithdata_.md): Creates and returns an image object that uses the specified image data.
- [imageWithData:scale:](uiimage/imagewithdata_scale_.md): Creates and returns an image object that uses the specified image data and scale factor.
- [imageWithCGImage:](uiimage/imagewithcgimage_.md): Creates and returns an image object representing the specified Quartz image.
- [imageWithCGImage:scale:orientation:](uiimage/imagewithcgimage_scale_orientation_.md): Creates and returns an image object with the specified scale and orientation factors.
- [imageWithCIImage:](uiimage/imagewithciimage_.md): Creates and returns an image object that contains a Core Image object.
- [imageWithCIImage:scale:orientation:](uiimage/imagewithciimage_scale_orientation_.md): Creates and returns an image object based on a Core Image object and the specified attributes.
- [initWithContentsOfFile:](uiimage/init%28contentsoffile_%29.md): Initializes and returns the image object with the contents of the specified file.
- [initWithData:](uiimage/init%28data_%29.md): Initializes and returns the image object with the specified data.
- [initWithData:scale:](uiimage/init%28data_scale_%29.md): Initializes and returns the image object with the specified data and scale factor.
- [initWithCGImage:](uiimage/init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [initWithCGImage:scale:orientation:](uiimage/init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [initWithCIImage:](uiimage/init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [initWithCIImage:scale:orientation:](uiimage/init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](uiimagereader-c.class.md)
