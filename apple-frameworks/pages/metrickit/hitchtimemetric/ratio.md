> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/hitchtimemetric/ratio

# ratio

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Ratio of time the application spent hitching during tracked animations.

## Declaration

```swift
let ratio: Measurement<HitchTimeRatio>
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

## See Also

### Measurements

- [totalHitchTime](totalhitchtime.md): Total time the application spent hitching during tracked animations.
- [totalAnimationTime](totalanimationtime.md): Total time the application spent animating.
