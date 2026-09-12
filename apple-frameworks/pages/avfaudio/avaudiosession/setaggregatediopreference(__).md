> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setaggregatediopreference(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setaggregatediopreference(_:))

# setAggregatedIOPreference(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the audio session’s aggregated I/O configuration preference.

## Declaration

```swift
func setAggregatedIOPreference(_ inIOType: AVAudioSession.IOType) throws
```

## Parameters

- `inIOType`: The aggregated I/O preference that you want to use.

<a id="Discussion"></a>

## Discussion

Starting with iOS 10, [AVCaptureSession](../../avfoundation/avcapturesession.md) has changed its default audio input configuration on iPhone and iPad devices that support the Live Photos feature. This change allows taking a Live Photo without interrupting background audio playback. Configure your preferred audio input behavior by setting your aggregated I/O preference.

Apps that use [AVCaptureSession](../../avfoundation/avcapturesession.md) in its default audio input configuration ([usesApplicationAudioSession](../../avfoundation/avcapturesession/usesapplicationaudiosession.md) `=` [true](https://developer.apple.com/documentation/swift/true), [automaticallyConfiguresApplicationAudioSession](../../avfoundation/avcapturesession/automaticallyconfiguresapplicationaudiosession.md) `=` [true](https://developer.apple.com/documentation/swift/true)), and that need to guarantee the same behavior as previous versions of iOS, should opt-out of this new behavior by setting the aggregated I/O preference to [AVAudioSession.IOType.aggregated](iotype/aggregated.md).

Apps that don’t use [AVCaptureSession](../../avfoundation/avcapturesession.md), or that use a capture session in its nondefault configuration, can ignore this preference. In these cases, there’s no change in behavior from previous versions of iOS.

## See Also

### Setting the aggregated I/O preference

- [AVAudioSession.IOType](iotype.md): Constant values used to specify the audio session’s aggregated I/O behavior.

# setAggregatedIOPreference:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the audio session’s aggregated I/O configuration preference.

## Declaration

```objectivec
- (BOOL) setAggregatedIOPreference:(AVAudioSessionIOType) inIOType error:(NSError **) outError;
```

## Parameters

- `inIOType`: The aggregated I/O preference that you want to use.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the preference was successfully changed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Starting with iOS 10, [AVCaptureSession](../../avfoundation/avcapturesession.md) has changed its default audio input configuration on iPhone and iPad devices that support the Live Photos feature. This change allows taking a Live Photo without interrupting background audio playback. Configure your preferred audio input behavior by setting your aggregated I/O preference.

Apps that use [AVCaptureSession](../../avfoundation/avcapturesession.md) in its default audio input configuration ([usesApplicationAudioSession](../../avfoundation/avcapturesession/usesapplicationaudiosession.md) `=` [true](https://developer.apple.com/documentation/swift/true), [automaticallyConfiguresApplicationAudioSession](../../avfoundation/avcapturesession/automaticallyconfiguresapplicationaudiosession.md) `=` [true](https://developer.apple.com/documentation/swift/true)), and that need to guarantee the same behavior as previous versions of iOS, should opt-out of this new behavior by setting the aggregated I/O preference to [AVAudioSessionIOTypeAggregated](iotype/aggregated.md).

Apps that don’t use [AVCaptureSession](../../avfoundation/avcapturesession.md), or that use a capture session in its nondefault configuration, can ignore this preference. In these cases, there’s no change in behavior from previous versions of iOS.

## See Also

### Setting the aggregated I/O preference

- [AVAudioSessionIOType](iotype.md): Constant values used to specify the audio session’s aggregated I/O behavior.
