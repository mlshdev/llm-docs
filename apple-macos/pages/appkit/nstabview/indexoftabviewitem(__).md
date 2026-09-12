> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/indexoftabviewitem(_:)](https://developer.apple.com/documentation/appkit/nstabview/indexoftabviewitem(_:))

# indexOfTabViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the specified item in the tab view.

## Declaration

```swift
func indexOfTabViewItem(_ tabViewItem: NSTabViewItem) -> Int
```

## Parameters

- `tabViewItem`: The tab view item.

<a id="return-value"></a>

## Return Value

The zero-based index of `tabViewItem`, or `NSNotFound` if the item is not found.

<a id="Discussion"></a>

## Discussion

The returned index is zero-based.

## See Also

### Related Documentation

- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Accessing Tabs

- [indexOfTabViewItem(withIdentifier:)](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItem(at:)](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

# indexOfTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the specified item in the tab view.

## Declaration

```objectivec
- (NSInteger) indexOfTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabViewItem`: The tab view item.

<a id="return-value"></a>

## Return Value

The zero-based index of `tabViewItem`, or `NSNotFound` if the item is not found.

<a id="Discussion"></a>

## Discussion

The returned index is zero-based.

## See Also

### Related Documentation

- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Accessing Tabs

- [indexOfTabViewItemWithIdentifier:](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItemAtIndex:](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.
