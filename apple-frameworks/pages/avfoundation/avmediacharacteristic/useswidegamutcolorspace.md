> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/useswidegamutcolorspace](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/useswidegamutcolorspace)

# usesWideGamutColorSpace (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A media characteristic that indicates that a track uses a wide-gamut color space.

## Declaration

```swift
static let usesWideGamutColorSpace: AVMediaCharacteristic
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

Tracks that use a wide-gamut color space may use colors that can’t be accurately represented in standard RGB mode.

## See Also

### Visual

- [visual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [containsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [containsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [frameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [containsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [carriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [indicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [indicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.

# AVMediaCharacteristicUsesWideGamutColorSpace (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A media characteristic that indicates that a track uses a wide-gamut color space.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicUsesWideGamutColorSpace;
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

Tracks that use a wide-gamut color space may use colors that can’t be accurately represented in standard RGB mode.

## See Also

### Visual

- [AVMediaCharacteristicVisual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [AVMediaCharacteristicContainsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [AVMediaCharacteristicContainsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [AVMediaCharacteristicFrameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [AVMediaCharacteristicContainsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [AVMediaCharacteristicCarriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [AVMediaCharacteristicIndicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [AVMediaCharacteristicIndicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.
