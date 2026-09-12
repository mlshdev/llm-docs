> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabview(_:didselect:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabview(_:didselect:))

# tabView(\_:didSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the tab view controller that the specified tab was selected.

## Declaration

```swift
@MainActor func tabView(_ tabView: NSTabView, didSelect tabViewItem: NSTabViewItem?)
```

## Parameters

- `tabView`: The tab view object whose tab was selected.
- `tabViewItem`: The tab view item that was selected.

<a id="Discussion"></a>

## Discussion

This method is a delegate method called by the [NSTabView](../nstabview.md) object when changes occur. Use it to perform any necessary tasks after a tab is selected.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to Tab View Events

- [viewDidLoad()](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView(\_:shouldSelect:)](tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView(\_:willSelect:)](tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.

# tabView:didSelectTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Informs the tab view controller that the specified tab was selected.

## Declaration

```objectivec
- (void) tabView:(NSTabView *) tabView didSelectTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabView`: The tab view object whose tab was selected.
- `tabViewItem`: The tab view item that was selected.

<a id="Discussion"></a>

## Discussion

This method is a delegate method called by the [NSTabView](../nstabview.md) object when changes occur. Use it to perform any necessary tasks after a tab is selected.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to Tab View Events

- [viewDidLoad](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView:shouldSelectTabViewItem:](tabview%28__shouldselect_%29.md): Asks the tab view controller if the specified tab should be selected.
- [tabView:willSelectTabViewItem:](tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.
