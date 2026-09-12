> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/modal-windows-and-panels](https://developer.apple.com/documentation/appkit/modal-windows-and-panels)

# Modal Windows and Panels (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Display a modal window or show one of the standard app panels, such as the app’s About panel.

## Topics

### Running a Modal Window

- [runModal(for:)](nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal()](nsapplication/stopmodal%28%29.md): Stops a modal event loop.
- [stopModal(withCode:)](nsapplication/stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [abortModal()](nsapplication/abortmodal%28%29.md): Aborts the event loop started by [runModal(for:)](nsapplication/runmodal%28for_%29.md) or [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md).
- [beginModalSession(for:)](nsapplication/beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession(\_:)](nsapplication/runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](nsapplication/beginmodalsession%28for_%29.md).
- [modalWindow](nsapplication/modalwindow.md): The modal window displayed by the app.
- [NSApplication.ModalResponse](nsapplication/modalresponse.md): A set of button return values for modal dialogs.
- [NSApplication.ModalSession](nsapplication/modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSession(for:)](nsapplication/beginmodalsession%28for_%29.md) and [endModalSession(\_:)](nsapplication/endmodalsession%28__%29.md) messages.

### Managing Panels

- [orderFrontColorPanel(\_:)](nsapplication/orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel(\_:)](nsapplication/orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanel(options:)](nsapplication/orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette(\_:)](nsapplication/orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout(\_:)](nsapplication/runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSApplication.AboutPanelOptionKey](nsapplication/aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.

## See Also

### Managing windows, panels, and menus

- [App Windows](app-windows.md): Show, hide, minimize, arrange, and update your app’s windows.
- [Menus](menus.md): Access the app’s main menu items and update the window and services menus.

# Modal Windows and Panels (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Display a modal window or show one of the standard app panels, such as the app’s About panel.

## Topics

### Running a Modal Window

- [runModalForWindow:](nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal](nsapplication/stopmodal%28%29.md): Stops a modal event loop.
- [stopModalWithCode:](nsapplication/stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [abortModal](nsapplication/abortmodal%28%29.md): Aborts the event loop started by [runModalForWindow:](nsapplication/runmodal%28for_%29.md) or [runModalSession:](nsapplication/runmodalsession%28__%29.md).
- [beginModalSessionForWindow:](nsapplication/beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession:](nsapplication/runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](nsapplication/beginmodalsession%28for_%29.md).
- [modalWindow](nsapplication/modalwindow.md): The modal window displayed by the app.
- [NSModalResponse](nsapplication/modalresponse.md): A set of button return values for modal dialogs.
- [NSModalSession](nsapplication/modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSessionForWindow:](nsapplication/beginmodalsession%28for_%29.md) and [endModalSession:](nsapplication/endmodalsession%28__%29.md) messages.
- [NSModalPanelRunLoopMode](nsmodalpanelrunloopmode.md): The mode set when waiting for input from a modal panel, such as a save or open panel.

### Managing Panels

- [orderFrontColorPanel:](nsapplication/orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel:](nsapplication/orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanelWithOptions:](nsapplication/orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette:](nsapplication/orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout:](nsapplication/runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSAboutPanelOptionKey](nsapplication/aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.

## See Also

### Managing windows, panels, and menus

- [App Windows](app-windows.md): Show, hide, minimize, arrange, and update your app’s windows.
- [Menus](menus.md): Access the app’s main menu items and update the window and services menus.
