> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioapplication/recordpermission-swift.property](https://developer.apple.com/documentation/avfaudio/avaudioapplication/recordpermission-swift.property)

# recordPermission (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The app’s permission to record audio.

## Declaration

```swift
var recordPermission: AVAudioApplication.recordPermission { get }
```

<a id="Discussion"></a>

## Discussion

See [requestRecordPermission(completionHandler:)](requestrecordpermission%28completionhandler_%29.md) for more information.

## See Also

### Requesting audio recording permission

- [requestRecordPermission(completionHandler:)](requestrecordpermission%28completionhandler_%29.md): Determines whether the app has permission to record audio.
- [AVAudioApplication.recordPermission](recordpermission-swift.enum.md): Constants that indicate the app’s permission to record audio.

# recordPermission (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The app’s permission to record audio.

## Declaration

```objectivec
@property (readonly) AVAudioApplicationRecordPermission recordPermission;
```

<a id="Discussion"></a>

## Discussion

See [requestRecordPermissionWithCompletionHandler:](requestrecordpermission%28completionhandler_%29.md) for more information.

## See Also

### Requesting audio recording permission

- [requestRecordPermissionWithCompletionHandler:](requestrecordpermission%28completionhandler_%29.md): Determines whether the app has permission to record audio.
- [AVAudioApplicationRecordPermission](recordpermission-swift.enum.md): Constants that indicate the app’s permission to record audio.
