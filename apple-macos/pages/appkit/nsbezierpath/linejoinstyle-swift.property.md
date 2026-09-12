> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/linejoinstyle-swift.property](https://developer.apple.com/documentation/appkit/nsbezierpath/linejoinstyle-swift.property)

# lineJoinStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The line join style for the path.

## Declaration

```swift
var lineJoinStyle: NSBezierPath.LineJoinStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The line join style specifies the shape of the joints between connected segments of a stroked path. The default value of this property is the value returned by the [defaultLineJoinStyle](defaultlinejoinstyle.md) method.

## See Also

### Related Documentation

- [defaultLineJoinStyle](defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [NSBezierPath.LineJoinStyle](linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

# lineJoinStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The line join style for the path.

## Declaration

```objectivec
@property NSLineJoinStyle lineJoinStyle;
```

<a id="Discussion"></a>

## Discussion

The line join style specifies the shape of the joints between connected segments of a stroked path. The default value of this property is the value returned by the [defaultLineJoinStyle](defaultlinejoinstyle.md) method.

## See Also

### Related Documentation

- [defaultLineJoinStyle](defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [NSLineJoinStyle](linejoinstyle-swift.enum.md): Constants that specify the shape of the joins between connected segments of a stroked path.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
