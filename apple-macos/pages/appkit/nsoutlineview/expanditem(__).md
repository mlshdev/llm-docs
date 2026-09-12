> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/expanditem(_:)](https://developer.apple.com/documentation/appkit/nsoutlineview/expanditem(_:))

# expandItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Expands a given item.

## Declaration

```swift
func expandItem(_ item: Any?)
```

## Parameters

- `item`: An item in the receiver.

<a id="Discussion"></a>

## Discussion

If `item` is not expandable or is already expanded, does nothing.

If expanding takes place, posts an item expanded notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem(\_:expandChildren:)](expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem(\_:)](collapseitem%28__%29.md): Collapses a given item.
- [collapseItem(\_:collapseChildren:)](collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.

# expandItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Expands a given item.

## Declaration

```objectivec
- (void) expandItem:(id) item;
```

## Parameters

- `item`: An item in the receiver.

<a id="Discussion"></a>

## Discussion

If `item` is not expandable or is already expanded, does nothing.

If expanding takes place, posts an item expanded notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem:expandChildren:](expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem:](collapseitem%28__%29.md): Collapses a given item.
- [collapseItem:collapseChildren:](collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.
