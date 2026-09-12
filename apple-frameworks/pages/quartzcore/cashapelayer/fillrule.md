> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cashapelayer/fillrule](https://developer.apple.com/documentation/quartzcore/cashapelayer/fillrule)

# fillRule (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The fill rule used when filling the shape’s path.

## Declaration

```swift
var fillRule: CAShapeLayerFillRule { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are shown in [Shape Fill Mode Values](../shape-fill-mode-values.md). The default is [nonZero](../cashapelayerfillrule/nonzero.md). See [Winding Rules](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Paths/Paths.html#//apple_ref/doc/uid/TP40003290-CH206-BAJIJJGD) for examples of the two fill rules.

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.

# fillRule (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The fill rule used when filling the shape’s path.

## Declaration

```objectivec
@property (copy) CAShapeLayerFillRule fillRule;
```

<a id="Discussion"></a>

## Discussion

The possible values are shown in [Shape Fill Mode Values](../shape-fill-mode-values.md). The default is [kCAFillRuleNonZero](../cashapelayerfillrule/nonzero.md). See [Winding Rules](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Paths/Paths.html#//apple_ref/doc/uid/TP40003290-CH206-BAJIJJGD) for examples of the two fill rules.

## See Also

### Accessing Shape Style Properties

- [fillColor](fillcolor.md): The color used to fill the shape’s path. Animatable.
- [lineCap](linecap.md): Specifies the line cap style for the shape’s path.
- [lineDashPattern](linedashpattern.md): The dash pattern applied to the shape’s path when stroked.
- [lineDashPhase](linedashphase.md): The dash phase applied to the shape’s path when stroked. Animatable.
- [lineJoin](linejoin.md): Specifies the line join style for the shape’s path.
- [lineWidth](linewidth.md): Specifies the line width of the shape’s path. Animatable.
- [miterLimit](miterlimit.md): The miter limit used when stroking the shape’s path. Animatable.
- [strokeColor](strokecolor.md): The color used to stroke the shape’s path. Animatable.
- [strokeStart](strokestart.md): The relative location at which to begin stroking the path. Animatable.
- [strokeEnd](strokeend.md): The relative location at which to stop stroking the path. Animatable.
