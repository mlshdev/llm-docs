> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxkeyframe/init(version:time:segmentstyle:intangentx:intangenty:outtangentx:outtangenty:)](https://developer.apple.com/documentation/professional_video_applications/fxkeyframe/init(version:time:segmentstyle:intangentx:intangenty:outtangentx:outtangenty:))

# init(version:time:segmentStyle:inTangentX:inTangentY:outTangentX:outTangentY:)

**Framework:** Professional Video Applications  
**Kind:** Initializer  
**Availability:** FxPlug 4.1+

Contains information about a single keyframe.

## Declaration

```swift
init(version: Int, time: CMTime, segmentStyle: FxKeyframeSegmentStyle, inTangentX: Double, inTangentY: Double, outTangentX: Double, outTangentY: Double)
```

## Parameters

- `version`: Which version of the keyframe structure this is.
- `time`: The CMTime at which this information is valid.
- `segmentStyle`: The type of segment between this keyframe and the next.
- `inTangentX`: The incoming tangent’s x coordinate.
- `inTangentY`: The incoming tangent’s y coordinate.
- `outTangentX`: The outgoing tangent’s x coordinate.
- `outTangentY`: The outgoing tangent’s y coordinate.

<a id="discussion"></a>

## Discussion

Note that this is not an FxKeyframeInfo type and should only be used for FxPlug 4 style plug-ins.

## See Also

### Initializers

- [init()](init%28%29.md)
