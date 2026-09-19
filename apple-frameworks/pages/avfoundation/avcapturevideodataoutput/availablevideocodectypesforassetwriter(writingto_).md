> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/availablevideocodectypesforassetwriter(writingto:)

# availableVideoCodecTypesForAssetWriter(writingTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The video codecs that the output supports for writing video to the output file.

## Declaration

```swift
func availableVideoCodecTypesForAssetWriter(writingTo outputFileType: AVFileType) -> [AVVideoCodecType]
```

## Parameters

- `outputFileType`: The UTI of the output file type.

<a id="return-value"></a>

## Return Value

An array of video codecs.

## See Also

### Retrieving supported video types

- [availableVideoPixelFormatTypes](availablevideopixelformattypes.md): The video pixel formats the output supports.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs that the output supports.
- [AVVideoCodecType](../avvideocodectype.md): A set of constants that describe the codecs the system supports for video capture.

# availableVideoCodecTypesForAssetWriterWithOutputFileType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The video codecs that the output supports for writing video to the output file.

## Declaration

```objectivec
- (NSArray<NSString *> *) availableVideoCodecTypesForAssetWriterWithOutputFileType:(AVFileType) outputFileType;
```

## Parameters

- `outputFileType`: The UTI of the output file type.

<a id="return-value"></a>

## Return Value

An array of video codecs.

## See Also

### Retrieving supported video types

- [availableVideoCVPixelFormatTypes](availablevideocvpixelformattypes.md): The video pixel formats the output supports.
- [availableVideoCodecTypes](availablevideocodectypes.md): The video codecs that the output supports.
- [AVVideoCodecType](../avvideocodectype.md): A set of constants that describe the codecs the system supports for video capture.
