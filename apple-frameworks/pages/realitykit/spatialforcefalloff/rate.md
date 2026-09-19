> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/spatialforcefalloff/rate

# rate

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The spatial falloff / attenuation rate.

## Declaration

```swift
var rate: Double
```

<a id="discussion"></a>

## Discussion

An exponent that determines how the effect’s strength diminishes with distance. Use a non-negative rate.

- When the rate is **0**, no falloff occurs.
- When the rate is **greater than 0 and less than 1.0**, falloff occurs slower and is sublinear.
- When the rate is **1.0**, falloff is linear.
- When the rate is **greater than 1**, falloff occurs faster and is nonlinear.
