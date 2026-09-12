> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility](https://developer.apple.com/documentation/appkit/nsaccessibility)

# NSAccessibility (Swift)

**Framework:** AppKit

A legacy, informal protocol that Apple doesn’t recommend for active use.

<a id="overview"></a>

## Overview

The `NSAccessibility` informal protocol defines an old, key-based API. For the most part, Apple doesn’t recommend using this API. Use the method-based API in [NSAccessibilityProtocol](nsaccessibilityprotocol.md) instead. However, there are a few methods and properties that are still relevant. You can combine the [accessibilityHitTest(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityhittest%28_:%29) method, and the [accessibilityFocusedUIElement](nsaccessibilitylayoutarea/accessibilityfocuseduielement.md) and [accessibilityNotifiesWhenDestroyed](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitynotifieswhendestroyed) properties with the new [NSAccessibilityProtocol](nsaccessibilityprotocol.md) protocol.

## Topics

### Available Methods and Properties

- [accessibilityFocusedUIElement](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityfocuseduielement)
- [accessibilityHitTest(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityhittest%28_:%29)
- [accessibilityNotifiesWhenDestroyed](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitynotifieswhendestroyed): A Boolean value that indicates whether a custom accessibility object sends a notification when its corresponding UI element is destroyed.

### Constants

- [Standard Attributes](standard-attributes.md): Standard attributes that can be adopted by any accessibility object.
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
- [Screen Matte Attributes](screen-matte-attributes.md): Attributes that are specific to screen mattes.
- [Ruler View Attributes](ruler-view-attributes.md): Attributes that are specific to ruler views.
- [Linkage Elements](linkage-elements.md): Constants that specify links between accessibility elements.
- [Miscellaneous Attributes](miscellaneous-attributes.md): Miscellaneous attributes that can apply to various types of elements.
- [Column Sort Direction](column-sort-direction.md): Values that indicate the sort direction of a column.
- [Measurement Unit Attributes](measurement-unit-attributes.md): Values that indicate the unit values of a ruler or layout area.
- [Orientations](orientations.md): Values that indicate the orientation of elements, such as scroll bars and split views.
- [Ruler Marker Type Values](ruler-marker-type-values.md): Values that indicate the marker type of an element.
- [Actions](actions.md): Standard actions that accessibility objects can perform.

### Deprecated

- [accessibilityActionDescription(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityactiondescription%28_:%29): Deprecated. Returns a localized description of the specified action.
- [accessibilityActionNames()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityactionnames%28%29): Deprecated. Returns an array of action names supported by the accessibility element.
- [accessibilityArrayAttributeCount(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityarrayattributecount%28_:%29): Deprecated. Returns the count of the specified accessibility array attribute.
- [accessibilityArrayAttributeValues(\_:index:maxCount:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityarrayattributevalues%28_:index:maxcount:%29): Deprecated. Returns a subarray of values of an accessibility array attribute.
- [accessibilityAttributeNames()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityattributenames%28%29): Deprecated. Returns an array of attribute names supported by the receiver.
- [accessibilityAttributeValue(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityattributevalue%28_:%29): Deprecated. Returns the value of the specified attribute in the receiver.
- [accessibilityAttributeValue(\_:forParameter:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityattributevalue%28_:forparameter:%29): Deprecated. Returns the value of the receiver’s parameterized attribute corresponding to the specified attribute name and parameter.
- [accessibilityIndex(ofChild:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityindex%28ofchild:%29): Deprecated. Returns the index of the specified accessibility child in the parent.
- [accessibilityIsAttributeSettable(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityisattributesettable%28_:%29): Deprecated. Returns a Boolean value that indicates whether the value for the specified attribute in the receiver can be set.
- [accessibilityIsIgnored()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityisignored%28%29): Deprecated. Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.
- [accessibilityParameterizedAttributeNames()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityparameterizedattributenames%28%29): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityperformaction%28_:%29): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue(\_:forAttribute:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitysetoverridevalue%28_:forattribute:%29): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue(\_:forAttribute:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitysetvalue%28_:forattribute:%29): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.

## See Also

### Protocols

- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.

# NSAccessibility (Objective-C)

**Framework:** AppKit

A legacy, informal protocol that Apple doesn’t recommend for active use.

<a id="overview"></a>

## Overview

The `NSAccessibility` informal protocol defines an old, key-based API. For the most part, Apple doesn’t recommend using this API. Use the method-based API in [NSAccessibility](nsaccessibilityprotocol.md) instead. However, there are a few methods and properties that are still relevant. You can combine the [accessibilityHitTest:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityhittest%28_:%29) method, and the [accessibilityFocusedUIElement](nsaccessibilitylayoutarea/accessibilityfocuseduielement.md) and [accessibilityNotifiesWhenDestroyed](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitynotifieswhendestroyed) properties with the new [NSAccessibility](nsaccessibilityprotocol.md) protocol.

## Topics

### Available Methods and Properties

- [accessibilityFocusedUIElement](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityfocuseduielement)
- [accessibilityHitTest:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityhittest%28_:%29)
- [accessibilityNotifiesWhenDestroyed](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitynotifieswhendestroyed): A Boolean value that indicates whether a custom accessibility object sends a notification when its corresponding UI element is destroyed.

### Constants

- [Standard Attributes](standard-attributes.md): Standard attributes that can be adopted by any accessibility object.
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
- [Screen Matte Attributes](screen-matte-attributes.md): Attributes that are specific to screen mattes.
- [Ruler View Attributes](ruler-view-attributes.md): Attributes that are specific to ruler views.
- [Linkage Elements](linkage-elements.md): Constants that specify links between accessibility elements.
- [Miscellaneous Attributes](miscellaneous-attributes.md): Miscellaneous attributes that can apply to various types of elements.
- [Column Sort Direction](column-sort-direction.md): Values that indicate the sort direction of a column.
- [Measurement Unit Attributes](measurement-unit-attributes.md): Values that indicate the unit values of a ruler or layout area.
- [Orientations](orientations.md): Values that indicate the orientation of elements, such as scroll bars and split views.
- [Ruler Marker Type Values](ruler-marker-type-values.md): Values that indicate the marker type of an element.
- [Actions](actions.md): Standard actions that accessibility objects can perform.

### Deprecated

- [accessibilityActionDescription:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityactiondescription%28_:%29): Deprecated. Returns a localized description of the specified action.
- [accessibilityActionNames](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityactionnames%28%29): Deprecated. Returns an array of action names supported by the accessibility element.
- [accessibilityArrayAttributeCount:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityarrayattributecount%28_:%29): Deprecated. Returns the count of the specified accessibility array attribute.
- [accessibilityArrayAttributeValues:index:maxCount:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityarrayattributevalues%28_:index:maxcount:%29): Deprecated. Returns a subarray of values of an accessibility array attribute.
- [accessibilityAttributeNames](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityattributenames%28%29): Deprecated. Returns an array of attribute names supported by the receiver.
- [accessibilityAttributeValue:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityattributevalue%28_:%29): Deprecated. Returns the value of the specified attribute in the receiver.
- [accessibilityAttributeValue:forParameter:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityattributevalue%28_:forparameter:%29): Deprecated. Returns the value of the receiver’s parameterized attribute corresponding to the specified attribute name and parameter.
- [accessibilityIndexOfChild:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityindex%28ofchild:%29): Deprecated. Returns the index of the specified accessibility child in the parent.
- [accessibilityIsAttributeSettable:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityisattributesettable%28_:%29): Deprecated. Returns a Boolean value that indicates whether the value for the specified attribute in the receiver can be set.
- [accessibilityIsIgnored](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityisignored%28%29): Deprecated. Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.
- [accessibilityParameterizedAttributeNames](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityparameterizedattributenames%28%29): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityperformaction%28_:%29): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue:forAttribute:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitysetoverridevalue%28_:forattribute:%29): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue:forAttribute:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitysetvalue%28_:forattribute:%29): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.

## See Also

### Protocols

- [NSEditor](nseditor-deprecated-symbols.md): A set of methods that controllers and UI elements can implement to manage editing.
- [NSEditorRegistration](nseditorregistration.md): A set of methods that controllers can implement to enable an editor view to inform the controller when it has uncommitted changes.
- [NSInputServiceProvider](nsinputserviceprovider.md)
- [NSInputServerMouseTracker](nsinputservermousetracker.md)
- [NSDrawerDelegate](nsdrawerdelegate.md): Deprecated. A set of methods that drawer delegates implement to open, close, and resize the drawer.
