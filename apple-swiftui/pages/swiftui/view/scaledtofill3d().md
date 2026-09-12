> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/scaledtofill3d()](https://developer.apple.com/documentation/swiftui/view/scaledtofill3d())

# scaledToFill3D()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Scales this view to fill its parent.

## Declaration

```swift
@export(implementation) nonisolated func scaledToFill3D() -> some View

```

<a id="return-value"></a>

## Return Value

A view that scales this view to fit its parent, maintaining this view’s aspect ratio.

<a id="discussion"></a>

## Discussion

This view’s 3D aspect ratio is maintained as the view scales. This method is equivalent to calling `aspectRatio3D(nil, contentMode: .fill)`.

```swift
Model3D(named: "Sphere") { resolved in
    resolved
        .resizable()
        .scaledToFill3D()
} placeholder: {
    ProgressView()
}
.frame(width: 300, height: 100)
.frame(depth: 300)
.border(Color(white: 0.75))
```

## See Also

### Scale

- [scaledToFill()](scaledtofill%28%29.md): Scales this view to fill its parent.
- [scaledToFit()](scaledtofit%28%29.md): Scales this view to fit its parent.
- [scaledToFit3D()](scaledtofit3d%28%29.md): Scales this view to fit its parent.
- [scaleEffect(\_:anchor:)](scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](scaleeffect%28x_y_anchor_%29.md): Scales this view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [scaleEffect(x:y:z:anchor:)](scaleeffect%28x_y_z_anchor_%29.md): Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.
- [imageScale(\_:)](imagescale%28__%29.md): Scales images within the view according to one of the relative sizes available including small, medium, and large images sizes.
- [aspectRatio(\_:contentMode:)](aspectratio%28__contentmode_%29.md): Constrains this view’s dimensions to the specified aspect ratio.
- [aspectRatio3D(\_:contentMode:)](aspectratio3d%28__contentmode_%29.md): Constrains this view’s dimensions to the specified 3D aspect ratio.
