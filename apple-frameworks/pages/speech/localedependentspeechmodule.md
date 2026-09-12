> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/localedependentspeechmodule](https://developer.apple.com/documentation/speech/localedependentspeechmodule)

# LocaleDependentSpeechModule

**Framework:** Speech  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A module that requires locale-specific assets.

## Declaration

```swift
protocol LocaleDependentSpeechModule : SpeechModule
```

## Topics

### Getting supported locales

- [supportedLocales](localedependentspeechmodule/supportedlocales.md): The set of all possible asset locales that the module supports.
- [supportedLocale(equivalentTo:)](localedependentspeechmodule/supportedlocale%28equivalentto_%29.md): A locale from the module’s supported locales equivalent to the given locale.

### Inspecting an instance’s locales

- [selectedLocales](localedependentspeechmodule/selectedlocales.md): The set of asset locales specified by the module’s configuration.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpeechModule](speechmodule.md)

### Conforming Types

- [DictationTranscriber](dictationtranscriber.md)
- [SpeechTranscriber](speechtranscriber.md)

## See Also

### Modules

- [SpeechTranscriber](speechtranscriber.md): A speech-to-text transcription module that’s appropriate for normal conversation and general purposes.
- [DictationTranscriber](dictationtranscriber.md): A speech-to-text transcription module that’s similar to system dictation features and compatible with older devices.
- [SpeechDetector](speechdetector.md): A module that performs a voice activity detection (VAD) analysis.
- [SpeechModule](speechmodule.md): Protocol that all analyzer modules conform to.
