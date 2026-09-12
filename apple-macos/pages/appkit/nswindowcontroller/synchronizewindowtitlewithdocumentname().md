> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/synchronizewindowtitlewithdocumentname()](https://developer.apple.com/documentation/appkit/nswindowcontroller/synchronizewindowtitlewithdocumentname())

# synchronizeWindowTitleWithDocumentName() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Synchronizes the displayed window title and the represented filename with the information in the associated document.

## Declaration

```swift
func synchronizeWindowTitleWithDocumentName()
```

<a id="Discussion"></a>

## Discussion

Does nothing if the window controller has no associated document or loaded window. This method queries the window controller’s document to get the document’s display name and full filename path, then calls [windowTitle(forDocumentDisplayName:)](windowtitle%28fordocumentdisplayname_%29.md) to get the display name to show in the window title.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [windowTitle(forDocumentDisplayName:)](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController(\_:)](dismisscontroller%28__%29.md): Dismisses the window controller.

# synchronizeWindowTitleWithDocumentName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Synchronizes the displayed window title and the represented filename with the information in the associated document.

## Declaration

```objectivec
- (void) synchronizeWindowTitleWithDocumentName;
```

<a id="Discussion"></a>

## Discussion

Does nothing if the window controller has no associated document or loaded window. This method queries the window controller’s document to get the document’s display name and full filename path, then calls [windowTitleForDocumentDisplayName:](windowtitle%28fordocumentdisplayname_%29.md) to get the display name to show in the window title.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [windowTitleForDocumentDisplayName:](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController:](dismisscontroller%28__%29.md): Dismisses the window controller.
