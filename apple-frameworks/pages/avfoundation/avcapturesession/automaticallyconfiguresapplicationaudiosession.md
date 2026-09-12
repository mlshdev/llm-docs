> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/automaticallyconfiguresapplicationaudiosession](https://developer.apple.com/documentation/avfoundation/avcapturesession/automaticallyconfiguresapplicationaudiosession)

# automaticallyConfiguresApplicationAudioSession (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.

## Declaration

```swift
var automaticallyConfiguresApplicationAudioSession: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property only takes effect if the value of the [usesApplicationAudioSession](usesapplicationaudiosession.md) property is [true](https://developer.apple.com/documentation/swift/true).

The value of this property defaults to [true](https://developer.apple.com/documentation/swift/true), causing the capture session to automatically configure the app’s shared [AVAudioSession](../../avfaudio/avaudiosession.md) instance for optimal recording. For example, if the capture session uses a device’s rear-facing camera, the system sets the audio session’s microphone and polar pattern for optimal recording of sound from that direction. The audio session’s original state isn’t restored after capture finishes.

If you set value to [false](https://developer.apple.com/documentation/swift/false), your app is responsible for selecting appropriate audio session settings. Recording may fail if the audio session’s settings are incompatible with the capture session.

## See Also

### Configuring the app’s audio session

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that indicates whether the capture session uses the app’s shared audio session.
- [configuresApplicationAudioSessionToMixWithOthers](configuresapplicationaudiosessiontomixwithothers.md): A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.

# automaticallyConfiguresApplicationAudioSession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyConfiguresApplicationAudioSession;
```

<a id="Discussion"></a>

## Discussion

This property only takes effect if the value of the [usesApplicationAudioSession](usesapplicationaudiosession.md) property is [true](https://developer.apple.com/documentation/swift/true).

The value of this property defaults to [true](https://developer.apple.com/documentation/swift/true), causing the capture session to automatically configure the app’s shared [AVAudioSession](../../avfaudio/avaudiosession.md) instance for optimal recording. For example, if the capture session uses a device’s rear-facing camera, the system sets the audio session’s microphone and polar pattern for optimal recording of sound from that direction. The audio session’s original state isn’t restored after capture finishes.

If you set value to [false](https://developer.apple.com/documentation/swift/false), your app is responsible for selecting appropriate audio session settings. Recording may fail if the audio session’s settings are incompatible with the capture session.

## See Also

### Configuring the app’s audio session

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that indicates whether the capture session uses the app’s shared audio session.
- [configuresApplicationAudioSessionToMixWithOthers](configuresapplicationaudiosessiontomixwithothers.md): A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.
