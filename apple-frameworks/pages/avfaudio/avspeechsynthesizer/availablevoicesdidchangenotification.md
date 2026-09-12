> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/availablevoicesdidchangenotification](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/availablevoicesdidchangenotification)

# availableVoicesDidChangeNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A notification that indicates a change in available voices for speech synthesis.

## Declaration

```swift
class let availableVoicesDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when available voices for speech synthesis on the system change. For example, a new personal voice becomes available and the user authorized the app to access personal voices. Or new 3rd party voices become available through an app the user downloads.

## See Also

### Enabling personal voices

- [personalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [requestPersonalVoiceAuthorization(completionHandler:)](requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.
- [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.

# AVSpeechSynthesisAvailableVoicesDidChangeNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A notification that indicates a change in available voices for speech synthesis.

## Declaration

```objectivec
extern NSNotificationName AVSpeechSynthesisAvailableVoicesDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification when available voices for speech synthesis on the system change. For example, a new personal voice becomes available and the user authorized the app to access personal voices. Or new 3rd party voices become available through an app the user downloads.

## See Also

### Enabling personal voices

- [personalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.type.property.md): Your app’s authorization to use personal voices.
- [requestPersonalVoiceAuthorizationWithCompletionHandler:](requestpersonalvoiceauthorization%28completionhandler_%29.md): Prompts the user to authorize your app to use personal voices.
- [AVSpeechSynthesisPersonalVoiceAuthorizationStatus](personalvoiceauthorizationstatus-swift.enum.md): An enumeration that models the personal voices authorization status.
