> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/childindex(foritem:)](https://developer.apple.com/documentation/appkit/nsoutlineview/childindex(foritem:))

# childIndex(forItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the child index of the specified item within its parent.

## Declaration

```swift
func childIndex(forItem item: Any) -> Int
```

<a id="Discussion"></a>

## Discussion

The performance of this method is O(1) at best and O(n) at worst.

## See Also

### Getting Related Items

- [parent(forItem:)](parent%28foritem_%29.md): Returns the parent for a given item.
- [child(\_:ofItem:)](child%28__ofitem_%29.md): Returns the specified child of an item.
- [numberOfChildren(ofItem:)](numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.

# childIndexForItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the child index of the specified item within its parent.

## Declaration

```objectivec
- (NSInteger) childIndexForItem:(id) item;
```

<a id="Discussion"></a>

## Discussion

The performance of this method is O(1) at best and O(n) at worst.

## See Also

### Getting Related Items

- [parentForItem:](parent%28foritem_%29.md): Returns the parent for a given item.
- [child:ofItem:](child%28__ofitem_%29.md): Returns the specified child of an item.
- [numberOfChildrenOfItem:](numberofchildren%28ofitem_%29.md): Returns the number of children for the specified parent item.
