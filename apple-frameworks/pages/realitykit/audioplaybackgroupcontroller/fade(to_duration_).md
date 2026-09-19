> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audioplaybackgroupcontroller/fade(to:duration:)

# fade(to:duration:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Transitions the gain to the given value over a time interval using a linear curve for all audio resources in the group.

## Declaration

```swift
@MainActor @preconcurrency func fade(to newValue: Audio.Decibel, duration: TimeInterval)
```

## Parameters

- `newValue`: The target decibel level.
- `duration`: How long in seconds the fade should last.

<a id="discussion"></a>

## Discussion

The target gain must be zero or negative, where zero is nominal loudness and negative infinity is silent. If the gain is positive, it will be reset to zero.
