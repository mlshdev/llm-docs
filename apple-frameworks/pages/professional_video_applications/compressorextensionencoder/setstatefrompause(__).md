> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/setstatefrompause(_:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/setstatefrompause(_:))

# setStateFromPause(\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Sets the extension to a previously saved state.

## Declaration

```swift
func setStateFromPause(_ pausedState: [AnyHashable : Any]!)
```

## Parameters

- `pausedState`: A set of attributes specifying the extension’s previously saved state information.

<a id="discussion"></a>

## Discussion

The Compressor app calls this method before resuming an encoding job. The Compressor app provides attributes an extension requires to resume an encoding job from the point at which the encoding stopped. These attributes are the ones the extension passed to the Compressor app while pausing an encoder job. If the attributes dictionary is empty, the extension restarts the encoding job from the beginning. See [cancel(forPause:)](cancel%28forpause_%29.md).

The Compressor app resumes the encoding job by calling the [runTranscode(for:start:duration:toFile:startTimeCode:)](runtranscode%28for_start_duration_tofile_starttimecode_%29.md) method.

## See Also

### Canceling or Pausing the Encoding Process

- [cancel(forPause:)](cancel%28forpause_%29.md): Pauses or cancels an encoding job.
- [percentLostOnPause()](percentlostonpause%28%29.md): Returns the percentage of the encoding job lost on pausing.

# setStateFromPause: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the extension to a previously saved state.

## Declaration

```objectivec
- (void) setStateFromPause:(NSDictionary *) pausedState;
```

## Parameters

- `pausedState`: A set of attributes specifying the extension’s previously saved state information.

<a id="discussion"></a>

## Discussion

The Compressor app calls this method before resuming an encoding job. The Compressor app provides attributes an extension requires to resume an encoding job from the point at which the encoding stopped. These attributes are the ones the extension passed to the Compressor app while pausing an encoder job. If the attributes dictionary is empty, the extension restarts the encoding job from the beginning. See [cancelForPause:](cancel%28forpause_%29.md).

The Compressor app resumes the encoding job by calling the [runTranscodeFor:start:duration:toFile:startTimeCode:](runtranscode%28for_start_duration_tofile_starttimecode_%29.md) method.

## See Also

### Canceling or Pausing the Encoding Process

- [cancelForPause:](cancel%28forpause_%29.md): Pauses or cancels an encoding job.
- [percentLostOnPause](percentlostonpause%28%29.md): Returns the percentage of the encoding job lost on pausing.
