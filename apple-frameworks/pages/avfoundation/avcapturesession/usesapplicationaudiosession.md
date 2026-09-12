> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/usesapplicationaudiosession](https://developer.apple.com/documentation/avfoundation/avcapturesession/usesapplicationaudiosession)

# usesApplicationAudioSession (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session uses the app’s shared audio session.

## Declaration

```swift
var usesApplicationAudioSession: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If you set the value to [false](https://developer.apple.com/documentation/swift/false), the capture session uses a private [AVAudioSession](../../avfaudio/avaudiosession.md) instance for audio recording, which may cause interruptions if your app uses its own audio session for playback.

## See Also

### Configuring the app’s audio session

- [automaticallyConfiguresApplicationAudioSession](automaticallyconfiguresapplicationaudiosession.md): A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.
- [configuresApplicationAudioSessionToMixWithOthers](configuresapplicationaudiosessiontomixwithothers.md): A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.

# usesApplicationAudioSession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session uses the app’s shared audio session.

## Declaration

```objectivec
@property (nonatomic) BOOL usesApplicationAudioSession;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If you set the value to [false](https://developer.apple.com/documentation/swift/false), the capture session uses a private [AVAudioSession](../../avfaudio/avaudiosession.md) instance for audio recording, which may cause interruptions if your app uses its own audio session for playback.

## See Also

### Configuring the app’s audio session

- [automaticallyConfiguresApplicationAudioSession](automaticallyconfiguresapplicationaudiosession.md): A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.
- [configuresApplicationAudioSessionToMixWithOthers](configuresapplicationaudiosessiontomixwithothers.md): A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.
