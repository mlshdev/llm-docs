> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediacharacteristic/tactileminimal](https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/tactileminimal)

# tactileMinimal (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A media characteristic that indicates that a track or media selection option includes haptic content.

## Declaration

```swift
static let tactileMinimal: AVMediaCharacteristic
```

<a id="Discussion"></a>

## Discussion

The value of this characteristic is `public.haptics.minimal`. Query the [hasMediaCharacteristic(\_:)](../avassettrack/hasmediacharacteristic%28__%29.md) method of [AVAssetTrack](../avassettrack.md) or the [hasMediaCharacteristic(\_:)](../avmediaselectionoption/hasmediacharacteristic%28__%29.md) of [AVMediaSelectionOption](../avmediaselectionoption.md) to determine whether the media contains this characteristic.

> **Note**

>  A QuickTime movie or MPEG-4 file track contains this characteristic only when the author explicitly tags it that way.

## See Also

### Audible

- [audible](audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [dubbedTranslation](dubbedtranslation.md): A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.
- [voiceOverTranslation](voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [enhancesSpeechIntelligibility](enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [describesMusicAndSoundForAccessibility](describesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.

# AVMediaCharacteristicTactileMinimal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A media characteristic that indicates that a track or media selection option includes haptic content.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicTactileMinimal;
```

<a id="Discussion"></a>

## Discussion

The value of this characteristic is `public.haptics.minimal`. Query the [hasMediaCharacteristic:](../avassettrack/hasmediacharacteristic%28__%29.md) method of [AVAssetTrack](../avassettrack.md) or the [hasMediaCharacteristic:](../avmediaselectionoption/hasmediacharacteristic%28__%29.md) of [AVMediaSelectionOption](../avmediaselectionoption.md) to determine whether the media contains this characteristic.

> **Note**

>  A QuickTime movie or MPEG-4 file track contains this characteristic only when the author explicitly tags it that way.

## See Also

### Audible

- [AVMediaCharacteristicAudible](audible.md): A media characteristic that indicates that a track or media selection option includes audible content.
- [AVMediaCharacteristicDubbedTranslation](dubbedtranslation.md): A media characteristic that indicates that a track or media selection option contains audio language or dialect translation of the original content.
- [AVMediaCharacteristicVoiceOverTranslation](voiceovertranslation.md): A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog.
- [AVMediaCharacteristicEnhancesSpeechIntelligibility](enhancesspeechintelligibility.md): A media characteristic that indicates a track or media selection option includes audio processed to enhance the intelligibility of speech.
- [AVMediaCharacteristicDescribesMusicAndSoundForAccessibility](describesmusicandsoundforaccessibility.md): A media characteristic that indicates that a track or media selection option includes legible content in the language of its specified locale.
