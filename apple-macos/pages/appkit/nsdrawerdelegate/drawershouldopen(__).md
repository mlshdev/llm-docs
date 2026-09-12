> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawerdelegate/drawershouldopen(_:)](https://developer.apple.com/documentation/appkit/nsdrawerdelegate/drawershouldopen(_:))

# drawerShouldOpen(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Asks the delegate if the specified drawer should open.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
optional func drawerShouldOpen(_ sender: NSDrawer) -> Bool
```

## Parameters

- `sender`: The drawer requesting permission to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drawer should open; [false](https://developer.apple.com/documentation/swift/false) to prevent the drawer from opening.

<a id="Discussion"></a>

## Discussion

This method is invoked on user-initiated attempts to open a drawer by dragging it or when the [NSDrawerDelegate](../nsdrawerdelegate.md) method is called.

## See Also

### Related Documentation

- [Drawer Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Drawers/Drawers.html#//apple_ref/doc/uid/10000001i)

### Opening and Closing Drawers

- [drawerWillOpen(\_:)](drawerwillopen%28__%29.md): Deprecated. Notifies the delegate that the drawer will open.
- [drawerDidOpen(\_:)](drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerShouldClose(\_:)](drawershouldclose%28__%29.md): Deprecated. Asks the delegate if the specified drawer should close.
- [drawerWillClose(\_:)](drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose(\_:)](drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.

# drawerShouldOpen: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Asks the delegate if the specified drawer should open.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (BOOL) drawerShouldOpen:(NSDrawer *) sender;
```

## Parameters

- `sender`: The drawer requesting permission to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the drawer should open; [false](https://developer.apple.com/documentation/swift/false) to prevent the drawer from opening.

<a id="Discussion"></a>

## Discussion

This method is invoked on user-initiated attempts to open a drawer by dragging it or when the [NSDrawerDelegate](../nsdrawerdelegate.md) method is called.

## See Also

### Related Documentation

- [Drawer Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Drawers/Drawers.html#//apple_ref/doc/uid/10000001i)

### Opening and Closing Drawers

- [drawerWillOpen:](drawerwillopen%28__%29.md): Deprecated. Notifies the delegate that the drawer will open.
- [drawerDidOpen:](drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerShouldClose:](drawershouldclose%28__%29.md): Deprecated. Asks the delegate if the specified drawer should close.
- [drawerWillClose:](drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose:](drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.
