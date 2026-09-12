> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabviewitem(for:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabviewitem(for:))

# tabViewItem(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the tab view item for the specified child view controller.

## Declaration

```swift
func tabViewItem(for viewController: NSViewController) -> NSTabViewItem?
```

## Parameters

- `viewController`: The child view controller whose tab view item you want.

<a id="return-value"></a>

## Return Value

The tab view item associated with the view controller or `nil` if the view controller is not managed by the tab view controller.

<a id="Discussion"></a>

## Discussion

This method is a convenient way to map a tab view item to a newly added child view controller. When you add child view controllers using the [addChild(\_:)](../nsviewcontroller/addchild%28__%29.md) method, the tab view automatically controller creates a new tab view item. Use this method to fetch that tab view item and configure it.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [addTabViewItem(\_:)](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem(\_:)](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.

# tabViewItemForViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns the tab view item for the specified child view controller.

## Declaration

```objectivec
- (NSTabViewItem *) tabViewItemForViewController:(NSViewController *) viewController;
```

## Parameters

- `viewController`: The child view controller whose tab view item you want.

<a id="return-value"></a>

## Return Value

The tab view item associated with the view controller or `nil` if the view controller is not managed by the tab view controller.

<a id="Discussion"></a>

## Discussion

This method is a convenient way to map a tab view item to a newly added child view controller. When you add child view controllers using the [addChildViewController:](../nsviewcontroller/addchild%28__%29.md) method, the tab view automatically controller creates a new tab view item. Use this method to fetch that tab view item and configure it.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [addTabViewItem:](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem:](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.
