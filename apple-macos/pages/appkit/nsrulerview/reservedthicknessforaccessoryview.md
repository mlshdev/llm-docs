> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/reservedthicknessforaccessoryview](https://developer.apple.com/documentation/appkit/nsrulerview/reservedthicknessforaccessoryview)

# reservedThicknessForAccessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The room available for the receiver’s accessory view to `thickness`.

## Declaration

```swift
var reservedThicknessForAccessoryView: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the ruler is horizontal, `thickness` is the height of the accessory view; otherwise, it’s the width. NSRulerViews by default reserve no space for an accessory view.

An NSRulerView automatically increases the reserved thickness as necessary to that of the accessory view. When the accessory view is thinner than the reserved space, it’s centered in that space. If you plan to use several accessory views of different sizes, you should set the reserved thickness beforehand to that of the thickest accessory view, in order to avoid retiling of the NSScrollView.

## See Also

### Related Documentation

- [accessoryView](accessoryview.md): The receiver’s accessory view to `aView`.

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerView.Orientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [isFlipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

# reservedThicknessForAccessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The room available for the receiver’s accessory view to `thickness`.

## Declaration

```objectivec
@property CGFloat reservedThicknessForAccessoryView;
```

<a id="Discussion"></a>

## Discussion

If the ruler is horizontal, `thickness` is the height of the accessory view; otherwise, it’s the width. NSRulerViews by default reserve no space for an accessory view.

An NSRulerView automatically increases the reserved thickness as necessary to that of the accessory view. When the accessory view is thinner than the reserved space, it’s centered in that space. If you plan to use several accessory views of different sizes, you should set the reserved thickness beforehand to that of the thickest accessory view, in order to avoid retiling of the NSScrollView.

## See Also

### Related Documentation

- [accessoryView](accessoryview.md): The receiver’s accessory view to `aView`.

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerOrientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [flipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.
