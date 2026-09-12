> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/virtualenvironmentprobecomponent/source-swift.enum/blend(from:to:t:)](https://developer.apple.com/documentation/realitykit/virtualenvironmentprobecomponent/source-swift.enum/blend(from:to:t:))

# VirtualEnvironmentProbeComponent.Source.blend(from:to:t:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A source that blends between two pregenerated probes based on the provided blend factor.

## Declaration

```swift
case blend(from: VirtualEnvironmentProbeComponent.Probe, to: VirtualEnvironmentProbeComponent.Probe, t: Float)
```

<a id="discussion"></a>

## Discussion

The blend factor is in the range `[0.0, 1.0]` where a value of `0.0` uses only the first probe, and `1.0` uses only the second probe.
