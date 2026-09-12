> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/easytoread](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/easytoread)

# easyToRead (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.

## Declaration

```swift
static let easyToRead: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

Closed caption tracks that carry “easy reader” captions, as the CEA-608 specification defines, should have this characteristic.

The value of this characteristic is `public.easy-to-read`.

For QuickTime movies and `.m4v` files, a track has this characteristic only if the media’s author tags it that way.

## See Also

### Legible

- [legible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [describesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [containsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [languageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [transcribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.

# AVMediaCharacteristicEasyToRead (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates a track or media selection option provides legible content that’s edited for easy reading.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicEasyToRead;
```

<a id="Discussion"></a>

## Discussion

Closed caption tracks that carry “easy reader” captions, as the CEA-608 specification defines, should have this characteristic.

The value of this characteristic is `public.easy-to-read`.

For QuickTime movies and `.m4v` files, a track has this characteristic only if the media’s author tags it that way.

## See Also

### Legible

- [AVMediaCharacteristicLegible](legible.md): A media characteristic that indicates that a track or media selection option includes legible content.
- [AVMediaCharacteristicDescribesVideoForAccessibility](describesvideoforaccessibility.md): A media characteristic that indicates the media includes audible content that describes the visual portion of the presentation.
- [AVMediaCharacteristicContainsOnlyForcedSubtitles](containsonlyforcedsubtitles.md): A media characteristic that indicates that a track or media selection option presents only forced subtitles.
- [AVMediaCharacteristicLanguageTranslation](languagetranslation.md): A media characteristic that indicates that a track or media selection option contains a language or dialect translation of the original content.
- [AVMediaCharacteristicTranscribesSpokenDialogForAccessibility](transcribesspokendialogforaccessibility.md): A media characteristic that indicates that a media selection option includes legible content that transcribes spoken dialog.
