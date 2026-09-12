> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/describesvideoforaccessibility](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/describesvideoforaccessibility)

# describesVideoForAccessibility (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.

## Declaration

```swift
static let describesVideoForAccessibility: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

It’s possible for a legible media option to include both transcriptions of spoken dialog and descriptions of music and sound effects.

The value of this characteristic is `public.accessibility.describes-video`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Legible

- [legible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [easyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [containsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [languageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [transcribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

# AVMediaCharacteristicDescribesVideoForAccessibility (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicDescribesVideoForAccessibility;
```

<a id="Discussion"></a>

## Discussion

It’s possible for a legible media option to include both transcriptions of spoken dialog and descriptions of music and sound effects.

The value of this characteristic is `public.accessibility.describes-video`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Legible

- [AVMediaCharacteristicLegible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [AVMediaCharacteristicEasyToRead](easytoread.md): A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.
- [AVMediaCharacteristicContainsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [AVMediaCharacteristicLanguageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [AVMediaCharacteristicTranscribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.
