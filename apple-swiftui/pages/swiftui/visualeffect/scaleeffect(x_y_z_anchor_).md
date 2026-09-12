> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/scaleeffect(x:y:z:anchor:)](https://developer.apple.com/documentation/swiftui/visualeffect/scaleeffect(x:y:z:anchor:))

# scaleEffect(x:y:z:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.

## Declaration

```swift
@export(implementation) func scaleEffect(x: CGFloat = 1.0, y: CGFloat = 1.0, z: CGFloat = 1.0, anchor: UnitPoint3D = .center) -> some VisualEffect

```

## Parameters

- `x`: The horizontal scale factor for this view.
- `y`: The vertical scale factor for this view.
- `z`: The depth scale factor for this view.
- `anchor`: The anchor point about which to scale the view. Defaults to center.

<a id="return-value"></a>

## Return Value

An effect that scales this view by `x`,`y`, and `z`.

<a id="discussion"></a>

## Discussion

The original dimensions of the view are considered to be unchanged by scaling the contents. To change the dimensions of the view, use a modifier like `frame()` instead.

## See Also

### Scaling

- [scaleEffect(\_:anchor:)](scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:anchor:)](scaleeffect%28x_y_anchor_%29.md): Scales the view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.
