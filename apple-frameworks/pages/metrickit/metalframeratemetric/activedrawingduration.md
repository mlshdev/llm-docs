> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/metalframeratemetric/activedrawingduration

# activeDrawingDuration

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The duration of time spent actively producing new frames

## Declaration

```swift
let activeDrawingDuration: Measurement<UnitDuration>
```

## See Also

### Frame rate

- [framesPerSecond](framespersecond.md): The frame rate associated with this `CAMetalLayer`
- [frameCount](framecount.md): The total Metal drawable count
