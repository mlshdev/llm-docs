> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/timecodespersecond](https://developer.apple.com/documentation/usdkit/usdstage/timecodespersecond)

# timeCodesPerSecond

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of time codes per second of playback for this stage.

## Declaration

```swift
var timeCodesPerSecond: Double { get nonmutating set }
```

## See Also

### Working with time codes

- [timeCodeRange](timecoderange.md): The range of time codes over which this stage has authored animation.
- [USDStage.TimeCode](timecode.md): A unitless point in time, used with time-varying values authored in 3D scenes.
