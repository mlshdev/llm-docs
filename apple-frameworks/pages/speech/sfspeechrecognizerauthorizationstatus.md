> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizerauthorizationstatus](https://developer.apple.com/documentation/speech/sfspeechrecognizerauthorizationstatus)

# SFSpeechRecognizerAuthorizationStatus (Swift)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The app’s authorization to perform speech recognition.

## Declaration

```swift
enum SFSpeechRecognizerAuthorizationStatus
```

## Topics

### Authorization statuses

- [SFSpeechRecognizerAuthorizationStatus.notDetermined](sfspeechrecognizerauthorizationstatus/notdetermined.md): The app’s authorization status has not yet been determined.
- [SFSpeechRecognizerAuthorizationStatus.denied](sfspeechrecognizerauthorizationstatus/denied.md): The user denied your app’s request to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatus.restricted](sfspeechrecognizerauthorizationstatus/restricted.md): The device prevents your app from performing speech recognition.
- [SFSpeechRecognizerAuthorizationStatus.authorized](sfspeechrecognizerauthorizationstatus/authorized.md): The user granted your app’s request to perform speech recognition.

### Initializers

- [init(rawValue:)](sfspeechrecognizerauthorizationstatus/init%28rawvalue_%29.md)

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
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.

# SFSpeechRecognizerAuthorizationStatus (Objective-C)

**Framework:** Speech  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The app’s authorization to perform speech recognition.

## Declaration

```objectivec
enum SFSpeechRecognizerAuthorizationStatus : NSInteger;
```

## Topics

### Authorization statuses

- [SFSpeechRecognizerAuthorizationStatusNotDetermined](sfspeechrecognizerauthorizationstatus/notdetermined.md): The app’s authorization status has not yet been determined.
- [SFSpeechRecognizerAuthorizationStatusDenied](sfspeechrecognizerauthorizationstatus/denied.md): The user denied your app’s request to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatusRestricted](sfspeechrecognizerauthorizationstatus/restricted.md): The device prevents your app from performing speech recognition.
- [SFSpeechRecognizerAuthorizationStatusAuthorized](sfspeechrecognizerauthorizationstatus/authorized.md): The user granted your app’s request to perform speech recognition.

## See Also

### Essentials

- [Asking Permission to Use Speech Recognition](asking-permission-to-use-speech-recognition.md): Ask the user’s permission to perform speech recognition using Apple’s servers.
- [SFSpeechRecognizer](sfspeechrecognizer.md): An object you use to check for the availability of the speech recognition service, and to initiate the speech recognition process.
- [SFSpeechRecognizerDelegate](sfspeechrecognizerdelegate.md): A protocol that you adopt in your objects to track the availability of a speech recognizer.
- [SFSpeechRecognitionTaskHint](sfspeechrecognitiontaskhint.md): The type of task for which you are using speech recognition.
