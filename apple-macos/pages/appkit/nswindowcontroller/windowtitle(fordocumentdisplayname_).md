> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/windowtitle(fordocumentdisplayname:)](https://developer.apple.com/documentation/appkit/nswindowcontroller/windowtitle(fordocumentdisplayname:))

# windowTitle(forDocumentDisplayName:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window title to be used for a given document display name.

## Declaration

```swift
func windowTitle(forDocumentDisplayName displayName: String) -> String
```

## Parameters

- `displayName`: The display name for the document. This is the last path component under which the document file is saved.

<a id="Discussion"></a>

## Discussion

The default implementation returns `displayName`. Subclasses can override this method to customize the window title. For example, a CAD application could append “-Top” or “-Side,” depending on the view displayed by the window.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName()](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController(\_:)](dismisscontroller%28__%29.md): Dismisses the window controller.

# windowTitleForDocumentDisplayName: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window title to be used for a given document display name.

## Declaration

```objectivec
- (NSString *) windowTitleForDocumentDisplayName:(NSString *) displayName;
```

## Parameters

- `displayName`: The display name for the document. This is the last path component under which the document file is saved.

<a id="Discussion"></a>

## Discussion

The default implementation returns `displayName`. Subclasses can override this method to customize the window title. For example, a CAD application could append “-Top” or “-Side,” depending on the view displayed by the window.

## See Also

### Accessing Window Attributes and Content

- [shouldCascadeWindows](shouldcascadewindows.md): A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.
- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController:](dismisscontroller%28__%29.md): Dismisses the window controller.
