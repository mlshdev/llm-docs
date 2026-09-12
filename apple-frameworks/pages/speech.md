> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech](https://developer.apple.com/documentation/speech)

# Speech (Swift)

**Framework:** Speech  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Perform speech recognition on live or prerecorded audio, and receive transcriptions, alternative interpretations, and confidence levels of the results.

<a id="overview"></a>

## Overview

Use the Speech framework to recognize spoken words in recorded or live audio. The keyboard’s dictation support uses speech recognition to translate audio content into text. This framework provides a similar behavior, except that you can use it without the presence of the keyboard. For example, you might use speech recognition to recognize verbal commands or to handle text dictation in other parts of your app.

The [SpeechTranscriber](speech/speechtranscriber.md) class and other module classes provide specific services. The [AssetInventory](speech/assetinventory.md) class ensures that the system has the assets necessary to support those classes. The [SpeechAnalyzer](speech/speechanalyzer.md) class manages an analysis session that uses those classes. The [AssetInputSequenceProvider](speech/assetinputsequenceprovider.md) and [CaptureInputSequenceProvider](speech/captureinputsequenceprovider.md) classes provide audio from files or microphone devices.

For a general understanding of how you use these classes together, see [SpeechAnalyzer](speech/speechanalyzer.md).

## Topics

### Essentials

- [Speech updates](https://developer.apple.com/documentation/updates/speech): Learn about important changes to Speech.
- [Recognizing speech in live audio](speech/recognizing-speech-in-live-audio.md): Perform speech recognition and transcription on audio captured from the microphone of an iOS device.
- [Bringing advanced speech-to-text capabilities to your app](speech/bringing-advanced-speech-to-text-capabilities-to-your-app.md): Learn how to incorporate live speech-to-text transcription into your app with SpeechAnalyzer.
- [SpeechAnalyzer](speech/speechanalyzer.md): Analyzes spoken audio content in various ways and manages the analysis session.
- [AssetInventory](speech/assetinventory.md): Manages the assets that are necessary for transcription or other analyses.

### Modules

- [SpeechTranscriber](speech/speechtranscriber.md): A speech-to-text transcription module that’s appropriate for normal conversation and general purposes.
- [DictationTranscriber](speech/dictationtranscriber.md): A speech-to-text transcription module that’s similar to system dictation features and compatible with older devices.
- [SpeechDetector](speech/speechdetector.md): A module that performs a voice activity detection (VAD) analysis.
- [SpeechModule](speech/speechmodule.md): Protocol that all analyzer modules conform to.
- [LocaleDependentSpeechModule](speech/localedependentspeechmodule.md): A module that requires locale-specific assets.

### Input and output

- [AnalyzerInput](speech/analyzerinput.md): Time-coded audio data.
- [SpeechModuleResult](speech/speechmoduleresult.md): Protocol that all module results conform to.

### Audio sources

- [AssetInputSequenceProvider](speech/assetinputsequenceprovider.md): Reads from an audio file or asset, providing its audio in a format suitable for analysis by a speech analyzer.
- [CaptureInputSequenceProvider](speech/captureinputsequenceprovider.md): Reads from an AV capture device such as a microphone, providing the captured audio in a format suitable for analysis by a speech analyzer.
- [AnalyzerInputConverter](speech/analyzerinputconverter.md): Converts audio buffers to a format suitable for analysis by a speech analyzer.

### Custom vocabulary

- [AnalysisContext](speech/analysiscontext.md): Contextual information that may be shared among analyzers.
- [SFSpeechLanguageModel](speech/sfspeechlanguagemodel.md): A language model built from custom training data.
- [SFSpeechLanguageModel.Configuration](speech/sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.
- [SFCustomLanguageModelData](speech/sfcustomlanguagemodeldata.md): An object that generates and exports custom language model training data.

### Asset and resource management

- [AssetInstallationRequest](speech/assetinstallationrequest.md): An object that describes, downloads, and installs a selection of assets.
- [SpeechModels](speech/speechmodels.md): Namespace for methods related to model management.

### Legacy API

- [Speech Recognition in Objective-C](speech/speech-recognition-in-objc.md): Use these classes to perform speech recognition in Objective-C code.

# Speech (Objective-C)

**Framework:** Speech  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Perform speech recognition on live or prerecorded audio, and receive transcriptions, alternative interpretations, and confidence levels of the results.

<a id="overview"></a>

## Overview

Use the Speech framework to recognize spoken words in recorded or live audio. The keyboard’s dictation support uses speech recognition to translate audio content into text. This framework provides a similar behavior, except that you can use it without the presence of the keyboard. For example, you might use speech recognition to recognize verbal commands or to handle text dictation in other parts of your app.

The [SpeechTranscriber](speech/speechtranscriber.md) class and other module classes provide specific services. The [AssetInventory](speech/assetinventory.md) class ensures that the system has the assets necessary to support those classes. The [SpeechAnalyzer](speech/speechanalyzer.md) class manages an analysis session that uses those classes. The [AssetInputSequenceProvider](speech/assetinputsequenceprovider.md) and [CaptureInputSequenceProvider](speech/captureinputsequenceprovider.md) classes provide audio from files or microphone devices.

For a general understanding of how you use these classes together, see [SpeechAnalyzer](speech/speechanalyzer.md).

## Topics

### Essentials

- [Speech Recognition in Objective-C](speech/speech-recognition-in-objc.md): Use these classes to perform speech recognition in Objective-C code.

### Custom vocabulary

- [SFSpeechLanguageModel](speech/sfspeechlanguagemodel.md): A language model built from custom training data.
- [SFSpeechLanguageModelConfiguration](speech/sfspeechlanguagemodel/configuration.md): An object describing the location of a custom language model and specialized vocabulary.
