> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/expandedinterfacesession](https://developer.apple.com/documentation/appkit/nsstatusitem/expandedinterfacesession)

# expandedInterfaceSession (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A session object that tracks the lifecycle of the status item’s active expanded interface.

## Declaration

```swift
var expandedInterfaceSession: NSStatusItemExpandedInterfaceSession? { get }
```

<a id="Discussion"></a>

## Discussion

The status item sets this property to a valid session object before calling [statusItem(\_:didBegin:)](../nsstatusitemexpandedinterfacedelegate/statusitem%28__didbegin_%29.md) on the [expandedInterfaceDelegate](expandedinterfacedelegate.md), and sets the property to `nil` before calling [statusItemDidEndExpandedInterfaceSession(\_:animated:)](../nsstatusitemexpandedinterfacedelegate/statusitemdidendexpandedinterfacesession%28__animated_%29.md).

## See Also

### Managing the expanded interface

- [expandedInterfaceDelegate](expandedinterfacedelegate.md): The delegate that manages the lifecycle of the status item’s expanded interface.

# expandedInterfaceSession (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A session object that tracks the lifecycle of the status item’s active expanded interface.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSStatusItemExpandedInterfaceSession * expandedInterfaceSession;
```

<a id="Discussion"></a>

## Discussion

The status item sets this property to a valid session object before calling [statusItem:didBeginExpandedInterfaceSession:](../nsstatusitemexpandedinterfacedelegate/statusitem%28__didbegin_%29.md) on the [expandedInterfaceDelegate](expandedinterfacedelegate.md), and sets the property to `nil` before calling [statusItemDidEndExpandedInterfaceSession:animated:](../nsstatusitemexpandedinterfacedelegate/statusitemdidendexpandedinterfacesession%28__animated_%29.md).

## See Also

### Managing the expanded interface

- [expandedInterfaceDelegate](expandedinterfacedelegate.md): The delegate that manages the lifecycle of the status item’s expanded interface.
