> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewcontroller/tabview(_:shouldselect:)](https://developer.apple.com/documentation/appkit/nstabviewcontroller/tabview(_:shouldselect:))

# tabView(\_:shouldSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Asks the tab view controller if the specified tab should be selected.

## Declaration

```swift
@MainActor func tabView(_ tabView: NSTabView, shouldSelect tabViewItem: NSTabViewItem?) -> Bool
```

## Parameters

- `tabView`: The tab view object making the request.
- `tabViewItem`: The tab view item to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the tab should be selected or [false](https://developer.apple.com/documentation/swift/false) if it should not be selected.

<a id="Discussion"></a>

## Discussion

This method is a delegate method called by the [NSTabView](../nstabview.md) object when changes occur. Use it to dynamically determine whether a tab should be selected.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to Tab View Events

- [viewDidLoad()](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView(\_:willSelect:)](tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.
- [tabView(\_:didSelect:)](tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.

# tabView:shouldSelectTabViewItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Asks the tab view controller if the specified tab should be selected.

## Declaration

```objectivec
- (BOOL) tabView:(NSTabView *) tabView shouldSelectTabViewItem:(NSTabViewItem *) tabViewItem;
```

## Parameters

- `tabView`: The tab view object making the request.
- `tabViewItem`: The tab view item to select.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the tab should be selected or [false](https://developer.apple.com/documentation/swift/false) if it should not be selected.

<a id="Discussion"></a>

## Discussion

This method is a delegate method called by the [NSTabView](../nstabview.md) object when changes occur. Use it to dynamically determine whether a tab should be selected.

If you override this method, you must call `super` at some point in your implementation.

## See Also

### Responding to Tab View Events

- [viewDidLoad](viewdidload%28%29.md): Called after the view controller’s view has been loaded into memory.
- [tabView:willSelectTabViewItem:](tabview%28__willselect_%29.md): Informs the tab view controller that the specified tab is about to be selected.
- [tabView:didSelectTabViewItem:](tabview%28__didselect_%29.md): Informs the tab view controller that the specified tab was selected.
