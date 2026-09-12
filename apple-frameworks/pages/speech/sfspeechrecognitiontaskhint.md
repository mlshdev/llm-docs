> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontaskhint](https://developer.apple.com/documentation/speech/sfspeechrecognitiontaskhint)

# SFSpeechRecognitionTaskHint (Swift)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The type of task for which you are using speech recognition.

## Declaration

```swift
enum SFSpeechRecognitionTaskHint
```

## Topics

### Hints

- [SFSpeechRecognitionTaskHint.unspecified](sfspeechrecognitiontaskhint/unspecified.md): An unspecified type of task.
- [SFSpeechRecognitionTaskHint.dictation](sfspeechrecognitiontaskhint/dictation.md): A task that uses captured speech for text entry.
- [SFSpeechRecognitionTaskHint.search](sfspeechrecognitiontaskhint/search.md): A task that uses captured speech to specify search terms.
- [SFSpeechRecognitionTaskHint.confirmation](sfspeechrecognitiontaskhint/confirmation.md): A task that uses captured speech for short, confirmation-style requests.

### Initializers

- [init(rawValue:)](sfspeechrecognitiontaskhint/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Asking Permission to Use Speech Recognition](asking-permission-to-use-speech-recognition.md): Ask the user’s permission to perform speech recognition using Apple’s servers.
- [SFSpeechRecognizer](sfspeechrecognizer.md): An object you use to check for the availability of the speech recognition service, and to initiate the speech recognition process.
- [SFSpeechRecognizerDelegate](sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [SFSpeechRecognizerAuthorizationStatus](sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.

# SFSpeechRecognitionTaskHint (Objective-C)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The type of task for which you are using speech recognition.

## Declaration

```objectivec
enum SFSpeechRecognitionTaskHint : NSInteger;
```

## Topics

### Hints

- [SFSpeechRecognitionTaskHintUnspecified](sfspeechrecognitiontaskhint/unspecified.md): An unspecified type of task.
- [SFSpeechRecognitionTaskHintDictation](sfspeechrecognitiontaskhint/dictation.md): A task that uses captured speech for text entry.
- [SFSpeechRecognitionTaskHintSearch](sfspeechrecognitiontaskhint/search.md): A task that uses captured speech to specify search terms.
- [SFSpeechRecognitionTaskHintConfirmation](sfspeechrecognitiontaskhint/confirmation.md): A task that uses captured speech for short, confirmation-style requests.

## See Also

### Essentials

- [Asking Permission to Use Speech Recognition](asking-permission-to-use-speech-recognition.md): Ask the user’s permission to perform speech recognition using Apple’s servers.
- [SFSpeechRecognizer](sfspeechrecognizer.md): An object you use to check for the availability of the speech recognition service, and to initiate the speech recognition process.
- [SFSpeechRecognizerDelegate](sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [SFSpeechRecognizerAuthorizationStatus](sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.
