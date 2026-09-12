> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawerdelegate/drawerwillresizecontents(_:to:)](https://developer.apple.com/documentation/appkit/nsdrawerdelegate/drawerwillresizecontents(_:to:))

# drawerWillResizeContents(\_:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Invoked when the user resizes the drawer or parent.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
optional func drawerWillResizeContents(_ sender: NSDrawer, to contentSize: NSSize) -> NSSize
```

## Parameters

- `sender`: The drawer being resized.
- `contentSize`: The proposed new size of the drawer.

<a id="return-value"></a>

## Return Value

The size that the drawer should be resized to. To resize to a different size, simply return the desired size from this method; to avoid resizing, return the current size.

<a id="Discussion"></a>

## Discussion

The receiver’s minimum and maximum size constraints have already been applied when this method is invoked. While the user is resizing an `NSDrawer` or its parent, the delegate is sent a series of `windowWillResize` messages as the `NSDrawer` or parent window is dragged.

# drawerWillResizeContents:toSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Invoked when the user resizes the drawer or parent.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (NSSize) drawerWillResizeContents:(NSDrawer *) sender toSize:(NSSize) contentSize;
```

## Parameters

- `sender`: The drawer being resized.
- `contentSize`: The proposed new size of the drawer.

<a id="return-value"></a>

## Return Value

The size that the drawer should be resized to. To resize to a different size, simply return the desired size from this method; to avoid resizing, return the current size.

<a id="Discussion"></a>

## Discussion

The receiver’s minimum and maximum size constraints have already been applied when this method is invoked. While the user is resizing an `NSDrawer` or its parent, the delegate is sent a series of `windowWillResize` messages as the `NSDrawer` or parent window is dragged.
