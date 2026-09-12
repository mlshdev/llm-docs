> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/indicatesnonrectilinearprojection](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/indicatesnonrectilinearprojection)

# indicatesNonRectilinearProjection (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A media characteristic that indicates the video track carries information related to how it should be projected for display.

## Declaration

```swift
static let indicatesNonRectilinearProjection: AVMediaCharacteristic
```

<a id="discussion"></a>

## Discussion

This media characteristic is currently synthesized if the CMVideoFormatDescription specifies a non-rectilinear projection. To determine which kind of projection is indicated, look for the format description extension with key kCMFormatDescriptionExtension_ProjectionKind. The value of this characteristic is @“public.indicates-non-rectilinear-projection”. Note for content authors: the presence of this characteristic is strictly inferred from the format description of the associated track.

## See Also

### Visual

- [visual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [containsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [containsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [frameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [usesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [containsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [carriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [indicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.

# AVMediaCharacteristicIndicatesNonRectilinearProjection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A media characteristic that indicates the video track carries information related to how it should be projected for display.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicIndicatesNonRectilinearProjection;
```

<a id="discussion"></a>

## Discussion

This media characteristic is currently synthesized if the CMVideoFormatDescription specifies a non-rectilinear projection. To determine which kind of projection is indicated, look for the format description extension with key kCMFormatDescriptionExtension_ProjectionKind. The value of this characteristic is @“public.indicates-non-rectilinear-projection”. Note for content authors: the presence of this characteristic is strictly inferred from the format description of the associated track.

## See Also

### Visual

- [AVMediaCharacteristicVisual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [AVMediaCharacteristicContainsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [AVMediaCharacteristicContainsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [AVMediaCharacteristicFrameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [AVMediaCharacteristicUsesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [AVMediaCharacteristicContainsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [AVMediaCharacteristicCarriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [AVMediaCharacteristicIndicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
