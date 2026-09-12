> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenudelegate/menu(_:willhighlight:)](https://developer.apple.com/documentation/appkit/nsmenudelegate/menu(_:willhighlight:))

# menu(\_:willHighlight:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to indicate that a menu is about to highlight a given item.

## Declaration

```swift
@MainActor optional func menu(_ menu: NSMenu, willHighlight item: NSMenuItem?)
```

## Parameters

- `menu`: The menu object about to highlight an item.
- `item`: The item about to be highlighted.

<a id="Discussion"></a>

## Discussion

Only one item per menu can be highlighted at a time. If `item` is `nil`, it means that all items in the menu are about to be unhighlighted.

## See Also

### Related Documentation

- [highlightedItem](../nsmenu/highlighteditem.md): Indicates the currently highlighted item in the menu.

# menu:willHighlightItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Invoked to indicate that a menu is about to highlight a given item.

## Declaration

```objectivec
- (void) menu:(NSMenu *) menu willHighlightItem:(NSMenuItem *) item;
```

## Parameters

- `menu`: The menu object about to highlight an item.
- `item`: The item about to be highlighted.

<a id="Discussion"></a>

## Discussion

Only one item per menu can be highlighted at a time. If `item` is `nil`, it means that all items in the menu are about to be unhighlighted.

## See Also

### Related Documentation

- [highlightedItem](../nsmenu/highlighteditem.md): Indicates the currently highlighted item in the menu.
