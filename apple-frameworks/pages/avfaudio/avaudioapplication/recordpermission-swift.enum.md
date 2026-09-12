> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/recordpermission-swift.enum](https://developer.apple.com/documentation/avfaudio/avaudioapplication/recordpermission-swift.enum)

# AVAudioApplication.recordPermission (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the app’s permission to record audio.

## Declaration

```swift
enum recordPermission
```

## Topics

### Permissions

- [AVAudioApplication.recordPermission.undetermined](recordpermission-swift.enum/undetermined.md): Indicates the app hasn’t requested recording permission.
- [AVAudioApplication.recordPermission.granted](recordpermission-swift.enum/granted.md): Indicates the user grants the app permission to record audio.
- [AVAudioApplication.recordPermission.denied](recordpermission-swift.enum/denied.md): Indicates the user denies the app permission to record audio.

### Initializers

- [init(rawValue:)](recordpermission-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting audio recording permission

- [requestRecordPermission(completionHandler:)](requestrecordpermission%28completionhandler_%29.md): Determines whether the app has permission to record audio.
- [recordPermission](recordpermission-swift.property.md): The app’s permission to record audio.

# AVAudioApplicationRecordPermission (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the app’s permission to record audio.

## Declaration

```objectivec
enum AVAudioApplicationRecordPermission : NSInteger;
```

## Topics

### Permissions

- [AVAudioApplicationRecordPermissionUndetermined](recordpermission-swift.enum/undetermined.md): Indicates the app hasn’t requested recording permission.
- [AVAudioApplicationRecordPermissionGranted](recordpermission-swift.enum/granted.md): Indicates the user grants the app permission to record audio.
- [AVAudioApplicationRecordPermissionDenied](recordpermission-swift.enum/denied.md): Indicates the user denies the app permission to record audio.

## See Also

### Requesting audio recording permission

- [requestRecordPermissionWithCompletionHandler:](requestrecordpermission%28completionhandler_%29.md): Determines whether the app has permission to record audio.
- [recordPermission](recordpermission-swift.property.md): The app’s permission to record audio.
