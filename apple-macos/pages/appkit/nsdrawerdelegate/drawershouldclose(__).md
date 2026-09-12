> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawerdelegate/drawershouldclose(_:)](https://developer.apple.com/documentation/appkit/nsdrawerdelegate/drawershouldclose(_:))

# drawerShouldClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Asks the delegate if the specified drawer should close.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
optional func drawerShouldClose(_ sender: NSDrawer) -> Bool
```

## Parameters

- `sender`: The drawer being closed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the drawer to close; [false](https://developer.apple.com/documentation/swift/false) to prevent it from closing.

<a id="Discussion"></a>

## Discussion

This method is invoked on user-initiated attempts to close a drawer by dragging it or when the [NSDrawerDelegate](../nsdrawerdelegate.md) method is called.

## See Also

### Opening and Closing Drawers

- [drawerShouldOpen(\_:)](drawershouldopen%28__%29.md): Deprecated. Asks the delegate if the specified drawer should open.
- [drawerWillOpen(\_:)](drawerwillopen%28__%29.md): Deprecated. Notifies the delegate that the drawer will open.
- [drawerDidOpen(\_:)](drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerWillClose(\_:)](drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose(\_:)](drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.

# drawerShouldClose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Asks the delegate if the specified drawer should close.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (BOOL) drawerShouldClose:(NSDrawer *) sender;
```

## Parameters

- `sender`: The drawer being closed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow the drawer to close; [false](https://developer.apple.com/documentation/swift/false) to prevent it from closing.

<a id="Discussion"></a>

## Discussion

This method is invoked on user-initiated attempts to close a drawer by dragging it or when the [NSDrawerDelegate](../nsdrawerdelegate.md) method is called.

## See Also

### Opening and Closing Drawers

- [drawerShouldOpen:](drawershouldopen%28__%29.md): Deprecated. Asks the delegate if the specified drawer should open.
- [drawerWillOpen:](drawerwillopen%28__%29.md): Deprecated. Notifies the delegate that the drawer will open.
- [drawerDidOpen:](drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerWillClose:](drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose:](drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.
