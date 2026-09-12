> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocodectype](https://developer.apple.com/documentation/avfoundation/avvideocodectype)

# AVVideoCodecType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of constants that describe the codecs the system supports for video capture.

## Declaration

```swift
struct AVVideoCodecType
```

## Mentioned In

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md)

## Topics

### Video codecs

- [h264](avvideocodectype/h264.md): The H.264 video codec.
- [hevc](avvideocodectype/hevc.md): The HEVC video codec.
- [hevcWithAlpha](avvideocodectype/hevcwithalpha.md): The HEVC video codec that supports an alpha channel.
- [jpeg](avvideocodectype/jpeg.md): The JPEG video codec.
- [JPEGXL](avvideocodectype/jpegxl.md): The JPEG XL video codec.
- [proRes422](avvideocodectype/prores422.md): The Apple ProRes 422 video codec.
- [proRes422LT](avvideocodectype/prores422lt.md): The Apple ProRes 422 LT video codec.
- [proRes422HQ](avvideocodectype/prores422hq.md): The Apple ProRes 422 HQ video codec.
- [proRes422Proxy](avvideocodectype/prores422proxy.md): The Apple ProRes 422 Proxy video codec.
- [proRes4444](avvideocodectype/prores4444.md): The Apple ProRes 4444 video codec.
- [proResRAW](avvideocodectype/proresraw.md)
- [proResRAWHQ](avvideocodectype/proresrawhq.md)
- [appleProRes4444XQ](avvideocodectype/appleprores4444xq.md): The Apple ProRes 4444 XQ video codec.

### Deprecated

- [AVVideoCodecH264](avvideocodech264.md): Deprecated. A key to access the name of the H.264 codec for compressing video.
- [AVVideoCodecHEVC](avvideocodechevc.md): Deprecated. A key to access the name of the HEVC codec used to encode the video.
- [AVVideoCodecJPEG](avvideocodecjpeg.md): Deprecated. A key to access the name of the JPEG codec for compressing video.
- [AVVideoCodecAppleProRes422](avvideocodecappleprores422.md): Deprecated. A key to access the name of the Apple ProRes422 codec used to encode the video.
- [AVVideoCodecAppleProRes4444](avvideocodecappleprores4444.md): Deprecated. A key to access the name of the Apple ProRes4444 codec used to encode the video.

### Initializers

- [init(rawValue:)](avvideocodectype/init%28rawvalue_%29.md): Creates a codec type from its raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Video codecs

- [AVVideoCodecKey](avvideocodeckey.md): A key to access the name of the codec for compressing video.

# AVVideoCodecType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of constants that describe the codecs the system supports for video capture.

## Declaration

```objectivec
typedef NSString * AVVideoCodecType;
```

## Mentioned In

- [Recording movies in alternative formats](recording-movies-in-alternative-formats.md)

## Topics

### Video codecs

- [AVVideoCodecTypeH264](avvideocodectype/h264.md): The H.264 video codec.
- [AVVideoCodecTypeHEVC](avvideocodectype/hevc.md): The HEVC video codec.
- [AVVideoCodecTypeHEVCWithAlpha](avvideocodectype/hevcwithalpha.md): The HEVC video codec that supports an alpha channel.
- [AVVideoCodecTypeJPEG](avvideocodectype/jpeg.md): The JPEG video codec.
- [AVVideoCodecTypeJPEGXL](avvideocodectype/jpegxl.md): The JPEG XL video codec.
- [AVVideoCodecTypeAppleProRes422](avvideocodectype/prores422.md): The Apple ProRes 422 video codec.
- [AVVideoCodecTypeAppleProRes422LT](avvideocodectype/prores422lt.md): The Apple ProRes 422 LT video codec.
- [AVVideoCodecTypeAppleProRes422HQ](avvideocodectype/prores422hq.md): The Apple ProRes 422 HQ video codec.
- [AVVideoCodecTypeAppleProRes422Proxy](avvideocodectype/prores422proxy.md): The Apple ProRes 422 Proxy video codec.
- [AVVideoCodecTypeAppleProRes4444](avvideocodectype/prores4444.md): The Apple ProRes 4444 video codec.
- [AVVideoCodecTypeAppleProResRAW](avvideocodectype/proresraw.md)
- [AVVideoCodecTypeAppleProResRAWHQ](avvideocodectype/proresrawhq.md)
- [AVVideoCodecTypeAppleProRes4444XQ](avvideocodectype/appleprores4444xq.md): The Apple ProRes 4444 XQ video codec.

### Deprecated

- [AVVideoCodecH264](avvideocodech264.md): Deprecated. A key to access the name of the H.264 codec for compressing video.
- [AVVideoCodecHEVC](avvideocodechevc.md): Deprecated. A key to access the name of the HEVC codec used to encode the video.
- [AVVideoCodecJPEG](avvideocodecjpeg.md): Deprecated. A key to access the name of the JPEG codec for compressing video.
- [AVVideoCodecAppleProRes422](avvideocodecappleprores422.md): Deprecated. A key to access the name of the Apple ProRes422 codec used to encode the video.
- [AVVideoCodecAppleProRes4444](avvideocodecappleprores4444.md): Deprecated. A key to access the name of the Apple ProRes4444 codec used to encode the video.

## See Also

### Video codecs

- [AVVideoCodecKey](avvideocodeckey.md): A key to access the name of the codec for compressing video.
