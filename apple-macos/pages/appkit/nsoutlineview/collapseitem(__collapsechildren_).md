> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/collapseitem(_:collapsechildren:)](https://developer.apple.com/documentation/appkit/nsoutlineview/collapseitem(_:collapsechildren:))

# collapseItem(\_:collapseChildren:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Collapses a given item and, optionally, its children.

## Declaration

```swift
func collapseItem(_ item: Any?, collapseChildren: Bool)
```

## Parameters

- `item`: An item in the receiver.

  Starting in OS X version 10.5,  passing `'nil'` will collapse each item under the root in the outline view.
- `collapseChildren`: If [true](https://developer.apple.com/documentation/swift/true), recursively collapses `item` and its children. If [false](https://developer.apple.com/documentation/swift/false), collapses `item` only (identical to [collapseItem(\_:)](collapseitem%28__%29.md)).

<a id="Discussion"></a>

## Discussion

For example, this method is invoked with the `collapseChildren` parameter set to [true](https://developer.apple.com/documentation/swift/true) when a user Option-clicks the disclosure triangle for an item in the outline view (to collapse the item and all its contained items).

For each item collapsed, posts an item collapsed notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem(\_:)](expanditem%28__%29.md): Expands a given item.
- [expandItem(\_:expandChildren:)](expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem(\_:)](collapseitem%28__%29.md): Collapses a given item.

# collapseItem:collapseChildren: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Collapses a given item and, optionally, its children.

## Declaration

```objectivec
- (void) collapseItem:(id) item collapseChildren:(BOOL) collapseChildren;
```

## Parameters

- `item`: An item in the receiver.

  Starting in OS X version 10.5,  passing `'nil'` will collapse each item under the root in the outline view.
- `collapseChildren`: If [true](https://developer.apple.com/documentation/swift/true), recursively collapses `item` and its children. If [false](https://developer.apple.com/documentation/swift/false), collapses `item` only (identical to [collapseItem:](collapseitem%28__%29.md)).

<a id="Discussion"></a>

## Discussion

For example, this method is invoked with the `collapseChildren` parameter set to [true](https://developer.apple.com/documentation/swift/true) when a user Option-clicks the disclosure triangle for an item in the outline view (to collapse the item and all its contained items).

For each item collapsed, posts an item collapsed notification.

## See Also

### Expanding and Collapsing the Outline

- [expandItem:](expanditem%28__%29.md): Expands a given item.
- [expandItem:expandChildren:](expanditem%28__expandchildren_%29.md): Expands a specified item and, optionally, its children.
- [collapseItem:](collapseitem%28__%29.md): Collapses a given item.
