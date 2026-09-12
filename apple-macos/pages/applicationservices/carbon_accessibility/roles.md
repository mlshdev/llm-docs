> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/carbon_accessibility/roles](https://developer.apple.com/documentation/applicationservices/carbon_accessibility/roles)

# Roles

**Interface languages:** Swift, Objective-C

**Framework:** Application Services  
**Kind:** API Collection

Define the values an accessibility object’s role attribute can have.

<a id="overview"></a>

## Overview

 The value of the role attribute describes what the object is, not what it does. See the “Roles and Associated Attributes” appendix in [Accessibility Programming Guide for OS X](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/index.html#//apple_ref/doc/uid/TP40001078) for more information on which attributes are associated with each role.

## Topics

### Constants

- [kAXApplicationRole](../kaxapplicationrole.md): An application.
- [kAXSystemWideRole](../kaxsystemwiderole.md): The system-wide accessibility object.
- [kAXWindowRole](../kaxwindowrole.md): A window.
- [kAXSheetRole](../kaxsheetrole.md): A sheet.
- [kAXDrawerRole](../kaxdrawerrole.md): A drawer.
- [kAXGrowAreaRole](../kaxgrowarearole.md): A grow control.
- [kAXImageRole](../kaximagerole.md): An image.
- [kAXUnknownRole](../kaxunknownrole.md): Generic role value for an unknown accessibility object.
- [kAXButtonRole](../kaxbuttonrole.md): A button.
- [kAXRadioButtonRole](../kaxradiobuttonrole.md): A radio button.
- [kAXCheckBoxRole](../kaxcheckboxrole.md): A check box.
- [kAXPopUpButtonRole](../kaxpopupbuttonrole.md): A pop-up button.
- [kAXMenuButtonRole](../kaxmenubuttonrole.md): A menu button.
- [kAXTabGroupRole](../kaxtabgrouprole.md): A tab view.
- [kAXTableRole](../kaxtablerole.md): A table.
- [kAXColumnRole](../kaxcolumnrole.md): A column.
- [kAXRowRole](../kaxrowrole.md): A row.
- [kAXOutlineRole](../kaxoutlinerole.md): An accessibility object that displays row-based, hierarchically structured data, such as the list view in a Finder window.
- [kAXBrowserRole](../kaxbrowserrole.md): An accessibility object that displays column-based, hierarchically structured data, such as the column view in a Finder window.
- [kAXScrollAreaRole](../kaxscrollarearole.md): An accessibility object that displays data managed by scrolling controls.
- [kAXScrollBarRole](../kaxscrollbarrole.md): A scroll bar control.
- [kAXRadioGroupRole](../kaxradiogrouprole.md): A set of radio buttons.
- [kAXListRole](../kaxlistrole.md): A list view.
- [kAXGroupRole](../kaxgrouprole.md): A group box. This role can also be used to group other views without any visual indication of the grouping.
- [kAXValueIndicatorRole](../kaxvalueindicatorrole.md): A control that indicates the value of an accessibility object, such as the scroller of a scroll bar control
- [kAXComboBoxRole](../kaxcomboboxrole.md): A combo box control.
- [kAXSliderRole](../kaxsliderrole.md): A slider control.
- [kAXIncrementorRole](../kaxincrementorrole.md): A stepper control (also known as the “little arrows”).
- [kAXBusyIndicatorRole](../kaxbusyindicatorrole.md): An asynchronous progress indicator.
- [kAXProgressIndicatorRole](../kaxprogressindicatorrole.md): A determinate or indeterminate progress indicator.
- [kAXRelevanceIndicatorRole](../kaxrelevanceindicatorrole.md): A relevance indicator.
- [kAXToolbarRole](../kaxtoolbarrole.md): A toolbar.
- [kAXDisclosureTriangleRole](../kaxdisclosuretrianglerole.md): A disclosure triangle control.
- [kAXTextFieldRole](../kaxtextfieldrole.md): A text field.
- [kAXTextAreaRole](../kaxtextarearole.md): The editable text area in a control or window.
- [kAXStaticTextRole](../kaxstatictextrole.md): A string of static text displayed in a window that is not part of any control.
- [kAXMenuBarRole](../kaxmenubarrole.md): A menu bar.
- [kAXMenuBarItemRole](../kaxmenubaritemrole.md): A menu bar item.
- [kAXMenuRole](../kaxmenurole.md): A menu.
- [kAXMenuItemRole](../kaxmenuitemrole.md): A menu item.
- [kAXSplitGroupRole](../kaxsplitgrouprole.md): A split view.
- [kAXSplitterRole](../kaxsplitterrole.md): A splitter bar control.
- [kAXColorWellRole](../kaxcolorwellrole.md): A color well.
- [kAXTimeFieldRole](../kaxtimefieldrole.md): A field that displays time.
- [kAXDateFieldRole](../kaxdatefieldrole.md): A field that displays dates.
- [kAXHelpTagRole](../kaxhelptagrole.md): A help tag.
- [kAXMatteRole](../kaxmatterole.md)
- [kAXDockItemRole](../kaxdockitemrole.md): An icon that represents an item in the Dock.

## See Also

### Accessibility Object Constants

- [Subroles](subroles.md): Define the values for an accessibility object’s subrole attribute.
- [Attributes](attributes.md): Define the attributes available for accessibility objects.
- [Parameterized Attributes](parameterized_attributes.md): Define the parameterized attributes an accessibility object can have.
- [Actions](actions.md): Define the actions an accessibility object can perform.
- [Notifications](notifications.md): Define the notifications that can be broadcast by an accessibility object.
- [Orientations and Sort Directions](orientations_and_sort_directions.md): Define the values for the orientation and sort-direction attributes of some accessibility objects.
