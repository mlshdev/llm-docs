> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/isflipped](https://developer.apple.com/documentation/appkit/nsrulerview/isflipped)

# isFlipped (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates if the ruler view’s coordinate system is flipped.

## Declaration

```swift
var isFlipped: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s coordinate system is flipped, [false](https://developer.apple.com/documentation/swift/false) otherwise.

A vertical ruler takes into account whether the coordinate system of the [NSScrollView](../nsscrollview.md)‘s document view—not the receiver’s client view—is flipped. A horizontal ruler is always flipped.

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerView.Orientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.

# flipped (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates if the ruler view’s coordinate system is flipped.

## Declaration

```objectivec
@property (readonly, getter=isFlipped) BOOL flipped;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s coordinate system is flipped, [false](https://developer.apple.com/documentation/swift/false) otherwise.

A vertical ruler takes into account whether the coordinate system of the [NSScrollView](../nsscrollview.md)‘s document view—not the receiver’s client view—is flipped. A horizontal ruler is always flipped.

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [NSRulerOrientation](orientation-swift.enum.md): These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
