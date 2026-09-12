> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocodeckey](https://developer.apple.com/documentation/avfoundation/avvideocodeckey)

# AVVideoCodecKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key to access the name of the codec for compressing video.

## Declaration

```swift
let AVVideoCodecKey: String
```

## Mentioned In

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of [NSString](../foundation/nsstring.md), equivalent to [CMVideoCodecType](../coremedia/cmvideocodectype.md). Use this key to set the video compression format to H.264, HEVC, or JPEG, depending on the video codec types available in [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md). Check available video codec types by consulting [availableVideoCodecTypes](avcapturemoviefileoutput/availablevideocodectypes.md).

## See Also

### Video codecs

- [AVVideoCodecType](avvideocodectype.md): A set of constants that describe the codecs the system supports for video capture.

# AVVideoCodecKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key to access the name of the codec for compressing video.

## Declaration

```objectivec
extern NSString * const AVVideoCodecKey;
```

## Mentioned In

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of [NSString](../foundation/nsstring.md), equivalent to [CMVideoCodecType](../coremedia/cmvideocodectype.md). Use this key to set the video compression format to H.264, HEVC, or JPEG, depending on the video codec types available in [AVCaptureMovieFileOutput](avcapturemoviefileoutput.md). Check available video codec types by consulting [availableVideoCodecTypes](avcapturemoviefileoutput/availablevideocodectypes.md).

## See Also

### Video codecs

- [AVVideoCodecType](avvideocodectype.md): A set of constants that describe the codecs the system supports for video capture.
