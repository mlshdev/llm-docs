> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/requestauthorization(_:)](https://developer.apple.com/documentation/speech/sfspeechrecognizer/requestauthorization(_:))

# requestAuthorization(\_:) (Swift)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Asks the user to allow your app to perform speech recognition.

## Declaration

```swift
class func requestAuthorization(_ handler: @escaping (SFSpeechRecognizerAuthorizationStatus) -> Void)
```

## Parameters

- `handler`: The block to execute when your app’s authorization status is known. The status parameter of the block contains your app’s authorization status. The system does not guarantee the execution of this block on your app’s main dispatch queue.

## Mentioned In

- [Asking Permission to Use Speech Recognition](../asking-permission-to-use-speech-recognition.md)

<a id="discussion"></a>

## Discussion

Call this method before performing any other tasks associated with speech recognition. This method executes asynchronously, returning shortly after you call it. At some point later, the system calls the provided `handler` block with the results.

When your app’s authorization status is [SFSpeechRecognizerAuthorizationStatus.notDetermined](../sfspeechrecognizerauthorizationstatus/notdetermined.md), this method causes the system to prompt the user to grant or deny permission for your app to use speech recognition. The prompt includes the custom message you specify in the `NSSpeechRecognitionUsageDescription` key of your app’s `Info.plist` file. The user’s response is saved so that future calls to this method do not prompt the user again.

> **Important**

>  Your app’s `Info.plist` file must contain the `NSSpeechRecognitionUsageDescription` key with a valid usage description. If this key is not present, your app will crash when you call this method.

For more information about requesting authorization, see [Asking Permission to Use Speech Recognition](../asking-permission-to-use-speech-recognition.md).

## See Also

### Requesting user authorization

- [authorizationStatus()](authorizationstatus%28%29.md): Returns your app’s current authorization to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](../sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.

# requestAuthorization: (Objective-C)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Asks the user to allow your app to perform speech recognition.

## Declaration

```objectivec
+ (void) requestAuthorization:(void (^)(SFSpeechRecognizerAuthorizationStatus status)) handler;
```

## Parameters

- `handler`: The block to execute when your app’s authorization status is known. The status parameter of the block contains your app’s authorization status. The system does not guarantee the execution of this block on your app’s main dispatch queue.

## Mentioned In

- [Asking Permission to Use Speech Recognition](../asking-permission-to-use-speech-recognition.md)

<a id="discussion"></a>

## Discussion

Call this method before performing any other tasks associated with speech recognition. This method executes asynchronously, returning shortly after you call it. At some point later, the system calls the provided `handler` block with the results.

When your app’s authorization status is [SFSpeechRecognizerAuthorizationStatusNotDetermined](../sfspeechrecognizerauthorizationstatus/notdetermined.md), this method causes the system to prompt the user to grant or deny permission for your app to use speech recognition. The prompt includes the custom message you specify in the `NSSpeechRecognitionUsageDescription` key of your app’s `Info.plist` file. The user’s response is saved so that future calls to this method do not prompt the user again.

> **Important**

>  Your app’s `Info.plist` file must contain the `NSSpeechRecognitionUsageDescription` key with a valid usage description. If this key is not present, your app will crash when you call this method.

For more information about requesting authorization, see [Asking Permission to Use Speech Recognition](../asking-permission-to-use-speech-recognition.md).

## See Also

### Requesting user authorization

- [authorizationStatus](authorizationstatus%28%29.md): Returns your app’s current authorization to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](../sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.
