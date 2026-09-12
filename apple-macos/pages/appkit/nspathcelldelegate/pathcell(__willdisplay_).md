> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcelldelegate/pathcell(_:willdisplay:)](https://developer.apple.com/documentation/appkit/nspathcelldelegate/pathcell(_:willdisplay:))

# pathCell(\_:willDisplay:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Implement this method to customize the Open panel shown by a pop-up–style path.

## Declaration

```swift
@MainActor optional func pathCell(_ pathCell: NSPathCell, willDisplay openPanel: NSOpenPanel)
```

## Parameters

- `pathCell`: The path cell that sent the message.
- `openPanel`: The Open panel to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the Open panel is shown but after its allowed file types are set to the cell’s allowed types. At this time, you can further customize the Open panel as required. This method is called only when the style is set to `NSPathStylePopUp`.

Implementation of this method is optional.

# pathCell:willDisplayOpenPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implement this method to customize the Open panel shown by a pop-up–style path.

## Declaration

```objectivec
- (void) pathCell:(NSPathCell *) pathCell willDisplayOpenPanel:(NSOpenPanel *) openPanel;
```

## Parameters

- `pathCell`: The path cell that sent the message.
- `openPanel`: The Open panel to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the Open panel is shown but after its allowed file types are set to the cell’s allowed types. At this time, you can further customize the Open panel as required. This method is called only when the style is set to `NSPathStylePopUp`.

Implementation of this method is optional.
