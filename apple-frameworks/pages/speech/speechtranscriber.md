> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber](https://developer.apple.com/documentation/speech/speechtranscriber)

# SpeechTranscriber

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A speech-to-text transcription module that’s appropriate for normal conversation and general purposes.

## Declaration

```swift
final class SpeechTranscriber
```

<a id="overview"></a>

## Overview

Several transcriber instances can share the same backing engine instances and models, so long as the transcribers are configured similarly in certain respects.

<a id="Check-device-support"></a>

### Check device support

Use the [isAvailable](speechtranscriber/isavailable.md) or [supportedLocales](speechtranscriber/supportedlocales.md) properties to see if the current device supports the speech-to-text models used by `SpeechTranscriber`. If it does not, consider disabling the feature or using [DictationTranscriber](dictationtranscriber.md) instead.

## Topics

### Creating a transcriber

- [init(locale:preset:)](speechtranscriber/init%28locale_preset_%29.md): Creates a general-purpose transcriber according to a preset.
- [init(locale:transcriptionOptions:reportingOptions:attributeOptions:)](speechtranscriber/init%28locale_transcriptionoptions_reportingoptions_attributeoptions_%29.md): Creates a general-purpose transcriber.
- [SpeechTranscriber.Preset](speechtranscriber/preset.md): Predefined transcriber configurations.

### Configuring transcription

- [SpeechTranscriber.ReportingOption](speechtranscriber/reportingoption.md): Options relating to the transcriber’s result delivery.
- [SpeechTranscriber.ResultAttributeOption](speechtranscriber/resultattributeoption.md): Options relating to the attributes of the transcription.
- [SpeechTranscriber.TranscriptionOption](speechtranscriber/transcriptionoption.md): Options relating to the text of the transcription.

### Checking device support

- [isAvailable](speechtranscriber/isavailable.md): A Boolean value that indicates whether this module is available given the device’s hardware and capabilities.

### Checking locale support

- [installedLocales](speechtranscriber/installedlocales.md): The locales that the transcriber can transcribe into, considering only locales that are installed on the device.
- [supportedLocales](speechtranscriber/supportedlocales.md): The locales that the transcriber can transcribe into, including locales that may not be installed but are downloadable.
- [supportedLocale(equivalentTo:)](speechtranscriber/supportedlocale%28equivalentto_%29.md): A locale from the module’s supported locales equivalent to the given locale.

### Getting results

- [results](speechtranscriber/results.md): The asynchronous sequence of transcription results.
- [SpeechTranscriber.Result](speechtranscriber/result.md): A phrase or passage of transcribed speech. The phrases are sent in order.

## Relationships

### Conforms To

- [LocaleDependentSpeechModule](localedependentspeechmodule.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpeechModule](speechmodule.md)

## See Also

### Modules

- [DictationTranscriber](dictationtranscriber.md): A speech-to-text transcription module that’s similar to system dictation features and compatible with older devices.
- [SpeechDetector](speechdetector.md): A module that performs a voice activity detection (VAD) analysis.
- [SpeechModule](speechmodule.md): Protocol that all analyzer modules conform to.
- [LocaleDependentSpeechModule](localedependentspeechmodule.md): A module that requires locale-specific assets.
