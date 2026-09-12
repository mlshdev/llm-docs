> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/downsample(_:decimationfactor:filter:result:)-2y1iv](https://developer.apple.com/documentation/accelerate/vdsp/downsample(_:decimationfactor:filter:result:)-2y1iv)

# downsample(\_:decimationFactor:filter:result:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calculates the downsampled double-precision vector.

## Declaration

```swift
static func downsample<T, U, V>(_ source: U, decimationFactor: Int, filter: T, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Double, U.Element == Double, V.Element == Double
```

## See Also

### Real Vectors

- [Resampling a signal with decimation](../resampling-a-signal-with-decimation.md): Reduce the sample rate of a signal by specifying a decimation factor and applying a custom antialiasing filter.
- [downsample(\_:decimationFactor:filter:)](downsample%28__decimationfactor_filter_%29-1o8it.md): Returns the downsampled double-precision vector.
- [downsample(\_:decimationFactor:filter:)](downsample%28__decimationfactor_filter_%29-40d8o.md): Returns the downsampled single-precision vector.
- [downsample(\_:decimationFactor:filter:result:)](downsample%28__decimationfactor_filter_result_%29-1g4a.md): Calculates the downsampled single-precision vector.
