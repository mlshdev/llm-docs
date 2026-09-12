> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondelegate/endinterruption()](https://developer.apple.com/documentation/avfaudio/avaudiosessiondelegate/endinterruption())

# endInterruption() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Called after your audio session interruption ends.

> No longer supported

## Declaration

```swift
optional func endInterruption()
```

<a id="Discussion"></a>

## Discussion

The [endInterruption(withFlags:)](endinterruption%28withflags_%29.md) method provides you with more information upon interruption end than this method does. Apple recommends that you use [endInterruption(withFlags:)](endinterruption%28withflags_%29.md) instead of this method.

If you implement the [endInterruption(withFlags:)](endinterruption%28withflags_%29.md) method, that method is called instead of this one when an interruption ends.

To resume using audio after an interruption ends, you must ensure that your audio session is active. [AVAudioPlayer](../avaudioplayer.md) and [AVAudioRecorder](../avaudiorecorder.md) instances reactivate your audio session automatically when an interruption ends. If you are using another audio technology, such as OpenAL, audio units, or audio queues, you must reactivate your audio session yourself before you can again use audio.

You can also use this method to update the user interface and application state, as necessary.

## See Also

### Delegate Methods

- [beginInterruption()](begininterruption%28%29.md): Deprecated. Called after your audio session is interrupted.
- [endInterruption(withFlags:)](endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.
- [inputIsAvailableChanged(\_:)](inputisavailablechanged%28__%29.md): Deprecated. Called after the availability of audio input changes on a device.

# endInterruption (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Called after your audio session interruption ends.

> No longer supported

## Declaration

```objectivec
- (void) endInterruption;
```

<a id="Discussion"></a>

## Discussion

The [endInterruptionWithFlags:](endinterruption%28withflags_%29.md) method provides you with more information upon interruption end than this method does. Apple recommends that you use [endInterruptionWithFlags:](endinterruption%28withflags_%29.md) instead of this method.

If you implement the [endInterruptionWithFlags:](endinterruption%28withflags_%29.md) method, that method is called instead of this one when an interruption ends.

To resume using audio after an interruption ends, you must ensure that your audio session is active. [AVAudioPlayer](../avaudioplayer.md) and [AVAudioRecorder](../avaudiorecorder.md) instances reactivate your audio session automatically when an interruption ends. If you are using another audio technology, such as OpenAL, audio units, or audio queues, you must reactivate your audio session yourself before you can again use audio.

You can also use this method to update the user interface and application state, as necessary.

## See Also

### Delegate Methods

- [beginInterruption](begininterruption%28%29.md): Deprecated. Called after your audio session is interrupted.
- [endInterruptionWithFlags:](endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.
- [inputIsAvailableChanged:](inputisavailablechanged%28__%29.md): Deprecated. Called after the availability of audio input changes on a device.
