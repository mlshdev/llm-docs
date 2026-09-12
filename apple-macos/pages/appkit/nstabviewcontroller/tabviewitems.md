> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabviewitems](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabviewitems)

# tabViewItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The array of tab view items used to manage each of the child view controllers.

## Declaration

```swift
var tabViewItems: [NSTabViewItem] { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSTabViewItem](../nstabviewitem.md) objects. Each tab view item contains information about a tab in the tab view interface, including the child view controller that manages the tab’s contents.

Assigning a new array to this property updates the set of tabs displayed by the tab view controller.

## See Also

### Managing Tab View Items

- [tabViewItem(for:)](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem(\_:)](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem(\_:)](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.

# tabViewItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The array of tab view items used to manage each of the child view controllers.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSTabViewItem *> * tabViewItems;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSTabViewItem](../nstabviewitem.md) objects. Each tab view item contains information about a tab in the tab view interface, including the child view controller that manages the tab’s contents.

Assigning a new array to this property updates the set of tabs displayed by the tab view controller.

## See Also

### Managing Tab View Items

- [tabViewItemForViewController:](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem:](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem:](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.
