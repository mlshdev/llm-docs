> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/linecapstyle-swift.property](https://developer.apple.com/documentation/appkit/nsbezierpath/linecapstyle-swift.property)

# lineCapStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The line cap style for the path.

## Declaration

```swift
var lineCapStyle: NSBezierPath.LineCapStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The line cap style specifies the shape of the endpoints on an open path when stroked. The default value of this property is the value returned by the [defaultLineCapStyle](defaultlinecapstyle.md) method.

## See Also

### Related Documentation

- [defaultLineCapStyle](defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [NSBezierPath.LineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash(\_:count:phase:)](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash(\_:count:phase:)](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.

# lineCapStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The line cap style for the path.

## Declaration

```objectivec
@property NSLineCapStyle lineCapStyle;
```

<a id="Discussion"></a>

## Discussion

The line cap style specifies the shape of the endpoints on an open path when stroked. The default value of this property is the value returned by the [defaultLineCapStyle](defaultlinecapstyle.md) method.

## See Also

### Related Documentation

- [defaultLineCapStyle](defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [NSLineCapStyle](linecapstyle-swift.enum.md): Constants that specify the shape of endpoints for an open path when it is stroked.

### Accessing a Path’s Attributes

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.
- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.
- [lineWidth](linewidth.md): The width of stroked path lines.
- [miterLimit](miterlimit.md): The limit at which miter joins are converted to bevel joins.
- [flatness](flatness.md): The accuracy with which curves are rendered.
- [getLineDash:count:phase:](getlinedash%28__count_phase_%29.md): Returns the line-stroking pattern for the receiver.
- [setLineDash:count:phase:](setlinedash%28__count_phase_%29.md): Sets the line-stroking pattern for the path.
