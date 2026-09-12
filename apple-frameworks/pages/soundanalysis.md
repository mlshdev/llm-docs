> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis](https://developer.apple.com/documentation/soundanalysis)

# Sound Analysis (Swift)

**Framework:** Sound Analysis  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Classify various sounds by analyzing audio files or streams.

<a id="overview"></a>

## Overview

Identify specific sounds in your app, such as laughter or applause, by creating an [SNClassifySoundRequest](soundanalysis/snclassifysoundrequest.md) to analyze an audio file or stream. Sound requests can identify over 300 sounds. Alternatively, you identify a custom set of sounds by providing the sound request with a custom Core ML model. You train a custom sound classification model by creating an [MLSoundClassifier](createml/mlsoundclassifier.md) with audio data in [Create ML](createml.md).

## Topics

### Audio analyzers

- [Classifying Sounds in an Audio File](soundanalysis/classifying-sounds-in-an-audio-file.md): Identify individual sounds in a file, such as a recording, with an audio file analyzer.
- [SNAudioFileAnalyzer](soundanalysis/snaudiofileanalyzer.md): An analyzer that runs sound classification requests on an audio file.
- [Classifying Sounds in an Audio Stream](soundanalysis/classifying-sounds-in-an-audio-stream.md): Identify individual sounds in an audio data stream, such as from a microphone, with an audio stream analyzer.
- [SNAudioStreamAnalyzer](soundanalysis/snaudiostreamanalyzer.md): An object you create to analyze a stream of audio data and provide the results to your app.

### Sound classification requests

- [Classifying Live Audio Input with a Built-in Sound Classifier](soundanalysis/classifying-live-audio-input-with-a-built-in-sound-classifier.md): Detect and identify hundreds of sounds by using a trained classifier.
- [SNClassifySoundRequest](soundanalysis/snclassifysoundrequest.md): A request that classifies sound using a Core ML model.
- [SNClassificationResult](soundanalysis/snclassificationresult.md): A result that contains the highest-ranking classifications in a time range.

### Errors

- [SNError](soundanalysis/snerror.md): An error from the Sound Analysis framework.
- [SNError.Code](soundanalysis/snerror/code.md): The enumerated error codes that the Sound Analysis framework produces.
- [SNErrorDomain](soundanalysis/snerrordomain.md): A string that identifies the Sound Analysis error domain.

# Sound Analysis (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Classify various sounds by analyzing audio files or streams.

<a id="overview"></a>

## Overview

Identify specific sounds in your app, such as laughter or applause, by creating an [SNClassifySoundRequest](soundanalysis/snclassifysoundrequest.md) to analyze an audio file or stream. Sound requests can identify over 300 sounds. Alternatively, you identify a custom set of sounds by providing the sound request with a custom Core ML model. You train a custom sound classification model by creating an [MLSoundClassifier](createml/mlsoundclassifier.md) with audio data in [Create ML](createml.md).

## Topics

### Audio analyzers

- [Classifying Sounds in an Audio File](soundanalysis/classifying-sounds-in-an-audio-file.md): Identify individual sounds in a file, such as a recording, with an audio file analyzer.
- [SNAudioFileAnalyzer](soundanalysis/snaudiofileanalyzer.md): An analyzer that runs sound classification requests on an audio file.
- [Classifying Sounds in an Audio Stream](soundanalysis/classifying-sounds-in-an-audio-stream.md): Identify individual sounds in an audio data stream, such as from a microphone, with an audio stream analyzer.
- [SNAudioStreamAnalyzer](soundanalysis/snaudiostreamanalyzer.md): An object you create to analyze a stream of audio data and provide the results to your app.

### Sound classification requests

- [Classifying Live Audio Input with a Built-in Sound Classifier](soundanalysis/classifying-live-audio-input-with-a-built-in-sound-classifier.md): Detect and identify hundreds of sounds by using a trained classifier.
- [SNClassifySoundRequest](soundanalysis/snclassifysoundrequest.md): A request that classifies sound using a Core ML model.
- [SNClassificationResult](soundanalysis/snclassificationresult.md): A result that contains the highest-ranking classifications in a time range.

### Errors

- [SNErrorCode](soundanalysis/snerror/code.md): The enumerated error codes that the Sound Analysis framework produces.
- [SNErrorDomain](soundanalysis/snerrordomain.md): A string that identifies the Sound Analysis error domain.

### Macros

- [SN_EXPORT](soundanalysis/sn_export.md)
