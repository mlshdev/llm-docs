> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/tabviewitems](https://developer.apple.com/documentation/appkit/nstabview/tabviewitems)

# tabViewItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab view’s array of tab view items.

## Declaration

```swift
var tabViewItems: [NSTabViewItem] { get set }
```

<a id="Discussion"></a>

## Discussion

A tab view keeps an array containing one tab view item for each tab in the view. The default value of this property is an empty array.

## See Also

### Accessing Tabs

- [indexOfTabViewItem(\_:)](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItem(withIdentifier:)](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItem(at:)](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.

# tabViewItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab view’s array of tab view items.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSTabViewItem *> * tabViewItems;
```

<a id="Discussion"></a>

## Discussion

A tab view keeps an array containing one tab view item for each tab in the view. The default value of this property is an empty array.

## See Also

### Accessing Tabs

- [indexOfTabViewItem:](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItemWithIdentifier:](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [numberOfTabViewItems](numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
- [tabViewItemAtIndex:](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
