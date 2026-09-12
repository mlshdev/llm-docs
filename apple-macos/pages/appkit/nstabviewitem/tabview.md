> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabviewitem/tabview](https://developer.apple.com/documentation/appkit/nstabviewitem/tabview)

# tabView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the parent tab view for the receiver.

## Declaration

```swift
var tabView: NSTabView? { get }
```

<a id="Discussion"></a>

## Discussion

Note that this is the tab view itself, not the view displayed when a user clicks the tab.

A tab view item normally learns about its parent tab view when it is inserted into the view’s array of items. The NSTabView methods [addTabViewItem(\_:)](../nstabview/addtabviewitem%28__%29.md) and [insertTabViewItem(\_:at:)](../nstabview/inserttabviewitem%28__at_%29.md) set the tab view for the added or inserted item.

## See Also

### Related Documentation

- [view](view.md): Sets the view associated with the receiver to `view`.

# tabView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the parent tab view for the receiver.

## Declaration

```objectivec
@property (readonly, nullable) NSTabView * tabView;
```

<a id="Discussion"></a>

## Discussion

Note that this is the tab view itself, not the view displayed when a user clicks the tab.

A tab view item normally learns about its parent tab view when it is inserted into the view’s array of items. The NSTabView methods [addTabViewItem:](../nstabview/addtabviewitem%28__%29.md) and [insertTabViewItem:atIndex:](../nstabview/inserttabviewitem%28__at_%29.md) set the tab view for the added or inserted item.

## See Also

### Related Documentation

- [view](view.md): Sets the view associated with the receiver to `view`.
