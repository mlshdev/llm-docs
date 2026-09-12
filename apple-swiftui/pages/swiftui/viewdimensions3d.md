> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewdimensions3d](https://developer.apple.com/documentation/swiftui/viewdimensions3d)

# ViewDimensions3D

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A view’s 3D size and alignment guides in its own coordinate space.

## Declaration

```swift
struct ViewDimensions3D
```

## Topics

### Instance Properties

- [depth](viewdimensions3d/depth.md): The view’s depth.
- [height](viewdimensions3d/height.md): The view’s height.
- [width](viewdimensions3d/width.md): The view’s width.

### Subscripts

- [subscript(\_:)](viewdimensions3d/subscript%28__%29.md): Gets the value of the given depth guide.
- [subscript(explicit:)](viewdimensions3d/subscript%28explicit_%29.md): Gets the explicit value of the given depth alignment guide

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Aligning views

- [Aligning views within a stack](aligning-views-within-a-stack.md): Position views inside a stack using alignment guides.
- [Aligning views across stacks](aligning-views-across-stacks.md): Create a custom alignment and use it to align views across multiple stacks.
- [alignmentGuide(\_:computeValue:)](view/alignmentguide%28__computevalue_%29.md): Sets the view’s horizontal alignment.
- [Alignment](alignment.md): An alignment in both axes.
- [HorizontalAlignment](horizontalalignment.md): An alignment position along the horizontal axis.
- [VerticalAlignment](verticalalignment.md): An alignment position along the vertical axis.
- [DepthAlignment](depthalignment.md): An alignment position along the depth axis.
- [AlignmentID](alignmentid.md): A type that you use to create custom alignment guides.
- [ViewDimensions](viewdimensions.md): A view’s size and alignment guides in its own coordinate space.
- [SpatialContainer](spatialcontainer.md): A layout container that aligns overlapping content in 3D space.
