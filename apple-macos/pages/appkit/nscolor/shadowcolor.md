> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/shadowcolor](https://developer.apple.com/documentation/appkit/nscolor/shadowcolor)

# shadowColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for virtual shadows cast by raised objects on the screen.

## Declaration

```swift
class var shadowColor: NSColor { get }
```

<a id="return-value"></a>

## Return Value

The system color for the virtual shadows case by raised objects on the screen.

<a id="Discussion"></a>

## Discussion

This method is invoked by [shadow(withLevel:)](shadow%28withlevel_%29.md). For more information, see [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [shadow(withLevel:)](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

### Highlights and shadows

- [findHighlightColor](findhighlightcolor.md): The highlight color to use for the bubble that shows inline search result values.
- [highlightColor](highlightcolor.md): The color to use as a virtual light source on the screen.

# shadowColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for virtual shadows cast by raised objects on the screen.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * shadowColor;
```

<a id="return-value"></a>

## Return Value

The system color for the virtual shadows case by raised objects on the screen.

<a id="Discussion"></a>

## Discussion

This method is invoked by [shadowWithLevel:](shadow%28withlevel_%29.md). For more information, see [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [shadowWithLevel:](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

### Highlights and shadows

- [findHighlightColor](findhighlightcolor.md): The highlight color to use for the bubble that shows inline search result values.
- [highlightColor](highlightcolor.md): The color to use as a virtual light source on the screen.
