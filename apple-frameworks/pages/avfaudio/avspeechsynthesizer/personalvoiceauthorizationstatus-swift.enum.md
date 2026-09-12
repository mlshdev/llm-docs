> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/personalvoiceauthorizationstatus-swift.enum](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/personalvoiceauthorizationstatus-swift.enum)

# AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An enumeration that models the personal voices authorization status.

## Declaration

```swift
enum PersonalVoiceAuthorizationStatus
```

## Topics

### Authorization statuses

- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus.authorized](personalvoiceauthorizationstatus-swift.enum/authorized.md): The user granted your app’s request to use personal voices.
- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus.denied](personalvoiceauthorizationstatus-swift.enum/denied.md): The user denied your app’s request to use personal voices.
- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus.notDetermined](personalvoiceauthorizationstatus-swift.enum/notdetermined.md): The app hasn’t requested authorization to use personal voices.
- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus.unsupported](personalvoiceauthorizationstatus-swift.enum/unsupported.md): The device doesn’t support personal voices.

### Initializers

- [init(rawValue:)](personalvoiceauthorizationstatus-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enabling personal voices

- [personalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [availableVoicesDidChangeNotification](availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [requestPersonalVoiceAuthorization(completionHandler:)](requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.

# AVSpeechSynthesisPersonalVoiceAuthorizationStatus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An enumeration that models the personal voices authorization status.

## Declaration

```objectivec
enum AVSpeechSynthesisPersonalVoiceAuthorizationStatus : NSUInteger;
```

## Topics

### Authorization statuses

- [AVSpeechSynthesisPersonalVoiceAuthorizationStatusAuthorized](personalvoiceauthorizationstatus-swift.enum/authorized.md): The user granted your app’s request to use personal voices.
- [AVSpeechSynthesisPersonalVoiceAuthorizationStatusDenied](personalvoiceauthorizationstatus-swift.enum/denied.md): The user denied your app’s request to use personal voices.
- [AVSpeechSynthesisPersonalVoiceAuthorizationStatusNotDetermined](personalvoiceauthorizationstatus-swift.enum/notdetermined.md): The app hasn’t requested authorization to use personal voices.
- [AVSpeechSynthesisPersonalVoiceAuthorizationStatusUnsupported](personalvoiceauthorizationstatus-swift.enum/unsupported.md): The device doesn’t support personal voices.

## See Also

### Enabling personal voices

- [personalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [AVSpeechSynthesisAvailableVoicesDidChangeNotification](availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [requestPersonalVoiceAuthorizationWithCompletionHandler:](requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.
