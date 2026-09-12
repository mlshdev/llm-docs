> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/carbon_accessibility/attributes](https://developer.apple.com/documentation/applicationservices/carbon_accessibility/attributes)

# Attributes (Swift)

**Framework:** Application Services  
**Kind:** API Collection

Define the attributes available for accessibility objects.

<a id="overview"></a>

## Overview

See the “Roles and Associated Attributes” appendix in [Accessibility Programming Guide for OS X](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/index.html#//apple_ref/doc/uid/TP40001078) for more information on which attributes are associated with a specific role.

## Topics

### Constants

- [kAXRoleAttribute](../kaxroleattribute.md): The role, or type, of this accessibility object (for example, `AXButton`). This string is for identification purposes only and does not need to be localized. All accessibility objects must include this attribute.
- [kAXSubroleAttribute](../kaxsubroleattribute.md)
- [kAXRoleDescriptionAttribute](../kaxroledescriptionattribute.md)
- [kAXHelpAttribute](../kaxhelpattribute.md): A localized string containing help text for this accessibility object. An accessibility object that provides help information should include this attribute.
- [kAXTitleAttribute](../kaxtitleattribute.md)
- [kAXValueAttribute](../kaxvalueattribute.md)
- [kAXMinValueAttribute](../kaxminvalueattribute.md): The minimum value this accessibility object can display (for example, the minimum value of a scroller control). This attribute is used only in conjunction with the `AXValue` attribute.
- [kAXMaxValueAttribute](../kaxmaxvalueattribute.md): The maximum value this accessibility object can display (for example, the maximum value of a scroller control). This attribute is used only in conjunction with the `AXValue` attribute.
- [kAXValueIncrementAttribute](../kaxvalueincrementattribute.md): The amount an accessibility object’s value changes as the result of a single action (for example, how far a scroller travels with one mouse click). This attribute is used only in conjunction with the `AXValue` attribute.
- [kAXAllowedValuesAttribute](../kaxallowedvaluesattribute.md)
- [kAXEnabledAttribute](../kaxenabledattribute.md)
- [kAXFocusedAttribute](../kaxfocusedattribute.md)
- [kAXParentAttribute](../kaxparentattribute.md): This accessibility object’s parent object in the accessibility hierarchy. This attribute is required for all accessibility objects except the application-level accessibility object.
- [kAXChildrenAttribute](../kaxchildrenattribute.md)
- [kAXSelectedChildrenAttribute](../kaxselectedchildrenattribute.md)
- [kAXVisibleChildrenAttribute](../kaxvisiblechildrenattribute.md)
- [kAXWindowAttribute](../kaxwindowattribute.md)
- [kAXPositionAttribute](../kaxpositionattribute.md)
- [kAXTopLevelUIElementAttribute](../kaxtopleveluielementattribute.md)
- [kAXSizeAttribute](../kaxsizeattribute.md): The vertical and horizontal dimensions of this accessibility object. This attribute is required for all accessibility objects that are visible on the screen.
- [kAXOrientationAttribute](../kaxorientationattribute.md)
- [kAXDescriptionAttribute](../kaxdescriptionattribute.md)
- [kAXSelectedTextAttribute](../kaxselectedtextattribute.md): The currently selected text within this accessibility object. This attribute is required for all accessibility objects that represent editable text elements.
- [kAXSelectedTextRangeAttribute](../kaxselectedtextrangeattribute.md): Indicates the range of characters (not bytes) that defines the currently selected text within this accessibility object. This attribute is required for all accessibility objects that represent editable text elements.
- [kAXVisibleCharacterRangeAttribute](../kaxvisiblecharacterrangeattribute.md)
- [kAXNumberOfCharactersAttribute](../kaxnumberofcharactersattribute.md): The total number of characters (not bytes) in the editable text element represented by this accessibility object. This attribute is required for all accessibility objects that represent editable text elements.
- [kAXSharedTextUIElementsAttribute](../kaxsharedtextuielementsattribute.md)
- [kAXSharedCharacterRangeAttribute](../kaxsharedcharacterrangeattribute.md)
- [kAXMainAttribute](../kaxmainattribute.md)
- [kAXMinimizedAttribute](../kaxminimizedattribute.md): Indicates whether the window represented by this accessibility object is currently minimized in the Dock. This attribute is recommended for all accessibility objects that represent windows that can be minimized.
- [kAXCloseButtonAttribute](../kaxclosebuttonattribute.md)
- [kAXZoomButtonAttribute](../kaxzoombuttonattribute.md)
- [kAXMinimizeButtonAttribute](../kaxminimizebuttonattribute.md)
- [kAXToolbarButtonAttribute](../kaxtoolbarbuttonattribute.md)
- [kAXGrowAreaAttribute](../kaxgrowareaattribute.md)
- [kAXProxyAttribute](../kaxproxyattribute.md)
- [kAXModalAttribute](../kaxmodalattribute.md): Indicates whether the window represented by this accessibility object is modal. This attribute is recommended for all accessibility objects that represent windows.
- [kAXDefaultButtonAttribute](../kaxdefaultbuttonattribute.md)
- [kAXCancelButtonAttribute](../kaxcancelbuttonattribute.md)
- [kAXMenuItemCmdCharAttribute](../kaxmenuitemcmdcharattribute.md): The primary key in the keyboard shortcut for the command represented by this accessibility object. For example, “O” is the primary key in the keyboard shortcut for the Open command.
- [kAXMenuItemCmdVirtualKeyAttribute](../kaxmenuitemcmdvirtualkeyattribute.md)
- [kAXMenuItemCmdGlyphAttribute](../kaxmenuitemcmdglyphattribute.md)
- [kAXMenuItemCmdModifiersAttribute](../kaxmenuitemcmdmodifiersattribute.md): An integer mask that represents the modifier keys held down in the keyboard shortcut for the command represented by this accessibility object.
- [kAXMenuItemMarkCharAttribute](../kaxmenuitemmarkcharattribute.md)
- [kAXMenuItemPrimaryUIElementAttribute](../kaxmenuitemprimaryuielementattribute.md)
- [kAXMenuBarAttribute](../kaxmenubarattribute.md)
- [kAXWindowsAttribute](../kaxwindowsattribute.md): An array of accessibility objects representing this application’s windows. This attribute is recommended for all application-level accessibility objects.
- [kAXFrontmostAttribute](../kaxfrontmostattribute.md): Indicates whether the application represented by this accessibility object is active. This attribute is recommended for all application-level accessibility objects.
- [kAXHiddenAttribute](../kaxhiddenattribute.md): Indicates whether the application represented by this accessibility object is hidden. This attribute is recommended for all application-level accessibility objects.
- [kAXMainWindowAttribute](../kaxmainwindowattribute.md): The accessibility object representing this application’s main window. This attribute is recommended for all application-level accessibility objects.
- [kAXFocusedWindowAttribute](../kaxfocusedwindowattribute.md): The accessibility object that represents the currently focused window of this application. This attribute is recommended for all application-level accessibility objects.
- [kAXHeaderAttribute](../kaxheaderattribute.md)
- [kAXEditedAttribute](../kaxeditedattribute.md)
- [kAXTitleUIElementAttribute](../kaxtitleuielementattribute.md): An accessibility object that represents a static text title associated with another accessibility object.
- [kAXValueWrapsAttribute](../kaxvaluewrapsattribute.md): Indicates whether the value displayed in the user interface element represented by this accessibility object wraps around.
- [kAXTabsAttribute](../kaxtabsattribute.md)
- [kAXHorizontalScrollBarAttribute](../kaxhorizontalscrollbarattribute.md)
- [kAXVerticalScrollBarAttribute](../kaxverticalscrollbarattribute.md)
- [kAXOverflowButtonAttribute](../kaxoverflowbuttonattribute.md): Identifies which child of an accessibility object representing a toolbar is the overflow button (if any). This attribute is optional.
- [kAXFilenameAttribute](../kaxfilenameattribute.md): The filename associated with this accessibility object. This attribute is optional.
- [kAXExpandedAttribute](../kaxexpandedattribute.md): Indicates whether the menu displayed by the combo box or pop-up menu represented by this accessibility object is currently expanded. This attribute is recommended for all accessibility objects that display a pop-up menu.
- [kAXSelectedAttribute](../kaxselectedattribute.md): Indicates whether the row or column element represented by this accessibility object is selected. This attribute is recommended for all accessibility objects that represent selectable rows or columns.
- [kAXSplittersAttribute](../kaxsplittersattribute.md): An array of views and splitter bar elements displayed by the split view represented by this accessibility object. This is a convenience attribute that helps an assistive application easily find these elements.
- [kAXNextContentsAttribute](../kaxnextcontentsattribute.md)
- [kAXPreviousContentsAttribute](../kaxpreviouscontentsattribute.md)
- [kAXDocumentAttribute](../kaxdocumentattribute.md): The URL of the open document represented by this accessibility object. This attribute represents the URL as a string object.
- [kAXIncrementButtonAttribute](../kaxincrementbuttonattribute.md)
- [kAXDecrementButtonAttribute](../kaxdecrementbuttonattribute.md): The decrement element associated with the user interface object this accessibility object represents. This attribute can be used to provide convenient access to the decrement area of a custom user interface object.
- [kAXContentsAttribute](../kaxcontentsattribute.md)
- [kAXIncrementorAttribute](../kaxincrementorattribute.md): The incrementor of a time or date field represented by this accessibility object. This attribute is required for accessibility objects that represent time or date field elements that display an incrementor.
- [kAXHourFieldAttribute](../kaxhourfieldattribute.md): The hour field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display hours.
- [kAXMinuteFieldAttribute](../kaxminutefieldattribute.md): The minute field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display minutes.
- [kAXSecondFieldAttribute](../kaxsecondfieldattribute.md): The second field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display seconds.
- [kAXAMPMFieldAttribute](../kaxampmfieldattribute.md): The AM/PM field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display AM/PM settings.
- [kAXDayFieldAttribute](../kaxdayfieldattribute.md): The day field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display days.
- [kAXMonthFieldAttribute](../kaxmonthfieldattribute.md): The month field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display months.
- [kAXYearFieldAttribute](../kaxyearfieldattribute.md): The year field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display years.
- [kAXColumnTitleAttribute](../kaxcolumntitleattribute.md)
- [kAXURLAttribute](../kaxurlattribute.md): The URL that describes the location of the document or application represented by this accessibility object.
- [kAXLabelUIElementsAttribute](../kaxlabeluielementsattribute.md)
- [kAXLabelValueAttribute](../kaxlabelvalueattribute.md): The value of the label represented by this accessibility object. This attribute is required for all accessibility objects that represent labels.
- [kAXShownMenuUIElementAttribute](../kaxshownmenuuielementattribute.md): An array of accessibility objects that represent the contextual or Dock menus provided by this accessibility object.
- [kAXServesAsTitleForUIElementsAttribute](../kaxservesastitleforuielementsattribute.md)
- [kAXLinkedUIElementsAttribute](../kaxlinkeduielementsattribute.md)
- [kAXRowsAttribute](../kaxrowsattribute.md): An array of the accessibility objects representing the rows in this table or outline view.
- [kAXVisibleRowsAttribute](../kaxvisiblerowsattribute.md): An array of the accessibility objects representing the currently visible rows in this table or outline view.
- [kAXSelectedRowsAttribute](../kaxselectedrowsattribute.md): An array of the accessibility objects representing the currently selected rows in this table or outline view.
- [kAXColumnsAttribute](../kaxcolumnsattribute.md): An array of the accessibility objects representing the columns in this browser view.
- [kAXVisibleColumnsAttribute](../kaxvisiblecolumnsattribute.md): An array of the accessibility objects representing the currently visible columns in this browser view.
- [kAXSelectedColumnsAttribute](../kaxselectedcolumnsattribute.md): An array of the accessibility objects representing the currently selected columns in this browser view.
- [kAXSortDirectionAttribute](../kaxsortdirectionattribute.md): The sort direction of this accessibility object’s contents. For example, a list view’s contents may be sorted in ascending or descending order.
- [kAXColumnHeaderUIElementsAttribute](../kaxcolumnheaderuielementsattribute.md): An array of accessibility objects representing the column headers of this table or browser view.
- [kAXIndexAttribute](../kaxindexattribute.md): The index of the row or column represented by this accessibility object.
- [kAXDisclosingAttribute](../kaxdisclosingattribute.md): Indicates whether a row in an outline view represented by this accessibility object has an open or closed disclosure triangle. `true` indicates an open disclosure triangle; `false` indicates a closed disclosure triangle.
- [kAXDisclosedRowsAttribute](../kaxdisclosedrowsattribute.md): An array of accessibility objects representing the disclosed rows of this user interface element.
- [kAXDisclosedByRowAttribute](../kaxdisclosedbyrowattribute.md): The accessibility object representing the disclosing row.
- [kAXMatteHoleAttribute](../kaxmatteholeattribute.md): The accessibility object that represents the area available to the user through the matte hole.
- [kAXMatteContentUIElementAttribute](../kaxmattecontentuielementattribute.md): The accessibility object clipped by the matte.
- [kAXIsApplicationRunningAttribute](../kaxisapplicationrunningattribute.md): Indicates if the application represented by the Dock icon this accessibility object represents is currently running.
- [kAXFocusedApplicationAttribute](../kaxfocusedapplicationattribute.md)
- [kAXInsertionPointLineNumberAttribute](../kaxinsertionpointlinenumberattribute.md): The line number of the insertion point in the text associated with this accessibility object.

## See Also

### Accessibility Object Constants

- [Roles](roles.md): Define the values an accessibility object’s role attribute can have.
- [Subroles](subroles.md): Define the values for an accessibility object’s subrole attribute.
- [Parameterized Attributes](parameterized_attributes.md): Define the parameterized attributes an accessibility object can have.
- [Actions](actions.md): Define the actions an accessibility object can perform.
- [Notifications](notifications.md): Define the notifications that can be broadcast by an accessibility object.
- [Orientations and Sort Directions](orientations_and_sort_directions.md): Define the values for the orientation and sort-direction attributes of some accessibility objects.

# Attributes (Objective-C)

**Framework:** Application Services  
**Kind:** API Collection

Define the attributes available for accessibility objects.

<a id="overview"></a>

## Overview

See the “Roles and Associated Attributes” appendix in [Accessibility Programming Guide for OS X](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/index.html#//apple_ref/doc/uid/TP40001078) for more information on which attributes are associated with a specific role.

## Topics

### Constants

- [kAXRoleAttribute](../kaxroleattribute.md): The role, or type, of this accessibility object (for example, `AXButton`). This string is for identification purposes only and does not need to be localized. All accessibility objects must include this attribute.
- [kAXSubroleAttribute](../kaxsubroleattribute.md)
- [kAXRoleDescriptionAttribute](../kaxroledescriptionattribute.md)
- [kAXHelpAttribute](../kaxhelpattribute.md): A localized string containing help text for this accessibility object. An accessibility object that provides help information should include this attribute.
- [kAXTitleAttribute](../kaxtitleattribute.md)
- [kAXValueAttribute](../kaxvalueattribute.md)
- [kAXMinValueAttribute](../kaxminvalueattribute.md): The minimum value this accessibility object can display (for example, the minimum value of a scroller control). This attribute is used only in conjunction with the `AXValue` attribute.
- [kAXMaxValueAttribute](../kaxmaxvalueattribute.md): The maximum value this accessibility object can display (for example, the maximum value of a scroller control). This attribute is used only in conjunction with the `AXValue` attribute.
- [kAXValueIncrementAttribute](../kaxvalueincrementattribute.md): The amount an accessibility object’s value changes as the result of a single action (for example, how far a scroller travels with one mouse click). This attribute is used only in conjunction with the `AXValue` attribute.
- [kAXAllowedValuesAttribute](../kaxallowedvaluesattribute.md)
- [kAXEnabledAttribute](../kaxenabledattribute.md)
- [kAXFocusedAttribute](../kaxfocusedattribute.md)
- [kAXParentAttribute](../kaxparentattribute.md): This accessibility object’s parent object in the accessibility hierarchy. This attribute is required for all accessibility objects except the application-level accessibility object.
- [kAXChildrenAttribute](../kaxchildrenattribute.md)
- [kAXSelectedChildrenAttribute](../kaxselectedchildrenattribute.md)
- [kAXVisibleChildrenAttribute](../kaxvisiblechildrenattribute.md)
- [kAXWindowAttribute](../kaxwindowattribute.md)
- [kAXPositionAttribute](../kaxpositionattribute.md)
- [kAXTopLevelUIElementAttribute](../kaxtopleveluielementattribute.md)
- [kAXSizeAttribute](../kaxsizeattribute.md): The vertical and horizontal dimensions of this accessibility object. This attribute is required for all accessibility objects that are visible on the screen.
- [kAXOrientationAttribute](../kaxorientationattribute.md)
- [kAXDescriptionAttribute](../kaxdescriptionattribute.md)
- [kAXSelectedTextAttribute](../kaxselectedtextattribute.md): The currently selected text within this accessibility object. This attribute is required for all accessibility objects that represent editable text elements.
- [kAXSelectedTextRangeAttribute](../kaxselectedtextrangeattribute.md): Indicates the range of characters (not bytes) that defines the currently selected text within this accessibility object. This attribute is required for all accessibility objects that represent editable text elements.
- [kAXVisibleCharacterRangeAttribute](../kaxvisiblecharacterrangeattribute.md)
- [kAXNumberOfCharactersAttribute](../kaxnumberofcharactersattribute.md): The total number of characters (not bytes) in the editable text element represented by this accessibility object. This attribute is required for all accessibility objects that represent editable text elements.
- [kAXSharedTextUIElementsAttribute](../kaxsharedtextuielementsattribute.md)
- [kAXSharedCharacterRangeAttribute](../kaxsharedcharacterrangeattribute.md)
- [kAXMainAttribute](../kaxmainattribute.md)
- [kAXMinimizedAttribute](../kaxminimizedattribute.md): Indicates whether the window represented by this accessibility object is currently minimized in the Dock. This attribute is recommended for all accessibility objects that represent windows that can be minimized.
- [kAXCloseButtonAttribute](../kaxclosebuttonattribute.md)
- [kAXZoomButtonAttribute](../kaxzoombuttonattribute.md)
- [kAXMinimizeButtonAttribute](../kaxminimizebuttonattribute.md)
- [kAXToolbarButtonAttribute](../kaxtoolbarbuttonattribute.md)
- [kAXGrowAreaAttribute](../kaxgrowareaattribute.md)
- [kAXProxyAttribute](../kaxproxyattribute.md)
- [kAXModalAttribute](../kaxmodalattribute.md): Indicates whether the window represented by this accessibility object is modal. This attribute is recommended for all accessibility objects that represent windows.
- [kAXDefaultButtonAttribute](../kaxdefaultbuttonattribute.md)
- [kAXCancelButtonAttribute](../kaxcancelbuttonattribute.md)
- [kAXMenuItemCmdCharAttribute](../kaxmenuitemcmdcharattribute.md): The primary key in the keyboard shortcut for the command represented by this accessibility object. For example, “O” is the primary key in the keyboard shortcut for the Open command.
- [kAXMenuItemCmdVirtualKeyAttribute](../kaxmenuitemcmdvirtualkeyattribute.md)
- [kAXMenuItemCmdGlyphAttribute](../kaxmenuitemcmdglyphattribute.md)
- [kAXMenuItemCmdModifiersAttribute](../kaxmenuitemcmdmodifiersattribute.md): An integer mask that represents the modifier keys held down in the keyboard shortcut for the command represented by this accessibility object.
- [kAXMenuItemMarkCharAttribute](../kaxmenuitemmarkcharattribute.md)
- [kAXMenuItemPrimaryUIElementAttribute](../kaxmenuitemprimaryuielementattribute.md)
- [kAXMenuBarAttribute](../kaxmenubarattribute.md)
- [kAXWindowsAttribute](../kaxwindowsattribute.md): An array of accessibility objects representing this application’s windows. This attribute is recommended for all application-level accessibility objects.
- [kAXFrontmostAttribute](../kaxfrontmostattribute.md): Indicates whether the application represented by this accessibility object is active. This attribute is recommended for all application-level accessibility objects.
- [kAXHiddenAttribute](../kaxhiddenattribute.md): Indicates whether the application represented by this accessibility object is hidden. This attribute is recommended for all application-level accessibility objects.
- [kAXMainWindowAttribute](../kaxmainwindowattribute.md): The accessibility object representing this application’s main window. This attribute is recommended for all application-level accessibility objects.
- [kAXFocusedWindowAttribute](../kaxfocusedwindowattribute.md): The accessibility object that represents the currently focused window of this application. This attribute is recommended for all application-level accessibility objects.
- [kAXFocusedUIElemenAttribute](attributes/kaxfocuseduielemenattribute.md): The accessibility object that represents the currently focused user interface element in this application. This attribute is recommended for all application-level accessibility objects.
- [kAXHeaderAttribute](../kaxheaderattribute.md)
- [kAXEditedAttribute](../kaxeditedattribute.md)
- [kAXTitleUIElementAttribute](../kaxtitleuielementattribute.md): An accessibility object that represents a static text title associated with another accessibility object.
- [kAXValueWrapsAttribute](../kaxvaluewrapsattribute.md): Indicates whether the value displayed in the user interface element represented by this accessibility object wraps around.
- [kAXTabsAttribute](../kaxtabsattribute.md)
- [kAXHorizontalScrollBarAttribute](../kaxhorizontalscrollbarattribute.md)
- [kAXVerticalScrollBarAttribute](../kaxverticalscrollbarattribute.md)
- [kAXOverflowButtonAttribute](../kaxoverflowbuttonattribute.md): Identifies which child of an accessibility object representing a toolbar is the overflow button (if any). This attribute is optional.
- [kAXFilenameAttribute](../kaxfilenameattribute.md): The filename associated with this accessibility object. This attribute is optional.
- [kAXExpandedAttribute](../kaxexpandedattribute.md): Indicates whether the menu displayed by the combo box or pop-up menu represented by this accessibility object is currently expanded. This attribute is recommended for all accessibility objects that display a pop-up menu.
- [kAXSelectedAttribute](../kaxselectedattribute.md): Indicates whether the row or column element represented by this accessibility object is selected. This attribute is recommended for all accessibility objects that represent selectable rows or columns.
- [kAXSplittersAttribute](../kaxsplittersattribute.md): An array of views and splitter bar elements displayed by the split view represented by this accessibility object. This is a convenience attribute that helps an assistive application easily find these elements.
- [kAXNextContentsAttribute](../kaxnextcontentsattribute.md)
- [kAXPreviousContentsAttribute](../kaxpreviouscontentsattribute.md)
- [kAXDocumentAttribute](../kaxdocumentattribute.md): The URL of the open document represented by this accessibility object. This attribute represents the URL as a string object.
- [kAXIncrementButtonAttribute](../kaxincrementbuttonattribute.md)
- [kAXDecrementButtonAttribute](../kaxdecrementbuttonattribute.md): The decrement element associated with the user interface object this accessibility object represents. This attribute can be used to provide convenient access to the decrement area of a custom user interface object.
- [kAXContentsAttribute](../kaxcontentsattribute.md)
- [kAXIncrementorAttribute](../kaxincrementorattribute.md): The incrementor of a time or date field represented by this accessibility object. This attribute is required for accessibility objects that represent time or date field elements that display an incrementor.
- [kAXHourFieldAttribute](../kaxhourfieldattribute.md): The hour field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display hours.
- [kAXMinuteFieldAttribute](../kaxminutefieldattribute.md): The minute field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display minutes.
- [kAXSecondFieldAttribute](../kaxsecondfieldattribute.md): The second field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display seconds.
- [kAXAMPMFieldAttribute](../kaxampmfieldattribute.md): The AM/PM field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display AM/PM settings.
- [kAXDayFieldAttribute](../kaxdayfieldattribute.md): The day field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display days.
- [kAXMonthFieldAttribute](../kaxmonthfieldattribute.md): The month field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display months.
- [kAXYearFieldAttribute](../kaxyearfieldattribute.md): The year field of a time field represented by this accessibility object. This attribute is required for accessibility objects that represent time fields that display years.
- [kAXColumnTitleAttribute](../kaxcolumntitleattribute.md)
- [kAXURLAttribute](../kaxurlattribute.md): The URL that describes the location of the document or application represented by this accessibility object.
- [kAXLabelUIElementsAttribute](../kaxlabeluielementsattribute.md)
- [kAXLabelValueAttribute](../kaxlabelvalueattribute.md): The value of the label represented by this accessibility object. This attribute is required for all accessibility objects that represent labels.
- [kAXShownMenuUIElementAttribute](../kaxshownmenuuielementattribute.md): An array of accessibility objects that represent the contextual or Dock menus provided by this accessibility object.
- [kAXServesAsTitleForUIElementsAttribute](../kaxservesastitleforuielementsattribute.md)
- [kAXLinkedUIElementsAttribute](../kaxlinkeduielementsattribute.md)
- [kAXRowsAttribute](../kaxrowsattribute.md): An array of the accessibility objects representing the rows in this table or outline view.
- [kAXVisibleRowsAttribute](../kaxvisiblerowsattribute.md): An array of the accessibility objects representing the currently visible rows in this table or outline view.
- [kAXSelectedRowsAttribute](../kaxselectedrowsattribute.md): An array of the accessibility objects representing the currently selected rows in this table or outline view.
- [kAXColumnsAttribute](../kaxcolumnsattribute.md): An array of the accessibility objects representing the columns in this browser view.
- [kAXVisibleColumnsAttribute](../kaxvisiblecolumnsattribute.md): An array of the accessibility objects representing the currently visible columns in this browser view.
- [kAXSelectedColumnsAttribute](../kaxselectedcolumnsattribute.md): An array of the accessibility objects representing the currently selected columns in this browser view.
- [kAXSortDirectionAttribute](../kaxsortdirectionattribute.md): The sort direction of this accessibility object’s contents. For example, a list view’s contents may be sorted in ascending or descending order.
- [kAXColumnHeaderUIElementsAttribute](../kaxcolumnheaderuielementsattribute.md): An array of accessibility objects representing the column headers of this table or browser view.
- [kAXIndexAttribute](../kaxindexattribute.md): The index of the row or column represented by this accessibility object.
- [kAXDisclosingAttribute](../kaxdisclosingattribute.md): Indicates whether a row in an outline view represented by this accessibility object has an open or closed disclosure triangle. `true` indicates an open disclosure triangle; `false` indicates a closed disclosure triangle.
- [kAXDisclosedRowsAttribute](../kaxdisclosedrowsattribute.md): An array of accessibility objects representing the disclosed rows of this user interface element.
- [kAXDisclosedByRowAttribute](../kaxdisclosedbyrowattribute.md): The accessibility object representing the disclosing row.
- [kAXMatteHoleAttribute](../kaxmatteholeattribute.md): The accessibility object that represents the area available to the user through the matte hole.
- [kAXMatteContentUIElementAttribute](../kaxmattecontentuielementattribute.md): The accessibility object clipped by the matte.
- [kAXIsApplicationRunningAttribute](../kaxisapplicationrunningattribute.md): Indicates if the application represented by the Dock icon this accessibility object represents is currently running.
- [kAXFocusedApplicationAttribute](../kaxfocusedapplicationattribute.md)
- [kAXInsertionPointLineNumberAttribute](../kaxinsertionpointlinenumberattribute.md): The line number of the insertion point in the text associated with this accessibility object.

## See Also

### Accessibility Object Constants

- [Roles](roles.md): Define the values an accessibility object’s role attribute can have.
- [Subroles](subroles.md): Define the values for an accessibility object’s subrole attribute.
- [Parameterized Attributes](parameterized_attributes.md): Define the parameterized attributes an accessibility object can have.
- [Actions](actions.md): Define the actions an accessibility object can perform.
- [Notifications](notifications.md): Define the notifications that can be broadcast by an accessibility object.
- [Orientations and Sort Directions](orientations_and_sort_directions.md): Define the values for the orientation and sort-direction attributes of some accessibility objects.
