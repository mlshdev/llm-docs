> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawerdelegate/drawerwillopen(_:)](https://developer.apple.com/documentation/appkit/nsdrawerdelegate/drawerwillopen(_:))

# drawerWillOpen(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Notifies the delegate that the drawer will open.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
optional func drawerWillOpen(_ notification: Notification)
```

## Parameters

- `notification`: An [NSDrawerDelegate](../nsdrawerdelegate.md) notification, sent by the default notification center immediately before the drawer is opened.

## See Also

### Opening and Closing Drawers

- [drawerShouldOpen(\_:)](drawershouldopen%28__%29.md): Deprecated. Asks the delegate if the specified drawer should open.
- [drawerDidOpen(\_:)](drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerShouldClose(\_:)](drawershouldclose%28__%29.md): Deprecated. Asks the delegate if the specified drawer should close.
- [drawerWillClose(\_:)](drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose(\_:)](drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.

# drawerWillOpen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Notifies the delegate that the drawer will open.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (void) drawerWillOpen:(NSNotification *) notification;
```

## Parameters

- `notification`: An [NSDrawerDelegate](../nsdrawerdelegate.md) notification, sent by the default notification center immediately before the drawer is opened.

## See Also

### Opening and Closing Drawers

- [drawerShouldOpen:](drawershouldopen%28__%29.md): Deprecated. Asks the delegate if the specified drawer should open.
- [drawerDidOpen:](drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerShouldClose:](drawershouldclose%28__%29.md): Deprecated. Asks the delegate if the specified drawer should close.
- [drawerWillClose:](drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose:](drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.
