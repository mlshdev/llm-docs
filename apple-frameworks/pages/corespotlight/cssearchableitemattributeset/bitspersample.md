> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/bitspersample](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/bitspersample)

# bitsPerSample (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The number of bits per sample.

## Declaration

```swift
var bitsPerSample: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property can represent the bit depth of an image (such as 8-bit or 16-bit) or the bit depth per audio sample of uncompressed audio data (such as 8, 16, 24, 32, 64, and so on).

## See Also

### Describing images

- [isoSpeed](isospeed.md): The ISO speed setting at the time the camera captured the image.
- [acquisitionMake](acquisitionmake.md): The manufacturer of the device that captured the image.
- [acquisitionModel](acquisitionmodel.md): The model of the device that captured the image.
- [aperture](aperture.md): The size of the lens aperture at the time the camera captured the image, as a log-scale APEX value.
- [cameraOwner](cameraowner.md): The owner of the camera that captured the image.
- [colorSpace](colorspace.md): The color space model the image uses, such as RGB, CMYK, YUV, or YCbCr.
- [flashOn](flashon.md): A value that indicates if the camera used a flash to capture the image.
- [focalLength](focallength.md): The actual focal length of the lens, in millimeters.
- [focalLength35mm](focallength35mm.md): A value that indicates if the focal length is 35mm.
- [layerNames](layernames.md): An array that contains the names of the various layers in the file.
- [lensModel](lensmodel.md): The model of the lens that captured the image.
- [orientation](orientation.md): The orientation of the data.
- [pixelCount](pixelcount.md): The total number of pixels in the image.
- [pixelHeight](pixelheight.md): The height of the item, such as image or video frame height, in pixels.
- [pixelWidth](pixelwidth.md): The width of the item, such as image or video frame width, in pixels.

# bitsPerSample (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The number of bits per sample.

## Declaration

```objectivec
@property (strong, nullable) NSNumber * bitsPerSample;
```

<a id="Discussion"></a>

## Discussion

The value of this property can represent the bit depth of an image (such as 8-bit or 16-bit) or the bit depth per audio sample of uncompressed audio data (such as 8, 16, 24, 32, 64, and so on).

## See Also

### Describing images

- [ISOSpeed](isospeed.md): The ISO speed setting at the time the camera captured the image.
- [acquisitionMake](acquisitionmake.md): The manufacturer of the device that captured the image.
- [acquisitionModel](acquisitionmodel.md): The model of the device that captured the image.
- [aperture](aperture.md): The size of the lens aperture at the time the camera captured the image, as a log-scale APEX value.
- [cameraOwner](cameraowner.md): The owner of the camera that captured the image.
- [colorSpace](colorspace.md): The color space model the image uses, such as RGB, CMYK, YUV, or YCbCr.
- [flashOn](flashon.md): A value that indicates if the camera used a flash to capture the image.
- [focalLength](focallength.md): The actual focal length of the lens, in millimeters.
- [focalLength35mm](focallength35mm.md): A value that indicates if the focal length is 35mm.
- [layerNames](layernames.md): An array that contains the names of the various layers in the file.
- [lensModel](lensmodel.md): The model of the lens that captured the image.
- [orientation](orientation.md): The orientation of the data.
- [pixelCount](pixelcount.md): The total number of pixels in the image.
- [pixelHeight](pixelheight.md): The height of the item, such as image or video frame height, in pixels.
- [pixelWidth](pixelwidth.md): The width of the item, such as image or video frame width, in pixels.
