> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/show(relativeto:)](https://developer.apple.com/documentation/appkit/nspopover/show(relativeto:))

# show(relativeTo:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Shows the popover anchored to the specified toolbar item.

## Declaration

```swift
func show(relativeTo toolbarItem: NSToolbarItem)
```

## Parameters

- `toolbarItem`: The toolbar item anchoring the popover.

<a id="Discussion"></a>

## Discussion

Use this method to display a popover relative to a toolbar item. When the item is in the overflow menu, the popover presents itself from another appropriate affordance in the window. See [show(relativeTo:of:preferredEdge:)](show%28relativeto_of_preferrededge_%29.md) for popover behavior.

This method raises an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if it can’t locate the toolbar item. This could occur if the item isn’t in a toolbar, or because the toolbar isn’t in the window.

# showRelativeToToolbarItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Shows the popover anchored to the specified toolbar item.

## Declaration

```objectivec
- (void) showRelativeToToolbarItem:(NSToolbarItem *) toolbarItem;
```

## Parameters

- `toolbarItem`: The toolbar item anchoring the popover.

<a id="Discussion"></a>

## Discussion

Use this method to display a popover relative to a toolbar item. When the item is in the overflow menu, the popover presents itself from another appropriate affordance in the window. See [showRelativeToRect:ofView:preferredEdge:](show%28relativeto_of_preferrededge_%29.md) for popover behavior.

This method raises an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) if it can’t locate the toolbar item. This could occur if the item isn’t in a toolbar, or because the toolbar isn’t in the window.
