> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/settimesample(at:time:value:)-3ot1j](https://developer.apple.com/documentation/usdkit/usdlayer/settimesample(at:time:value:)-3ot1j)

# setTimeSample(at:time:value:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the time-sampled value for the attribute at the given path at the specified time, wrapping the typed value in a `USDValue`.

## Declaration

```swift
func setTimeSample<T>(at path: USDLayer.Path, time: USDLayer.TimeCode, value: T) where T : USDValueProtocol
```

## Parameters

- `path`: The attribute path.
- `time`: The time at which to author.
- `value`: The typed sample value.

## See Also

### Working with time samples

- [timeSample(at:time:)](timesample%28at_time_%29.md): Returns the time-sampled value for the attribute at the given path at the specified time, or `nil` if none is authored at that time.
- [timeSamples(at:)](timesamples%28at_%29.md): Returns the time codes for which the attribute at the given path has authored time samples.
- [allTimeSamples](alltimesamples.md): All time codes for which any attribute in the layer has an authored time sample.
- [setTimeSample(at:time:value:)](settimesample%28at_time_value_%29-6t3qd.md): Sets the time-sampled value for the attribute at the given path at the specified time.
- [eraseTimeSample(at:time:)](erasetimesample%28at_time_%29.md): Erases the authored time sample at the given path and time.
