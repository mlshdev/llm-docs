> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/downsample(_:decimationfactor:filter:)-40d8o](https://developer.apple.com/documentation/accelerate/vdsp/downsample(_:decimationfactor:filter:)-40d8o)

# downsample(\_:decimationFactor:filter:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns the downsampled single-precision vector.

## Declaration

```swift
static func downsample<T, U>(_ source: U, decimationFactor: Int, filter: T) -> [Float] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Float, U.Element == Float
```

## Mentioned In

- [Resampling a signal with decimation](../resampling-a-signal-with-decimation.md)

## See Also

### Real Vectors

- [Resampling a signal with decimation](../resampling-a-signal-with-decimation.md): Reduce the sample rate of a signal by specifying a decimation factor and applying a custom antialiasing filter.
- [downsample(\_:decimationFactor:filter:)](downsample%28__decimationfactor_filter_%29-1o8it.md): Returns the downsampled double-precision vector.
- [downsample(\_:decimationFactor:filter:result:)](downsample%28__decimationfactor_filter_result_%29-2y1iv.md): Calculates the downsampled double-precision vector.
- [downsample(\_:decimationFactor:filter:result:)](downsample%28__decimationfactor_filter_result_%29-1g4a.md): Calculates the downsampled single-precision vector.
