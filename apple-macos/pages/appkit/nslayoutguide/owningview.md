> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutguide/owningview](https://developer.apple.com/documentation/appkit/nslayoutguide/owningview)

# owningView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The view that owns this layout guide.

## Declaration

```swift
weak var owningView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is `nil`.  To participate in Auto Layout, the layout guide must be added to a view by calling its [addLayoutGuide(\_:)](../nsview/addlayoutguide%28__%29.md) method. Do not modify this property directly. Instead, use the view’s [addLayoutGuide(\_:)](../nsview/addlayoutguide%28__%29.md) and [removeLayoutGuide(\_:)](../nsview/removelayoutguide%28__%29.md) methods, which update this property as necessary.

## See Also

### Working With Layout Guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [frame](frame.md): The layout guide’s frame in its owning view’s coordinate system.

# owningView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The view that owns this layout guide.

## Declaration

```objectivec
@property (weak, nullable) NSView * owningView;
```

<a id="Discussion"></a>

## Discussion

By default, this property is `nil`.  To participate in Auto Layout, the layout guide must be added to a view by calling its [addLayoutGuide:](../nsview/addlayoutguide%28__%29.md) method. Do not modify this property directly. Instead, use the view’s [addLayoutGuide:](../nsview/addlayoutguide%28__%29.md) and [removeLayoutGuide:](../nsview/removelayoutguide%28__%29.md) methods, which update this property as necessary.

## See Also

### Working With Layout Guides

- [identifier](identifier.md): A string used to identify the layout guide.
- [frame](frame.md): The layout guide’s frame in its owning view’s coordinate system.
