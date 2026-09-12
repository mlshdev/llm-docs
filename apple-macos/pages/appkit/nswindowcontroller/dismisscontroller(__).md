> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/dismisscontroller(_:)](https://developer.apple.com/documentation/appkit/nswindowcontroller/dismisscontroller(_:))

# dismissController(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Dismisses the window controller.

## Declaration

```swift
@IBAction func dismissController(_ sender: Any?)
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

This method does nothing if the receiver is not currently presented.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName()](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitle(forDocumentDisplayName:)](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.

# dismissController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Dismisses the window controller.

## Declaration

```objectivec
- (void) dismissController:(id) sender;
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

This method does nothing if the receiver is not currently presented.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitleForDocumentDisplayName:](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
