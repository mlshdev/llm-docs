> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/subrole](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/subrole)

# NSAccessibility.Subrole (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Values that describe specialized object subtypes that accessibility elements represent.

## Declaration

```swift
struct Subrole
```

## Topics

### Subroles

- [closeButton](subrole/closebutton.md): A window’s close button subrole.
- [collectionListSubrole](subrole/collectionlistsubrole.md)
- [contentList](subrole/contentlist.md): A subrole for content that is organized in a list, but is not in a list control or table view.
- [decrementArrow](subrole/decrementarrow.md): A decrement arrow subrole (the down arrow in a scroll bar).
- [decrementPage](subrole/decrementpage.md): A decrement page subrole (the decrement area in the scroll track of a scroll bar).
- [definitionList](subrole/definitionlist.md): A subrole for a content list in a webpage.
- [descriptionList](subrole/descriptionlist.md): A description list subrole.
- [dialog](subrole/dialog.md): A dialog subrole.
- [floatingWindow](subrole/floatingwindow.md): A floating window subrole.
- [fullScreenButton](subrole/fullscreenbutton.md): A window’s full-screen button subrole.
- [incrementArrow](subrole/incrementarrow.md): An increment arrow subrole (the up arrow in a scroll bar).
- [incrementPage](subrole/incrementpage.md): An increment page subrole (the increment area in the scroll track of a scroll bar).
- [minimizeButton](subrole/minimizebutton.md): A window’s minimize button subrole.
- [outlineRow](subrole/outlinerow.md): An outline row subrole.
- [ratingIndicator](subrole/ratingindicator.md): A rating indicator subrole.
- [searchField](subrole/searchfield.md): A search field subrole.
- [sectionListSubrole](subrole/sectionlistsubrole.md)
- [secureTextField](subrole/securetextfield.md): A secure text field subrole.
- [sortButton](subrole/sortbutton.md): A sort button subrole for a table or outline view.
- [standardWindow](subrole/standardwindow.md): A standard window subrole.
- [suggestionSubrole](subrole/suggestionsubrole.md)
- [switch](subrole/switch.md): A switch subrole.
- [systemDialog](subrole/systemdialog.md): A system dialog subrole (a system-generated dialog that floats on the top layer, regardless of which app is frontmost).
- [systemFloatingWindow](subrole/systemfloatingwindow.md): A system floating window subrole (a system-generated panel).
- [tabButtonSubrole](subrole/tabbuttonsubrole.md)
- [tableRow](subrole/tablerow.md): A table row subrole.
- [textAttachment](subrole/textattachment.md): A text attachment subrole.
- [textLink](subrole/textlink.md): A text link subrole.
- [timeline](subrole/timeline.md): A timeline subrole.
- [toggle](subrole/toggle.md): A toggle subrole.
- [toolbarButton](subrole/toolbarbutton.md): A window’s toolbar button subrole.
- [unknown](subrole/unknown.md): An unknown subrole.
- [zoomButton](subrole/zoombutton.md): A window’s zoom button subrole.

### Initializers

- [init(rawValue:)](subrole/init%28rawvalue_%29.md)

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
- [NSAccessibility.Role](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibility.RulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.

# NSAccessibilitySubrole (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Values that describe specialized object subtypes that accessibility elements represent.

## Declaration

```objectivec
typedef NSString * NSAccessibilitySubrole;
```

## Topics

### Subroles

- [NSAccessibilityCloseButtonSubrole](subrole/closebutton.md): A window’s close button subrole.
- [NSAccessibilityCollectionListSubrole](subrole/collectionlistsubrole.md)
- [NSAccessibilityContentListSubrole](subrole/contentlist.md): A subrole for content that is organized in a list, but is not in a list control or table view.
- [NSAccessibilityDecrementArrowSubrole](subrole/decrementarrow.md): A decrement arrow subrole (the down arrow in a scroll bar).
- [NSAccessibilityDecrementPageSubrole](subrole/decrementpage.md): A decrement page subrole (the decrement area in the scroll track of a scroll bar).
- [NSAccessibilityDefinitionListSubrole](subrole/definitionlist.md): A subrole for a content list in a webpage.
- [NSAccessibilityDescriptionListSubrole](subrole/descriptionlist.md): A description list subrole.
- [NSAccessibilityDialogSubrole](subrole/dialog.md): A dialog subrole.
- [NSAccessibilityFloatingWindowSubrole](subrole/floatingwindow.md): A floating window subrole.
- [NSAccessibilityFullScreenButtonSubrole](subrole/fullscreenbutton.md): A window’s full-screen button subrole.
- [NSAccessibilityIncrementArrowSubrole](subrole/incrementarrow.md): An increment arrow subrole (the up arrow in a scroll bar).
- [NSAccessibilityIncrementPageSubrole](subrole/incrementpage.md): An increment page subrole (the increment area in the scroll track of a scroll bar).
- [NSAccessibilityMinimizeButtonSubrole](subrole/minimizebutton.md): A window’s minimize button subrole.
- [NSAccessibilityOutlineRowSubrole](subrole/outlinerow.md): An outline row subrole.
- [NSAccessibilityRatingIndicatorSubrole](subrole/ratingindicator.md): A rating indicator subrole.
- [NSAccessibilitySearchFieldSubrole](subrole/searchfield.md): A search field subrole.
- [NSAccessibilitySectionListSubrole](subrole/sectionlistsubrole.md)
- [NSAccessibilitySecureTextFieldSubrole](subrole/securetextfield.md): A secure text field subrole.
- [NSAccessibilitySortButtonSubrole](subrole/sortbutton.md): A sort button subrole for a table or outline view.
- [NSAccessibilityStandardWindowSubrole](subrole/standardwindow.md): A standard window subrole.
- [NSAccessibilitySuggestionSubrole](subrole/suggestionsubrole.md)
- [NSAccessibilitySwitchSubrole](subrole/switch.md): A switch subrole.
- [NSAccessibilitySystemDialogSubrole](subrole/systemdialog.md): A system dialog subrole (a system-generated dialog that floats on the top layer, regardless of which app is frontmost).
- [NSAccessibilitySystemFloatingWindowSubrole](subrole/systemfloatingwindow.md): A system floating window subrole (a system-generated panel).
- [NSAccessibilityTabButtonSubrole](subrole/tabbuttonsubrole.md)
- [NSAccessibilityTableRowSubrole](subrole/tablerow.md): A table row subrole.
- [NSAccessibilityTextAttachmentSubrole](subrole/textattachment.md): A text attachment subrole.
- [NSAccessibilityTextLinkSubrole](subrole/textlink.md): A text link subrole.
- [NSAccessibilityTimelineSubrole](subrole/timeline.md): A timeline subrole.
- [NSAccessibilityToggleSubrole](subrole/toggle.md): A toggle subrole.
- [NSAccessibilityToolbarButtonSubrole](subrole/toolbarbutton.md): A window’s toolbar button subrole.
- [NSAccessibilityUnknownSubrole](subrole/unknown.md): An unknown subrole.
- [NSAccessibilityZoomButtonSubrole](subrole/zoombutton.md): A window’s zoom button subrole.

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
- [NSAccessibilityRole](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerType](../nsaccessibilityrulermarkertype.md): Values that indicate the marker type of an accessibility element.
- [NSAccessibilityRulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
- [NSAccessibilityUnits](../nsaccessibilityunits.md): Values that indicate the unit values of a ruler or layout area.
