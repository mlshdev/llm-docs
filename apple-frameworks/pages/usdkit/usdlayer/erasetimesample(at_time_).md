> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/erasetimesample(at:time:)](https://developer.apple.com/documentation/usdkit/usdlayer/erasetimesample(at:time:))

# eraseTimeSample(at:time:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Erases the authored time sample at the given path and time.

## Declaration

```swift
func eraseTimeSample(at path: USDLayer.Path, time: USDLayer.TimeCode)
```

## Parameters

- `path`: The attribute path.
- `time`: The time of the sample to erase.

## See Also

### Working with time samples

- [timeSample(at:time:)](timesample%28at_time_%29.md): Returns the time-sampled value for the attribute at the given path at the specified time, or `nil` if none is authored at that time.
- [timeSamples(at:)](timesamples%28at_%29.md): Returns the time codes for which the attribute at the given path has authored time samples.
- [allTimeSamples](alltimesamples.md): All time codes for which any attribute in the layer has an authored time sample.
- [setTimeSample(at:time:value:)](settimesample%28at_time_value_%29-6t3qd.md): Sets the time-sampled value for the attribute at the given path at the specified time.
- [setTimeSample(at:time:value:)](settimesample%28at_time_value_%29-3ot1j.md): Sets the time-sampled value for the attribute at the given path at the specified time, wrapping the typed value in a `USDValue`.
