> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/unitpoint3d/init(x:y:z:)](https://developer.apple.com/documentation/swiftui/unitpoint3d/init(x:y:z:))

# init(x:y:z:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates a 3D unit point with the specified offsets.

## Declaration

```swift
init(x: CGFloat, y: CGFloat, z: CGFloat)
```

## Parameters

- `x`: The normalized distance from the origin to the point in the horizontal dimension.
- `y`: The normalized distance from the origin to the point in the vertical dimension.
- `z`: The normalized distance from the origin to the point in the depth dimension.

<a id="discussion"></a>

## Discussion

Values outside the range `[0, 1]` project to points outside of a view.

## See Also

### Creating a point

- [init()](init%28%29.md): Creates a 3D unit point at the origin.
