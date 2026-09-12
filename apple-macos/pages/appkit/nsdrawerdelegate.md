> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawerdelegate](https://developer.apple.com/documentation/appkit/nsdrawerdelegate)

# NSDrawerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that drawer delegates implement to open, close, and resize the drawer.

> Drawers are deprecated and should not be used in modern macOS apps.

## Declaration

```swift
protocol NSDrawerDelegate : NSObjectProtocol
```

## Topics

### Opening and Closing Drawers

- [drawerShouldOpen(\_:)](nsdrawerdelegate/drawershouldopen%28__%29.md): Deprecated. Asks the delegate if the specified drawer should open.
- [drawerWillOpen(\_:)](nsdrawerdelegate/drawerwillopen%28__%29.md): Deprecated. Notifies the delegate that the drawer will open.
- [drawerDidOpen(\_:)](nsdrawerdelegate/drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerShouldClose(\_:)](nsdrawerdelegate/drawershouldclose%28__%29.md): Deprecated. Asks the delegate if the specified drawer should close.
- [drawerWillClose(\_:)](nsdrawerdelegate/drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose(\_:)](nsdrawerdelegate/drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.

### Managing Drawer Size

- [drawerWillResizeContents(\_:to:)](nsdrawerdelegate/drawerwillresizecontents%28__to_%29.md): Deprecated. Invoked when the user resizes the drawer or parent.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)

# NSDrawerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that drawer delegates implement to open, close, and resize the drawer.

> Drawers are deprecated and should not be used in modern macOS apps.

## Declaration

```objectivec
@protocol NSDrawerDelegate <NSObject>
```

## Topics

### Opening and Closing Drawers

- [drawerShouldOpen:](nsdrawerdelegate/drawershouldopen%28__%29.md): Deprecated. Asks the delegate if the specified drawer should open.
- [drawerWillOpen:](nsdrawerdelegate/drawerwillopen%28__%29.md): Deprecated. Notifies the delegate that the drawer will open.
- [drawerDidOpen:](nsdrawerdelegate/drawerdidopen%28__%29.md): Deprecated. Notifies the delegate that the drawer has opened.
- [drawerShouldClose:](nsdrawerdelegate/drawershouldclose%28__%29.md): Deprecated. Asks the delegate if the specified drawer should close.
- [drawerWillClose:](nsdrawerdelegate/drawerwillclose%28__%29.md): Deprecated. Notifies the delegate the drawer will close.
- [drawerDidClose:](nsdrawerdelegate/drawerdidclose%28__%29.md): Deprecated. Notifies the delegate that the drawer has closed.

### Managing Drawer Size

- [drawerWillResizeContents:toSize:](nsdrawerdelegate/drawerwillresizecontents%28__to_%29.md): Deprecated. Invoked when the user resizes the drawer or parent.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Protocols

- [NSAccessibility](nsaccessibility.md): A legacy, informal protocol that Apple doesn’t recommend for active use.
- [NSEditor](nseditor-deprecated-symbols.md): A set of methods that controllers and UI elements can implement to manage editing.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
