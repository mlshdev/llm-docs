> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondelegate/inputisavailablechanged(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosessiondelegate/inputisavailablechanged(_:))

# inputIsAvailableChanged(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Called after the availability of audio input changes on a device.

> No longer supported

## Declaration

```swift
optional func inputIsAvailableChanged(_ isInputAvailable: Bool)
```

## Parameters

- `isInputAvailable`: [true](https://developer.apple.com/documentation/swift/true) if audio input is now available, or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Delegate Methods

- [beginInterruption()](begininterruption%28%29.md): Deprecated. Called after your audio session is interrupted.
- [endInterruption()](endinterruption%28%29.md): Deprecated. Called after your audio session interruption ends.
- [endInterruption(withFlags:)](endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.

# inputIsAvailableChanged: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 6.0) · iPadOS 3.0+ (deprecated in 6.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Called after the availability of audio input changes on a device.

> No longer supported

## Declaration

```objectivec
- (void) inputIsAvailableChanged:(BOOL) isInputAvailable;
```

## Parameters

- `isInputAvailable`: [true](https://developer.apple.com/documentation/swift/true) if audio input is now available, or [false](https://developer.apple.com/documentation/swift/false) if it is not.

## See Also

### Delegate Methods

- [beginInterruption](begininterruption%28%29.md): Deprecated. Called after your audio session is interrupted.
- [endInterruption](endinterruption%28%29.md): Deprecated. Called after your audio session interruption ends.
- [endInterruptionWithFlags:](endinterruption%28withflags_%29.md): Deprecated. Called after your audio session interruption ends, with flags indicating the state of the audio session.
