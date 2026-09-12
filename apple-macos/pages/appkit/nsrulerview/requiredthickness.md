> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/requiredthickness](https://developer.apple.com/documentation/appkit/nsrulerview/requiredthickness)

# requiredThickness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness needed for proper tiling of the receiver within an NSScrollView.

## Declaration

```swift
var requiredThickness: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This thickness is the height of a horizontal ruler and the width of a vertical ruler. The required thickness is the sum of the thicknesses of the ruler area, the marker area, and the accessory view.

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerView.Orientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [isFlipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

# requiredThickness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness needed for proper tiling of the receiver within an NSScrollView.

## Declaration

```objectivec
@property (readonly) CGFloat requiredThickness;
```

<a id="Discussion"></a>

## Discussion

This thickness is the height of a horizontal ruler and the width of a vertical ruler. The required thickness is the sum of the thicknesses of the ruler area, the marker area, and the accessory view.

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerOrientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [flipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.
