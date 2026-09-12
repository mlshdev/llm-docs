> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/dubbedtranslation](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/dubbedtranslation)

# dubbedTranslation (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.

## Declaration

```swift
static let dubbedTranslation: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

The value of this characteristic is `public.translation.dubbed`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Audible

- [audible](audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [voiceOverTranslation](voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [enhancesSpeechIntelligibility](enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [describesMusicAndSoundForAccessibility](describesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.
- [tactileMinimal](tactileminimal.md): A media characteristic that indicates that a track or media selection option includes haptic content.

# AVMediaCharacteristicDubbedTranslation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicDubbedTranslation;
```

<a id="Discussion"></a>

## Discussion

The value of this characteristic is `public.translation.dubbed`.

For QuickTime movies and `.m4v` files, a media option has this characteristic only if the media’s author tags it that way.

## See Also

### Audible

- [AVMediaCharacteristicAudible](audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [AVMediaCharacteristicVoiceOverTranslation](voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [AVMediaCharacteristicEnhancesSpeechIntelligibility](enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [AVMediaCharacteristicDescribesMusicAndSoundForAccessibility](describesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.
- [AVMediaCharacteristicTactileMinimal](tactileminimal.md): A media characteristic that indicates that a track or media selection option includes haptic content.
