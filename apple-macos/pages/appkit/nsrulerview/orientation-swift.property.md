> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/orientation-swift.property](https://developer.apple.com/documentation/appkit/nsrulerview/orientation-swift.property)

# orientation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The orientation of the receiver to `orientation`.

## Declaration

```swift
var orientation: NSRulerView.Orientation { get set }
```

<a id="Discussion"></a>

## Discussion

Possible values for `orientation` are described in `Constants`.

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [NSRulerView.Orientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [isFlipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

# orientation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The orientation of the receiver to `orientation`.

## Declaration

```objectivec
@property NSRulerOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

Possible values for `orientation` are described in `Constants`.

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [NSRulerOrientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [flipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.
