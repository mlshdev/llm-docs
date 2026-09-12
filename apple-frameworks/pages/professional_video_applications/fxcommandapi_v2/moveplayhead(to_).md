> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcommandapi_v2/moveplayhead(to:)](https://developer.apple.com/documentation/professional_video_applications/fxcommandapi_v2/moveplayhead(to:))

# movePlayhead(to:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2+

Moves the playhead to the desired time.

## Declaration

```swift
func movePlayhead(to playheadTime: CMTime) throws
```

## Parameters

- `playheadTime`: The time at which you want the playhead to be positioned.

# movePlayheadToTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Moves the playhead to the desired time.

## Declaration

```objectivec
- (BOOL) movePlayheadToTime:(CMTime) playheadTime error:(NSError * *) error;
```

## Parameters

- `playheadTime`: The time at which you want the playhead to be positioned.
- `error`: Returns information about what went wrong upon failure.

<a id="return-value"></a>

## Return Value

A Boolean that indicates whether the application successfully moved the playhead. If the result is `NO`, the error parameter will have a description of what went wrong.
