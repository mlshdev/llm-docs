> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/timedforcefalloff/init(duration:rate:)

# init(duration:rate:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a timed force falloff.

## Declaration

```swift
init(duration: TimeInterval, rate: Double = 1.0)
```

## Parameters

- `duration`: The lifetime of the effect in seconds.
- `rate`: Controls how fast or slow falloff occurs.

<a id="discussion"></a>

## Discussion

- When the rate is **0**, no falloff occurs. (Rigid bodies outside the bounds are culled.)
- When the rate is **greater than 0 and less than 1.0**, falloff occurs slower and is sublinear.
- When the rate is **1.0**, falloff is linear.
- When the rate is **greater than 1**, falloff occurs faster and is nonlinear.
