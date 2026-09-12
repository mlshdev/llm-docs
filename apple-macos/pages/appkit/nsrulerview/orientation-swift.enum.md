> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/orientation-swift.enum](https://developer.apple.com/documentation/appkit/nsrulerview/orientation-swift.enum)

# NSRulerView.Orientation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).

## Declaration

```swift
enum Orientation
```

## Topics

### Constants

- [NSRulerView.Orientation.horizontalRuler](orientation-swift.enum/horizontalruler.md): Ruler is oriented horizontally.
- [NSRulerView.Orientation.verticalRuler](orientation-swift.enum/verticalruler.md): Ruler is oriented vertically.

### Initializers

- [init(rawValue:)](orientation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [isFlipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.

# NSRulerOrientation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants are defined to specify a ruler’s orientation and are used by [orientation](orientation-swift.property.md).

## Declaration

```objectivec
enum NSRulerOrientation : NSUInteger;
```

## Topics

### Constants

- [NSHorizontalRuler](orientation-swift.enum/horizontalruler.md): Ruler is oriented horizontally.
- [NSVerticalRuler](orientation-swift.enum/verticalruler.md): Ruler is oriented vertically.

## See Also

### Ruler layout

- [scrollView](scrollview.md): The NSScrollView that owns the receiver to `scrollView`, without retaining it.
- [orientation](orientation-swift.property.md): The orientation of the receiver to `orientation`.
- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
- [reservedThicknessForMarkers](reservedthicknessformarkers.md): The room available for ruler markers to `thickness`.
- [ruleThickness](rulethickness.md): The thickness of the area where ruler hash marks and labels are drawn.
- [requiredThickness](requiredthickness.md): The thickness needed for proper tiling of the receiver within an NSScrollView.
- [baselineLocation](baselinelocation.md): The location of the receiver’s baseline, in its own coordinate system.
- [flipped](isflipped.md): A Boolean that indicates if the ruler view’s coordinate system is flipped.
