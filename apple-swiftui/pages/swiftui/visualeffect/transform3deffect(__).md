> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/transform3deffect(_:)](https://developer.apple.com/documentation/swiftui/visualeffect/transform3deffect(_:))

# transform3DEffect(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Applies a 3D transformation to this view’s rendered output.

## Declaration

```swift
@export(implementation) func transform3DEffect(_ transform: AffineTransform3D) -> some VisualEffect

```

## Parameters

- `transform`: The 3D transformation to apply to the view, interpreting it as a 3D plane in space.

<a id="return-value"></a>

## Return Value

An effect that renders transformed according to the provided `transform`

<a id="Apply-a-transform-about-an-anchor"></a>

### Apply a transform about an anchor

This does not adjust the transform relative to an anchor point. Instead, apply the scale and rotation separately using [scaleEffect(\_:anchor:)](../view/scaleeffect%28__anchor_%29.md) together with [rotation3DEffect(\_:anchor:)](../view/rotation3deffect%28__anchor_%29.md).

```swift
Model3D(url: URL(string: "https://example.com/robot.usdz")!)
   .scaleEffect(transform.scale)
   .rotation3DEffect(transform.rotation ?? .identity)
   .transform3DEffect(AffineTransform3D(
       translation: transform.translation))
```

## See Also

### Applying a transform

- [transformEffect(\_:)](transformeffect%28__%29.md): Applies an affine transformation to the view’s rendered output.
