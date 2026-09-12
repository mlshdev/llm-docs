> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/role](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/role)

# NSAccessibility.Role (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Values that describe types of objects that accessibility elements represent.

## Declaration

```swift
struct Role
```

## Topics

### Roles

- [application](role/application.md): The app role.
- [browser](role/browser.md): The browser role.
- [busyIndicator](role/busyindicator.md): The busy indicator role.
- [button](role/button.md): The button role.
- [cell](role/cell.md): The cell role in a table or matrix.
- [checkBox](role/checkbox.md): The checkbox role.
- [colorWell](role/colorwell.md): The color well role.
- [column](role/column.md): The column role.
- [comboBox](role/combobox.md): The combo box role.
- [dateTimeAreaRole](role/datetimearearole.md)
- [disclosureTriangle](role/disclosuretriangle.md): The disclosure triangle role.
- [drawer](role/drawer.md): The drawer role.
- [grid](role/grid.md): The grid role.
- [group](role/group.md): The group role.
- [growArea](role/growarea.md): The grow (resize) area role in a window.
- [handle](role/handle.md): The drag handle role.
- [headingRole](role/headingrole.md)
- [helpTag](role/helptag.md): The help tag role.
- [image](role/image.md): The image role.
- [incrementor](role/incrementor.md): The stepper role.
- [layoutArea](role/layoutarea.md): The layout area role (a view, such as a graphic view, that contains visual elements that may not have any accessibility representation).
- [layoutItem](role/layoutitem.md): The role for an item in a layout area.
- [levelIndicator](role/levelindicator.md): The level indicator role.
- [link](role/link.md): The link role.
- [list](role/list.md): The list role.
- [listMarkerRole](role/listmarkerrole.md)
- [matte](role/matte.md): The matte role.
- [menu](role/menu.md): The menu role.
- [menuBar](role/menubar.md): The menu bar role.
- [menuBarItem](role/menubaritem.md): The menu bar item role.
- [menuButton](role/menubutton.md): The menu button role.
- [menuItem](role/menuitem.md): The menu item role.
- [outline](role/outline.md): The outline role.
- [pageRole](role/pagerole.md): The page role.
- [popUpButton](role/popupbutton.md): The pop-up button role.
- [popover](role/popover.md): The popover role.
- [progressIndicator](role/progressindicator.md): The progress indicator role.
- [radioButton](role/radiobutton.md): The radio button role.
- [radioGroup](role/radiogroup.md): The radio button group role.
- [relevanceIndicator](role/relevanceindicator.md): The relevance indicator role.
- [row](role/row.md): The row role.
- [ruler](role/ruler.md): The ruler role.
- [rulerMarker](role/rulermarker.md): The ruler marker role.
- [scrollArea](role/scrollarea.md): The scroll view role.
- [scrollBar](role/scrollbar.md): The scroll bar role.
- [sheet](role/sheet.md): The sheet role.
- [slider](role/slider.md): The slider role.
- [splitGroup](role/splitgroup.md): The split view role.
- [splitter](role/splitter.md): The splitter bar role for a split view.
- [staticText](role/statictext.md): The uneditable text role.
- [systemWide](role/systemwide.md): The systemwide accessibility object role.
- [tabGroup](role/tabgroup.md): The tab group role.
- [table](role/table.md): The table role.
- [textArea](role/textarea.md): The text view role.
- [textField](role/textfield.md): The text field role.
- [toolbar](role/toolbar.md): The toolbar role.
- [valueIndicator](role/valueindicator.md): The value indicator role.
- [webAreaRole](role/webarearole.md)
- [window](role/window.md): The window role.
- [unknown](role/unknown.md): An object with an unknown role.

### Descriptions

- [description(with:)](role/description%28with_%29.md): Returns a standard description for a role and subrole.
- [description(for:)](role/description%28for_%29.md): Returns a standard role description for a user interface element.

### Initializers

