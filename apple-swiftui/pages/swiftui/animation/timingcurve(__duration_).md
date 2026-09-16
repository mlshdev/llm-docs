> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/animation/timingcurve(_:duration:)

# timingCurve(\_:duration:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new animation with speed controlled by the given curve.

## Declaration

```swift
static func timingCurve(_ curve: UnitCurve, duration: TimeInterval) -> Animation
```

## Parameters

- `curve`: A curve that describes the speed of the animation over its duration.
- `duration`: The duration of the animation, in seconds.

## See Also

### Creating custom animations

- [init(\_:)](init%28__%29.md): Create an `Animation` that contains the specified custom animation.
- [timingCurve(\_:\_:\_:\_:duration:)](timingcurve%28________duration_%29.md): An animation created from a cubic Bézier timing curve.
