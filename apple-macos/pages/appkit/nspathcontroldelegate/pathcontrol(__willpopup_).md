> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontroldelegate/pathcontrol(_:willpopup:)](https://developer.apple.com/documentation/appkit/nspathcontroldelegate/pathcontrol(_:willpopup:))

# pathControl(\_:willPopUp:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Implement this method to customize the menu of a pop-up–style path.

## Declaration

```swift
@MainActor optional func pathControl(_ pathControl: NSPathControl, willPopUp menu: NSMenu)
```

## Parameters

- `pathControl`: The path control displaying the pop-up menu.
- `menu`: The pop-up menu to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the pop-up menu is shown. At this time, you can further customize the menu as required, adding and removing items. This method is called only when the style is set to `NSPathStylePopUp`. Implementation of this method is optional.

## See Also

### Customizing a Pop-Up–Style Path

- [pathControl(\_:willDisplay:)](pathcontrol%28__willdisplay_%29.md): Implement this method to customize the Open panel shown by a pop-up–style path.

# pathControl:willPopUpMenu: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implement this method to customize the menu of a pop-up–style path.

## Declaration

```objectivec
- (void) pathControl:(NSPathControl *) pathControl willPopUpMenu:(NSMenu *) menu;
```

## Parameters

- `pathControl`: The path control displaying the pop-up menu.
- `menu`: The pop-up menu to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the pop-up menu is shown. At this time, you can further customize the menu as required, adding and removing items. This method is called only when the style is set to `NSPathStylePopUp`. Implementation of this method is optional.

## See Also

### Customizing a Pop-Up–Style Path

- [pathControl:willDisplayOpenPanel:](pathcontrol%28__willdisplay_%29.md): Implement this method to customize the Open panel shown by a pop-up–style path.
