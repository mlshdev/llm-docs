> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/aspectratio3d(_:contentmode:)](https://developer.apple.com/documentation/swiftui/view/aspectratio3d(_:contentmode:))

# aspectRatio3D(\_:contentMode:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Constrains this view’s dimensions to the specified 3D aspect ratio.

## Declaration

```swift
@export(implementation) nonisolated func aspectRatio3D(_ aspectRatio: Size3D? = nil, contentMode: ContentMode) -> some View

```

## Parameters

- `aspectRatio`: The ratio of width to height to depth to use for the resulting view. If `aspectRatio` is `nil`, the resulting view maintains this view’s aspect ratio.
- `contentMode`: A flag indicating whether this view should fit or fill the parent context.

<a id="return-value"></a>

## Return Value

A view that constrains this view’s dimensions to `aspectRatio`, using `contentMode` as its scaling algorithm.

<a id="discussion"></a>

## Discussion

If this view is resizable, the resulting view will have `aspectRatio` as its aspect ratio. In this example, the Model3D has a 2 : 3 : 1 width to height to depth ratio, and scales to fit its frame:

```swift
Model3D(named: "Sphere") { resolved in
    let ratio3D = Size3D(width: 2, height: 3, depth: 1)
    resolved
        .resizable()
        .aspectRatio3D(ratio3D, contentMode: .fit)
} placeholder: {
    ProgressView()
}
.frame(width: 200, height: 200)
.frame(depth: 200)
.border(Color(white: 0.75))
```

## See Also

### Scale

- [scaledToFill()](scaledtofill%28%29.md): Scales this view to fill its parent.
- [scaledToFill3D()](scaledtofill3d%28%29.md): Scales this view to fill its parent.
- [scaledToFit()](scaledtofit%28%29.md): Scales this view to fit its parent.
- [scaledToFit3D()](scaledtofit3d%28%29.md): Scales this view to fit its parent.
- [scaleEffect(\_:anchor:)](scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](scaleeffect%28x_y_anchor_%29.md): Scales this view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
- [scaleEffect(x:y:z:anchor:)](scaleeffect%28x_y_z_anchor_%29.md): Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.
- [imageScale(\_:)](imagescale%28__%29.md): Scales images within the view according to one of the relative sizes available including small, medium, and large images sizes.
- [aspectRatio(\_:contentMode:)](aspectratio%28__contentmode_%29.md): Constrains this view’s dimensions to the specified aspect ratio.
