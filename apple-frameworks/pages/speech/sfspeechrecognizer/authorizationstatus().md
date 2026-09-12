> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/authorizationstatus()](https://developer.apple.com/documentation/speech/sfspeechrecognizer/authorizationstatus())

# authorizationStatus() (Swift)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Returns your app’s current authorization to perform speech recognition.

## Declaration

```swift
class func authorizationStatus() -> SFSpeechRecognizerAuthorizationStatus
```

<a id="return-value"></a>

## Return Value

The app’s current authorization status value. For a list of values, see [SFSpeechRecognizerAuthorizationStatus](../sfspeechrecognizerauthorizationstatus.md).

<a id="discussion"></a>

## Discussion

The user can reject your app’s request to perform speech recognition, but your request can also be denied if speech recognition is not supported on the device. The app can also change your app’s authorization status at any time from the Settings app.

## See Also

### Requesting user authorization

- [requestAuthorization(\_:)](requestauthorization%28__%29.md): Asks the user to allow your app to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](../sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.

# authorizationStatus (Objective-C)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Returns your app’s current authorization to perform speech recognition.

## Declaration

```objectivec
+ (SFSpeechRecognizerAuthorizationStatus) authorizationStatus;
```

<a id="return-value"></a>

## Return Value

The app’s current authorization status value. For a list of values, see [SFSpeechRecognizerAuthorizationStatus](../sfspeechrecognizerauthorizationstatus.md).

<a id="discussion"></a>

## Discussion

The user can reject your app’s request to perform speech recognition, but your request can also be denied if speech recognition is not supported on the device. The app can also change your app’s authorization status at any time from the Settings app.

## See Also

### Requesting user authorization

- [requestAuthorization:](requestauthorization%28__%29.md): Asks the user to allow your app to perform speech recognition.
- [SFSpeechRecognizerAuthorizationStatus](../sfspeechrecognizerauthorizationstatus.md): The app’s authorization to perform speech recognition.
