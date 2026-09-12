> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/menu(for:)](https://developer.apple.com/documentation/appkit/nsview/menu(for:))

# menu(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.

## Declaration

```swift
func menu(for event: NSEvent) -> NSMenu?
```

## Parameters

- `event`: An object representing a mouse-down event.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

The view can use information in the mouse event, such as its location over a particular element of the view, to determine what kind of menu to return. For example, a text object might display a text-editing menu when the cursor lies over text and a menu for changing graphics attributes when the cursor lies over an embedded image.

The default implementation returns the view’s normal menu.

## See Also

### Related Documentation

- [menu](../nsresponder/menu.md): Returns the responder’s menu.

### Managing Contextual Menus

- [defaultMenu](defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [willOpenMenu(\_:with:)](willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.
- [didCloseMenu(\_:with:)](didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.

# menuForEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.

## Declaration

```objectivec
- (NSMenu *) menuForEvent:(NSEvent *) event;
```

## Parameters

- `event`: An object representing a mouse-down event.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

The view can use information in the mouse event, such as its location over a particular element of the view, to determine what kind of menu to return. For example, a text object might display a text-editing menu when the cursor lies over text and a menu for changing graphics attributes when the cursor lies over an embedded image.

The default implementation returns the view’s normal menu.

## See Also

### Related Documentation

- [menu](../nsresponder/menu.md): Returns the responder’s menu.

### Managing Contextual Menus

- [defaultMenu](defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [willOpenMenu:withEvent:](willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.
- [didCloseMenu:withEvent:](didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.
