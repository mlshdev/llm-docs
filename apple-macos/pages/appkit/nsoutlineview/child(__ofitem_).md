> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/child(_:ofitem:)](https://developer.apple.com/documentation/appkit/nsoutlineview/child(_:ofitem:))

# child(\_:ofItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the specified child of an item.

## Declaration

```swift
func child(_ index: Int, ofItem item: Any?) -> Any?
```

## Parameters

- `index`: The index of the child item in the parent.
- `item`: The parent item whose child item you want to retrieve.

<a id="return-value"></a>

## Return Value

The child item or `nil` if the item could not be found.

<a id="Discussion"></a>

## Discussion

You can call this method on an outline view with either a static or dynamic data source. For an outline view whose contents are dynamic, this method may call out to the [outlineView(\_:child:ofItem:)](../nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md) method of the associated data source object.

## See Also

### Getting Related Items

- [parent(forItem:)](parent%28foritem_%29.md): Returns the parent for a given item.
- [childIndex(forItem:)](childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [numberOfChildren(ofItem:)](numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.

# child:ofItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the specified child of an item.

## Declaration

```objectivec
- (id) child:(NSInteger) index ofItem:(id) item;
```

## Parameters

- `index`: The index of the child item in the parent.
- `item`: The parent item whose child item you want to retrieve.

<a id="return-value"></a>

## Return Value

The child item or `nil` if the item could not be found.

<a id="Discussion"></a>

## Discussion

You can call this method on an outline view with either a static or dynamic data source. For an outline view whose contents are dynamic, this method may call out to the [outlineView:child:ofItem:](../nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md) method of the associated data source object.

## See Also

### Getting Related Items

- [parentForItem:](parent%28foritem_%29.md): Returns the parent for a given item.
- [childIndexForItem:](childindex%28foritem_%29.md): Returns the child index of the specified item within its parent.
- [numberOfChildrenOfItem:](numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.
