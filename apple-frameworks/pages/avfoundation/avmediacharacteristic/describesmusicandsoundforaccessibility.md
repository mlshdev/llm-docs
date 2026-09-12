> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/describesmusicandsoundforaccessibility](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/describesmusicandsoundforaccessibility)

# describesMusicAndSoundForAccessibility (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.

## Declaration

```swift
static let describesMusicAndSoundForAccessibility: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

Legible media options may include transcriptions of spoken dialog and descriptions of music and sound effects.

The value of this characteristic is `public.accessibility.describes-music-and-sound`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Audible

- [audible](audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [dubbedTranslation](dubbedtranslation.md): A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.
- [voiceOverTranslation](voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [enhancesSpeechIntelligibility](enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [tactileMinimal](tactileminimal.md): A media characteristic that indicates that a track or media selection option includes haptic content.

# AVMediaCharacteristicDescribesMusicAndSoundForAccessibility (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicDescribesMusicAndSoundForAccessibility;
```

<a id="Discussion"></a>

## Discussion

Legible media options may include transcriptions of spoken dialog and descriptions of music and sound effects.

The value of this characteristic is `public.accessibility.describes-music-and-sound`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Audible

- [AVMediaCharacteristicAudible](audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [AVMediaCharacteristicDubbedTranslation](dubbedtranslation.md): A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.
- [AVMediaCharacteristicVoiceOverTranslation](voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [AVMediaCharacteristicEnhancesSpeechIntelligibility](enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [AVMediaCharacteristicTactileMinimal](tactileminimal.md): A media characteristic that indicates that a track or media selection option includes haptic content.
