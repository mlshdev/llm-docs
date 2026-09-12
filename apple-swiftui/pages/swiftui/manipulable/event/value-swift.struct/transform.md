> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/manipulable/event/value-swift.struct/transform](https://developer.apple.com/documentation/swiftui/manipulable/event/value-swift.struct/transform)

# transform

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

The 3D affine transform of the manipulated view, or `nil` if the view doesn’t have a well-defined 3D affine transfrorm.

## Declaration

```swift
let transform: AffineTransform3D?
```

<a id="discussion"></a>

## Discussion

A view may not have a well-defined 3D affine transform e.g. when it’s affected by a projection transform.

This transform is in the coordinate space configured in the view modifier.
