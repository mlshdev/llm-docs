> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingproviderfocusregion

# FoveatedStreamingProviderFocusRegion

**Framework:** Foveated Streaming  
**Kind:** Structure  
**Availability:** visionOS 27.0+

Eye input data that describes the approximate region that the end user is looking, relative to the device pose.

## Declaration

```swift
struct FoveatedStreamingProviderFocusRegion
```

## Topics

### Instance Properties

- [direction](foveatedstreamingproviderfocusregion/direction.md): The direction of the user’s gaze in device-relative coordinates.
- [distance](foveatedstreamingproviderfocusregion/distance.md): The estimated distance to the user’s focal point, in meters.
- [timestamp](foveatedstreamingproviderfocusregion/timestamp.md): The timestamp at which this focus region sample was captured, in the format returned by `CACurrentMediaTime()`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
