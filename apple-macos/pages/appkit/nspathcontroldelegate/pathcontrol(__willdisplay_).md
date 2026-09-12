> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcontroldelegate/pathcontrol(_:willdisplay:)](https://developer.apple.com/documentation/appkit/nspathcontroldelegate/pathcontrol(_:willdisplay:))

# pathControl(\_:willDisplay:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Implement this method to customize the Open panel shown by a pop-up–style path.

## Declaration

```swift
@MainActor optional func pathControl(_ pathControl: NSPathControl, willDisplay openPanel: NSOpenPanel)
```

## Parameters

- `pathControl`: The path control displaying the Open panel.
- `openPanel`: The Open panel to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the Open panel is shown but after its allowed file types are set to the cell’s allowed types. At this time, you can further customize the Open panel as required. This method is called only when the style is set to `NSPathStylePopUp`. Implementation of this method is optional.

## See Also

### Customizing a Pop-Up–Style Path

- [pathControl(\_:willPopUp:)](pathcontrol%28__willpopup_%29.md): Implement this method to customize the menu of a pop-up–style path.

# pathControl:willDisplayOpenPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implement this method to customize the Open panel shown by a pop-up–style path.

## Declaration

```objectivec
- (void) pathControl:(NSPathControl *) pathControl willDisplayOpenPanel:(NSOpenPanel *) openPanel;
```

## Parameters

- `pathControl`: The path control displaying the Open panel.
- `openPanel`: The Open panel to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the Open panel is shown but after its allowed file types are set to the cell’s allowed types. At this time, you can further customize the Open panel as required. This method is called only when the style is set to `NSPathStylePopUp`. Implementation of this method is optional.

## See Also

### Customizing a Pop-Up–Style Path

- [pathControl:willPopUpMenu:](pathcontrol%28__willpopup_%29.md): Implement this method to customize the menu of a pop-up–style path.
