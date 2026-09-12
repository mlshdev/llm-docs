> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/selectedtabviewitemindex](https://developer.apple.com/documentation/appkit/nstabviewcontroller/selectedtabviewitemindex)

# selectedTabViewItemIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The index of the selected tab.

## Declaration

```swift
var selectedTabViewItemIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get and set the selected tab. The property is key-value coding compliant and can be the target of bindings.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItem(for:)](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem(\_:)](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem(\_:at:)](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem(\_:)](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.

# selectedTabViewItemIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The index of the selected tab.

## Declaration

```objectivec
@property NSInteger selectedTabViewItemIndex;
```

<a id="Discussion"></a>

## Discussion

Use this property to get and set the selected tab. The property is key-value coding compliant and can be the target of bindings.

## See Also

### Managing Tab View Items

- [tabViewItems](tabviewitems.md): The array of tab view items used to manage each of the child view controllers.
- [tabViewItemForViewController:](tabviewitem%28for_%29.md): Returns the tab view item for the specified child view controller.
- [addTabViewItem:](addtabviewitem%28__%29.md): Adds the specified tab to the end of the tab view controller’s list of tabs.
- [insertTabViewItem:atIndex:](inserttabviewitem%28__at_%29.md): Inserts a tab view into the tab view controller’s list of tabs.
- [removeTabViewItem:](removetabviewitem%28__%29.md): Removes the specified tab view item from the tab view controller.
