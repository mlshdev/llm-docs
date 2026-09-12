> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/defaultwindingrule](https://developer.apple.com/documentation/appkit/nsbezierpath/defaultwindingrule)

# defaultWindingRule (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default winding rule used to fill all paths.

## Declaration

```swift
class var defaultWindingRule: NSBezierPath.WindingRule { get set }
```

<a id="return-value"></a>

## Return Value

The current default winding rule or [NSNonZeroWindingRule](../nsnonzerowindingrule.md) if no default rule has been set. This value may be either [NSNonZeroWindingRule](../nsnonzerowindingrule.md) or [NSEvenOddWindingRule](../nsevenoddwindingrule.md).

## See Also

### Related Documentation

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.

### Configuring Default Path Attributes

- [defaultLineCapStyle](defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [defaultLineJoinStyle](defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.

# defaultWindingRule (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default winding rule used to fill all paths.

## Declaration

```objectivec
@property (class) NSWindingRule defaultWindingRule;
```

<a id="return-value"></a>

## Return Value

The current default winding rule or [NSNonZeroWindingRule](../nsnonzerowindingrule.md) if no default rule has been set. This value may be either [NSNonZeroWindingRule](../nsnonzerowindingrule.md) or [NSEvenOddWindingRule](../nsevenoddwindingrule.md).

## See Also

### Related Documentation

- [windingRule](windingrule-swift.property.md): The winding rule used to fill the path.

### Configuring Default Path Attributes

- [defaultLineCapStyle](defaultlinecapstyle.md): Returns the default line cap style for all paths.
- [defaultLineJoinStyle](defaultlinejoinstyle.md): Returns the default line join style for all paths.
- [defaultLineWidth](defaultlinewidth.md): Returns the default line width for the all paths.
- [defaultMiterLimit](defaultmiterlimit.md): Returns the default miter limit for all paths.
- [defaultFlatness](defaultflatness.md): The default flatness value for all paths.
