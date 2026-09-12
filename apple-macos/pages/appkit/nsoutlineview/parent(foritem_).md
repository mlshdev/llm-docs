> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/parent(foritem:)](https://developer.apple.com/documentation/appkit/nsoutlineview/parent(foritem:))

# parent(forItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the parent for a given item.

## Declaration

```swift
func parent(forItem item: Any?) -> Any?
```

## Parameters

- `item`: The item for which to return the parent.

<a id="return-value"></a>

## Return Value

The parent for `item`, or `nil` if the parent is the root.

## See Also

### Getting Related Items

- [childIndex(forItem:)](childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [child(\_:ofItem:)](child%28__ofitem_%29.md): Returns the specified child of an item.
- [numberOfChildren(ofItem:)](numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.

# parentForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the parent for a given item.

## Declaration

```objectivec
- (id) parentForItem:(id) item;
```

## Parameters

- `item`: The item for which to return the parent.

<a id="return-value"></a>

## Return Value

The parent for `item`, or `nil` if the parent is the root.

## See Also

### Getting Related Items

- [childIndexForItem:](childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [child:ofItem:](child%28__ofitem_%29.md): Returns the specified child of an item.
- [numberOfChildrenOfItem:](numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.
