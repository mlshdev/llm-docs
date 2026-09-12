> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionencoder/cancel(forpause:)](https://developer.apple.com/documentation/professional_video_applications/compressorextensionencoder/cancel(forpause:))

# cancel(forPause:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** ProVideo Encoder Extensions 1.0+

Pauses or cancels an encoding job.

## Declaration

```swift
func cancel(forPause: Bool) -> [AnyHashable : Any]!
```

## Parameters

- `forPause`: When set to true, pauses an encoding job. When set to false, cancels the job.

<a id="return-value"></a>

## Return Value

`nil` if the extension does not support resuming a job where it left off. Otherwise, it returns a dictionary with attributes defining the extension’s paused state.

<a id="discussion"></a>

## Discussion

Implement this method to pause or cancel an encoding job when the Compressor app requests to do so. If the extension supports resuming from a paused state, return the extension’s current state to the Compressor app. If the extension returns `nil`, an encoding job starts from the beginning when it resumes at a later point.

## See Also

### Canceling or Pausing the Encoding Process

- [setStateFromPause(\_:)](setstatefrompause%28__%29.md): Sets the extension to a previously saved state.
- [percentLostOnPause()](percentlostonpause%28%29.md): Returns the percentage of the encoding job lost on pausing.

# cancelForPause: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Pauses or cancels an encoding job.

## Declaration

```objectivec
- (NSDictionary *) cancelForPause:(BOOL) forPause;
```

## Parameters

- `forPause`: When set to true, pauses an encoding job. When set to false, cancels the job.

<a id="return-value"></a>

## Return Value

`nil` if the extension does not support resuming a job where it left off. Otherwise, it returns a dictionary with attributes defining the extension’s paused state.

<a id="discussion"></a>

## Discussion

Implement this method to pause or cancel an encoding job when the Compressor app requests to do so. If the extension supports resuming from a paused state, return the extension’s current state to the Compressor app. If the extension returns `nil`, an encoding job starts from the beginning when it resumes at a later point.

## See Also

### Canceling or Pausing the Encoding Process

- [setStateFromPause:](setstatefrompause%28__%29.md): Sets the extension to a previously saved state.
- [percentLostOnPause](percentlostonpause%28%29.md): Returns the percentage of the encoding job lost on pausing.
