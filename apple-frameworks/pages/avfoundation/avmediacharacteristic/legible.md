> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/legible](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/legible)

# legible (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a track or media selection option includes legible content.

## Declaration

```swift
static let legible: AVMediaCharacteristic
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

<a id="Discussion"></a>

## Discussion

Media types with this characteristic include [subtitle](../avmediatype/subtitle.md) and [closedCaption](../avmediatype/closedcaption.md).

## See Also

### Legible

- [easyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [describesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [containsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [languageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [transcribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

# AVMediaCharacteristicLegible (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a track or media selection option includes legible content.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicLegible;
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](../selecting-subtitles-and-alternative-audio-tracks.md)

<a id="Discussion"></a>

## Discussion

Media types with this characteristic include [AVMediaTypeSubtitle](../avmediatype/subtitle.md) and [AVMediaTypeClosedCaption](../avmediatype/closedcaption.md).

## See Also

### Legible

- [AVMediaCharacteristicEasyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [AVMediaCharacteristicDescribesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [AVMediaCharacteristicContainsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [AVMediaCharacteristicLanguageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [AVMediaCharacteristicTranscribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.
