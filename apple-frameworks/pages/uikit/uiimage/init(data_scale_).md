> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/init(data:scale:)](https://developer.apple.com/documentation/uikit/uiimage/init(data:scale:))

# init(data:scale:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes and returns the image object with the specified data and scale factor.

## Declaration

```swift
init?(data: Data, scale: CGFloat)
```

## Parameters

- `data`: The data object containing the image data.
- `scale`: The scale factor to assume when interpreting the image data. Applying a scale factor of 1.0 results in an image whose size matches the pixel-based dimensions of the image. Applying a different scale factor changes the size of the image as reported by the [size](size.md) property.

<a id="return-value"></a>

## Return Value

An initialized `UIImage` object, or `nil` if the method could not initialize the image from the specified data.

<a id="Discussion"></a>

## Discussion

The data in the `data` parameter must be formatted to match the file format of one of the system’s supported image types.

## See Also

### Creating and initializing image objects

- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes and returns the image object with the contents of the specified file.
- [init(data:)](init%28data_%29.md): Initializes and returns the image object with the specified data.
- [init(cgImage:)](init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [init(cgImage:scale:orientation:)](init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [init(ciImage:)](init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [init(ciImage:scale:orientation:)](init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](../uiimagereader-swift.struct.md)

# initWithData:scale: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes and returns the image object with the specified data and scale factor.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data scale:(CGFloat) scale;
```

## Parameters

- `data`: The data object containing the image data.
- `scale`: The scale factor to assume when interpreting the image data. Applying a scale factor of 1.0 results in an image whose size matches the pixel-based dimensions of the image. Applying a different scale factor changes the size of the image as reported by the [size](size.md) property.

<a id="return-value"></a>

## Return Value

An initialized `UIImage` object, or `nil` if the method could not initialize the image from the specified data.

<a id="Discussion"></a>

## Discussion

The data in the `data` parameter must be formatted to match the file format of one of the system’s supported image types.

## See Also

### Creating and initializing image objects

- [imageWithContentsOfFile:](imagewithcontentsoffile_.md): Creates and returns an image object by loading the image data from the file at the specified path.
- [imageWithData:](imagewithdata_.md): Creates and returns an image object that uses the specified image data.
- [imageWithData:scale:](imagewithdata_scale_.md): Creates and returns an image object that uses the specified image data and scale factor.
- [imageWithCGImage:](imagewithcgimage_.md): Creates and returns an image object representing the specified Quartz image.
- [imageWithCGImage:scale:orientation:](imagewithcgimage_scale_orientation_.md): Creates and returns an image object with the specified scale and orientation factors.
- [imageWithCIImage:](imagewithciimage_.md): Creates and returns an image object that contains a Core Image object.
- [imageWithCIImage:scale:orientation:](imagewithciimage_scale_orientation_.md): Creates and returns an image object based on a Core Image object and the specified attributes.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes and returns the image object with the contents of the specified file.
- [initWithData:](init%28data_%29.md): Initializes and returns the image object with the specified data.
- [initWithCGImage:](init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [initWithCGImage:scale:orientation:](init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [initWithCIImage:](init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [initWithCIImage:scale:orientation:](init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](../uiimagereader-c.class.md)
- [UIImageReaderConfiguration](../uiimagereaderconfiguration.md): The properties that a reader uses to decode images.
