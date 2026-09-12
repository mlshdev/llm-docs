> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/shouldcascadewindows](https://developer.apple.com/documentation/appkit/nswindowcontroller/shouldcascadewindows)

# shouldCascadeWindows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.

## Declaration

```swift
var shouldCascadeWindows: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Cascading in relation to other document windows means having a slightly offset location so that the title bars of previously displayed windows are still visible. The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window will cascade in relation to other document windows, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Window Attributes and Content

- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName()](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitle(forDocumentDisplayName:)](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController(\_:)](dismisscontroller%28__%29.md): Dismisses the window controller.

# shouldCascadeWindows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window will cascade in relation to other document windows when it is displayed.

## Declaration

```objectivec
@property BOOL shouldCascadeWindows;
```

<a id="Discussion"></a>

## Discussion

Cascading in relation to other document windows means having a slightly offset location so that the title bars of previously displayed windows are still visible. The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window will cascade in relation to other document windows, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Window Attributes and Content

- [windowFrameAutosaveName](windowframeautosavename.md): The name under which the frame rectangle of the window owned by the receiver is stored in the defaults database.
- [synchronizeWindowTitleWithDocumentName](synchronizewindowtitlewithdocumentname%28%29.md): Synchronizes the displayed window title and the represented filename with the information in the associated document.
- [windowTitleForDocumentDisplayName:](windowtitle%28fordocumentdisplayname_%29.md): Returns the window title to be used for a given document display name.
- [contentViewController](contentviewcontroller.md): The view controller for the window’s content view.
- [dismissController:](dismisscontroller%28__%29.md): Dismisses the window controller.
