> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizerauthorizationstatus/notdetermined](https://developer.apple.com/documentation/speech/sfspeechrecognizerauthorizationstatus/notdetermined)

# SFSpeechRecognizerAuthorizationStatus.notDetermined (Swift)

**Framework:** Speech  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The app’s authorization status has not yet been determined.

## Declaration

```swift
case notDetermined
```

<a id="Discussion"></a>

## Discussion

When your app’s status is not determined, calling the [requestAuthorization(\_:)](../sfspeechrecognizer/requestauthorization%28__%29.md) method prompts the user to grant or deny authorization.

## See Also

### Authorization statuses

- [SFSpeechRecognizerAuthorizationStatus.denied](denied.md): The user denied your app’s request to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatus.restricted](restricted.md): The device prevents your app from performing speech recognition.
- [SFSpeechRecognizerAuthorizationStatus.authorized](authorized.md): The user granted your app’s request to perform speech recognition.

# SFSpeechRecognizerAuthorizationStatusNotDetermined (Objective-C)

**Framework:** Speech  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The app’s authorization status has not yet been determined.

## Declaration

```objectivec
SFSpeechRecognizerAuthorizationStatusNotDetermined
```

<a id="Discussion"></a>

## Discussion

When your app’s status is not determined, calling the [requestAuthorization:](../sfspeechrecognizer/requestauthorization%28__%29.md) method prompts the user to grant or deny authorization.

## See Also

### Authorization statuses

- [SFSpeechRecognizerAuthorizationStatusDenied](denied.md): The user denied your app’s request to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatusRestricted](restricted.md): The device prevents your app from performing speech recognition.
- [SFSpeechRecognizerAuthorizationStatusAuthorized](authorized.md): The user granted your app’s request to perform speech recognition.
