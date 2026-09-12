> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/init(_:)](https://developer.apple.com/documentation/swiftui/animation/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Create an `Animation` that contains the specified custom animation.

## Declaration

```swift
init<A>(_ base: A) where A : CustomAnimation
```

## See Also

### Creating custom animations

- [timingCurve(\_:duration:)](timingcurve%28__duration_%29.md): Creates a new animation with speed controlled by the given curve.
- [timingCurve(\_:\_:\_:\_:duration:)](timingcurve%28________duration_%29.md): An animation created from a cubic Bézier timing curve.
