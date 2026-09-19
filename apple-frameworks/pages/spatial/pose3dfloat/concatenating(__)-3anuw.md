> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/pose3dfloat/concatenating(_:)-3anuw

# concatenating(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a transform that’s constructed by concatenating two a pose and a scaled pose.

## Declaration

```swift
func concatenating(_ transform: ScaledPose3DFloat) -> ScaledPose3DFloat
```

## Parameters

- `transform`: The second scaled pose.
