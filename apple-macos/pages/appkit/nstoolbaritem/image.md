> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/image](https://developer.apple.com/documentation/appkit/nstoolbaritem/image)

# image (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The image to display for the toolbar item.

## Declaration

```swift
var image: UIImage? { get set }
```

```swift
var image: NSImage? { get set }
```

<a id="Discussion"></a>

## Discussion

If you assign a custom view to the toolbar item, modifying this property updates the `image` property of the view, if one exists. If the item doesn’t contain a custom view, the toolbar item manages the image content directly.

## See Also

### Getting the item’s visual appearance

- [backgroundTintColor](backgroundtintcolor.md)
- [view](view.md): The custom view you use to draw the toolbar item.

# image (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The image to display for the toolbar item.

## Declaration

```objectivec
@property (strong, nullable) UIImage * image;
```

```objectivec
@property (strong, nullable) NSImage * image;
```

<a id="Discussion"></a>

## Discussion

If you assign a custom view to the toolbar item, modifying this property updates the `image` property of the view, if one exists. If the item doesn’t contain a custom view, the toolbar item manages the image content directly.

## See Also

### Getting the item’s visual appearance

- [backgroundTintColor](backgroundtintcolor.md)
- [view](view.md): The custom view you use to draw the toolbar item.
