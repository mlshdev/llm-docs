> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/percentlostonpause()](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/percentlostonpause())

# percentLostOnPause() (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Returns the percentage of the encoding job lost on pausing.

## Declaration

```swift
func percentLostOnPause() -> Double
```

<a id="discussion"></a>

## Discussion

When a user requests to pause an encoding job, the Compressor app displays a value between 0 and 100 to indicate the percentage of the encoding job lost on pausing.

## See Also

### Canceling or Pausing the Encoding Process

- [cancel(forPause:)](cancel%28forpause_%29.md): Pauses or cancels an encoding job.
- [setStateFromPause(\_:)](setstatefrompause%28__%29.md): Sets the extension to a previously saved state.

# percentLostOnPause (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the percentage of the encoding job lost on pausing.

## Declaration

```objectivec
- (double) percentLostOnPause;
```

<a id="discussion"></a>

## Discussion

When a user requests to pause an encoding job, the Compressor app displays a value between 0 and 100 to indicate the percentage of the encoding job lost on pausing.

## See Also

### Canceling or Pausing the Encoding Process

- [cancelForPause:](cancel%28forpause_%29.md): Pauses or cancels an encoding job.
- [setStateFromPause:](setstatefrompause%28__%29.md): Sets the extension to a previously saved state.
