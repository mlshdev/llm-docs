> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/containsonlyforcedsubtitles](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/containsonlyforcedsubtitles)

# containsOnlyForcedSubtitles (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a track or media selection option presents only forced subtitles.

## Declaration

```swift
static let containsOnlyForcedSubtitles: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

The value of this characteristic is `public.subtitles.forced-only`.

The system infers this characteristic from the format description of the associated track.

## See Also

### Legible

- [legible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [easyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [describesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [languageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [transcribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

# AVMediaCharacteristicContainsOnlyForcedSubtitles (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a track or media selection option presents only forced subtitles.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicContainsOnlyForcedSubtitles;
```

<a id="Discussion"></a>

## Discussion

The value of this characteristic is `public.subtitles.forced-only`.

The system infers this characteristic from the format description of the associated track.

## See Also

### Legible

- [AVMediaCharacteristicLegible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [AVMediaCharacteristicEasyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [AVMediaCharacteristicDescribesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [AVMediaCharacteristicLanguageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [AVMediaCharacteristicTranscribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.
