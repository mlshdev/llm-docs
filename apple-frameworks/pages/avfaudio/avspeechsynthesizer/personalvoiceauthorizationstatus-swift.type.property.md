> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/personalvoiceauthorizationstatus-swift.type.property](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/personalvoiceauthorizationstatus-swift.type.property)

# personalVoiceAuthorizationStatus (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Your app’s authorization to use personal voices.

## Declaration

```swift
class var personalVoiceAuthorizationStatus: AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus { get }
```

<a id="Discussion"></a>

## Discussion

The user can grant or deny your app’s request to use personal voices when they’re initially prompted, and change the authorization in the Settings app. Additionally, the framework denies the request if the device doesn’t support using personal voices.

## See Also

### Enabling personal voices

- [availableVoicesDidChangeNotification](availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [requestPersonalVoiceAuthorization(completionHandler:)](requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.
- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.

# personalVoiceAuthorizationStatus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Your app’s authorization to use personal voices.

## Declaration

```objectivec
@property (class, nonatomic, readonly) AVSpeechSynthesisPersonalVoiceAuthorizationStatus personalVoiceAuthorizationStatus;
```

<a id="Discussion"></a>

## Discussion

The user can grant or deny your app’s request to use personal voices when they’re initially prompted, and change the authorization in the Settings app. Additionally, the framework denies the request if the device doesn’t support using personal voices.

## See Also

### Enabling personal voices

- [AVSpeechSynthesisAvailableVoicesDidChangeNotification](availablevoicesdidchangenotification.md): A notification that indicates a change in available voices for speech synthesis.
- [requestPersonalVoiceAuthorizationWithCompletionHandler:](requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.
- [AVSpeechSynthesisPersonalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.
