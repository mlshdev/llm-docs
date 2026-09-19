> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/signlanguageinterpretationforaccessibility

# signLanguageInterpretationForAccessibility (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

A media characteristic that indicates that a track or media selection option provides a sign language interpretation of the spoken dialog and other significant aspects of the presentation.

## Declaration

```swift
static let signLanguageInterpretationForAccessibility: AVMediaCharacteristic
```

<a id="discussion"></a>

## Discussion

See -\[AVAssetTrack hasMediaCharacteristic:\] and -\[AVMediaSelectionOption hasMediaCharacteristic:\]. The value of this characteristic is @“public.accessibility.sign-language-interpretation”. Note for content authors: for QuickTime movie and .m4v files a media option is considered to have the characteristic AVMediaCharacteristicSignLanguageInterpretationForAccessibility only if it’s explicitly tagged with that characteristic. See the discussion of the tagging of tracks with media characteristics below.

Also see -\[AVAssetTrack hasMediaCharacteristic:\] and -\[AVMediaSelectionOption hasMediaCharacteristic:\].

# AVMediaCharacteristicSignLanguageInterpretationForAccessibility (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

A media characteristic that indicates that a track or media selection option provides a sign language interpretation of the spoken dialog and other significant aspects of the presentation.

## Declaration

```objectivec
extern AVMediaCharacteristic const AVMediaCharacteristicSignLanguageInterpretationForAccessibility;
```

<a id="discussion"></a>

## Discussion

See -\[AVAssetTrack hasMediaCharacteristic:\] and -\[AVMediaSelectionOption hasMediaCharacteristic:\]. The value of this characteristic is @“public.accessibility.sign-language-interpretation”. Note for content authors: for QuickTime movie and .m4v files a media option is considered to have the characteristic AVMediaCharacteristicSignLanguageInterpretationForAccessibility only if it’s explicitly tagged with that characteristic. See the discussion of the tagging of tracks with media characteristics below.

Also see -\[AVAssetTrack hasMediaCharacteristic:\] and -\[AVMediaSelectionOption hasMediaCharacteristic:\].
