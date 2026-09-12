> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/init(popupmenu:target:action:)](https://developer.apple.com/documentation/appkit/nspopupbutton/init(popupmenu:target:action:))

# init(popUpMenu:target:action:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a standard pop-up button with a menu, target, and action.

## Declaration

```swift
@backDeployed(before: macOS 15.0)
@MainActor @preconcurrency convenience init(popUpMenu: NSMenu, target: AnyObject?, action: Selector?)
```

## Parameters

- `popUpMenu`: A menu presented by the pop-up button, containing items that the user can choose between.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized pop-up button object.

<a id="discussion"></a>

## Discussion

If `menu` is non-empty, the pop-up button uses the first item for its initial selection.
