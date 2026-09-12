> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/availablevideocodectypes](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/availablevideocodectypes)

# availableVideoCodecTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The video codecs that the output supports.

## Declaration

```swift
var availableVideoCodecTypes: [AVVideoCodecType] { get }
```

<a id="Discussion"></a>

## Discussion

The value contains an array of video codecs that the output supports. Specify the codec it uses by setting a supported value for the [AVVideoCodecKey](../avvideocodeckey.md) entry in its [videoSettings](videosettings.md) dictionary. The first format in the returned list is the most efficient output format.

## See Also

### Retrieving supported video types

- [availableVideoPixelFormatTypes](availablevideopixelformattypes.md): The video pixel formats the output supports.
- [availableVideoCodecTypesForAssetWriter(writingTo:)](availablevideocodectypesforassetwriter%28writingto_%29.md): The video codecs that the output supports for writing video to the output file.
- [AVVideoCodecType](../avvideocodectype.md): A set of constants that describe the codecs the system supports for video capture.

# availableVideoCodecTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The video codecs that the output supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableVideoCodecTypes;
```

<a id="Discussion"></a>

## Discussion

The value contains an array of video codecs that the output supports. Specify the codec it uses by setting a supported value for the [AVVideoCodecKey](../avvideocodeckey.md) entry in its [videoSettings](videosettings.md) dictionary. The first format in the returned list is the most efficient output format.

## See Also

### Retrieving supported video types

- [availableVideoCVPixelFormatTypes](availablevideocvpixelformattypes.md): The video pixel formats the output supports.
- [availableVideoCodecTypesForAssetWriterWithOutputFileType:](availablevideocodectypesforassetwriter%28writingto_%29.md): The video codecs that the output supports for writing video to the output file.
- [AVVideoCodecType](../avvideocodectype.md): A set of constants that describe the codecs the system supports for video capture.
