> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/transcribesspokendialogforaccessibility](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/transcribesspokendialogforaccessibility)

# transcribesSpokenDialogForAccessibility (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

## Declaration

```swift
static let transcribesSpokenDialogForAccessibility: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

Legible media options may include transcriptions of spoken dialog and descriptions of music and sound effects.

The value of this characteristic is `public.accessibility.transcribes-spoken-dialog`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Legible

- [legible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [easyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [describesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [containsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [languageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.

# AVMediaCharacteristicTranscribesSpokenDialogForAccessibility (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicTranscribesSpokenDialogForAccessibility;
```

<a id="Discussion"></a>

## Discussion

Legible media options may include transcriptions of spoken dialog and descriptions of music and sound effects.

The value of this characteristic is `public.accessibility.transcribes-spoken-dialog`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Legible

- [AVMediaCharacteristicLegible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [AVMediaCharacteristicEasyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [AVMediaCharacteristicDescribesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [AVMediaCharacteristicContainsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [AVMediaCharacteristicLanguageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
