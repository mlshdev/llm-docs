> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visualeffect/scaleeffect(x:y:anchor:)](https://developer.apple.com/documentation/swiftui/visualeffect/scaleeffect(x:y:anchor:))

# scaleEffect(x:y:anchor:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Scales the view’s rendered output by the given horizontal and vertical amounts, relative to an anchor point.

## Declaration

```swift
func scaleEffect(x: CGFloat = 1.0, y: CGFloat = 1.0, anchor: UnitPoint = .center) -> some VisualEffect

```

## Parameters

- `x`: An amount that represents the horizontal amount to scale the view. The default value is `1.0`.
- `y`: An amount that represents the vertical amount to scale the view. The default value is `1.0`.
- `anchor`: The point with a default of [center](../unitpoint/center.md) that defines the location within the view from which to apply the transformation.

<a id="return-value"></a>

## Return Value

An effect that scales the view’s rendered output.

## See Also

### Scaling

- [scaleEffect(\_:anchor:)](scaleeffect%28__anchor_%29.md): Scales this view uniformly by the specified factor, relative to an anchor point.
- [scaleEffect(x:y:z:anchor:)](scaleeffect%28x_y_z_anchor_%29.md): Scales this view by the specified horizontal, vertical, and depth factors, relative to an anchor point.
