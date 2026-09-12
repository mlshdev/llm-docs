> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/expanditem(_:expandchildren:)](https://developer.apple.com/documentation/appkit/nsoutlineview/expanditem(_:expandchildren:))

# expandItem(\_:expandChildren:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Expands a specified item and, optionally, its children.

## Declaration

```swift
func expandItem(_ item: Any?, expandChildren: Bool)
```

## Parameters

- `item`: An item in the receiver.

  Starting in OS X version 10.5,  passing `'nil'` will expand each item under the root in the outline view.
- `expandChildren`: If [true](https://developer.apple.com/documentation/swift/true), recursively expands `item` and its children. If [false](https://developer.apple.com/documentation/swift/false), expands `item` only (identical to [expandItem(\_:)](expanditem%28__%29.md)).

<a id="Discussion"></a>

## Discussion

For example, this method is invoked with the `expandChildren` parameter set to [true](https://developer.apple.com/documentation/swift/true) when a user Option-clicks the disclosure triangle for an item in the outline view (to expand the item and all its contained items).

For each item expanded, posts an item expanded notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem(\_:)](expanditem%28__%29.md): Expands a given item.
- [collapseItem(\_:)](collapseitem%28__%29.md): Collapses a given item.
- [collapseItem(\_:collapseChildren:)](collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.

# expandItem:expandChildren: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Expands a specified item and, optionally, its children.

## Declaration

```objectivec
- (void) expandItem:(id) item expandChildren:(BOOL) expandChildren;
```

## Parameters

- `item`: An item in the receiver.

  Starting in OS X version 10.5,  passing `'nil'` will expand each item under the root in the outline view.
- `expandChildren`: If [true](https://developer.apple.com/documentation/swift/true), recursively expands `item` and its children. If [false](https://developer.apple.com/documentation/swift/false), expands `item` only (identical to [expandItem:](expanditem%28__%29.md)).

<a id="Discussion"></a>

## Discussion

For example, this method is invoked with the `expandChildren` parameter set to [true](https://developer.apple.com/documentation/swift/true) when a user Option-clicks the disclosure triangle for an item in the outline view (to expand the item and all its contained items).

For each item expanded, posts an item expanded notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem:](expanditem%28__%29.md): Expands a given item.
- [collapseItem:](collapseitem%28__%29.md): Collapses a given item.
- [collapseItem:collapseChildren:](collapseitem%28__collapsechildren_%29.md): Collapses a given item and, optionally, its children.
