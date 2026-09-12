> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/contentviewcontroller](https://developer.apple.com/documentation/appkit/nswindowcontroller/contentviewcontroller)

# contentViewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controller for the window’s content view.

## Declaration

```swift
var contentViewController: NSViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property tracks the window’s [contentView](../nswindow/contentview.md) property.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName()](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitle(forDocumentDisplayName:)](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [dismissController(\_:)](dismisscontroller%28__%29.md): Dismisses the window controller.

# contentViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view controller for the window’s content view.

## Declaration

```objectivec
@property (strong, nullable) NSViewController * contentViewController;
```

<a id="Discussion"></a>

## Discussion

The value of this property tracks the window’s [contentView](../nswindow/contentview.md) property.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitleForDocumentDisplayName:](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [dismissController:](dismisscontroller%28__%29.md): Dismisses the window controller.
