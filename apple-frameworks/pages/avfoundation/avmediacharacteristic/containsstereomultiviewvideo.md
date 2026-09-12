> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/containsstereomultiviewvideo](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/containsstereomultiviewvideo)

# containsStereoMultiviewVideo (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.

## Declaration

```swift
static let containsStereoMultiviewVideo: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

Stereoscopic video contains two views with one view for the left eye and one view for the right eye. Multiview video contains more than one view (not necessarily stereoscopic) in the same compressed video sample. The combination of stereoscopic and multiview indicates that multiview carriage is used to carry at least two stereoscopic views. It does not imply that there might not be more than two views. Access to the two stereo views may require opt-in to retrieve both views. Accessing only one of the left or right stereoscopic views as a fallback for playback or compositing where stereoscopic rendering is not supported may itself not be supported.

The value of this characteristic is `public.contains-stereo-multiview-video`.

> **Note**

>  The presence of this characteristic is strictly inferred from the format description of the associated track.

## See Also

### Visual

- [visual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [containsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [containsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [frameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [usesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [carriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [indicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [indicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.

# AVMediaCharacteristicContainsStereoMultiviewVideo (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A media characteristic that indicates that a track contains stereoscopic video captured in a multiview compression format.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicContainsStereoMultiviewVideo;
```

<a id="Discussion"></a>

## Discussion

Stereoscopic video contains two views with one view for the left eye and one view for the right eye. Multiview video contains more than one view (not necessarily stereoscopic) in the same compressed video sample. The combination of stereoscopic and multiview indicates that multiview carriage is used to carry at least two stereoscopic views. It does not imply that there might not be more than two views. Access to the two stereo views may require opt-in to retrieve both views. Accessing only one of the left or right stereoscopic views as a fallback for playback or compositing where stereoscopic rendering is not supported may itself not be supported.

The value of this characteristic is `public.contains-stereo-multiview-video`.

> **Note**

>  The presence of this characteristic is strictly inferred from the format description of the associated track.

## See Also

### Visual

- [AVMediaCharacteristicVisual](visual.md): A media characteristic that indicates that a track or media selection option includes visual content.
- [AVMediaCharacteristicContainsAlphaChannel](containsalphachannel.md): A media characteristic that indicates that a track contains an alpha channel.
- [AVMediaCharacteristicContainsHDRVideo](containshdrvideo.md): A media characteristic that indicates that a track contains HDR video.
- [AVMediaCharacteristicFrameBased](framebased.md): A media characteristic that indicates that a track or media selection option includes frame-based content.
- [AVMediaCharacteristicUsesWideGamutColorSpace](useswidegamutcolorspace.md): A media characteristic that indicates that a track uses a wide-gamut color space.
- [AVMediaCharacteristicCarriesVideoStereoMetadata](carriesvideostereometadata.md): A media characteristic that indicates that the stereoscopic video track carries additional information related to the stereoscopic video.
- [AVMediaCharacteristicIndicatesHorizontalFieldOfView](indicateshorizontalfieldofview.md): A media characteristic that indicates the video track carries information related to the horizontal field of view.
- [AVMediaCharacteristicIndicatesNonRectilinearProjection](indicatesnonrectilinearprojection.md): A media characteristic that indicates the video track carries information related to how it should be projected for display.
