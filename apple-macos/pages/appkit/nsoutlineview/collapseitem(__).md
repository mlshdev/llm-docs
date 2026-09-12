> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/collapseitem(_:)](https://developer.apple.com/documentation/appkit/nsoutlineview/collapseitem(_:))

# collapseItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Collapses a given item.

## Declaration

```swift
func collapseItem(_ item: Any?)
```

## Parameters

- `item`: An item in the receiver.

<a id="Discussion"></a>

## Discussion

If `item` is not expanded or not expandable, does nothing

If collapsing takes place, posts item collapse notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem(\_:)](expanditem%28__%29.md): Expands a given item.
- [expandItem(\_:expandChildren:)](expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem(\_:collapseChildren:)](collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.

# collapseItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Collapses a given item.

## Declaration

```objectivec
- (void) collapseItem:(id) item;
```

## Parameters

- `item`: An item in the receiver.

<a id="Discussion"></a>

## Discussion

If `item` is not expanded or not expandable, does nothing

If collapsing takes place, posts item collapse notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem:](expanditem%28__%29.md): Expands a given item.
- [expandItem:expandChildren:](expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem:collapseChildren:](collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.
