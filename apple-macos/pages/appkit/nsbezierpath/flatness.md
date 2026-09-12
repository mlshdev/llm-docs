> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/flatness](https://developer.apple.com/documentation/appkit/nsbezierpath/flatness)

# flatness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The accuracy with which curves are rendered.

## Declaration

```swift
var flatness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The flatness value specifies the accuracy (or smoothness) with which curves are rendered. It is also the maximum error tolerance (measured in pixels) for rendering curves, where smaller numbers give smoother curves at the expense of more computation. The exact interpretation may vary slightly on different rendering devices.

The default value of this property is the value returned by the [defaultFlatness](defaultflatness.md) method.

## See Also

### Related Documentation

- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

# flatness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The accuracy with which curves are rendered.

## Declaration

```objectivec
@property CGFloat flatness;
```

<a id="Discussion"></a>

## Discussion

The flatness value specifies the accuracy (or smoothness) with which curves are rendered. It is also the maximum error tolerance (measured in pixels) for rendering curves, where smaller numbers give smoother curves at the expense of more computation. The exact interpretation may vary slightly on different rendering devices.

The default value of this property is the value returned by the [defaultFlatness](defaultflatness.md) method.

## See Also

### Related Documentation

- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
