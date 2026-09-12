> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/starttimecode](https://developer.apple.com/documentation/usdkit/usdlayer/starttimecode)

# startTimeCode

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The first time code in the layer’s animation range. `nil` if not authored.

## Declaration

```swift
var startTimeCode: USDLayer.TimeCode? { get nonmutating set }
```

## See Also

### Setting the time range

- [endTimeCode](endtimecode.md): The last time code in the layer’s animation range. `nil` if not authored.
- [timeCodesPerSecond](timecodespersecond.md): The rate at which time codes advance per second. `nil` if not authored.
- [USDLayer.TimeCode](timecode.md): A time value in USD, typically used for animation keyframe times.
- [USDLayer.TimeOffset](timeoffset.md): A time transformation applied when composing layers.
