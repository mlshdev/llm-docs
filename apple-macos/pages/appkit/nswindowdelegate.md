> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate](https://developer.apple.com/documentation/appkit/nswindowdelegate)

# NSWindowDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.

## Declaration

```swift
protocol NSWindowDelegate : NSObjectProtocol
```

## Topics

### Managing Sheets

- [window(\_:willPositionSheet:using:)](nswindowdelegate/window%28__willpositionsheet_using_%29.md): Tells the delegate that the window is about to show a sheet at the specified location, giving it the opportunity to return a custom location for the attachment of the sheet to the window.
- [windowWillBeginSheet(\_:)](nswindowdelegate/windowwillbeginsheet%28__%29.md): Notifies the delegate that the window is about to open a sheet.
- [windowDidEndSheet(\_:)](nswindowdelegate/windowdidendsheet%28__%29.md): Tells the delegate that the window has closed a sheet.

### Sizing Windows

- [windowWillResize(\_:to:)](nswindowdelegate/windowwillresize%28__to_%29.md): Tells the delegate that the window is being resized (whether by the user or through one of the `setFrame...` methods other than [setFrame(\_:display:)](nswindow/setframe%28__display_%29.md)).
- [windowDidResize(\_:)](nswindowdelegate/windowdidresize%28__%29.md): Tells the delegate that the window has been resized.
- [windowWillStartLiveResize(\_:)](nswindowdelegate/windowwillstartliveresize%28__%29.md): Tells the delegate that the window is about to be live resized.
- [windowDidEndLiveResize(\_:)](nswindowdelegate/windowdidendliveresize%28__%29.md): Tells the delegate that a live resize operation on the window has ended.

### Minimizing Windows

- [windowWillMiniaturize(\_:)](nswindowdelegate/windowwillminiaturize%28__%29.md): Tells the delegate that the window is about to be minimized.
- [windowDidMiniaturize(\_:)](nswindowdelegate/windowdidminiaturize%28__%29.md): Tells the delegate that the window has been minimized.
- [windowDidDeminiaturize(\_:)](nswindowdelegate/windowdiddeminiaturize%28__%29.md): Tells the delegate that the window has been deminimized.

### Zooming Window

- [windowWillUseStandardFrame(\_:defaultFrame:)](nswindowdelegate/windowwillusestandardframe%28__defaultframe_%29.md): Called by `NSWindow`’s [zoom(\_:)](nswindow/zoom%28__%29.md) method while determining the frame a window may be zoomed to.
- [windowShouldZoom(\_:toFrame:)](nswindowdelegate/windowshouldzoom%28__toframe_%29.md): Asks the delegate whether the specified window should zoom to the specified frame.

### Managing Full-Screen Presentation

- [window(\_:willUseFullScreenContentSize:)](nswindowdelegate/window%28__willusefullscreencontentsize_%29.md): Called to allow the delegate to modify the full-screen content size.
- [window(\_:willUseFullScreenPresentationOptions:)](nswindowdelegate/window%28__willusefullscreenpresentationoptions_%29.md): Returns the presentation options the window uses when transitioning to full-screen mode.
- [windowWillEnterFullScreen(\_:)](nswindowdelegate/windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen(\_:)](nswindowdelegate/windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowWillExitFullScreen(\_:)](nswindowdelegate/windowwillexitfullscreen%28__%29.md): The window is about to exit full-screen mode.
- [windowDidExitFullScreen(\_:)](nswindowdelegate/windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreen(for:)](nswindowdelegate/customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreen(for:on:)](nswindowdelegate/customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window(\_:startCustomAnimationToEnterFullScreenWithDuration:)](nswindowdelegate/window%28__startcustomanimationtoenterfullscreenwithduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [window(\_:startCustomAnimationToEnterFullScreenOn:withDuration:)](nswindowdelegate/window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen(\_:)](nswindowdelegate/windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [customWindowsToExitFullScreen(for:)](nswindowdelegate/customwindowstoexitfullscreen%28for_%29.md): Called when the window is about to exit full-screen mode.
- [window(\_:startCustomAnimationToExitFullScreenWithDuration:)](nswindowdelegate/window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.
- [windowDidFailToExitFullScreen(\_:)](nswindowdelegate/windowdidfailtoexitfullscreen%28__%29.md): Called if the window failed to exit full-screen mode.

### Moving Windows

- [windowWillMove(\_:)](nswindowdelegate/windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove(\_:)](nswindowdelegate/windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen(\_:)](nswindowdelegate/windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile(\_:)](nswindowdelegate/windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties(\_:)](nswindowdelegate/windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.

### Closing Windows

- [windowShouldClose(\_:)](nswindowdelegate/windowshouldclose%28__%29.md): Tells the delegate that the user has attempted to close a window or the window has received a [performClose(\_:)](nswindow/performclose%28__%29.md) message.
- [windowWillClose(\_:)](nswindowdelegate/windowwillclose%28__%29.md): Tells the delegate that the window is about to close.

### Managing Key Status

- [windowDidBecomeKey(\_:)](nswindowdelegate/windowdidbecomekey%28__%29.md): Tells the delegate that the window has become the key window.
- [windowDidResignKey(\_:)](nswindowdelegate/windowdidresignkey%28__%29.md): Tells the delegate that the window has resigned key window status.

### Managing Main Status

- [windowDidBecomeMain(\_:)](nswindowdelegate/windowdidbecomemain%28__%29.md): Tells the delegate that the window has become main.
- [windowDidResignMain(\_:)](nswindowdelegate/windowdidresignmain%28__%29.md): Tells the delegate that the window has resigned main window status.

### Managing Field Editors

- [windowWillReturnFieldEditor(\_:to:)](nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md): Tells the delegate that the field editor for a text-displaying object has been requested.

### Updating Windows

- [windowDidUpdate(\_:)](nswindowdelegate/windowdidupdate%28__%29.md): Tells the delegate that the window received an [update()](nswindow/update%28%29.md) message.

### Exposing Windows

- [windowDidExpose(\_:)](nswindowdelegate/windowdidexpose%28__%29.md): Tells the delegate that the window has been exposed.

### Managing Occlusion State

- [windowDidChangeOcclusionState(\_:)](nswindowdelegate/windowdidchangeocclusionstate%28__%29.md): Tells the delegate that the window changed its occlusion state.

### Dragging Windows

- [window(\_:shouldDragDocumentWith:from:with:)](nswindowdelegate/window%28__shoulddragdocumentwith_from_with_%29.md): Asks the delegate whether a user can drag the document icon from the window’s title bar.

### Getting the Undo Manager

- [windowWillReturnUndoManager(\_:)](nswindowdelegate/windowwillreturnundomanager%28__%29.md): Tells the delegate that the window’s undo manager has been requested. Returns the appropriate undo manager for the window.

### Managing Titles

- [window(\_:shouldPopUpDocumentPathMenu:)](nswindowdelegate/window%28__shouldpopupdocumentpathmenu_%29.md): Asks the delegate whether the window displays the title pop-up menu in response to a Command-click or Control-click on its title.

### Managing Restorable State

- [window(\_:willEncodeRestorableState:)](nswindowdelegate/window%28__willencoderestorablestate_%29.md): Tells the delegate the window is about to add its restorable state to a given archiver.
- [window(\_:didDecodeRestorableState:)](nswindowdelegate/window%28__diddecoderestorablestate_%29.md): Tells the delegate the window is has extracted its restorable state from a given archiver.

### Managing Presentation in Version Browsers

- [window(\_:willResizeForVersionBrowserWithMaxPreferredSize:maxAllowedSize:)](nswindowdelegate/window%28__willresizeforversionbrowserwithmaxpreferredsize_maxallowedsize_%29.md): Tells the delegate the window will resize for presentation during version browsing.
- [windowWillEnterVersionBrowser(\_:)](nswindowdelegate/windowwillenterversionbrowser%28__%29.md): Tells the delegate the window is about to enter version browsing.
- [windowDidEnterVersionBrowser(\_:)](nswindowdelegate/windowdidenterversionbrowser%28__%29.md): Tells the delegate that the window has entered version browsing.
- [windowWillExitVersionBrowser(\_:)](nswindowdelegate/windowwillexitversionbrowser%28__%29.md): Tells the delegate that the window is about to leave version browsing.
- [windowDidExitVersionBrowser(\_:)](nswindowdelegate/windowdidexitversionbrowser%28__%29.md): Tells the delegate that the window has left version browsing.

### Instance Methods

- [previewRepresentableActivityItems(for:)](nswindowdelegate/previewrepresentableactivityitems%28for_%29.md): A collection of Preview-representable activity items, used for sharing and collaboration.
- [windowForSharingRequest(from:)](nswindowdelegate/windowforsharingrequest%28from_%29.md): Method called to get the window to share once sharing is confirmed, after a request is initiated by requestSharingOfWindowUsingPreview:title:completionHandler:. Implement this on the delegate of the requesting window

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.

# NSWindowDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.

## Declaration

```objectivec
@protocol NSWindowDelegate <NSObject>
```

## Topics

### Managing Sheets

- [window:willPositionSheet:usingRect:](nswindowdelegate/window%28__willpositionsheet_using_%29.md): Tells the delegate that the window is about to show a sheet at the specified location, giving it the opportunity to return a custom location for the attachment of the sheet to the window.
- [windowWillBeginSheet:](nswindowdelegate/windowwillbeginsheet%28__%29.md): Notifies the delegate that the window is about to open a sheet.
- [windowDidEndSheet:](nswindowdelegate/windowdidendsheet%28__%29.md): Tells the delegate that the window has closed a sheet.

### Sizing Windows

- [windowWillResize:toSize:](nswindowdelegate/windowwillresize%28__to_%29.md): Tells the delegate that the window is being resized (whether by the user or through one of the `setFrame...` methods other than [setFrame:display:](nswindow/setframe%28__display_%29.md)).
- [windowDidResize:](nswindowdelegate/windowdidresize%28__%29.md): Tells the delegate that the window has been resized.
- [windowWillStartLiveResize:](nswindowdelegate/windowwillstartliveresize%28__%29.md): Tells the delegate that the window is about to be live resized.
- [windowDidEndLiveResize:](nswindowdelegate/windowdidendliveresize%28__%29.md): Tells the delegate that a live resize operation on the window has ended.

### Minimizing Windows

- [windowWillMiniaturize:](nswindowdelegate/windowwillminiaturize%28__%29.md): Tells the delegate that the window is about to be minimized.
- [windowDidMiniaturize:](nswindowdelegate/windowdidminiaturize%28__%29.md): Tells the delegate that the window has been minimized.
- [windowDidDeminiaturize:](nswindowdelegate/windowdiddeminiaturize%28__%29.md): Tells the delegate that the window has been deminimized.

### Zooming Window

- [windowWillUseStandardFrame:defaultFrame:](nswindowdelegate/windowwillusestandardframe%28__defaultframe_%29.md): Called by `NSWindow`’s [zoom:](nswindow/zoom%28__%29.md) method while determining the frame a window may be zoomed to.
- [windowShouldZoom:toFrame:](nswindowdelegate/windowshouldzoom%28__toframe_%29.md): Asks the delegate whether the specified window should zoom to the specified frame.

### Managing Full-Screen Presentation

- [window:willUseFullScreenContentSize:](nswindowdelegate/window%28__willusefullscreencontentsize_%29.md): Called to allow the delegate to modify the full-screen content size.
- [window:willUseFullScreenPresentationOptions:](nswindowdelegate/window%28__willusefullscreenpresentationoptions_%29.md): Returns the presentation options the window uses when transitioning to full-screen mode.
- [windowWillEnterFullScreen:](nswindowdelegate/windowwillenterfullscreen%28__%29.md): The window is about to enter full-screen mode.
- [windowDidEnterFullScreen:](nswindowdelegate/windowdidenterfullscreen%28__%29.md): The window has entered full-screen mode.
- [windowWillExitFullScreen:](nswindowdelegate/windowwillexitfullscreen%28__%29.md): The window is about to exit full-screen mode.
- [windowDidExitFullScreen:](nswindowdelegate/windowdidexitfullscreen%28__%29.md): The window has left full-screen mode.

### Custom Full-Screen Presentation Animations

- [customWindowsToEnterFullScreenForWindow:](nswindowdelegate/customwindowstoenterfullscreen%28for_%29.md): Called when the window is about to enter full-screen mode.
- [customWindowsToEnterFullScreenForWindow:onScreen:](nswindowdelegate/customwindowstoenterfullscreen%28for_on_%29.md): Called when the window is about to enter full-screen mode.
- [window:startCustomAnimationToEnterFullScreenWithDuration:](nswindowdelegate/window%28__startcustomanimationtoenterfullscreenwithduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [window:startCustomAnimationToEnterFullScreenOnScreen:withDuration:](nswindowdelegate/window%28__startcustomanimationtoenterfullscreenon_withduration_%29.md): This method is called to start the window animation into full-screen mode, including transitioning to a new space.
- [windowDidFailToEnterFullScreen:](nswindowdelegate/windowdidfailtoenterfullscreen%28__%29.md): Called if the window failed to enter full-screen mode.
- [customWindowsToExitFullScreenForWindow:](nswindowdelegate/customwindowstoexitfullscreen%28for_%29.md): Called when the window is about to exit full-screen mode.
- [window:startCustomAnimationToExitFullScreenWithDuration:](nswindowdelegate/window%28__startcustomanimationtoexitfullscreenwithduration_%29.md): This method is called to start the window animation out of full-screen mode, including transitioning back to the desktop space.
- [windowDidFailToExitFullScreen:](nswindowdelegate/windowdidfailtoexitfullscreen%28__%29.md): Called if the window failed to exit full-screen mode.

### Moving Windows

- [windowWillMove:](nswindowdelegate/windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove:](nswindowdelegate/windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen:](nswindowdelegate/windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile:](nswindowdelegate/windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.
- [windowDidChangeBackingProperties:](nswindowdelegate/windowdidchangebackingproperties%28__%29.md): Tells the delegate that the window backing properties changed.

### Closing Windows

- [windowShouldClose:](nswindowdelegate/windowshouldclose%28__%29.md): Tells the delegate that the user has attempted to close a window or the window has received a [performClose:](nswindow/performclose%28__%29.md) message.
- [windowWillClose:](nswindowdelegate/windowwillclose%28__%29.md): Tells the delegate that the window is about to close.

### Managing Key Status

- [windowDidBecomeKey:](nswindowdelegate/windowdidbecomekey%28__%29.md): Tells the delegate that the window has become the key window.
- [windowDidResignKey:](nswindowdelegate/windowdidresignkey%28__%29.md): Tells the delegate that the window has resigned key window status.

### Managing Main Status

- [windowDidBecomeMain:](nswindowdelegate/windowdidbecomemain%28__%29.md): Tells the delegate that the window has become main.
- [windowDidResignMain:](nswindowdelegate/windowdidresignmain%28__%29.md): Tells the delegate that the window has resigned main window status.

### Managing Field Editors

- [windowWillReturnFieldEditor:toObject:](nswindowdelegate/windowwillreturnfieldeditor%28__to_%29.md): Tells the delegate that the field editor for a text-displaying object has been requested.

### Updating Windows

- [windowDidUpdate:](nswindowdelegate/windowdidupdate%28__%29.md): Tells the delegate that the window received an [update](nswindow/update%28%29.md) message.

### Exposing Windows

- [windowDidExpose:](nswindowdelegate/windowdidexpose%28__%29.md): Tells the delegate that the window has been exposed.

### Managing Occlusion State

- [windowDidChangeOcclusionState:](nswindowdelegate/windowdidchangeocclusionstate%28__%29.md): Tells the delegate that the window changed its occlusion state.

### Dragging Windows

- [window:shouldDragDocumentWithEvent:from:withPasteboard:](nswindowdelegate/window%28__shoulddragdocumentwith_from_with_%29.md): Asks the delegate whether a user can drag the document icon from the window’s title bar.

### Getting the Undo Manager

- [windowWillReturnUndoManager:](nswindowdelegate/windowwillreturnundomanager%28__%29.md): Tells the delegate that the window’s undo manager has been requested. Returns the appropriate undo manager for the window.

### Managing Titles

- [window:shouldPopUpDocumentPathMenu:](nswindowdelegate/window%28__shouldpopupdocumentpathmenu_%29.md): Asks the delegate whether the window displays the title pop-up menu in response to a Command-click or Control-click on its title.

### Managing Restorable State

- [window:willEncodeRestorableState:](nswindowdelegate/window%28__willencoderestorablestate_%29.md): Tells the delegate the window is about to add its restorable state to a given archiver.
- [window:didDecodeRestorableState:](nswindowdelegate/window%28__diddecoderestorablestate_%29.md): Tells the delegate the window is has extracted its restorable state from a given archiver.

### Managing Presentation in Version Browsers

- [window:willResizeForVersionBrowserWithMaxPreferredSize:maxAllowedSize:](nswindowdelegate/window%28__willresizeforversionbrowserwithmaxpreferredsize_maxallowedsize_%29.md): Tells the delegate the window will resize for presentation during version browsing.
- [windowWillEnterVersionBrowser:](nswindowdelegate/windowwillenterversionbrowser%28__%29.md): Tells the delegate the window is about to enter version browsing.
- [windowDidEnterVersionBrowser:](nswindowdelegate/windowdidenterversionbrowser%28__%29.md): Tells the delegate that the window has entered version browsing.
- [windowWillExitVersionBrowser:](nswindowdelegate/windowwillexitversionbrowser%28__%29.md): Tells the delegate that the window is about to leave version browsing.
- [windowDidExitVersionBrowser:](nswindowdelegate/windowdidexitversionbrowser%28__%29.md): Tells the delegate that the window has left version browsing.

### Instance Methods

- [previewRepresentableActivityItemsForWindow:](nswindowdelegate/previewrepresentableactivityitems%28for_%29.md): A collection of Preview-representable activity items, used for sharing and collaboration.
- [windowForSharingRequestFromWindow:](nswindowdelegate/windowforsharingrequest%28from_%29.md): Method called to get the window to share once sharing is confirmed, after a request is initiated by requestSharingOfWindowUsingPreview:title:completionHandler:. Implement this on the delegate of the requesting window

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Windows

- [NSWindow](nswindow.md): A window that an app displays on the screen.
- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.
