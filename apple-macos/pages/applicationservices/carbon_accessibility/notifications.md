> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/carbon_accessibility/notifications](https://developer.apple.com/documentation/applicationservices/carbon_accessibility/notifications)

# Notifications

**Interface languages:** Swift, Objective-C

**Framework:** Application Services  
**Kind:** API Collection

Define the notifications that can be broadcast by an accessibility object.

## Topics

### Constants

- [kAXMainWindowChangedNotification](../kaxmainwindowchangednotification.md): The main window has changed.
- [kAXFocusedWindowChangedNotification](../kaxfocusedwindowchangednotification.md): The focused window has changed.
- [kAXFocusedUIElementChangedNotification](../kaxfocuseduielementchangednotification.md): The focused accessibility object has changed.
- [kAXApplicationActivatedNotification](../kaxapplicationactivatednotification.md): The application was activated (that is, brought to front).
- [kAXApplicationDeactivatedNotification](../kaxapplicationdeactivatednotification.md): The application was deactivated.
- [kAXApplicationHiddenNotification](../kaxapplicationhiddennotification.md): The application was hidden.
- [kAXApplicationShownNotification](../kaxapplicationshownnotification.md): The application was shown (that is, a hidden application is now visible).
- [kAXWindowCreatedNotification](../kaxwindowcreatednotification.md): A window was created. Carbon automatically sends this notification when window is created, as long as the window is implemented using Carbon window mechanisms.
- [kAXWindowMovedNotification](../kaxwindowmovednotification.md): The window was moved (this notification is sent at the end of the window-move operation, not during it).
- [kAXWindowResizedNotification](../kaxwindowresizednotification.md): The window was resized (this notification is sent at the end of the window-resize operation, not during it).
- [kAXWindowMiniaturizedNotification](../kaxwindowminiaturizednotification.md): The application was minimized (that is, moved into the Dock).
- [kAXWindowDeminiaturizedNotification](../kaxwindowdeminiaturizednotification.md): The window was moved out of the Dock.
- [kAXDrawerCreatedNotification](../kaxdrawercreatednotification.md): A drawer was created (that is, a drawer now extends from this window).
- [kAXSheetCreatedNotification](../kaxsheetcreatednotification.md): A sheet was created (that is, a modal dialog now extends from this window).
- [kAXHelpTagCreatedNotification](../kaxhelptagcreatednotification.md): A help tag is now visible for this accessibility object.
- [kAXValueChangedNotification](../kaxvaluechangednotification.md): The value of an accessibility object’s value attribute was changed.
- [kAXUIElementDestroyedNotification](../kaxuielementdestroyednotification.md): An accessibility object was disposed of.
- [kAXMenuOpenedNotification](../kaxmenuopenednotification.md): A menu was opened.
- [kAXMenuClosedNotification](../kaxmenuclosednotification.md): A menu was closed.
- [kAXMenuItemSelectedNotification](../kaxmenuitemselectednotification.md): A menu item was selected.
- [kAXRowCountChangedNotification](../kaxrowcountchangednotification.md): The number of rows in this table was changed.
- [kAXSelectedChildrenChangedNotification](../kaxselectedchildrenchangednotification.md): A different subset of this accessibility object’s children were selected.
- [kAXResizedNotification](../kaxresizednotification.md): The window has changed size.
- [kAXMovedNotification](../kaxmovednotification.md): The position of this accessibility object was changed.
- [kAXCreatedNotification](../kaxcreatednotification.md): An accessibility object was created.

## See Also

### Accessibility Object Constants

- [Roles](roles.md): Define the values an accessibility object’s role attribute can have.
- [Subroles](subroles.md): Define the values for an accessibility object’s subrole attribute.
- [Attributes](attributes.md): Define the attributes available for accessibility objects.
- [Parameterized Attributes](parameterized_attributes.md): Define the parameterized attributes an accessibility object can have.
- [Actions](actions.md): Define the actions an accessibility object can perform.
- [Orientations and Sort Directions](orientations_and_sort_directions.md): Define the values for the orientation and sort-direction attributes of some accessibility objects.
