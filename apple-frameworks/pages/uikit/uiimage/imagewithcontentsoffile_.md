> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/imagewithcontentsoffile:](https://developer.apple.com/documentation/uikit/uiimage/imagewithcontentsoffile:)

# imageWithContentsOfFile:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns an image object by loading the image data from the file at the specified path.

## Declaration

```objectivec
+ (UIImage *) imageWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: The full or partial path to the file.

<a id="return-value"></a>

## Return Value

A new image object for the specified file, or `nil` if the method could not initialize the image from the specified file.

<a id="Discussion"></a>

## Discussion

This method does not cache the image object.

## See Also

### Creating and initializing image objects

- [imageWithData:](imagewithdata_.md): Creates and returns an image object that uses the specified image data.
- [imageWithData:scale:](imagewithdata_scale_.md): Creates and returns an image object that uses the specified image data and scale factor.
- [imageWithCGImage:](imagewithcgimage_.md): Creates and returns an image object representing the specified Quartz image.
- [imageWithCGImage:scale:orientation:](imagewithcgimage_scale_orientation_.md): Creates and returns an image object with the specified scale and orientation factors.
- [imageWithCIImage:](imagewithciimage_.md): Creates and returns an image object that contains a Core Image object.
- [imageWithCIImage:scale:orientation:](imagewithciimage_scale_orientation_.md): Creates and returns an image object based on a Core Image object and the specified attributes.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes and returns the image object with the contents of the specified file.
- [initWithData:](init%28data_%29.md): Initializes and returns the image object with the specified data.
- [initWithData:scale:](init%28data_scale_%29.md): Initializes and returns the image object with the specified data and scale factor.
- [initWithCGImage:](init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [initWithCGImage:scale:orientation:](init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [initWithCIImage:](init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [initWithCIImage:scale:orientation:](init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](../uiimagereader-c.class.md)
- [UIImageReaderConfiguration](../uiimagereaderconfiguration.md): The properties that a reader uses to decode images.
