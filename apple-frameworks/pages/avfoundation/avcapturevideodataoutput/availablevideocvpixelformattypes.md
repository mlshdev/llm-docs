> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/availablevideocvpixelformattypes](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/availablevideocvpixelformattypes)

# availableVideoCVPixelFormatTypes

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The video pixel formats the output supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * availableVideoCVPixelFormatTypes;
```

<a id="Discussion"></a>

## Discussion

This value contains an array of video formats, in unspecified order, that the output supports. You can set the format by specifying it as the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) entry in the output’s [videoSettings](videosettings.md) dictionary.

> **Note**

>  The contents of this list may change if the video capture device’s [activeFormat](../avcapturedevice/activeformat.md) value changes.

## See Also

### Retrieving supported video types

- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs that the output supports.
- [availableVideoCodecTypesForAssetWriterWithOutputFileType:](availablevideocodectypesforassetwriter%28writingto_%29.md): The video codecs that the output supports for writing video to the output file.
- [AVVideoCodecType](../avvideocodectype.md): A set of constants that describe the codecs the system supports for video capture.
