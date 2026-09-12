> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/windowframeautosavename](https://developer.apple.com/documentation/appkit/nswindowcontroller/windowframeautosavename)

# windowFrameAutosaveName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.

## Declaration

```swift
var windowFrameAutosaveName: NSWindow.FrameAutosaveName { get set }
```

<a id="Discussion"></a>

## Discussion

By default, `name` is an empty string, which means that no information is stored in the defaults database.

## See Also

### Related Documentation

- [setFrameAutosaveName(\_:)](../nswindow/setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [synchronizeWindowTitleWithDocumentName()](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitle(forDocumentDisplayName:)](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController(\_:)](dismisscontroller%28__%29.md): Dismisses the window controller.

# windowFrameAutosaveName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.

## Declaration

```objectivec
@property (copy) NSWindowFrameAutosaveName windowFrameAutosaveName;
```

<a id="Discussion"></a>

## Discussion

By default, `name` is an empty string, which means that no information is stored in the defaults database.

## See Also

### Related Documentation

- [setFrameAutosaveName:](../nswindow/setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [synchronizeWindowTitleWithDocumentName](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitleForDocumentDisplayName:](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController:](dismisscontroller%28__%29.md): Dismisses the window controller.
