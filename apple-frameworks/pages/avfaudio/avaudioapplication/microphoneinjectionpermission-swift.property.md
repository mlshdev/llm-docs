> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/microphoneinjectionpermission-swift.property](https://developer.apple.com/documentation/avfaudio/avaudioapplication/microphoneinjectionpermission-swift.property)

# microphoneInjectionPermission (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A value that indicates an app’s permission to add audio to calls.

## Declaration

```swift
var microphoneInjectionPermission: AVAudioApplication.MicrophoneInjectionPermission { get }
```

## See Also

### Requesting microphone injection permission

- [requestMicrophoneInjectionPermission(completionHandler:)](requestmicrophoneinjectionpermission%28completionhandler_%29.md): Requests the app’s permission to add audio to calls.
- [AVAudioApplication.MicrophoneInjectionPermission](microphoneinjectionpermission-swift.enum.md): Constants that indicate an app’s permission to add audio to calls.

# microphoneInjectionPermission (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

A value that indicates an app’s permission to add audio to calls.

## Declaration

```objectivec
@property (readonly) AVAudioApplicationMicrophoneInjectionPermission microphoneInjectionPermission;
```

## See Also

### Requesting microphone injection permission

- [requestMicrophoneInjectionPermissionWithCompletionHandler:](requestmicrophoneinjectionpermission%28completionhandler_%29.md): Requests the app’s permission to add audio to calls.
- [AVAudioApplicationMicrophoneInjectionPermission](microphoneinjectionpermission-swift.enum.md): Constants that indicate an app’s permission to add audio to calls.
