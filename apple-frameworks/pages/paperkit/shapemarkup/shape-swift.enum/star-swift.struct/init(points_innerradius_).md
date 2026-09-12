> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/shapemarkup/shape-swift.enum/star-swift.struct/init(points:innerradius:)](https://developer.apple.com/documentation/paperkit/shapemarkup/shape-swift.enum/star-swift.struct/init(points:innerradius:))

# init(points:innerRadius:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Create a new star shape with alternating inner and outer points.

## Declaration

```swift
init(points: Int, innerRadius: CGFloat)
```

## Parameters

- `points`: The number of points on the star.
- `innerRadius`: The radius of inner points relative to outer points, in unit coordinate space (0.0 to 1.0). A value of `0.5` creates inner points halfway to the center.
