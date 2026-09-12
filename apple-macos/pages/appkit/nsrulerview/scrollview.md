> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/scrollview](https://developer.apple.com/documentation/appkit/nsrulerview/scrollview)

# scrollView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The NSScrollView that owns the receiver to `scrollView`, without retaining it.

## Declaration

```swift
weak var scrollView: NSScrollView? { get set }
```

<a id="Discussion"></a>

## Discussion

This method is generally invoked only by the ruler’s scroll view; you should rarely need to invoke it directly.

## See Also

### Related Documentation

- [verticalRulerView](../nsscrollview/verticalrulerview.md): The scroll view’s vertical ruler view.
- [horizontalRulerView](../nsscrollview/horizontalrulerview.md): The scroll view’s horizontal ruler view.

### Ruler layout

- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerView.Orientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [isFlipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

# scrollView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The NSScrollView that owns the receiver to `scrollView`, without retaining it.

## Declaration

```objectivec
@property (weak, nullable) NSScrollView * scrollView;
```

<a id="Discussion"></a>

## Discussion

This method is generally invoked only by the ruler’s scroll view; you should rarely need to invoke it directly.

## See Also

### Related Documentation

- [verticalRulerView](../nsscrollview/verticalrulerview.md): The scroll view’s vertical ruler view.
- [horizontalRulerView](../nsscrollview/horizontalrulerview.md): The scroll view’s horizontal ruler view.

### Ruler layout

- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerOrientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [flipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.
