> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/attribute](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/attribute)

# NSAccessibility.Attribute (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that describe attributes.

## Declaration

```swift
struct Attribute
```

## Topics

### Attributes

- [activationPoint](attribute/activationpoint.md)
- [allowedValues](attribute/allowedvalues.md): Deprecated. The allowed values in the slider (`NSArray`).
- [alternateUIVisible](attribute/alternateuivisible.md)
- [autoInteractableAttribute](attribute/autointeractableattribute.md)
- [blockQuoteLevelAttribute](attribute/blockquotelevelattribute.md)
- [cancelButton](attribute/cancelbutton.md): The element that represents the cancel button (`id`).
- [children](attribute/children.md): Deprecated. The element’s child elements in the accessibility hierarchy (`NSArray`).
- [childrenInNavigationOrderAttribute](attribute/childreninnavigationorderattribute.md)
- [clearButton](attribute/clearbutton.md): Deprecated. The element that represents the clear button in a search field (`id`).
- [closeButton](attribute/closebutton.md): Deprecated. The element representing the close button (`id`).
- [columnCount](attribute/columncount.md): Deprecated. The number of columns in the grid (`NSNumber` as `intValue`).
- [columnHeaderUIElements](attribute/columnheaderuielements.md): The table’s column headers (`NSArray`).
- [columnIndexRange](attribute/columnindexrange.md): The column index range of the cell (an `NSValue` instance that contains the row’s starting index and index span in the table).
- [columnTitles](attribute/columntitles.md): The elements that represent the column titles (`NSArray`).
- [columns](attribute/columns.md): The table’s columns (`NSArray`).
- [containsProtectedContent](attribute/containsprotectedcontent.md): A flag that indicates whether the object contains protected content.
- [contents](attribute/contents.md): Elements that represent the contents in the current element, such as the document view of a scroll view (`NSArray`).
- [criticalValue](attribute/criticalvalue.md): The critical value in a level indicator (typically, `NSNumber`).
- [dateTimeComponentsAttribute](attribute/datetimecomponentsattribute.md)
- [decrementButton](attribute/decrementbutton.md): The element that represents a stepper’s decrement button (`id`).
- [defaultButton](attribute/defaultbutton.md): The element that represents the default button (`id`).
- [description](attribute/description.md): The purpose of the element, not including the role (`NSString`).
- [disclosedByRow](attribute/disclosedbyrow.md): Deprecated. The row disclosing this row (`id`).
- [disclosedRows](attribute/disclosedrows.md): The rows disclosed by this row (`NSArray`).
- [disclosing](attribute/disclosing.md): A flag that indicates whether a row is disclosing other rows (`NSNumber`).
- [disclosureLevel](attribute/disclosurelevel.md): The indentation level of this row (`NSNumber`).
- [document](attribute/document.md): The URL for the file represented by the element (`NSString`).
- [edited](attribute/edited.md): A flag that indicates whether the element has been modified (`NSNumber`).
- [embeddedImageDescriptionAttribute](attribute/embeddedimagedescriptionattribute.md)
- [enabled](attribute/enabled.md): A flag that indicates the enabled state of the element (`NSNumber`).
- [expanded](attribute/expanded.md): A flag that indicates whether the element is expanded (`NSNumber`).
- [extrasMenuBar](attribute/extrasmenubar.md): The app extras menu bar (`id`).
- [filename](attribute/filename.md): The filename associated with the element (`NSString`).
- [focused](attribute/focused.md): A flag that indicates the presence of keyboard focus (`NSNumber`).
- [focusedUIElement](attribute/focuseduielement.md): Deprecated. The element with the current focus (`id`).
- [focusedWindow](attribute/focusedwindow.md): The app’s window that has current focus (`id`).
- [frontmost](attribute/frontmost.md): A flag that indicates whether the app is frontmost (`NSNumber`).
- [fullScreenButton](attribute/fullscreenbutton.md): The element that represents the full-screen button (`id`).
- [growArea](attribute/growarea.md): The element representing the grow area (`id`).
- [handles](attribute/handles.md): Deprecated. The drag handles of the item (`NSArray`).
- [header](attribute/header.md): The element that represents a table view’s header (`id`).
- [headingLevelAttribute](attribute/headinglevelattribute.md)
- [help](attribute/help.md): The help text for the element (`NSString`).
- [hidden](attribute/hidden.md): A flag that indicates whether the app is hidden (`NSNumber`).
- [horizontalScrollBar](attribute/horizontalscrollbar.md): The element that represents a scroll view’s horizontal scroll bar (`id`).
- [horizontalUnitDescription](attribute/horizontalunitdescription.md): The description of the layout view’s horizontal units (`NSString`).
- [horizontalUnits](attribute/horizontalunits.md): Deprecated. The units that the layout view uses for horizontal values (`NSString`).
- [identifier](attribute/identifier.md): The identity of the element (`NSString`).
- [incrementButton](attribute/incrementbutton.md): The element that represents a stepper’s increment button (`id`).
- [index](attribute/index.md): The index of the row or column represented by the element (`NSValue`).
- [insertionPointLineNumber](attribute/insertionpointlinenumber.md): Deprecated. The line number containing the insertion point (`NSNumber`).
- [labelUIElements](attribute/labeluielements.md): The elements that represent the slider’s labels (`NSArray`).
- [labelValue](attribute/labelvalue.md): The value of the label represented by this element (`NSNumber`).
- [languageAttribute](attribute/languageattribute.md)
- [linkedUIElements](attribute/linkeduielements.md): Deprecated. The elements with which this element is related (`NSArray`).
- [main](attribute/main.md): A flag that indicates whether the window is the main window (`NSNumber`).
- [mainWindow](attribute/mainwindow.md): The app’s main window (`id`).
- [markerGroupUIElement](attribute/markergroupuielement.md): Deprecated. A marker group user interface element (`id`).
- [markerType](attribute/markertype.md): The type of the marker (`NSString`).
- [markerTypeDescription](attribute/markertypedescription.md): The description of the marker type (`NSString`).
- [markerUIElements](attribute/markeruielements.md): An array of marker user interface elements (`NSArray`)
- [markerValues](attribute/markervalues.md): The marker values (`NSArray` of `NSNumber`).
- [matteContentUIElement](attribute/mattecontentuielement.md): Deprecated. The element that is clipped by the matte (`id`).
- [matteHole](attribute/mattehole.md): Deprecated. The bounds of the matte hole, in screen coordinates in points (`NSValue` containing an `NSRect`).
- [maxValue](attribute/maxvalue.md): The element’s maximum value (`id`).
- [menuBar](attribute/menubar.md): The app’s menu bar (`id`).
- [minValue](attribute/minvalue.md): The element’s minimum value (`id`).
- [minimizeButton](attribute/minimizebutton.md): The element that represents the minimize button (`id`).
- [minimized](attribute/minimized.md): A flag that indicates whether the window is minimized (`NSNumber`).
- [modal](attribute/modal.md): A flag that indicates whether the window represented by this element is modal (`NSNumber`).
- [nextContents](attribute/nextcontents.md): The elements representing the contents that follow the current divider element, such as a subview adjacent to a split view’s splitter element (`NSArray`).
- [numberOfCharacters](attribute/numberofcharacters.md): The number of characters in the text (`NSNumber`).
- [orderedByRow](attribute/orderedbyrow.md): A flag that indicates whether the grid is in row major or column major order.
- [orientation](attribute/orientation.md): The element’s orientation.
- [overflowButton](attribute/overflowbutton.md): The element that represents a toolbar’s overflow button (`id`).
- [parent](attribute/parent.md): The element’s parent element in the accessibility hierarchy (`id`).
- [pathAttribute](attribute/pathattribute.md)
- [placeholderValue](attribute/placeholdervalue.md): The placeholder value for a control, such as a text field (`NSString`).
- [position](attribute/position.md): The position in points of the element’s lower-left corner in screen-relative coordinates (`NSValue`).
- [previousContents](attribute/previouscontents.md): The elements representing the contents that precede the current divider element, such as a subview adjacent to a split view’s splitter bar element (`NSArray`).
- [proxy](attribute/proxy.md): The element that represents the window’s proxy icon (`id`).
- [required](attribute/required.md)
- [role](attribute/role.md): The element’s type, such as `NSAccessibilityRadioButtonRole` (`NSString`). See Roles for a list of available roles.
- [roleDescription](attribute/roledescription.md): A localized, human-intelligible description of the element’s role, such as `radio button` (`NSString`).
- [rowCount](attribute/rowcount.md): The number of rows in the grid (`NSNumber` as `intValue`).
- [rowHeaderUIElements](attribute/rowheaderuielements.md): The table’s row headers (`NSArray`).
- [rowIndexRange](attribute/rowindexrange.md): Deprecated. The row index range of the cell (an `NSValue` instance that contains the row’s starting index and index span in the table).
- [rows](attribute/rows.md): The table’s rows (`NSArray`).
- [searchButton](attribute/searchbutton.md): The element that represents the search button in a search field (`id`).
- [searchMenu](attribute/searchmenu.md): The element that represents the menu in a search field (`id`).
- [selected](attribute/selected.md): A flag that indicates whether the element is selected (`NSNumber`).
- [selectedCells](attribute/selectedcells.md): Deprecated. The table’s selected cells (`NSArray`). This attribute is required for cell-based tables.
- [selectedChildren](attribute/selectedchildren.md): The currently selected children of the element (`NSArray`).
- [selectedColumns](attribute/selectedcolumns.md): The table’s selected columns (`NSArray`).
- [selectedRows](attribute/selectedrows.md): The table’s selected rows (`NSArray`).
- [selectedText](attribute/selectedtext.md): The currently selected text (`NSString`).
- [selectedTextRange](attribute/selectedtextrange.md): The range of selected text (`NSValue`).
- [selectedTextRanges](attribute/selectedtextranges.md): An array of `NSValue` (`rangeValue`) ranges of selected text (`NSArray`).
- [servesAsTitleForUIElements](attribute/servesastitleforuielements.md): The elements for which this element serves as the title (`NSArray`).
- [sharedCharacterRange](attribute/sharedcharacterrange.md): The (`rangeValue`) part of shared text in this view (`NSValue`).
- [sharedFocusElements](attribute/sharedfocuselements.md)
- [sharedTextUIElements](attribute/sharedtextuielements.md): The elements with which the text of this element is shared (`NSArray`).
- [shownMenu](attribute/shownmenu.md): The menu currently being displayed (`id`).
- [size](attribute/size.md): The element’s size in points (`NSValue`).
- [sortDirection](attribute/sortdirection.md): The column’s sort direction (`NSString`).
- [splitters](attribute/splitters.md): The views and splitter bar in a split view (`NSArray`).
- [subrole](attribute/subrole.md): The element’s subrole, such as `NSAccessibilityTableRowSubrole` (`NSString`). See Subroles for a list of available subroles.
- [tabs](attribute/tabs.md): The tab elements in a tab view (`NSArray`).
- [textInputMarkedRangeAttribute](attribute/textinputmarkedrangeattribute.md)
- [title](attribute/title.md): The title of the element, such as a button’s visible text (`NSString`).
- [titleUIElement](attribute/titleuielement.md): An element that represents another element’s static text title (`id`).
- [toolbarButton](attribute/toolbarbutton.md): The element that represents the toolbar button (`id`).
- [topLevelUIElement](attribute/topleveluielement.md): The top-level element that contains this element (`id`).
- [unitDescription](attribute/unitdescription.md): The description of ruler units (`NSString`).
- [units](attribute/units.md): The ruler units (`NSString`).
- [url](attribute/url.md): The URL associated with the element (`NSURL`).
- [value](attribute/value.md): The element’s value (`id`).
- [valueDescription](attribute/valuedescription.md): The description of the element’s value (`NSString`).
- [verticalScrollBar](attribute/verticalscrollbar.md): The element that represents the vertical scroll bar in a scroll view (`id`).
- [verticalUnitDescription](attribute/verticalunitdescription.md): The description of the layout view’s vertical units (`NSString`).
- [verticalUnits](attribute/verticalunits.md): The units that the layout view uses for vertical values (`NSString`).
- [visibleCells](attribute/visiblecells.md): The table’s visible cells (`NSArray`). This attribute is required for cell-based tables.
- [visibleCharacterRange](attribute/visiblecharacterrange.md): The range of visible text (`NSValue`).
- [visibleChildren](attribute/visiblechildren.md): The element’s child elements that are visible (`NSArray`).
- [visibleColumns](attribute/visiblecolumns.md): The table’s visible columns (`NSArray`).
- [visibleRows](attribute/visiblerows.md): The table’s visible rows (`NSArray`).
- [visitedAttribute](attribute/visitedattribute.md)
- [warningValue](attribute/warningvalue.md): The warning value in a level indicator (typically, `NSNumber`).
- [window](attribute/window.md): The window containing the current element (`id`).
- [windows](attribute/windows.md): The app’s windows (`NSArray`).
- [zoomButton](attribute/zoombutton.md): The element that represents the zoom button (`id`).

