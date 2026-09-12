> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesession/configuresapplicationaudiosessiontomixwithothers](https://developer.apple.com/documentation/avfoundation/avcapturesession/configuresapplicationaudiosessiontomixwithothers)

# configuresApplicationAudioSessionToMixWithOthers (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+

A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.

## Declaration

```swift
var configuresApplicationAudioSessionToMixWithOthers: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a capture session’s audio session interrupts the audio of other apps. To enable background audio from other apps to continue while capturing video, set this value to [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  This property value has no effect when the value of [usesApplicationAudioSession](usesapplicationaudiosession.md) is [false](https://developer.apple.com/documentation/swift/false). It also has no effect on Live Photo movie complement capture (where music is always mixed).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the app’s audio session

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that indicates whether the capture session uses the app’s shared audio session.
- [automaticallyConfiguresApplicationAudioSession](automaticallyconfiguresapplicationaudiosession.md): A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.

# configuresApplicationAudioSessionToMixWithOthers (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+

A Boolean value that Indicates whether the capture session configures the app’s audio session to mix with others.

## Declaration

```objectivec
@property (nonatomic) BOOL configuresApplicationAudioSessionToMixWithOthers;
```

<a id="Discussion"></a>

## Discussion

By default, a capture session’s audio session interrupts the audio of other apps. To enable background audio from other apps to continue while capturing video, set this value to [true](https://developer.apple.com/documentation/swift/true).

> **Note**

>  This property value has no effect when the value of [usesApplicationAudioSession](usesapplicationaudiosession.md) is [false](https://developer.apple.com/documentation/swift/false). It also has no effect on Live Photo movie complement capture (where music is always mixed).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the app’s audio session

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that indicates whether the capture session uses the app’s shared audio session.
- [automaticallyConfiguresApplicationAudioSession](automaticallyconfiguresapplicationaudiosession.md): A Boolean value that indicates whether the capture session automatically changes settings in the app’s shared audio session.
- [configuresApplicationAudioSessionForBluetoothHighQualityRecording](configuresapplicationaudiosessionforbluetoothhighqualityrecording.md): A Boolean value that indicates whether the capture session configures the app’s audio session for bluetooth high-quality recording.
