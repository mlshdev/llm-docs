> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/containsalphachannel](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/containsalphachannel)

# containsAlphaChannel (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A media characteristic that indicates that a track contains an alpha channel.

## Declaration

```swift
static let containsAlphaChannel: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

To determine whether the alpha is straight or pre-multiplied, look for a format description extension with key [kCMFormatDescriptionExtension_AlphaChannelMode](../../coremedia/kcmformatdescriptionextension_alphachannelmode.md).

## See Also

### Visual

- [visual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [containsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [frameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [usesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [containsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [carriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [indicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [indicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.

# AVMediaCharacteristicContainsAlphaChannel (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A media characteristic that indicates that a track contains an alpha channel.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicContainsAlphaChannel;
```

<a id="Discussion"></a>

## Discussion

To determine whether the alpha is straight or pre-multiplied, look for a format description extension with key [kCMFormatDescriptionExtension_AlphaChannelMode](../../coremedia/kcmformatdescriptionextension_alphachannelmode.md).

## See Also

### Visual

- [AVMediaCharacteristicVisual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [AVMediaCharacteristicContainsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [AVMediaCharacteristicFrameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [AVMediaCharacteristicUsesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [AVMediaCharacteristicContainsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [AVMediaCharacteristicCarriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [AVMediaCharacteristicIndicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [AVMediaCharacteristicIndicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.
