> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationtimingfunction/cubicbezier(controlpoint1:controlpoint2:)](https://developer.apple.com/documentation/realitykit/animationtimingfunction/cubicbezier(controlpoint1:controlpoint2:))

# cubicBezier(controlPoint1:controlPoint2:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a timing function that accelerates and then decelerates towards the target value with the cubic bezier shape specified by two control points.

## Declaration

```swift
static func cubicBezier(controlPoint1: SIMD2<Float>, controlPoint2: SIMD2<Float>) -> AnimationTimingFunction
```

## Parameters

- `controlPoint1`: The first control point for the cubic bezier function.
- `controlPoint2`: The second control point for the cubic bezier function.

<a id="return-value"></a>

## Return Value

The cubic bezier timing function.

## See Also

### Creating timing functions

- [default](default.md): A timing function that produces the default curve for the transition.
- [easeIn](easein.md): A timing function that produces a gradual starting transition.
- [easeInOut](easeinout.md): A timing function that produces a gradual starting and ending transition.
- [easeOut](easeout.md): A timing function that produces a gradual ending transition.
- [linear](linear.md): A timing function that produces a linear transition.
