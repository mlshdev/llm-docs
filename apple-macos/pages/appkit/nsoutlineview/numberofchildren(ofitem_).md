> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/numberofchildren(ofitem:)](https://developer.apple.com/documentation/appkit/nsoutlineview/numberofchildren(ofitem:))

# numberOfChildren(ofItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the number of children for the specified parent item.

## Declaration

```swift
func numberOfChildren(ofItem item: Any?) -> Int
```

## Parameters

- `item`: The parent item.

<a id="return-value"></a>

## Return Value

The number of children associated with the parent.

<a id="Discussion"></a>

## Discussion

You can call this method on an outline view with either a static or dynamic data source. For an outline view whose contents are dynamic, this method may call out to the [outlineView(\_:numberOfChildrenOfItem:)](../nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md) method of the associated data source object.

## See Also

### Getting Related Items

- [parent(forItem:)](parent%28foritem_%29.md): Returns the parent for a given item.
- [childIndex(forItem:)](childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [child(\_:ofItem:)](child%28__ofitem_%29.md): Returns the specified child of an item.

# numberOfChildrenOfItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the number of children for the specified parent item.

## Declaration

```objectivec
- (NSInteger) numberOfChildrenOfItem:(id) item;
```

## Parameters

- `item`: The parent item.

<a id="return-value"></a>

## Return Value

The number of children associated with the parent.

<a id="Discussion"></a>

## Discussion

You can call this method on an outline view with either a static or dynamic data source. For an outline view whose contents are dynamic, this method may call out to the [outlineView:numberOfChildrenOfItem:](../nsoutlineviewdatasource/outlineview%28__numberofchildrenofitem_%29.md) method of the associated data source object.

## See Also

### Getting Related Items

- [parentForItem:](parent%28foritem_%29.md): Returns the parent for a given item.
- [childIndexForItem:](childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [child:ofItem:](child%28__ofitem_%29.md): Returns the specified child of an item.
