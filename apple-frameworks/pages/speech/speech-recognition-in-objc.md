> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speech-recognition-in-objc](https://developer.apple.com/documentation/speech/speech-recognition-in-objc)

# Speech Recognition in Objective-C (Swift)

**Framework:** Speech  
**Kind:** API Collection

Use these classes to perform speech recognition in Objective-C code.

## Topics

### Essentials

- [Asking Permission to Use Speech Recognition](asking-permission-to-use-speech-recognition.md): Ask the user’s permission to perform speech recognition using Apple’s servers.
- [SFSpeechRecognizer](sfspeechrecognizer.md): An object you use to check for the availability of the speech recognition service, and to initiate the speech recognition process.
- [SFSpeechRecognizerDelegate](sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.

### Audio sources

- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md): A request to recognize speech in a recorded audio file.
- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md): A request to recognize speech from captured audio content, such as audio from the device’s microphone.
- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md): An abstract class that represents a request to recognize speech from an audio source.

### In-progress requests

- [SFSpeechRecognitionTask](sfspeechrecognitiontask.md): A task object for monitoring the speech recognition progress.
- [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.

### Transcription results

- [SFSpeechRecognitionResult](sfspeechrecognitionresult.md): An object that contains the partial or final results of a speech recognition request.
- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.

### Voice analytics

- [SFVoiceAnalytics](sfvoiceanalytics.md): A collection of vocal analysis metrics.
- [SFAcousticFeature](sfacousticfeature.md): The value of a voice analysis metric.

### Errors

- [SFSpeechErrorDomain](sfspeecherrordomain.md)
- [SFSpeechError](sfspeecherror.md)
- [SFSpeechError.Code](sfspeecherror/code.md): Error codes that can be thrown under the Speech framework’s error domain.

# Speech Recognition in Objective-C (Objective-C)

**Framework:** Speech  
**Kind:** API Collection

Use these classes to perform speech recognition in Objective-C code.

## Topics

### Essentials

- [Asking Permission to Use Speech Recognition](asking-permission-to-use-speech-recognition.md): Ask the user’s permission to perform speech recognition using Apple’s servers.
- [SFSpeechRecognizer](sfspeechrecognizer.md): An object you use to check for the availability of the speech recognition service, and to initiate the speech recognition process.
- [SFSpeechRecognizerDelegate](sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.

### Audio sources

- [SFSpeechURLRecognitionRequest](sfspeechurlrecognitionrequest.md): A request to recognize speech in a recorded audio file.
- [SFSpeechAudioBufferRecognitionRequest](sfspeechaudiobufferrecognitionrequest.md): A request to recognize speech from captured audio content, such as audio from the device’s microphone.
- [SFSpeechRecognitionRequest](sfspeechrecognitionrequest.md): An abstract class that represents a request to recognize speech from an audio source.

### In-progress requests

- [SFSpeechRecognitionTask](sfspeechrecognitiontask.md): A task object for monitoring the speech recognition progress.
- [SFSpeechRecognitionTaskDelegate](sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.
- [SFSpeechRecognitionTaskState](sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.

### Transcription results

- [SFSpeechRecognitionResult](sfspeechrecognitionresult.md): An object that contains the partial or final results of a speech recognition request.
- [SFSpeechRecognitionMetadata](sfspeechrecognitionmetadata.md): The metadata of speech in the audio of a speech recognition request.
- [SFTranscription](sftranscription.md): A textual representation of the specified speech in its entirety, as recognized by the speech recognizer.
- [SFTranscriptionSegment](sftranscriptionsegment.md): A discrete part of an entire transcription, as identified by the speech recognizer.

### Voice analytics

- [SFVoiceAnalytics](sfvoiceanalytics.md): A collection of vocal analysis metrics.
- [SFAcousticFeature](sfacousticfeature.md): The value of a voice analysis metric.

### Errors

- [SFSpeechErrorDomain](sfspeecherrordomain.md)
- [SFSpeechErrorCode](sfspeecherror/code.md): Error codes that can be thrown under the Speech framework’s error domain.
