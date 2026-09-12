> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/expandedinterfacedelegate](https://developer.apple.com/documentation/appkit/nsstatusitem/expandedinterfacedelegate)

# expandedInterfaceDelegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The delegate that manages the lifecycle of the status item’s expanded interface.

## Declaration

```swift
weak var expandedInterfaceDelegate: (any NSStatusItemExpandedInterfaceDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Status items that assign an [NSMenu](../nsmenu.md) to their button don’t receive expanded interface callbacks — the system handles the expanded menu interface automatically. The delegate shows the expanded interface, such as an [NSWindow](../nswindow.md) positioned beneath the status item, in response to [statusItem(\_:didBegin:)](../nsstatusitemexpandedinterfacedelegate/statusitem%28__didbegin_%29.md), and dismisses the interface in response to [statusItemDidEndExpandedInterfaceSession(\_:animated:)](../nsstatusitemexpandedinterfacedelegate/statusitemdidendexpandedinterfacesession%28__animated_%29.md).

## See Also

### Managing the expanded interface

- [expandedInterfaceSession](expandedinterfacesession.md): A session object that tracks the lifecycle of the status item’s active expanded interface.

# expandedInterfaceDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The delegate that manages the lifecycle of the status item’s expanded interface.

## Declaration

```objectivec
@property (weak, nullable) id<NSStatusItemExpandedInterfaceDelegate> expandedInterfaceDelegate;
```

<a id="Discussion"></a>

## Discussion

Status items that assign an [NSMenu](../nsmenu.md) to their button don’t receive expanded interface callbacks — the system handles the expanded menu interface automatically. The delegate shows the expanded interface, such as an [NSWindow](../nswindow.md) positioned beneath the status item, in response to [statusItem:didBeginExpandedInterfaceSession:](../nsstatusitemexpandedinterfacedelegate/statusitem%28__didbegin_%29.md), and dismisses the interface in response to [statusItemDidEndExpandedInterfaceSession:animated:](../nsstatusitemexpandedinterfacedelegate/statusitemdidendexpandedinterfacesession%28__animated_%29.md).

## See Also

### Managing the expanded interface

- [expandedInterfaceSession](expandedinterfacesession.md): A session object that tracks the lifecycle of the status item’s active expanded interface.
