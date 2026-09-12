> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/timingcurve(_:duration:)](https://developer.apple.com/documentation/swiftui/animation/timingcurve(_:duration:))

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

- `duration`: The duration of the animation, in seconds.

## See Also

### Creating custom animations

- [init(\_:)](init%28__%29.md): Create an `Animation` that contains the specified custom animation.
- [timingCurve(\_:\_:\_:\_:duration:)](timingcurve%28________duration_%29.md): An animation created from a cubic Bézier timing curve.
