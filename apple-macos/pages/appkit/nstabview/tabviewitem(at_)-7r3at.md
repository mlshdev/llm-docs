> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/tabviewitem(at:)-7r3at](https://developer.apple.com/documentation/appkit/nstabview/tabviewitem(at:)-7r3at)

# tabViewItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tab view item at `index` in the tab view’s array of items.

## Declaration

```swift
func tabViewItem(at index: Int) -> NSTabViewItem
```

## Parameters

- `index`: The index at which to insert the tab view item. The `index` parameter is zero-based.

<a id="return-value"></a>

## Return Value

The tab view item at the specified index.

## See Also

### Related Documentation

- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Accessing Tabs

- [indexOfTabViewItem(\_:)](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItem(withIdentifier:)](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

# tabViewItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the tab view item at `index` in the tab view’s array of items.

## Declaration

```objectivec
- (NSTabViewItem *) tabViewItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index at which to insert the tab view item. The `index` parameter is zero-based.

<a id="return-value"></a>

## Return Value

The tab view item at the specified index.

## See Also

### Related Documentation

- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Accessing Tabs

- [indexOfTabViewItem:](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItemWithIdentifier:](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.
