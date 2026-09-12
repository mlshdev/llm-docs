> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/menu(for:in:of:)](https://developer.apple.com/documentation/appkit/nscell/menu(for:in:of:))

# menu(for:in:of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu associated with the cell and related to the specified event and frame.

## Declaration

```swift
func menu(for event: NSEvent, in cellFrame: NSRect, of view: NSView) -> NSMenu?
```

## Parameters

- `event`: The event used to find the menu.
- `cellFrame`: The cell’s rectangle. This rectangle indicates the region containing the cursor.
- `view`: The view that manages the cell. This is usually the control object that owns the cell.

<a id="return-value"></a>

## Return Value

The menu associated with the cell and event parameters, or `nil` if no menu is set.

<a id="Discussion"></a>

## Discussion

This method is usually invoked by the [NSControl](../nscontrol.md) object (`aView`) managing the receiver. The default implementation gets the value of the [menu](menu.md) property and returns `nil` if no menu has been set. Subclasses can override to customize the returned menu according to the event received and the area in which the mouse event occurs.

## See Also

### Managing Menus

- [defaultMenu](defaultmenu.md): Returns the default menu for instances of the cell.
- [menu](menu.md): The cell’s contextual menu.

# menuForEvent:inRect:ofView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu associated with the cell and related to the specified event and frame.

## Declaration

```objectivec
- (NSMenu *) menuForEvent:(NSEvent *) event inRect:(NSRect) cellFrame ofView:(NSView *) view;
```

## Parameters

- `event`: The event used to find the menu.
- `cellFrame`: The cell’s rectangle. This rectangle indicates the region containing the cursor.
- `view`: The view that manages the cell. This is usually the control object that owns the cell.

<a id="return-value"></a>

## Return Value

The menu associated with the cell and event parameters, or `nil` if no menu is set.

<a id="Discussion"></a>

## Discussion

This method is usually invoked by the [NSControl](../nscontrol.md) object (`aView`) managing the receiver. The default implementation gets the value of the [menu](menu.md) property and returns `nil` if no menu has been set. Subclasses can override to customize the returned menu according to the event received and the area in which the mouse event occurs.

## See Also

### Managing Menus

- [defaultMenu](defaultmenu.md): Returns the default menu for instances of the cell.
- [menu](menu.md): The cell’s contextual menu.
