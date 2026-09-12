> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/app-windows](https://developer.apple.com/documentation/appkit/app-windows)

# App Windows (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Show, hide, minimize, arrange, and update your app’s windows.

## Topics

### Managing App Windows

- [keyWindow](nsapplication/keywindow.md): The window that currently receives keyboard events.
- [mainWindow](nsapplication/mainwindow.md): The app’s main window.
- [window(withWindowNumber:)](nsapplication/window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](nsapplication/windows.md): An array of the app’s window objects.
- [makeWindowsPerform(\_:inOrder:)](nsapplication/makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindows(options:using:)](nsapplication/enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSApplication.WindowListOptions](nsapplication/windowlistoptions.md): This constant indicates a window ordering.

### Minimizing Windows

- [miniaturizeAll(\_:)](nsapplication/miniaturizeall%28__%29.md): Miniaturizes all the receiver’s windows.

### Hiding Windows

- [isHidden](nsapplication/ishidden.md): A Boolean value indicating whether the app is hidden.
- [hide(\_:)](nsapplication/hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhide(\_:)](nsapplication/unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.
- [unhideWithoutActivation()](nsapplication/unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).

### Updating Windows

- [updateWindows()](nsapplication/updatewindows%28%29.md): Sends an [update()](nswindow/update%28%29.md) message to each onscreen window.
- [setWindowsNeedUpdate(\_:)](nsapplication/setwindowsneedupdate%28__%29.md): Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.

### Managing Window Layers

- [preventWindowOrdering()](nsapplication/preventwindowordering%28%29.md): Suppresses the usual window ordering in handling the most recent mouse-down event.
- [arrangeInFront(\_:)](nsapplication/arrangeinfront%28__%29.md): Arranges windows listed in the Window menu in front of all other windows.

### Drawing Windows

- [context](nsapplication/context.md): Deprecated. The graphics context associated with the app.

### Getting the Occlusion State

- [occlusionState](nsapplication/occlusionstate-swift.property.md): The occlusion state of the app.
- [NSApplication.OcclusionState](nsapplication/occlusionstate-swift.struct.md): This constant indicates whether at least part of any window owned by this app is visible.

### Restoring App Windows at Launch

- [isProtectedDataAvailable](nsapplication/isprotecteddataavailable.md)
- [extendStateRestoration()](nsapplication/extendstaterestoration%28%29.md): Allows an app to extend its state restoration period.
- [completeStateRestoration()](nsapplication/completestaterestoration%28%29.md): Completes the extended state restoration.
- [restoreWindow(withIdentifier:state:completionHandler:)](nsapplication/restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.

### Managing Run Loops

- [displayWindowRunLoopOrdering](nsapplication/displaywindowrunloopordering.md): The priority at which windows are displayed.
- [resetCursorRectsRunLoopOrdering](nsapplication/resetcursorrectsrunloopordering.md): The priority at which cursor rects are reset.
- [updateWindowsRunLoopOrdering](nsapplication/updatewindowsrunloopordering.md): Run-loop message priority for handling window updates.

## See Also

### Managing windows, panels, and menus

- [Modal Windows and Panels](modal-windows-and-panels.md): Display a modal window or show one of the standard app panels, such as the app’s About panel.
- [Menus](menus.md): Access the app’s main menu items and update the window and services menus.

# App Windows (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Show, hide, minimize, arrange, and update your app’s windows.

## Topics

### Managing App Windows

- [keyWindow](nsapplication/keywindow.md): The window that currently receives keyboard events.
- [mainWindow](nsapplication/mainwindow.md): The app’s main window.
- [windowWithWindowNumber:](nsapplication/window%28withwindownumber_%29.md): Returns the window corresponding to the specified window number.
- [windows](nsapplication/windows.md): An array of the app’s window objects.
- [makeWindowsPerform:inOrder:](nsapplication/makewindowsperform%28__inorder_%29.md): Deprecated. Sends the specified message to each of the app’s window objects until one returns a non-`nil` value.
- [enumerateWindowsWithOptions:usingBlock:](nsapplication/enumeratewindows%28options_using_%29.md): Executes a block for each of the app’s windows.
- [NSWindowListOptions](nsapplication/windowlistoptions.md): This constant indicates a window ordering.

### Minimizing Windows

- [miniaturizeAll:](nsapplication/miniaturizeall%28__%29.md): Miniaturizes all the receiver’s windows.

### Hiding Windows

- [hidden](nsapplication/ishidden.md): A Boolean value indicating whether the app is hidden.
- [hide:](nsapplication/hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhide:](nsapplication/unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.
- [unhideWithoutActivation](nsapplication/unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).

### Updating Windows

- [updateWindows](nsapplication/updatewindows%28%29.md): Sends an [update](nswindow/update%28%29.md) message to each onscreen window.
- [setWindowsNeedUpdate:](nsapplication/setwindowsneedupdate%28__%29.md): Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.

### Managing Window Layers

- [preventWindowOrdering](nsapplication/preventwindowordering%28%29.md): Suppresses the usual window ordering in handling the most recent mouse-down event.
- [arrangeInFront:](nsapplication/arrangeinfront%28__%29.md): Arranges windows listed in the Window menu in front of all other windows.

### Drawing Windows

- [context](nsapplication/context.md): Deprecated. The graphics context associated with the app.

### Getting the Occlusion State

- [occlusionState](nsapplication/occlusionstate-swift.property.md): The occlusion state of the app.
- [NSApplicationOcclusionState](nsapplication/occlusionstate-swift.struct.md): This constant indicates whether at least part of any window owned by this app is visible.

### Restoring App Windows at Launch

- [protectedDataAvailable](nsapplication/isprotecteddataavailable.md)
- [extendStateRestoration](nsapplication/extendstaterestoration%28%29.md): Allows an app to extend its state restoration period.
- [completeStateRestoration](nsapplication/completestaterestoration%28%29.md): Completes the extended state restoration.
- [restoreWindowWithIdentifier:state:completionHandler:](nsapplication/restorewindow%28withidentifier_state_completionhandler_%29.md): Invoked to request that a window be restored.

### Managing Run Loops

- [NSDisplayWindowRunLoopOrdering](nsapplication/displaywindowrunloopordering.md): The priority at which windows are displayed.
- [NSResetCursorRectsRunLoopOrdering](nsapplication/resetcursorrectsrunloopordering.md): The priority at which cursor rects are reset.
- [NSUpdateWindowsRunLoopOrdering](nsapplication/updatewindowsrunloopordering.md): Run-loop message priority for handling window updates.

## See Also

### Managing windows, panels, and menus

- [Modal Windows and Panels](modal-windows-and-panels.md): Display a modal window or show one of the standard app panels, such as the app’s About panel.
- [Menus](menus.md): Access the app’s main menu items and update the window and services menus.
