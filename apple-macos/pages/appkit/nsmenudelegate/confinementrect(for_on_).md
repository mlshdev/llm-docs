> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate/confinementrect(for:on:)](https://developer.apple.com/documentation/appkit/nsmenudelegate/confinementrect(for:on:))

# confinementRect(for:on:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to specify a display location for the menu.

## Declaration

```swift
@MainActor optional func confinementRect(for menu: NSMenu, on screen: NSScreen?) -> NSRect
```

## Parameters

- `menu`: The menu object.
- `screen`: The screen the menu will open on.

<a id="return-value"></a>

## Return Value

The rectangle the menu should be displayed within, in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is sent to the delegate when a menu is about to be opened on the specified screen.

If you return `NSZeroRect`, or if the delegate doesn’t implement this method, the menu will be confined to the bounds appropriate for the given screen. The returned rect may not be honored in all cases, for example, if it would force the menu to be too small.

## See Also

### Updating Menu Layout

- [menu(\_:update:at:shouldCancel:)](menu%28__update_at_shouldcancel_%29.md): Invoked to let the delegate update a menu item before it is displayed.

# confinementRectForMenu:onScreen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to specify a display location for the menu.

## Declaration

```objectivec
- (NSRect) confinementRectForMenu:(NSMenu *) menu onScreen:(NSScreen *) screen;
```

## Parameters

- `menu`: The menu object.
- `screen`: The screen the menu will open on.

<a id="return-value"></a>

## Return Value

The rectangle the menu should be displayed within, in screen coordinates.

<a id="Discussion"></a>

## Discussion

This method is sent to the delegate when a menu is about to be opened on the specified screen.

If you return `NSZeroRect`, or if the delegate doesn’t implement this method, the menu will be confined to the bounds appropriate for the given screen. The returned rect may not be honored in all cases, for example, if it would force the menu to be too small.

## See Also

### Updating Menu Layout

- [menu:updateItem:atIndex:shouldCancel:](menu%28__update_at_shouldcancel_%29.md): Invoked to let the delegate update a menu item before it is displayed.
