> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewdelegate/tabviewdidchangenumberoftabviewitems(_:)](https://developer.apple.com/documentation/appkit/nstabviewdelegate/tabviewdidchangenumberoftabviewitems(_:))

# tabViewDidChangeNumberOfTabViewItems(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the number of tab view items in `tabView` has changed.

## Declaration

```swift
@MainActor optional func tabViewDidChangeNumberOfTabViewItems(_ tabView: NSTabView)
```

## Parameters

- `tabView`: The tab view that added or removed tabview items.

## See Also

### Related Documentation

- [Tab View Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TabView/TabView.html#//apple_ref/doc/uid/10000074i)
- [numberOfTabViewItems](../nstabview/numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.

# tabViewDidChangeNumberOfTabViewItems: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the delegate that the number of tab view items in `tabView` has changed.

## Declaration

```objectivec
- (void) tabViewDidChangeNumberOfTabViewItems:(NSTabView *) tabView;
```

## Parameters

- `tabView`: The tab view that added or removed tabview items.

## See Also

### Related Documentation

- [Tab View Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TabView/TabView.html#//apple_ref/doc/uid/10000074i)
- [numberOfTabViewItems](../nstabview/numberoftabviewitems.md): The number of items in the tab view’s array of tab view items.
