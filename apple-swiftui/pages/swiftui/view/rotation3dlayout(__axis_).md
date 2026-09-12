> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/rotation3dlayout(_:axis:)](https://developer.apple.com/documentation/swiftui/view/rotation3dlayout(_:axis:))

# rotation3DLayout(\_:axis:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Rotates a view with impacts to its frame in a containing layout

## Declaration

```swift
@export(implementation) nonisolated func rotation3DLayout(_ angle: Angle, axis: (x: CGFloat, y: CGFloat, z: CGFloat)) -> some View

```

## Parameters

- `angle`: The angle by which to rotate the view and its frame.
- `axis`: The axis of rotation.

<a id="discussion"></a>

## Discussion

The following example will rotate the top plane by 45 degrees while adjusting its frame to account for this rotation. The VStack sizes to fit the rotated and standard models.

```swift
VStack {
    Model3D(named: "plane")
        .rotation3DLayout(.degrees(45), axis: (x: 0, y: 0, z: 1))
    Model3D(named: "plane")
```

}

The layout system will use a bounding box that completely contains the rotated view, meaning this modifier can change the size of the view it is applied to.

## See Also

### Rotation and transformation

- [rotationEffect(\_:anchor:)](rotationeffect%28__anchor_%29.md): Rotates a view’s rendered output in two dimensions around the specified point.
- [rotation3DEffect(\_:anchor:)](rotation3deffect%28__anchor_%29.md): Rotates the view’s content by the specified 3D rotation value.
- [rotation3DEffect(\_:axis:anchor:anchorZ:perspective:)](rotation3deffect%28__axis_anchor_anchorz_perspective_%29.md): Deprecated. Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [rotation3DEffect(\_:axis:anchor:)](rotation3deffect%28__axis_anchor_%29.md): Rotates the view’s content by an angle about an axis that you specify as a tuple of elements.
- [rotation3DLayout(\_:)](rotation3dlayout%28__%29.md): Rotates a view with impacts to its frame in a containing layout
- [perspectiveRotationEffect(\_:axis:anchor:anchorZ:perspective:)](perspectiverotationeffect%28__axis_anchor_anchorz_perspective_%29.md): Renders a view’s content as if it’s rotated in three dimensions around the specified axis.
- [projectionEffect(\_:)](projectioneffect%28__%29.md): Applies a projection transformation to this view’s rendered output.
- [transformEffect(\_:)](transformeffect%28__%29.md): Applies an affine transformation to this view’s rendered output.
- [transform3DEffect(\_:)](transform3deffect%28__%29.md): Applies a 3D transformation to this view’s rendered output.
