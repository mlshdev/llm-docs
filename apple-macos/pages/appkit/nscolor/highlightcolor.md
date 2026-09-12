> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/highlightcolor](https://developer.apple.com/documentation/appkit/nscolor/highlightcolor)

# highlightColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use as a virtual light source on the screen.

## Declaration

```swift
class var highlightColor: NSColor { get }
```

<a id="return-value"></a>

## Return Value

The system color for the virtual light source on the screen.

<a id="Discussion"></a>

## Discussion

This method is invoked by the [highlight(withLevel:)](highlight%28withlevel_%29.md) method. For more information, see [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [highlight(withLevel:)](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.

### Highlights and shadows

- [findHighlightColor](findhighlightcolor.md): The highlight color to use for the bubble that shows inline search result values.
- [shadowColor](shadowcolor.md): The color to use for virtual shadows cast by raised objects on the screen.

# highlightColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use as a virtual light source on the screen.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * highlightColor;
```

<a id="return-value"></a>

## Return Value

The system color for the virtual light source on the screen.

<a id="Discussion"></a>

## Discussion

This method is invoked by the [highlightWithLevel:](highlight%28withlevel_%29.md) method. For more information, see [NSColor](../nscolor.md).

## See Also

### Related Documentation

- [highlightWithLevel:](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.

### Highlights and shadows

- [findHighlightColor](findhighlightcolor.md): The highlight color to use for the bubble that shows inline search result values.
- [shadowColor](shadowcolor.md): The color to use for virtual shadows cast by raised objects on the screen.