- [init(rawValue:)](role/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessibility Types

- [NSAccessibility.Action](action.md): Constants that describe types of actions.
- [NSAccessibility.AnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](../nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibility.Attribute](attribute.md): Constants that describe attributes.
- [NSAccessibility.FontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibility.OrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.ParameterizedAttribute](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibility.RulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

# NSAccessibilityRole (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Values that describe types of objects that accessibility elements represent.

## Declaration

```objectivec
typedef NSString * NSAccessibilityRole;
```

## Topics

### Roles

- [NSAccessibilityApplicationRole](role/application.md): The app role.
- [NSAccessibilityBrowserRole](role/browser.md): The browser role.
- [NSAccessibilityBusyIndicatorRole](role/busyindicator.md): The busy indicator role.
- [NSAccessibilityButtonRole](role/button.md): The button role.
- [NSAccessibilityCellRole](role/cell.md): The cell role in a table or matrix.
- [NSAccessibilityCheckBoxRole](role/checkbox.md): The checkbox role.
- [NSAccessibilityColorWellRole](role/colorwell.md): The color well role.
- [NSAccessibilityColumnRole](role/column.md): The column role.
- [NSAccessibilityComboBoxRole](role/combobox.md): The combo box role.
- [NSAccessibilityDateTimeAreaRole](role/datetimearearole.md)
- [NSAccessibilityDisclosureTriangleRole](role/disclosuretriangle.md): The disclosure triangle role.
- [NSAccessibilityDrawerRole](role/drawer.md): The drawer role.
- [NSAccessibilityGridRole](role/grid.md): The grid role.
- [NSAccessibilityGroupRole](role/group.md): The group role.
- [NSAccessibilityGrowAreaRole](role/growarea.md): The grow (resize) area role in a window.
- [NSAccessibilityHandleRole](role/handle.md): The drag handle role.
- [NSAccessibilityHeadingRole](role/headingrole.md)
- [NSAccessibilityHelpTagRole](role/helptag.md): The help tag role.
- [NSAccessibilityImageRole](role/image.md): The image role.
- [NSAccessibilityIncrementorRole](role/incrementor.md): The stepper role.
- [NSAccessibilityLayoutAreaRole](role/layoutarea.md): The layout area role (a view, such as a graphic view, that contains visual elements that may not have any accessibility representation).
- [NSAccessibilityLayoutItemRole](role/layoutitem.md): The role for an item in a layout area.
- [NSAccessibilityLevelIndicatorRole](role/levelindicator.md): The level indicator role.
- [NSAccessibilityLinkRole](role/link.md): The link role.
- [NSAccessibilityListRole](role/list.md): The list role.
- [NSAccessibilityListMarkerRole](role/listmarkerrole.md)
- [NSAccessibilityMatteRole](role/matte.md): The matte role.
- [NSAccessibilityMenuRole](role/menu.md): The menu role.
- [NSAccessibilityMenuBarRole](role/menubar.md): The menu bar role.
- [NSAccessibilityMenuBarItemRole](role/menubaritem.md): The menu bar item role.
- [NSAccessibilityMenuButtonRole](role/menubutton.md): The menu button role.
- [NSAccessibilityMenuItemRole](role/menuitem.md): The menu item role.
- [NSAccessibilityOutlineRole](role/outline.md): The outline role.
- [NSAccessibilityPageRole](role/pagerole.md): The page role.
- [NSAccessibilityPopUpButtonRole](role/popupbutton.md): The pop-up button role.
- [NSAccessibilityPopoverRole](role/popover.md): The popover role.
- [NSAccessibilityProgressIndicatorRole](role/progressindicator.md): The progress indicator role.
- [NSAccessibilityRadioButtonRole](role/radiobutton.md): The radio button role.
- [NSAccessibilityRadioGroupRole](role/radiogroup.md): The radio button group role.
- [NSAccessibilityRelevanceIndicatorRole](role/relevanceindicator.md): The relevance indicator role.
- [NSAccessibilityRowRole](role/row.md): The row role.
- [NSAccessibilityRulerRole](role/ruler.md): The ruler role.
- [NSAccessibilityRulerMarkerRole](role/rulermarker.md): The ruler marker role.
- [NSAccessibilityScrollAreaRole](role/scrollarea.md): The scroll view role.
- [NSAccessibilityScrollBarRole](role/scrollbar.md): The scroll bar role.
- [NSAccessibilitySheetRole](role/sheet.md): The sheet role.
- [NSAccessibilitySliderRole](role/slider.md): The slider role.
- [NSAccessibilitySplitGroupRole](role/splitgroup.md): The split view role.
- [NSAccessibilitySplitterRole](role/splitter.md): The splitter bar role for a split view.
- [NSAccessibilityStaticTextRole](role/statictext.md): The uneditable text role.
- [NSAccessibilitySystemWideRole](role/systemwide.md): The systemwide accessibility object role.
- [NSAccessibilityTabGroupRole](role/tabgroup.md): The tab group role.
- [NSAccessibilityTableRole](role/table.md): The table role.
- [NSAccessibilityTextAreaRole](role/textarea.md): The text view role.
- [NSAccessibilityTextFieldRole](role/textfield.md): The text field role.
- [NSAccessibilityToolbarRole](role/toolbar.md): The toolbar role.
- [NSAccessibilityValueIndicatorRole](role/valueindicator.md): The value indicator role.
- [NSAccessibilityWebAreaRole](role/webarearole.md)
- [NSAccessibilityWindowRole](role/window.md): The window role.
- [NSAccessibilityUnknownRole](role/unknown.md): An object with an unknown role.

### Descriptions

- [NSAccessibilityRoleDescription](role/description%28with_%29.md): Returns a standard description for a role and subrole.
- [NSAccessibilityRoleDescriptionForUIElement](role/description%28for_%29.md): Returns a standard role description for a user interface element.

## See Also

### Accessibility Types

- [NSAccessibilityActionName](action.md): Constants that describe types of actions.
- [NSAccessibilityAnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](../nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibilityAttributeName](attribute.md): Constants that describe attributes.
- [NSAccessibilityFontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibilityOrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibilityParameterizedAttributeName](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityRulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySubrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.
