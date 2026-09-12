> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/defaultlinejoinstyle](https://developer.apple.com/documentation/appkit/nsbezierpath/defaultlinejoinstyle)

# defaultLineJoinStyle (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default line join style for all paths.

## Declaration

```swift
class var defaultLineJoinStyle: NSBezierPath.LineJoinStyle { get set }
```

<a id="return-value"></a>

## Return Value

The default line join style or `NSMiterLineJoinStyle` if no other value has been set. For a list of values, see Constants.

## See Also

### Related Documentation

- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.

### Configuring Default Path Attributes

- [defaultWindingRule](defaultwindingrule.md): Returns the default winding rule used to fill all paths.
- [defaultLineCapStyle](defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.

# defaultLineJoinStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default line join style for all paths.

## Declaration

```objectivec
@property (class) NSLineJoinStyle defaultLineJoinStyle;
```

<a id="return-value"></a>

## Return Value

The default line join style or `NSMiterLineJoinStyle` if no other value has been set. For a list of values, see Constants.

## See Also

### Related Documentation

- [lineJoinStyle](linejoinstyle-swift.property.md): The line join style for the path.

### Configuring Default Path Attributes

- [defaultWindingRule](defaultwindingrule.md): Returns the default winding rule used to fill all paths.
- [defaultLineCapStyle](defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.
