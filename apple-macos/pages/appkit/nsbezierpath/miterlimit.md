> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/miterlimit](https://developer.apple.com/documentation/appkit/nsbezierpath/miterlimit)

# miterLimit (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The limit at which miter joins are converted to bevel joins.

## Declaration

```swift
var miterLimit: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The miter limit helps you avoid spikes at the junction of two line segments connected by a miter join ([NSMiterLineJoinStyle](../nsmiterlinejoinstyle.md)). If the ratio of the miter length—the diagonal length of the miter join—to the line thickness exceeds the miter limit, the joint is converted to a bevel join.

The default value of this property is the value returned by the [defaultMiterLimit](defaultmiterlimit.md) method.

## See Also

### Related Documentation

- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

# miterLimit (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The limit at which miter joins are converted to bevel joins.

## Declaration

```objectivec
@property CGFloat miterLimit;
```

<a id="Discussion"></a>

## Discussion

The miter limit helps you avoid spikes at the junction of two line segments connected by a miter join ([NSMiterLineJoinStyle](../nsmiterlinejoinstyle.md)). If the ratio of the miter length—the diagonal length of the miter join—to the line thickness exceeds the miter limit, the joint is converted to a bevel join.

The default value of this property is the value returned by the [defaultMiterLimit](defaultmiterlimit.md) method.

## See Also

### Related Documentation

- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
