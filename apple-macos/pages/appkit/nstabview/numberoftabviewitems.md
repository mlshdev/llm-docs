> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/numberoftabviewitems](https://developer.apple.com/documentation/appkit/nstabview/numberoftabviewitems)

# numberOfTabViewItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of items in the tab view’s array of tab view items.

## Declaration

```swift
var numberOfTabViewItems: Int { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is 0.

## See Also

### Accessing Tabs

- [indexOfTabViewItem(\_:)](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItem(withIdentifier:)](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [tabViewItem(at:)](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.

# numberOfTabViewItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of items in the tab view’s array of tab view items.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfTabViewItems;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is 0.

## See Also

### Accessing Tabs

- [indexOfTabViewItem:](indexoftabviewitem%28__%29.md): Returns the index of the specified item in the tab view.
- [indexOfTabViewItemWithIdentifier:](indexoftabviewitem%28withidentifier_%29.md): Returns the index of the item that matches the specified identifier or `NSNotFound` if the item is not found.
- [tabViewItemAtIndex:](tabviewitem%28at_%29-7r3at.md): Returns the tab view item at `index` in the tab view’s array of items.
- [tabViewItems](tabviewitems.md): The tab view’s array of tab view items.
