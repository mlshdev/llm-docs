> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabview(_:willselect:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabview(_:willselect:))

# tabView(\_:willSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the tab view controller that the specified tab is about to be selected.

## Declaration

```swift
@MainActor func tabView(_ tabView: NSTabView, willSelect tabViewItem: NSTabViewItem?)
```

## Parameters

- `tabView`: The tab view object whose tab is about to be selected.
- `tabViewItem`: The tab view item that will be selected.

<a id="Discussion"></a>

## Discussion

This method is a delegate method called by the [NSTabView](../nstabview.md) object when changes occur. Use it to update your UI or perform any tasks before a tab is selected.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to Tab View Events

- [viewDidLoad()](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView(\_:shouldSelect:)](tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView(\_:didSelect:)](tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.

# tabView:willSelectTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the tab view controller that the specified tab is about to be selected.

## Declaration

```objectivec
- (void) tabView:(NSTabView *) tabView willSelectTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabView`: The tab view object whose tab is about to be selected.
- `tabViewItem`: The tab view item that will be selected.

<a id="Discussion"></a>

## Discussion

This method is a delegate method called by the [NSTabView](../nstabview.md) object when changes occur. Use it to update your UI or perform any tasks before a tab is selected.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to Tab View Events

- [viewDidLoad](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView:shouldSelectTabViewItem:](tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView:didSelectTabViewItem:](tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.
