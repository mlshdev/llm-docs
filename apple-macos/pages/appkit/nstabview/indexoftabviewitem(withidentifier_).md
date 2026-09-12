> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/indexoftabviewitem(withidentifier:)](https://developer.apple.com/documentation/appkit/nstabview/indexoftabviewitem(withidentifier:))

# indexOfTabViewItem(withIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.

## Declaration

```swift
func indexOfTabViewItem(withIdentifier identifier: Any) -> Int
```

## Parameters

- `identifier`: The identifier of a tab view item.

<a id="return-value"></a>

## Return Value

The zero-based index of the tab view item corresponding to `identifier`, or `NSNotFound` if the item is not found.

<a id="Discussion"></a>

## Discussion

The returned index is zero-based.

## See Also

### Related Documentation

- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Accessing Tabs

- [indexOfTabViewItem(\_:)](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItem(at:)](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

# indexOfTabViewItemWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.

## Declaration

```objectivec
- (NSInteger) indexOfTabViewItemWithIdentifier:(id) identifier;
```

## Parameters

- `identifier`: The identifier of a tab view item.

<a id="return-value"></a>

## Return Value

The zero-based index of the tab view item corresponding to `identifier`, or `NSNotFound` if the item is not found.

<a id="Discussion"></a>

## Discussion

The returned index is zero-based.

## See Also

### Related Documentation

- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts the specified item into the tab view’s array of tab view items at the specified index.

### Accessing Tabs

- [indexOfTabViewItem:](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItemAtIndex:](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.