### Initializers

- [init(rawValue:)](attribute/init%28rawvalue_%29.md)

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
- [NSAccessibility.FontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibility.OrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.ParameterizedAttribute](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibility.Role](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibility.RulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

# NSAccessibilityAttributeName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that describe attributes.

## Declaration

```objectivec
typedef NSString * NSAccessibilityAttributeName;
```

## Topics

### Attributes

- [NSAccessibilityActivationPointAttribute](attribute/activationpoint.md)
- [NSAccessibilityAllowedValuesAttribute](attribute/allowedvalues.md): Deprecated. The allowed values in the slider (`NSArray`).
- [NSAccessibilityAlternateUIVisibleAttribute](attribute/alternateuivisible.md)
- [NSAccessibilityAutoInteractableAttribute](attribute/autointeractableattribute.md)
- [NSAccessibilityBlockQuoteLevelAttribute](attribute/blockquotelevelattribute.md)
- [NSAccessibilityCancelButtonAttribute](attribute/cancelbutton.md): The element that represents the cancel button (`id`).
- [NSAccessibilityChildrenAttribute](attribute/children.md): Deprecated. The element’s child elements in the accessibility hierarchy (`NSArray`).
- [NSAccessibilityChildrenInNavigationOrderAttribute](attribute/childreninnavigationorderattribute.md)
- [NSAccessibilityClearButtonAttribute](attribute/clearbutton.md): Deprecated. The element that represents the clear button in a search field (`id`).
- [NSAccessibilityCloseButtonAttribute](attribute/closebutton.md): Deprecated. The element representing the close button (`id`).
- [NSAccessibilityColumnCountAttribute](attribute/columncount.md): Deprecated. The number of columns in the grid (`NSNumber` as `intValue`).
- [NSAccessibilityColumnHeaderUIElementsAttribute](attribute/columnheaderuielements.md): The table’s column headers (`NSArray`).
- [NSAccessibilityColumnIndexRangeAttribute](attribute/columnindexrange.md): The column index range of the cell (an `NSValue` instance that contains the row’s starting index and index span in the table).
- [NSAccessibilityColumnTitlesAttribute](attribute/columntitles.md): The elements that represent the column titles (`NSArray`).
- [NSAccessibilityColumnsAttribute](attribute/columns.md): The table’s columns (`NSArray`).
- [NSAccessibilityContainsProtectedContentAttribute](attribute/containsprotectedcontent.md): A flag that indicates whether the object contains protected content.
- [NSAccessibilityContentsAttribute](attribute/contents.md): Elements that represent the contents in the current element, such as the document view of a scroll view (`NSArray`).
- [NSAccessibilityCriticalValueAttribute](attribute/criticalvalue.md): The critical value in a level indicator (typically, `NSNumber`).
- [NSAccessibilityDateTimeComponentsAttribute](attribute/datetimecomponentsattribute.md)
- [NSAccessibilityDecrementButtonAttribute](attribute/decrementbutton.md): The element that represents a stepper’s decrement button (`id`).
- [NSAccessibilityDefaultButtonAttribute](attribute/defaultbutton.md): The element that represents the default button (`id`).
- [NSAccessibilityDescriptionAttribute](attribute/description.md): The purpose of the element, not including the role (`NSString`).
- [NSAccessibilityDisclosedByRowAttribute](attribute/disclosedbyrow.md): Deprecated. The row disclosing this row (`id`).
- [NSAccessibilityDisclosedRowsAttribute](attribute/disclosedrows.md): The rows disclosed by this row (`NSArray`).
- [NSAccessibilityDisclosingAttribute](attribute/disclosing.md): A flag that indicates whether a row is disclosing other rows (`NSNumber`).
- [NSAccessibilityDisclosureLevelAttribute](attribute/disclosurelevel.md): The indentation level of this row (`NSNumber`).
- [NSAccessibilityDocumentAttribute](attribute/document.md): The URL for the file represented by the element (`NSString`).
- [NSAccessibilityEditedAttribute](attribute/edited.md): A flag that indicates whether the element has been modified (`NSNumber`).
- [NSAccessibilityEmbeddedImageDescriptionAttribute](attribute/embeddedimagedescriptionattribute.md)
- [NSAccessibilityEnabledAttribute](attribute/enabled.md): A flag that indicates the enabled state of the element (`NSNumber`).
- [NSAccessibilityExpandedAttribute](attribute/expanded.md): A flag that indicates whether the element is expanded (`NSNumber`).
- [NSAccessibilityExtrasMenuBarAttribute](attribute/extrasmenubar.md): The app extras menu bar (`id`).
- [NSAccessibilityFilenameAttribute](attribute/filename.md): The filename associated with the element (`NSString`).
- [NSAccessibilityFocusedAttribute](attribute/focused.md): A flag that indicates the presence of keyboard focus (`NSNumber`).
- [NSAccessibilityFocusedUIElementAttribute](attribute/focuseduielement.md): Deprecated. The element with the current focus (`id`).
- [NSAccessibilityFocusedWindowAttribute](attribute/focusedwindow.md): The app’s window that has current focus (`id`).
- [NSAccessibilityFrontmostAttribute](attribute/frontmost.md): A flag that indicates whether the app is frontmost (`NSNumber`).
- [NSAccessibilityFullScreenButtonAttribute](attribute/fullscreenbutton.md): The element that represents the full-screen button (`id`).
- [NSAccessibilityGrowAreaAttribute](attribute/growarea.md): The element representing the grow area (`id`).
- [NSAccessibilityHandlesAttribute](attribute/handles.md): Deprecated. The drag handles of the item (`NSArray`).
- [NSAccessibilityHeaderAttribute](attribute/header.md): The element that represents a table view’s header (`id`).
- [NSAccessibilityHeadingLevelAttribute](attribute/headinglevelattribute.md)
- [NSAccessibilityHelpAttribute](attribute/help.md): The help text for the element (`NSString`).
- [NSAccessibilityHiddenAttribute](attribute/hidden.md): A flag that indicates whether the app is hidden (`NSNumber`).
- [NSAccessibilityHorizontalScrollBarAttribute](attribute/horizontalscrollbar.md): The element that represents a scroll view’s horizontal scroll bar (`id`).
- [NSAccessibilityHorizontalUnitDescriptionAttribute](attribute/horizontalunitdescription.md): The description of the layout view’s horizontal units (`NSString`).
- [NSAccessibilityHorizontalUnitsAttribute](attribute/horizontalunits.md): Deprecated. The units that the layout view uses for horizontal values (`NSString`).
- [NSAccessibilityIdentifierAttribute](attribute/identifier.md): The identity of the element (`NSString`).
- [NSAccessibilityIncrementButtonAttribute](attribute/incrementbutton.md): The element that represents a stepper’s increment button (`id`).
- [NSAccessibilityIndexAttribute](attribute/index.md): The index of the row or column represented by the element (`NSValue`).
- [NSAccessibilityInsertionPointLineNumberAttribute](attribute/insertionpointlinenumber.md): Deprecated. The line number containing the insertion point (`NSNumber`).
- [NSAccessibilityLabelUIElementsAttribute](attribute/labeluielements.md): The elements that represent the slider’s labels (`NSArray`).
- [NSAccessibilityLabelValueAttribute](attribute/labelvalue.md): The value of the label represented by this element (`NSNumber`).
- [NSAccessibilityLanguageAttribute](attribute/languageattribute.md)
- [NSAccessibilityLinkedUIElementsAttribute](attribute/linkeduielements.md): Deprecated. The elements with which this element is related (`NSArray`).
- [NSAccessibilityMainAttribute](attribute/main.md): A flag that indicates whether the window is the main window (`NSNumber`).
- [NSAccessibilityMainWindowAttribute](attribute/mainwindow.md): The app’s main window (`id`).
- [NSAccessibilityMarkerGroupUIElementAttribute](attribute/markergroupuielement.md): Deprecated. A marker group user interface element (`id`).
- [NSAccessibilityMarkerTypeAttribute](attribute/markertype.md): The type of the marker (`NSString`).
- [NSAccessibilityMarkerTypeDescriptionAttribute](attribute/markertypedescription.md): The description of the marker type (`NSString`).
- [NSAccessibilityMarkerUIElementsAttribute](attribute/markeruielements.md): An array of marker user interface elements (`NSArray`)
- [NSAccessibilityMarkerValuesAttribute](attribute/markervalues.md): The marker values (`NSArray` of `NSNumber`).
- [NSAccessibilityMatteContentUIElementAttribute](attribute/mattecontentuielement.md): Deprecated. The element that is clipped by the matte (`id`).
- [NSAccessibilityMatteHoleAttribute](attribute/mattehole.md): Deprecated. The bounds of the matte hole, in screen coordinates in points (`NSValue` containing an `NSRect`).
- [NSAccessibilityMaxValueAttribute](attribute/maxvalue.md): The element’s maximum value (`id`).
- [NSAccessibilityMenuBarAttribute](attribute/menubar.md): The app’s menu bar (`id`).
- [NSAccessibilityMinValueAttribute](attribute/minvalue.md): The element’s minimum value (`id`).
- [NSAccessibilityMinimizeButtonAttribute](attribute/minimizebutton.md): The element that represents the minimize button (`id`).
- [NSAccessibilityMinimizedAttribute](attribute/minimized.md): A flag that indicates whether the window is minimized (`NSNumber`).
- [NSAccessibilityModalAttribute](attribute/modal.md): A flag that indicates whether the window represented by this element is modal (`NSNumber`).
- [NSAccessibilityNextContentsAttribute](attribute/nextcontents.md): The elements representing the contents that follow the current divider element, such as a subview adjacent to a split view’s splitter element (`NSArray`).
- [NSAccessibilityNumberOfCharactersAttribute](attribute/numberofcharacters.md): The number of characters in the text (`NSNumber`).
- [NSAccessibilityOrderedByRowAttribute](attribute/orderedbyrow.md): A flag that indicates whether the grid is in row major or column major order.
- [NSAccessibilityOrientationAttribute](attribute/orientation.md): The element’s orientation.
- [NSAccessibilityOverflowButtonAttribute](attribute/overflowbutton.md): The element that represents a toolbar’s overflow button (`id`).
- [NSAccessibilityParentAttribute](attribute/parent.md): The element’s parent element in the accessibility hierarchy (`id`).
- [NSAccessibilityPathAttribute](attribute/pathattribute.md)
- [NSAccessibilityPlaceholderValueAttribute](attribute/placeholdervalue.md): The placeholder value for a control, such as a text field (`NSString`).
- [NSAccessibilityPositionAttribute](attribute/position.md): The position in points of the element’s lower-left corner in screen-relative coordinates (`NSValue`).
- [NSAccessibilityPreviousContentsAttribute](attribute/previouscontents.md): The elements representing the contents that precede the current divider element, such as a subview adjacent to a split view’s splitter bar element (`NSArray`).
- [NSAccessibilityProxyAttribute](attribute/proxy.md): The element that represents the window’s proxy icon (`id`).
- [NSAccessibilityRequiredAttribute](attribute/required.md)
- [NSAccessibilityRoleAttribute](attribute/role.md): The element’s type, such as `NSAccessibilityRadioButtonRole` (`NSString`). See Roles for a list of available roles.
- [NSAccessibilityRoleDescriptionAttribute](attribute/roledescription.md): A localized, human-intelligible description of the element’s role, such as `radio button` (`NSString`).
- [NSAccessibilityRowCountAttribute](attribute/rowcount.md): The number of rows in the grid (`NSNumber` as `intValue`).
- [NSAccessibilityRowHeaderUIElementsAttribute](attribute/rowheaderuielements.md): The table’s row headers (`NSArray`).
- [NSAccessibilityRowIndexRangeAttribute](attribute/rowindexrange.md): Deprecated. The row index range of the cell (an `NSValue` instance that contains the row’s starting index and index span in the table).
- [NSAccessibilityRowsAttribute](attribute/rows.md): The table’s rows (`NSArray`).
- [NSAccessibilitySearchButtonAttribute](attribute/searchbutton.md): The element that represents the search button in a search field (`id`).
- [NSAccessibilitySearchMenuAttribute](attribute/searchmenu.md): The element that represents the menu in a search field (`id`).
- [NSAccessibilitySelectedAttribute](attribute/selected.md): A flag that indicates whether the element is selected (`NSNumber`).
- [NSAccessibilitySelectedCellsAttribute](attribute/selectedcells.md): Deprecated. The table’s selected cells (`NSArray`). This attribute is required for cell-based tables.
- [NSAccessibilitySelectedChildrenAttribute](attribute/selectedchildren.md): The currently selected children of the element (`NSArray`).
- [NSAccessibilitySelectedColumnsAttribute](attribute/selectedcolumns.md): The table’s selected columns (`NSArray`).
- [NSAccessibilitySelectedRowsAttribute](attribute/selectedrows.md): The table’s selected rows (`NSArray`).
- [NSAccessibilitySelectedTextAttribute](attribute/selectedtext.md): The currently selected text (`NSString`).
- [NSAccessibilitySelectedTextRangeAttribute](attribute/selectedtextrange.md): The range of selected text (`NSValue`).
- [NSAccessibilitySelectedTextRangesAttribute](attribute/selectedtextranges.md): An array of `NSValue` (`rangeValue`) ranges of selected text (`NSArray`).
- [NSAccessibilityServesAsTitleForUIElementsAttribute](attribute/servesastitleforuielements.md): The elements for which this element serves as the title (`NSArray`).
- [NSAccessibilitySharedCharacterRangeAttribute](attribute/sharedcharacterrange.md): The (`rangeValue`) part of shared text in this view (`NSValue`).
- [NSAccessibilitySharedFocusElementsAttribute](attribute/sharedfocuselements.md)
- [NSAccessibilitySharedTextUIElementsAttribute](attribute/sharedtextuielements.md): The elements with which the text of this element is shared (`NSArray`).
- [NSAccessibilityShownMenuAttribute](attribute/shownmenu.md): The menu currently being displayed (`id`).
- [NSAccessibilitySizeAttribute](attribute/size.md): The element’s size in points (`NSValue`).
- [NSAccessibilitySortDirectionAttribute](attribute/sortdirection.md): The column’s sort direction (`NSString`).
- [NSAccessibilitySplittersAttribute](attribute/splitters.md): The views and splitter bar in a split view (`NSArray`).
- [NSAccessibilitySubroleAttribute](attribute/subrole.md): The element’s subrole, such as `NSAccessibilityTableRowSubrole` (`NSString`). See Subroles for a list of available subroles.
- [NSAccessibilityTabsAttribute](attribute/tabs.md): The tab elements in a tab view (`NSArray`).
- [NSAccessibilityTextInputMarkedRangeAttribute](attribute/textinputmarkedrangeattribute.md)
- [NSAccessibilityTitleAttribute](attribute/title.md): The title of the element, such as a button’s visible text (`NSString`).
- [NSAccessibilityTitleUIElementAttribute](attribute/titleuielement.md): An element that represents another element’s static text title (`id`).
- [NSAccessibilityToolbarButtonAttribute](attribute/toolbarbutton.md): The element that represents the toolbar button (`id`).
- [NSAccessibilityTopLevelUIElementAttribute](attribute/topleveluielement.md): The top-level element that contains this element (`id`).
- [NSAccessibilityUnitDescriptionAttribute](attribute/unitdescription.md): The description of ruler units (`NSString`).
- [NSAccessibilityUnitsAttribute](attribute/units.md): The ruler units (`NSString`).
- [NSAccessibilityURLAttribute](attribute/url.md): The URL associated with the element (`NSURL`).
- [NSAccessibilityValueAttribute](attribute/value.md): The element’s value (`id`).
- [NSAccessibilityValueDescriptionAttribute](attribute/valuedescription.md): The description of the element’s value (`NSString`).
- [NSAccessibilityVerticalScrollBarAttribute](attribute/verticalscrollbar.md): The element that represents the vertical scroll bar in a scroll view (`id`).
- [NSAccessibilityVerticalUnitDescriptionAttribute](attribute/verticalunitdescription.md): The description of the layout view’s vertical units (`NSString`).
- [NSAccessibilityVerticalUnitsAttribute](attribute/verticalunits.md): The units that the layout view uses for vertical values (`NSString`).
- [NSAccessibilityVisibleCellsAttribute](attribute/visiblecells.md): The table’s visible cells (`NSArray`). This attribute is required for cell-based tables.
- [NSAccessibilityVisibleCharacterRangeAttribute](attribute/visiblecharacterrange.md): The range of visible text (`NSValue`).
- [NSAccessibilityVisibleChildrenAttribute](attribute/visiblechildren.md): The element’s child elements that are visible (`NSArray`).
- [NSAccessibilityVisibleColumnsAttribute](attribute/visiblecolumns.md): The table’s visible columns (`NSArray`).
- [NSAccessibilityVisibleRowsAttribute](attribute/visiblerows.md): The table’s visible rows (`NSArray`).
- [NSAccessibilityVisitedAttribute](attribute/visitedattribute.md)
- [NSAccessibilityWarningValueAttribute](attribute/warningvalue.md): The warning value in a level indicator (typically, `NSNumber`).
- [NSAccessibilityWindowAttribute](attribute/window.md): The window containing the current element (`id`).
- [NSAccessibilityWindowsAttribute](attribute/windows.md): The app’s windows (`NSArray`).
- [NSAccessibilityZoomButtonAttribute](attribute/zoombutton.md): The element that represents the zoom button (`id`).

## See Also

### Accessibility Types

- [NSAccessibilityActionName](action.md): Constants that describe types of actions.
- [NSAccessibilityAnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAnnotationPosition](../nsaccessibilityannotationposition.md): Constants that specify the position where the annotation applies.
- [NSAccessibilityFontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityOrientation](../nsaccessibilityorientation.md): Values that indicate the orientation of accessibility elements, such as scroll bars and split views.
- [NSAccessibilityOrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibilityParameterizedAttributeName](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibilityRole](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityRulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySubrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.
