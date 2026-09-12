> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/containshdrvideo](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/containshdrvideo)

# containsHDRVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A media characteristic that indicates that a track contains HDR video.

## Declaration

```swift
static let containsHDRVideo: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

HDR video contains extended dynamic range that requires explicit support when compositing. The system infers this characteristic from the format description of the associated track.

The value of this characteristic is `public.contains-hdr-video`.

## See Also

### Visual

- [visual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [containsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [frameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [usesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [containsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [carriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [indicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [indicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.

# AVMediaCharacteristicContainsHDRVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A media characteristic that indicates that a track contains HDR video.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicContainsHDRVideo;
```

<a id="Discussion"></a>

## Discussion

HDR video contains extended dynamic range that requires explicit support when compositing. The system infers this characteristic from the format description of the associated track.

The value of this characteristic is `public.contains-hdr-video`.

## See Also

### Visual

- [AVMediaCharacteristicVisual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [AVMediaCharacteristicContainsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [AVMediaCharacteristicFrameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [AVMediaCharacteristicUsesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [AVMediaCharacteristicContainsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [AVMediaCharacteristicCarriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [AVMediaCharacteristicIndicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [AVMediaCharacteristicIndicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.
