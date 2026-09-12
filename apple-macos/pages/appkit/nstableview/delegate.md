> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/delegate](https://developer.apple.com/documentation/appkit/nstableview/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table view’s delegate.

## Declaration

```swift
weak var delegate: (any NSTableViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSTableViewDelegate](../nstableviewdelegate.md) protocol. Setting the delegate will implicitly reload the table view. Note that in versions of macOS prior to v10.12, the table view did not retain the delegate in a managed memory environment.

<a id="Special-Considerations"></a>

### Special Considerations

When you set the table view’s delegate, it is automatically registered for the following notifications with the following delegate methods:

- The notification named [selectionDidChangeNotification](selectiondidchangenotification.md) is configured to notify the delegate’s [tableViewSelectionDidChange(\_:)](../nstableviewdelegate/tableviewselectiondidchange%28__%29.md).
- The notification named [columnDidMoveNotification](columndidmovenotification.md) is configured to notify the delegate’s [tableViewColumnDidMove(\_:)](../nstableviewdelegate/tableviewcolumndidmove%28__%29.md).
- The notification named [columnDidResizeNotification](columndidresizenotification.md) is configured to notify the delegate’s [tableViewColumnDidResize(\_:)](../nstableviewdelegate/tableviewcolumndidresize%28__%29.md).
- The notification named [selectionIsChangingNotification](selectionischangingnotification.md) is configured to notify the delegate’s [tableViewSelectionIsChanging(\_:)](../nstableviewdelegate/tableviewselectionischanging%28__%29.md).

Setting the delegate to `nil` causes these notifications to be disconnected. Rather than setting the delegate to `nil` and listening for notifications (and expecting `NSTableView` to still function correctly) you should instead implement the appropriate delegate method.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table view’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSTableViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must conform to the [NSTableViewDelegate](../nstableviewdelegate.md) protocol. Setting the delegate will implicitly reload the table view. Note that in versions of macOS prior to v10.12, the table view did not retain the delegate in a managed memory environment.

<a id="Special-Considerations"></a>

### Special Considerations

When you set the table view’s delegate, it is automatically registered for the following notifications with the following delegate methods:

- The notification named [NSTableViewSelectionDidChangeNotification](selectiondidchangenotification.md) is configured to notify the delegate’s [tableViewSelectionDidChange:](../nstableviewdelegate/tableviewselectiondidchange%28__%29.md).
- The notification named [NSTableViewColumnDidMoveNotification](columndidmovenotification.md) is configured to notify the delegate’s [tableViewColumnDidMove:](../nstableviewdelegate/tableviewcolumndidmove%28__%29.md).
- The notification named [NSTableViewColumnDidResizeNotification](columndidresizenotification.md) is configured to notify the delegate’s [tableViewColumnDidResize:](../nstableviewdelegate/tableviewcolumndidresize%28__%29.md).
- The notification named [NSTableViewSelectionIsChangingNotification](selectionischangingnotification.md) is configured to notify the delegate’s [tableViewSelectionIsChanging:](../nstableviewdelegate/tableviewselectionischanging%28__%29.md).

Setting the delegate to `nil` causes these notifications to be disconnected. Rather than setting the delegate to `nil` and listening for notifications (and expecting `NSTableView` to still function correctly) you should instead implement the appropriate delegate method.
