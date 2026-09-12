> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/rotation3deffect(_:axis:anchor:)](https://developer.apple.com/documentation/swiftui/visualeffect/rotation3deffect(_:axis:anchor:))

# rotation3DEffect(\_:axis:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Rotates content by an angle about an axis that you specify as a rotation axis value.

## Declaration

```swift
@export(implementation) func rotation3DEffect(_ angle: Angle, axis: RotationAxis3D, anchor: UnitPoint3D = .center) -> some VisualEffect

```

## Parameters

- `angle`: The angle by which to rotate the view’s content.
- `axis`: The axis of rotation.
- `anchor`: The unit point within the content about which to perform the rotation. The default value is [center](../unitpoint3d/center.md).

<a id="return-value"></a>

## Return Value

A rotation effect.

<a id="discussion"></a>

## Discussion

This effect causes the content to appear rotated, but doesn’t change the content’s frame. The following code applies a rotation of 45° about the y-axis, using the default anchor point at the center of the content:

```swift
Model3D(named: "robot")
    .visualEffect { content, geometryProxy in
        content
            .rotation3DEffect(.degrees(45), axis: .y)
    }
```

## See Also

### Rotating

- [rotationEffect(\_:anchor:)](rotationeffect%28__anchor_%29.md): Rotates content in two dimensions around the specified point.
- [rotation3DEffect(\_:axis:anchor:anchorZ:perspective:)](rotation3deffect%28__axis_anchor_anchorz_perspective_%29.md): Deprecated. Renders content as if it’s rotated in three dimensions around the specified axis.
- [perspectiveRotationEffect(\_:axis:anchor:perspective:)](perspectiverotationeffect%28__axis_anchor_perspective_%29.md): Renders content as if it’s rotated in three dimensions around the specified axis.
- [rotation3DEffect(\_:anchor:)](rotation3deffect%28__anchor_%29.md): Rotates content by the specified 3D rotation value.
