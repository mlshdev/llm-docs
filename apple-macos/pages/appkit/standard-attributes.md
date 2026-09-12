> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/standard-attributes](https://developer.apple.com/documentation/appkit/standard-attributes)

# Standard Attributes (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Standard attributes that can be adopted by any accessibility object.

## Topics

### Constants

- [children](nsaccessibility-swift.struct/attribute/children.md): Deprecated. The element’s child elements in the accessibility hierarchy (`NSArray`).
- [contents](nsaccessibility-swift.struct/attribute/contents.md): Elements that represent the contents in the current element, such as the document view of a scroll view (`NSArray`).
- [description](nsaccessibility-swift.struct/attribute/description.md): The purpose of the element, not including the role (`NSString`).
- [enabled](nsaccessibility-swift.struct/attribute/enabled.md): A flag that indicates the enabled state of the element (`NSNumber`).
- [focused](nsaccessibility-swift.struct/attribute/focused.md): A flag that indicates the presence of keyboard focus (`NSNumber`).
- [help](nsaccessibility-swift.struct/attribute/help.md): The help text for the element (`NSString`).
- [maxValue](nsaccessibility-swift.struct/attribute/maxvalue.md): The element’s maximum value (`id`).
- [minValue](nsaccessibility-swift.struct/attribute/minvalue.md): The element’s minimum value (`id`).
- [parent](nsaccessibility-swift.struct/attribute/parent.md): The element’s parent element in the accessibility hierarchy (`id`).
- [position](nsaccessibility-swift.struct/attribute/position.md): The position in points of the element’s lower-left corner in screen-relative coordinates (`NSValue`).
- [role](nsaccessibility-swift.struct/attribute/role.md): The element’s type, such as `NSAccessibilityRadioButtonRole` (`NSString`). See Roles for a list of available roles.
- [roleDescription](nsaccessibility-swift.struct/attribute/roledescription.md): A localized, human-intelligible description of the element’s role, such as `radio button` (`NSString`).
- [selectedChildren](nsaccessibility-swift.struct/attribute/selectedchildren.md): The currently selected children of the element (`NSArray`).
- [shownMenu](nsaccessibility-swift.struct/attribute/shownmenu.md): The menu currently being displayed (`id`).
- [size](nsaccessibility-swift.struct/attribute/size.md): The element’s size in points (`NSValue`).
- [subrole](nsaccessibility-swift.struct/attribute/subrole.md): The element’s subrole, such as `NSAccessibilityTableRowSubrole` (`NSString`). See Subroles for a list of available subroles.
- [title](nsaccessibility-swift.struct/attribute/title.md): The title of the element, such as a button’s visible text (`NSString`).
- [topLevelUIElement](nsaccessibility-swift.struct/attribute/topleveluielement.md): The top-level element that contains this element (`id`).
- [value](nsaccessibility-swift.struct/attribute/value.md): The element’s value (`id`).
- [valueDescription](nsaccessibility-swift.struct/attribute/valuedescription.md): The description of the element’s value (`NSString`).
- [visibleChildren](nsaccessibility-swift.struct/attribute/visiblechildren.md): The element’s child elements that are visible (`NSArray`).
- [window](nsaccessibility-swift.struct/attribute/window.md): The window containing the current element (`id`).

## See Also

### Constants

- [Text-Specific Attributes](text-specific-attributes.md): Attributes that are specific to text.
- [Text-Specific Parameterized Attributes](text-specific-parameterized-attributes.md): Parameterized attributes specific to text.
- [Text Attributed-String Attributes and Constants](text-attributed-string-attributes-and-constants.md): Attributes and key constants used with attributed strings.
- [Window-Specific Attributes](window-specific-attributes.md): Attributes specific to windows.
- [App-Specific Attributes](app-specific-attributes.md): Attributes that are specific to the app object.
- [Grid View Attributes](grid-view-attributes.md): Attributes that are used with grid views, such as thumbnails and media browsers that present a grid of items. The children of a grid are ordered.
- [Table View and Outline View Attributes](table-view-and-outline-view-attributes.md): Attributes that are specific to tables and outlines.
- [Outline View Attributes](outline-view-attributes.md): Attributes that are used in outline views.
- [Cell-Based Table Attributes](cell-based-table-attributes.md): Attributes that are specific to cell-based tables.
- [Cell-Based Table Parameterized Attributes](cell-based-table-parameterized-attributes.md): Parameterized attributes specific to cell-based tables.
- [Cell Attributes](cell-attributes.md): Attributes that are specific to individual table cells.
- [Layout Area Attributes](layout-area-attributes.md): Attributes that are specific to layout areas.
- [Layout Area Parameterized Attributes](layout-area-parameterized-attributes.md): Parameterized attributes that are specific to layout areas.
- [Layout Item Attributes](layout-item-attributes.md): Attributes that are specific to the items in a layout area.
- [Slider Attributes](slider-attributes.md): Attributes that are specific to sliders.

# Standard Attributes (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Standard attributes that can be adopted by any accessibility object.

## Topics

### Constants

- [NSAccessibilityChildrenAttribute](nsaccessibility-swift.struct/attribute/children.md): Deprecated. The element’s child elements in the accessibility hierarchy (`NSArray`).
- [NSAccessibilityContentsAttribute](nsaccessibility-swift.struct/attribute/contents.md): Elements that represent the contents in the current element, such as the document view of a scroll view (`NSArray`).
- [NSAccessibilityDescriptionAttribute](nsaccessibility-swift.struct/attribute/description.md): The purpose of the element, not including the role (`NSString`).
- [NSAccessibilityEnabledAttribute](nsaccessibility-swift.struct/attribute/enabled.md): A flag that indicates the enabled state of the element (`NSNumber`).
- [NSAccessibilityFocusedAttribute](nsaccessibility-swift.struct/attribute/focused.md): A flag that indicates the presence of keyboard focus (`NSNumber`).
- [NSAccessibilityHelpAttribute](nsaccessibility-swift.struct/attribute/help.md): The help text for the element (`NSString`).
- [NSAccessibilityMaxValueAttribute](nsaccessibility-swift.struct/attribute/maxvalue.md): The element’s maximum value (`id`).
- [NSAccessibilityMinValueAttribute](nsaccessibility-swift.struct/attribute/minvalue.md): The element’s minimum value (`id`).
- [NSAccessibilityParentAttribute](nsaccessibility-swift.struct/attribute/parent.md): The element’s parent element in the accessibility hierarchy (`id`).
- [NSAccessibilityPositionAttribute](nsaccessibility-swift.struct/attribute/position.md): The position in points of the element’s lower-left corner in screen-relative coordinates (`NSValue`).
- [NSAccessibilityRoleAttribute](nsaccessibility-swift.struct/attribute/role.md): The element’s type, such as `NSAccessibilityRadioButtonRole` (`NSString`). See Roles for a list of available roles.
- [NSAccessibilityRoleDescriptionAttribute](nsaccessibility-swift.struct/attribute/roledescription.md): A localized, human-intelligible description of the element’s role, such as `radio button` (`NSString`).
- [NSAccessibilitySelectedChildrenAttribute](nsaccessibility-swift.struct/attribute/selectedchildren.md): The currently selected children of the element (`NSArray`).
- [NSAccessibilityShownMenuAttribute](nsaccessibility-swift.struct/attribute/shownmenu.md): The menu currently being displayed (`id`).
- [NSAccessibilitySizeAttribute](nsaccessibility-swift.struct/attribute/size.md): The element’s size in points (`NSValue`).
- [NSAccessibilitySubroleAttribute](nsaccessibility-swift.struct/attribute/subrole.md): The element’s subrole, such as `NSAccessibilityTableRowSubrole` (`NSString`). See Subroles for a list of available subroles.
- [NSAccessibilityTitleAttribute](nsaccessibility-swift.struct/attribute/title.md): The title of the element, such as a button’s visible text (`NSString`).
- [NSAccessibilityTopLevelUIElementAttribute](nsaccessibility-swift.struct/attribute/topleveluielement.md): The top-level element that contains this element (`id`).
- [NSAccessibilityValueAttribute](nsaccessibility-swift.struct/attribute/value.md): The element’s value (`id`).
- [NSAccessibilityValueDescriptionAttribute](nsaccessibility-swift.struct/attribute/valuedescription.md): The description of the element’s value (`NSString`).
- [NSAccessibilityVisibleChildrenAttribute](nsaccessibility-swift.struct/attribute/visiblechildren.md): The element’s child elements that are visible (`NSArray`).
- [NSAccessibilityWindowAttribute](nsaccessibility-swift.struct/attribute/window.md): The window containing the current element (`id`).

## See Also

### Constants

- [Text-Specific Attributes](text-specific-attributes.md): Attributes that are specific to text.
- [Text-Specific Parameterized Attributes](text-specific-parameterized-attributes.md): Parameterized attributes specific to text.
- [Text Attributed-String Attributes and Constants](text-attributed-string-attributes-and-constants.md): Attributes and key constants used with attributed strings.
- [Window-Specific Attributes](window-specific-attributes.md): Attributes specific to windows.
- [App-Specific Attributes](app-specific-attributes.md): Attributes that are specific to the app object.
- [Grid View Attributes](grid-view-attributes.md): Attributes that are used with grid views, such as thumbnails and media browsers that present a grid of items. The children of a grid are ordered.
- [Table View and Outline View Attributes](table-view-and-outline-view-attributes.md): Attributes that are specific to tables and outlines.
- [Outline View Attributes](outline-view-attributes.md): Attributes that are used in outline views.
- [Cell-Based Table Attributes](cell-based-table-attributes.md): Attributes that are specific to cell-based tables.
- [Cell-Based Table Parameterized Attributes](cell-based-table-parameterized-attributes.md): Parameterized attributes specific to cell-based tables.
- [Cell Attributes](cell-attributes.md): Attributes that are specific to individual table cells.
- [Layout Area Attributes](layout-area-attributes.md): Attributes that are specific to layout areas.
- [Layout Area Parameterized Attributes](layout-area-parameterized-attributes.md): Parameterized attributes that are specific to layout areas.
- [Layout Item Attributes](layout-item-attributes.md): Attributes that are specific to the items in a layout area.
- [Slider Attributes](slider-attributes.md): Attributes that are specific to sliders.
