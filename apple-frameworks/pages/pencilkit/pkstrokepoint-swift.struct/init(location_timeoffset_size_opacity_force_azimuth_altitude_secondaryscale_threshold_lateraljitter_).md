> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokepoint-swift.struct/init(location:timeoffset:size:opacity:force:azimuth:altitude:secondaryscale:threshold:lateraljitter:)](https://developer.apple.com/documentation/pencilkit/pkstrokepoint-swift.struct/init(location:timeoffset:size:opacity:force:azimuth:altitude:secondaryscale:threshold:lateraljitter:))

# init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:lateralJitter:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a stroke point with the specified properties, including lateral jitter.

## Declaration

```swift
init(location: CGPoint, timeOffset: TimeInterval, size: CGSize, opacity: CGFloat, force: CGFloat, azimuth: CGFloat, altitude: CGFloat, secondaryScale: CGFloat, threshold: CGFloat, lateralJitter: CGFloat)
```

## See Also

### Creating a stroke point object

- [init(location:timeOffset:size:opacity:force:azimuth:altitude:)](init%28location_timeoffset_size_opacity_force_azimuth_altitude_%29.md): Creates a new point with the provided properties.
- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:)](init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_%29.md)
- [init(location:timeOffset:size:opacity:force:azimuth:altitude:secondaryScale:threshold:)](init%28location_timeoffset_size_opacity_force_azimuth_altitude_secondaryscale_threshold_%29.md): Creates a stroke point with the specified properties, including a rendering threshold.
