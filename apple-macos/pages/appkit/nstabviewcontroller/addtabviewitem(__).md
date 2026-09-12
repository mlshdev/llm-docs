> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/addtabviewitem(_:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/addtabviewitem(_:))

# addTabViewItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds the specified tab to the end of the tab view controller’s list of tabs.

## Declaration

```swift
func addTabViewItem(_ tabViewItem: NSTabViewItem)
```

## Parameters

- `tabViewItem`: The tab view item to add. The tab view item must have an associated view controller. If this parameter is `nil` or if the tab view item does not have a view controller, this method raises an exception.

<a id="Discussion"></a>

## Discussion

Use this method to add new tabs to a tab view controller. This method adds the tab’s associated view controller as a child of the tab view controller, so you do not need to call the [addChild(\_:)](../nsviewcontroller/addchild%28__%29.md) method directly. The view for the new view controller is not loaded until its corresponding tab is selected by the user.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItem(for:)](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem(\_:)](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.

# addTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Adds the specified tab to the end of the tab view controller’s list of tabs.

## Declaration

```objectivec
- (void) addTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabViewItem`: The tab view item to add. The tab view item must have an associated view controller. If this parameter is `nil` or if the tab view item does not have a view controller, this method raises an exception.

<a id="Discussion"></a>

## Discussion

Use this method to add new tabs to a tab view controller. This method adds the tab’s associated view controller as a child of the tab view controller, so you do not need to call the [addChildViewController:](../nsviewcontroller/addchild%28__%29.md) method directly. The view for the new view controller is not loaded until its corresponding tab is selected by the user.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItemForViewController:](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem:](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
- [selectedTabViewItemIndex](selectedtabviewitemindex.md): The index of the selected tab.
