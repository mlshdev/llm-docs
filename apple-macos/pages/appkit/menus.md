> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/menus](https://developer.apple.com/documentation/appkit/menus)

# Menus (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Access the app’s main menu items and update the window and services menus.

## Topics

### Accessing the Main Menu

- [mainMenu](nsapplication/mainmenu.md): The app’s main menu bar.
- [isAutomaticCustomizeTouchBarMenuItemEnabled](nsapplication/isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

### Managing the Window Menu

- [windowsMenu](nsapplication/windowsmenu.md): The Window menu of the app.
- [addWindowsItem(\_:title:filename:)](nsapplication/addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem(\_:title:filename:)](nsapplication/changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem(\_:)](nsapplication/removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [updateWindowsItem(\_:)](nsapplication/updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.

### Managing the Services Menu

- [registerServicesMenuSendTypes(\_:returnTypes:)](nsapplication/registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.
- [servicesMenu](nsapplication/servicesmenu.md): The app’s Services menu.

## See Also

### Managing windows, panels, and menus

- [App Windows](app-windows.md): Show, hide, minimize, arrange, and update your app’s windows.
- [Modal Windows and Panels](modal-windows-and-panels.md): Display a modal window or show one of the standard app panels, such as the app’s About panel.

# Menus (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Access the app’s main menu items and update the window and services menus.

## Topics

### Accessing the Main Menu

- [mainMenu](nsapplication/mainmenu.md): The app’s main menu bar.
- [automaticCustomizeTouchBarMenuItemEnabled](nsapplication/isautomaticcustomizetouchbarmenuitemenabled.md): A Boolean value indicating whether the main menu contains an item for customizing the contents of the Touch Bar.

### Managing the Window Menu

- [windowsMenu](nsapplication/windowsmenu.md): The Window menu of the app.
- [addWindowsItem:title:filename:](nsapplication/addwindowsitem%28__title_filename_%29.md): Adds an item to the Window menu for a given window.
- [changeWindowsItem:title:filename:](nsapplication/changewindowsitem%28__title_filename_%29.md): Changes the item for a given window in the Window menu to a given string.
- [removeWindowsItem:](nsapplication/removewindowsitem%28__%29.md): Removes the Window menu item for a given window.
- [updateWindowsItem:](nsapplication/updatewindowsitem%28__%29.md): Updates the Window menu item for a given window to reflect the edited status of that window.

### Managing the Services Menu

- [registerServicesMenuSendTypes:returnTypes:](nsapplication/registerservicesmenusendtypes%28__returntypes_%29.md): Registers the pasteboard types the receiver can send and receive in response to service requests.
- [servicesMenu](nsapplication/servicesmenu.md): The app’s Services menu.

## See Also

### Managing windows, panels, and menus

- [App Windows](app-windows.md): Show, hide, minimize, arrange, and update your app’s windows.
- [Modal Windows and Panels](modal-windows-and-panels.md): Display a modal window or show one of the standard app panels, such as the app’s About panel.
