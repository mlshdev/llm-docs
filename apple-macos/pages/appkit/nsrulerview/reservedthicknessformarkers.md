> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/reservedthicknessformarkers](https://developer.apple.com/documentation/appkit/nsrulerview/reservedthicknessformarkers)

# reservedThicknessForMarkers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The room available for ruler markers to `thickness`.

## Declaration

```swift
var reservedThicknessForMarkers: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default thickness reserved for markers is 15.0 PostScript units for a horizontal ruler and 0.0 PostScript units for a vertical ruler (under the assumption that vertical rulers rarely contain markers). If you don’t expect to have any markers on the ruler, you can set the reserved thickness to 0.0.

An NSRulerView automatically increases the reserved thickness as necessary to that of its thickest marker. If you plan to use markers of varying sizes, you should set the reserved thickness beforehand to that of the thickest one in order to avoid retiling of the NSScrollView.

## See Also

### Related Documentation

- [thicknessRequiredInRuler](../nsrulermarker/thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.
- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerView.Orientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [isFlipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

# reservedThicknessForMarkers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The room available for ruler markers to `thickness`.

## Declaration

```objectivec
@property CGFloat reservedThicknessForMarkers;
```

<a id="Discussion"></a>

## Discussion

The default thickness reserved for markers is 15.0 PostScript units for a horizontal ruler and 0.0 PostScript units for a vertical ruler (under the assumption that vertical rulers rarely contain markers). If you don’t expect to have any markers on the ruler, you can set the reserved thickness to 0.0.

An NSRulerView automatically increases the reserved thickness as necessary to that of its thickest marker. If you plan to use markers of varying sizes, you should set the reserved thickness beforehand to that of the thickest one in order to avoid retiling of the NSScrollView.

## See Also

### Related Documentation

- [thicknessRequiredInRuler](../nsrulermarker/thicknessrequiredinruler.md): The amount of the receiver’s image that’s displayed above or to the left of the ruler view’s baseline.
- [markers](markers.md): The receiver’s ruler markers to `markers`, removing any existing ruler markers and not consulting with the client view about the new markers.

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerOrientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [flipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.
