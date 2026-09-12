> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/carbon_accessibility/subroles](https://developer.apple.com/documentation/applicationservices/carbon_accessibility/subroles)

# Subroles

**Interface languages:** Swift, Objective-C

**Framework:** Application Services  
**Kind:** API Collection

Define the values for an accessibility object’s subrole attribute.

<a id="overview"></a>

## Overview

A subrole provides a more specific description of an accessibility object’s role. If an accessibility object is of a well-defined subtype, it can include the subrole attribute to provide additional information to an assistive application.

## Topics

### Constants

- [kAXCloseButtonSubrole](../kaxclosebuttonsubrole.md): A close button (that is, the red button in a window’s title bar that closes the window).
- [kAXMinimizeButtonSubrole](../kaxminimizebuttonsubrole.md): A minimize button (that is, the yellow button in a window’s title bar that minimizes the window into the Dock).
- [kAXZoomButtonSubrole](../kaxzoombuttonsubrole.md): A zoom button (that is, the green button in a window’s title bar that adjusts the window’s size).
- [kAXToolbarButtonSubrole](../kaxtoolbarbuttonsubrole.md): A toolbar button (that is, the button in a window’s title bar that hides and reveals the toolbar).
- [kAXSecureTextFieldSubrole](../kaxsecuretextfieldsubrole.md): A text field intended to contain sensitive data and that displays the user’s input as a series of bullets.
- [kAXTableRowSubrole](../kaxtablerowsubrole.md): A row in a table.
- [kAXOutlineRowSubrole](../kaxoutlinerowsubrole.md): A row in an outline view (see `kAXOutlineRole` for a description of an outline view).
- [kAXUnknownSubrole](../kaxunknownsubrole.md)
- [kAXStandardWindowSubrole](../kaxstandardwindowsubrole.md): A standard window that includes a title bar (that is, not an inspector window or a sheet).
- [kAXDialogSubrole](../kaxdialogsubrole.md): A dialog window, such as an alert.
- [kAXSystemDialogSubrole](../kaxsystemdialogsubrole.md): A system-generated dialog window that floats on the top layer, regardless of which application is frontmost. Use this subrole only when a dialog or alert applies to the system as a whole, such as a shutdown dialog.
- [kAXFloatingWindowSubrole](../kaxfloatingwindowsubrole.md): A utility window.
- [kAXSystemFloatingWindowSubrole](../kaxsystemfloatingwindowsubrole.md): A system-generated utility window.
- [kAXIncrementArrowSubrole](../kaxincrementarrowsubrole.md): The up arrow of a scroll bar.
- [kAXDecrementArrowSubrole](../kaxdecrementarrowsubrole.md): The down arrow of a scroll bar.
- [kAXIncrementPageSubrole](../kaxincrementpagesubrole.md): The increment area in the scroll track of a scroll bar.
- [kAXDecrementPageSubrole](../kaxdecrementpagesubrole.md): The decrement area in the scroll track of a scroll bar.
- [kAXSortButtonSubrole](../kaxsortbuttonsubrole.md): A column heading button in a list or column view.
- [kAXSearchFieldSubrole](../kaxsearchfieldsubrole.md): A search field.
- [kAXApplicationDockItemSubrole](../kaxapplicationdockitemsubrole.md): An icon in the Dock that represents an application.
- [kAXDocumentDockItemSubrole](../kaxdocumentdockitemsubrole.md): An icon in the Dock that represents a document.
- [kAXFolderDockItemSubrole](../kaxfolderdockitemsubrole.md): An icon in the Dock that represents a folder.
- [kAXMinimizedWindowDockItemSubrole](../kaxminimizedwindowdockitemsubrole.md): An icon in the Dock that represents a minimized window.
- [kAXURLDockItemSubrole](../kaxurldockitemsubrole.md): An icon in the Dock that represents a URL.
- [kAXDockExtraDockItemSubrole](../kaxdockextradockitemsubrole.md): An icon in the Dock that represents a Dock Extra.
- [kAXTrashDockItemSubrole](../kaxtrashdockitemsubrole.md): The icon in the Dock that represents the Trash.
- [kAXProcessSwitcherListSubrole](../kaxprocessswitcherlistsubrole.md): The display of running applications (processes) that appears when a user presses Command-Tab.

## See Also

### Accessibility Object Constants

- [Roles](roles.md): Define the values an accessibility object’s role attribute can have.
- [Attributes](attributes.md): Define the attributes available for accessibility objects.
- [Parameterized Attributes](parameterized_attributes.md): Define the parameterized attributes an accessibility object can have.
- [Actions](actions.md): Define the actions an accessibility object can perform.
- [Notifications](notifications.md): Define the notifications that can be broadcast by an accessibility object.
- [Orientations and Sort Directions](orientations_and_sort_directions.md): Define the values for the orientation and sort-direction attributes of some accessibility objects.
