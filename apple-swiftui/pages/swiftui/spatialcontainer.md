> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialcontainer](https://developer.apple.com/documentation/swiftui/spatialcontainer)

# SpatialContainer

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A layout container that aligns overlapping content in 3D space.

## Declaration

```swift
@frozen struct SpatialContainer
```

<a id="overview"></a>

## Overview

The container will take the max size of each dimension of each of its children, aligning its children based on the `alignment`.

## Topics

### Initializers

- [init(alignment:)](spatialcontainer/init%28alignment_%29.md): Creates a spatial container layout with the specified 3D alignment.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Layout](layout.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [ViewDimensions3D](viewdimensions3d.md): A view’s 3D size and alignment guides in its own coordinate space.
