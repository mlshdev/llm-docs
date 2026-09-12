> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/init(contentsoffile:)](https://developer.apple.com/documentation/uikit/uiimage/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes and returns the image object with the contents of the specified file.

## Declaration

```swift
init?(contentsOfFile path: String)
```

## Parameters

- `path`: The path to the file. This path should include the filename extension that identifies the type of the image data.

<a id="return-value"></a>

## Return Value

An initialized `UIImage` object, or `nil` if the method could not find the file or initialize the image from its contents.

<a id="Discussion"></a>

## Discussion

This method loads the image data into memory and marks it as purgeable. If the data is purged and needs to be reloaded, the image object loads that data again from the specified path.

## See Also

### Creating and initializing image objects

- [init(data:)](init%28data_%29.md): Initializes and returns the image object with the specified data.
- [init(data:scale:)](init%28data_scale_%29.md): Initializes and returns the image object with the specified data and scale factor.
- [init(cgImage:)](init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [init(cgImage:scale:orientation:)](init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [init(ciImage:)](init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [init(ciImage:scale:orientation:)](init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](../uiimagereader-swift.struct.md)

# initWithContentsOfFile: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes and returns the image object with the contents of the specified file.

## Declaration

```objectivec
- (instancetype) initWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: The path to the file. This path should include the filename extension that identifies the type of the image data.

<a id="return-value"></a>

## Return Value

An initialized `UIImage` object, or `nil` if the method could not find the file or initialize the image from its contents.

<a id="Discussion"></a>

## Discussion

This method loads the image data into memory and marks it as purgeable. If the data is purged and needs to be reloaded, the image object loads that data again from the specified path.

## See Also

### Creating and initializing image objects

- [imageWithContentsOfFile:](imagewithcontentsoffile_.md): Creates and returns an image object by loading the image data from the file at the specified path.
- [imageWithData:](imagewithdata_.md): Creates and returns an image object that uses the specified image data.
- [imageWithData:scale:](imagewithdata_scale_.md): Creates and returns an image object that uses the specified image data and scale factor.
- [imageWithCGImage:](imagewithcgimage_.md): Creates and returns an image object representing the specified Quartz image.
- [imageWithCGImage:scale:orientation:](imagewithcgimage_scale_orientation_.md): Creates and returns an image object with the specified scale and orientation factors.
- [imageWithCIImage:](imagewithciimage_.md): Creates and returns an image object that contains a Core Image object.
- [imageWithCIImage:scale:orientation:](imagewithciimage_scale_orientation_.md): Creates and returns an image object based on a Core Image object and the specified attributes.
- [initWithData:](init%28data_%29.md): Initializes and returns the image object with the specified data.
- [initWithData:scale:](init%28data_scale_%29.md): Initializes and returns the image object with the specified data and scale factor.
- [initWithCGImage:](init%28cgimage_%29-14qlb.md): Initializes and returns the image object with the specified Quartz image reference.
- [initWithCGImage:scale:orientation:](init%28cgimage_scale_orientation_%29-2ouhh.md): Initializes and returns an image object with the specified scale and orientation factors.
- [initWithCIImage:](init%28ciimage_%29-93vu1.md): Initializes and returns an image object with the specified Core Image object.
- [initWithCIImage:scale:orientation:](init%28ciimage_scale_orientation_%29-9gpyn.md): Initializes and returns an image object with the specified Core Image object and properties.
- [UIImageReader](../uiimagereader-c.class.md)
- [UIImageReaderConfiguration](../uiimagereaderconfiguration.md): The properties that a reader uses to decode images.
