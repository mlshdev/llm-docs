> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/view](https://developer.apple.com/documentation/appkit/nstoolbaritem/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The custom view you use to draw the toolbar item.

## Declaration

```swift
var view: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

Many properties of [NSToolbarItem](../nstoolbaritem.md) automatically forward changes to the associated custom [NSView](../nsview.md) object, if the view has a property or accessor method with a matching name.

## See Also

### Getting the item’s visual appearance

- [image](image.md): The image to display for the toolbar item.
- [backgroundTintColor](backgroundtintcolor.md)

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The custom view you use to draw the toolbar item.

## Declaration

```objectivec
@property (strong, nullable) NSView * view;
```

<a id="Discussion"></a>

## Discussion

Many properties of [NSToolbarItem](../nstoolbaritem.md) automatically forward changes to the associated custom [NSView](../nsview.md) object, if the view has a property or accessor method with a matching name.

## See Also

### Getting the item’s visual appearance

- [image](image.md): The image to display for the toolbar item.
- [backgroundTintColor](backgroundtintcolor.md)
