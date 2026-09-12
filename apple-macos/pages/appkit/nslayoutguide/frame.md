> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutguide/frame](https://developer.apple.com/documentation/appkit/nslayoutguide/frame)

# frame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The layout guide’s frame in its owning view’s coordinate system.

## Declaration

```swift
var frame: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

The layout guide defines a rectangular space in its owning view’s coordinate system. This property contains a valid [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) value by the time its owning view’s [layout()](../nsview/layout%28%29.md) method is called.

## See Also

### Related Documentation

- [layout()](../nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.

### Working With Layout Guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [owningView](owningview.md): The view that owns this layout guide.

# frame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The layout guide’s frame in its owning view’s coordinate system.

## Declaration

```objectivec
@property (readonly) NSRect frame;
```

<a id="Discussion"></a>

## Discussion

The layout guide defines a rectangular space in its owning view’s coordinate system. This property contains a valid [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect) value by the time its owning view’s [layout](../nsview/layout%28%29.md) method is called.

## See Also

### Related Documentation

- [layout](../nsview/layout%28%29.md): Perform layout in concert with the constraint-based layout system.

### Working With Layout Guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [owningView](owningview.md): The view that owns this layout guide.
