> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/windingrule-swift.property](https://developer.apple.com/documentation/appkit/nsbezierpath/windingrule-swift.property)

# windingRule (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The winding rule used to fill the path.

## Declaration

```swift
var windingRule: NSBezierPath.WindingRule { get set }
```

<a id="Discussion"></a>

## Discussion

This value may be either [NSNonZeroWindingRule](../nsnonzerowindingrule.md) or [NSEvenOddWindingRule](../nsevenoddwindingrule.md). This value overrides the default value returned by the [defaultWindingRule](defaultwindingrule.md) method.

## See Also

### Related Documentation

- [fill()](fill%28%29.md): Paints the region enclosed by the path.
- [defaultWindingRule](defaultwindingrule.md): Returns the default winding rule used to fill all paths.

### Accessing a Path’s Attributes

- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

# windingRule (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The winding rule used to fill the path.

## Declaration

```objectivec
@property NSWindingRule windingRule;
```

<a id="Discussion"></a>

## Discussion

This value may be either [NSNonZeroWindingRule](../nsnonzerowindingrule.md) or [NSEvenOddWindingRule](../nsevenoddwindingrule.md). This value overrides the default value returned by the [defaultWindingRule](defaultwindingrule.md) method.

## See Also

### Related Documentation

- [fill](fill%28%29.md): Paints the region enclosed by the path.
- [defaultWindingRule](defaultwindingrule.md): Returns the default winding rule used to fill all paths.

### Accessing a Path’s Attributes

- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
