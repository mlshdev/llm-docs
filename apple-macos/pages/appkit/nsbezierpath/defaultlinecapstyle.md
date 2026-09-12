> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/defaultlinecapstyle](https://developer.apple.com/documentation/appkit/nsbezierpath/defaultlinecapstyle)

# defaultLineCapStyle (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default line cap style for all paths.

## Declaration

```swift
class var defaultLineCapStyle: NSBezierPath.LineCapStyle { get set }
```

<a id="return-value"></a>

## Return Value

The default line cap style or `NSButtLineCapStyle` if no other style has been set. For a list of values, see Constants.

<a id="Discussion"></a>

## Discussion

The default line cap style can be overridden for individual paths by setting a custom style for that path using the [NSBezierPath](../nsbezierpath.md) method.

## See Also

### Related Documentation

- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.

### Configuring Default Path Attributes

- [defaultWindingRule](defaultwindingrule.md): Returns the default winding rule used to fill all paths.
- [defaultLineJoinStyle](defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.

# defaultLineCapStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default line cap style for all paths.

## Declaration

```objectivec
@property (class) NSLineCapStyle defaultLineCapStyle;
```

<a id="return-value"></a>

## Return Value

The default line cap style or `NSButtLineCapStyle` if no other style has been set. For a list of values, see Constants.

<a id="Discussion"></a>

## Discussion

The default line cap style can be overridden for individual paths by setting a custom style for that path using the [NSBezierPath](../nsbezierpath.md) method.

## See Also

### Related Documentation

- [lineCapStyle](linecapstyle-swift.property.md): The line cap style for the path.

### Configuring Default Path Attributes

- [defaultWindingRule](defaultwindingrule.md): Returns the default winding rule used to fill all paths.
- [defaultLineJoinStyle](defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.
