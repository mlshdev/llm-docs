> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/indicateshorizontalfieldofview](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/indicateshorizontalfieldofview)

# indicatesHorizontalFieldOfView (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A media characteristic that indicates the video track carries information related to the horizontal field of view.

## Declaration

```swift
static let indicatesHorizontalFieldOfView: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

This media characteristic is present when the [CMVideoFormatDescription](../../coremedia/cmvideoformatdescription.md) includes a [kCMFormatDescriptionExtension_HorizontalFieldOfView](../../coremedia/kcmformatdescriptionextension_horizontalfieldofview.md) extension. This is not an indication that the field of view is expanded beyond or more narrow than typical horizontal fields of view.

The value of this characteristic is `public.indicates-horizontal-field-of-view`.

> **Note**

>  The presence of this characteristic is strictly inferred from the format description of the associated track.

## See Also

### Visual

- [visual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [containsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [containsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [frameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [usesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [containsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [carriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [indicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.

# AVMediaCharacteristicIndicatesHorizontalFieldOfView (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A media characteristic that indicates the video track carries information related to the horizontal field of view.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicIndicatesHorizontalFieldOfView;
```

<a id="Discussion"></a>

## Discussion

This media characteristic is present when the [CMVideoFormatDescriptionRef](../../coremedia/cmvideoformatdescription.md) includes a [kCMFormatDescriptionExtension_HorizontalFieldOfView](../../coremedia/kcmformatdescriptionextension_horizontalfieldofview.md) extension. This is not an indication that the field of view is expanded beyond or more narrow than typical horizontal fields of view.

The value of this characteristic is `public.indicates-horizontal-field-of-view`.

> **Note**

>  The presence of this characteristic is strictly inferred from the format description of the associated track.

## See Also

### Visual

- [AVMediaCharacteristicVisual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [AVMediaCharacteristicContainsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [AVMediaCharacteristicContainsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [AVMediaCharacteristicFrameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [AVMediaCharacteristicUsesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [AVMediaCharacteristicContainsStereoMultiviewVideo](containsstereomultiviewvideo.md): A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.
- [AVMediaCharacteristicCarriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [AVMediaCharacteristicIndicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.
