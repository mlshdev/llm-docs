> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/popupbuttonwithmenu:target:action:](https://developer.apple.com/documentation/appkit/nspopupbutton/popupbuttonwithmenu:target:action:)

# popUpButtonWithMenu:target:action:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 15.0+

Creates a standard pop-up button with a menu, target, and action.

## Declaration

```objectivec
+ (instancetype) popUpButtonWithMenu:(NSMenu *) menu target:(id) target action:(SEL) action;
```

## Parameters

- `menu`: A menu presented by the pop-up button, containing items that the user can choose between.
- `target`: The target object that receives action messages from the control.
- `action`: The action message sent by the control.

<a id="return-value"></a>

## Return Value

An initialized pop-up button object.

<a id="discussion"></a>

## Discussion

If `menu` is non-empty, the pop-up button uses the first item for its initial selection.
