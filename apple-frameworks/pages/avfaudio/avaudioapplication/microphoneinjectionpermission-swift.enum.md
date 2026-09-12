> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/microphoneinjectionpermission-swift.enum](https://developer.apple.com/documentation/avfaudio/avaudioapplication/microphoneinjectionpermission-swift.enum)

# AVAudioApplication.MicrophoneInjectionPermission (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate an app’s permission to add audio to calls.

## Declaration

```swift
enum MicrophoneInjectionPermission
```

## Topics

### Permissions

- [AVAudioApplication.MicrophoneInjectionPermission.serviceDisabled](microphoneinjectionpermission-swift.enum/servicedisabled.md): A person disables this service for all apps.
- [AVAudioApplication.MicrophoneInjectionPermission.undetermined](microphoneinjectionpermission-swift.enum/undetermined.md): The app hasn’t requested a person’s permission to add audio to calls.
- [AVAudioApplication.MicrophoneInjectionPermission.granted](microphoneinjectionpermission-swift.enum/granted.md): A person grants the app permission to add audio to calls.
- [AVAudioApplication.MicrophoneInjectionPermission.denied](microphoneinjectionpermission-swift.enum/denied.md): A person denies the app permission to add audio to calls.

### Initializers

- [init(rawValue:)](microphoneinjectionpermission-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting microphone injection permission

- [requestMicrophoneInjectionPermission(completionHandler:)](requestmicrophoneinjectionpermission%28completionhandler_%29.md): Requests the app’s permission to add audio to calls.
- [microphoneInjectionPermission](microphoneinjectionpermission-swift.property.md): A value that indicates an app’s permission to add audio to calls.

# AVAudioApplicationMicrophoneInjectionPermission (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate an app’s permission to add audio to calls.

## Declaration

```objectivec
enum AVAudioApplicationMicrophoneInjectionPermission : NSInteger;
```

## Topics

### Permissions

- [AVAudioApplicationMicrophoneInjectionPermissionServiceDisabled](microphoneinjectionpermission-swift.enum/servicedisabled.md): A person disables this service for all apps.
- [AVAudioApplicationMicrophoneInjectionPermissionUndetermined](microphoneinjectionpermission-swift.enum/undetermined.md): The app hasn’t requested a person’s permission to add audio to calls.
- [AVAudioApplicationMicrophoneInjectionPermissionGranted](microphoneinjectionpermission-swift.enum/granted.md): A person grants the app permission to add audio to calls.
- [AVAudioApplicationMicrophoneInjectionPermissionDenied](microphoneinjectionpermission-swift.enum/denied.md): A person denies the app permission to add audio to calls.

## See Also

### Requesting microphone injection permission

- [requestMicrophoneInjectionPermissionWithCompletionHandler:](requestmicrophoneinjectionpermission%28completionhandler_%29.md): Requests the app’s permission to add audio to calls.
- [microphoneInjectionPermission](microphoneinjectionpermission-swift.property.md): A value that indicates an app’s permission to add audio to calls.
