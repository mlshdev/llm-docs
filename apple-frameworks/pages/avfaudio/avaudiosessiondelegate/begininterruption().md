> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondelegate/begininterruption()](https://developer.apple.com/documentation/avfaudio/avaudiosessiondelegate/begininterruption())

# beginInterruption() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Called after your audio session is interrupted.

> No longer supported

## Declaration

```swift
optional func beginInterruption()
```

<a id="Discussion"></a>

## Discussion

By the time this interruption arrives, your audio has already stopped. Your application may be suspended or terminated following an interruption—for example, if a user chooses to take an incoming phone call. Use this method to adjust the user interface, and to save application state, as necessary.

## See Also

### Related Documentation

- [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875)

### Delegate Methods

- [endInterruption()](endinterruption%28%29.md): Deprecated. Called after your audio session interruption ends.
- [endInterruption(withFlags:)](endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.
- [inputIsAvailableChanged(\_:)](inputisavailablechanged%28__%29.md): Deprecated. Called after the availability of audio input changes on a device.

# beginInterruption (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Called after your audio session is interrupted.

> No longer supported

## Declaration

```objectivec
- (void) beginInterruption;
```

<a id="Discussion"></a>

## Discussion

By the time this interruption arrives, your audio has already stopped. Your application may be suspended or terminated following an interruption—for example, if a user chooses to take an incoming phone call. Use this method to adjust the user interface, and to save application state, as necessary.

## See Also

### Related Documentation

- [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875)

### Delegate Methods

- [endInterruption](endinterruption%28%29.md): Deprecated. Called after your audio session interruption ends.
- [endInterruptionWithFlags:](endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.
- [inputIsAvailableChanged:](inputisavailablechanged%28__%29.md): Deprecated. Called after the availability of audio input changes on a device.
