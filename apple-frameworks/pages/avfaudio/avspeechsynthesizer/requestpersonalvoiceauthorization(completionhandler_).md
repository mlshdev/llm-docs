> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/requestpersonalvoiceauthorization(completionhandler:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/requestpersonalvoiceauthorization(completionhandler:))

# requestPersonalVoiceAuthorization(completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts the user to authorize your app to use personal voices.

## Declaration

```swift
class func requestPersonalVoiceAuthorization(completionHandler handler: @escaping @Sendable (AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus) -> Void)
```

```swift
class func requestPersonalVoiceAuthorization() async -> AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus
```

## Parameters

- `handler`: A completion handler that the system calls after the user responds to a request to authorize use of personal voices, which receives the authorization status as an argument.

<a id="Discussion"></a>

## Discussion

## See Also

### Enabling personal voices

- [personalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [availableVoicesDidChangeNotification](availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.

# requestPersonalVoiceAuthorizationWithCompletionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Prompts the user to authorize your app to use personal voices.

## Declaration

```objectivec
+ (void) requestPersonalVoiceAuthorizationWithCompletionHandler:(void (^)(AVSpeechSynthesisPersonalVoiceAuthorizationStatus status)) handler;
```

## Parameters

- `handler`: A completion handler that the system calls after the user responds to a request to authorize use of personal voices, which receives the authorization status as an argument.

<a id="Discussion"></a>

## Discussion

## See Also

### Enabling personal voices

- [personalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [AVSpeechSynthesisAvailableVoicesDidChangeNotification](availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [AVSpeechSynthesisPersonalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.
