> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/requestmicrophoneinjectionpermission(completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudioapplication/requestmicrophoneinjectionpermission(completionhandler:))

# requestMicrophoneInjectionPermission(completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Requests the app’s permission to add audio to calls.

## Declaration

```swift
class func requestMicrophoneInjectionPermission(completionHandler response: @escaping @Sendable (AVAudioApplication.MicrophoneInjectionPermission) -> Void)
```

```swift
class func requestMicrophoneInjectionPermission() async -> AVAudioApplication.MicrophoneInjectionPermission
```

<a id="Discussion"></a>

## Discussion

The system immediately returns a response if a person has already granted or denied the app permission, or if the service is in a disabled state.  Otherwise, it presents a dialog to request permission and returns a result when a person dismisses the UI.

## See Also

### Requesting microphone injection permission

- [microphoneInjectionPermission](microphoneinjectionpermission-swift.property.md): A value that indicates an app’s permission to add audio to calls.
- [AVAudioApplication.MicrophoneInjectionPermission](microphoneinjectionpermission-swift.enum.md): Constants that indicate an app’s permission to add audio to calls.

# requestMicrophoneInjectionPermissionWithCompletionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.2+

Requests the app’s permission to add audio to calls.

## Declaration

```objectivec
+ (void) requestMicrophoneInjectionPermissionWithCompletionHandler:(void (^)(AVAudioApplicationMicrophoneInjectionPermission permission)) response;
```

<a id="Discussion"></a>

## Discussion

The system immediately returns a response if a person has already granted or denied the app permission, or if the service is in a disabled state.  Otherwise, it presents a dialog to request permission and returns a result when a person dismisses the UI.

## See Also

### Requesting microphone injection permission

- [microphoneInjectionPermission](microphoneinjectionpermission-swift.property.md): A value that indicates an app’s permission to add audio to calls.
- [AVAudioApplicationMicrophoneInjectionPermission](microphoneinjectionpermission-swift.enum.md): Constants that indicate an app’s permission to add audio to calls.
