> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/notification](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification)

# NSAccessibility.Notification (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The name of the notification.

## Declaration

```swift
struct Notification
```

## Topics

### Notification names

- [announcementRequested](notification/announcementrequested.md): This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.
- [applicationActivated](notification/applicationactivated.md): This notification is posted after the app has been activated. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [applicationDeactivated](notification/applicationdeactivated.md): This notification is posted after the app has been deactivated. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [applicationHidden](notification/applicationhidden.md): This notification is posted after the app is hidden. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [applicationShown](notification/applicationshown.md): This notification is posted after the app is shown. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [created](notification/created.md): This notification is posted after an accessibility element is created. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [drawerCreated](notification/drawercreated.md): This notification is posted after a drawer appears. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [focusedUIElementChanged](notification/focuseduielementchanged.md): This notification is posted after an accessibility element gains focus. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [focusedWindowChanged](notification/focusedwindowchanged.md): This notification is posted after the key window changes. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [helpTagCreated](notification/helptagcreated.md): This notification is posted after a help tag appears. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [layoutChanged](notification/layoutchanged.md): This notification is posted after the UI changes in a way that requires the attention of an accessibility client. This notification should be accompanied by a `userInfo` dictionary with the key [uiElements](notificationuserinfokey/uielements.md) and an array containing the UI elements that have been added or changed. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [mainWindowChanged](notification/mainwindowchanged.md): This notification is posted after the main window changes. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [moved](notification/moved.md): This notification is posted after an accessibility element moves. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [resized](notification/resized.md): This notification is posted after an accessibility element’s size changes. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [rowCollapsed](notification/rowcollapsed.md): This notification is posted after a row collapses. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [rowCountChanged](notification/rowcountchanged.md): This notification is posted after a row is added or deleted. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [rowExpanded](notification/rowexpanded.md): This notification is posted after a row expands. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [selectedCellsChanged](notification/selectedcellschanged.md): This notification is posted after one or more cells in a cell-based table are selected or deselected. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [selectedChildrenChanged](notification/selectedchildrenchanged.md): This notification is posted after one or more child elements are selected or deselected. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [selectedChildrenMoved](notification/selectedchildrenmoved.md): This notification is posted after the selected items in a layout area move. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [selectedColumnsChanged](notification/selectedcolumnschanged.md): This notification is posted after one or more columns are selected or deselected. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [selectedRowsChanged](notification/selectedrowschanged.md): This notification is posted after one or more rows are selected or deselected. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [selectedTextChanged](notification/selectedtextchanged.md): This notification is posted after text is selected or deselected. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [sheetCreated](notification/sheetcreated.md): This notification is posted after a sheet appears. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [titleChanged](notification/titlechanged.md): This notification is posted after an accessibility element’s title changes. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [uiElementDestroyed](notification/uielementdestroyed.md): This notification is posted after an accessibility element is destroyed. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [unitsChanged](notification/unitschanged.md): This notification is posted after the units in a layout area change. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [valueChanged](notification/valuechanged.md): This notification is posted after an accessibility element’s value changes. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [windowCreated](notification/windowcreated.md): This notification is posted after a new window appears. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [windowDeminiaturized](notification/windowdeminiaturized.md): This notification is posted after a window is restored to full size from the Dock. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [windowMiniaturized](notification/windowminiaturized.md): This notification is posted after a window is put in the Dock. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [windowMoved](notification/windowmoved.md): This notification is posted after a window moves. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [windowResized](notification/windowresized.md): This notification is posted after a window’s size changes. Post this notification using the [post(element:notification:)](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.

### Accessibility notification names

- [NSAccessibilityAutocorrectionOccurred](notification/nsaccessibilityautocorrectionoccurred.md)
- [NSAccessibilityDraggingDestinationDragAccepted](notification/nsaccessibilitydraggingdestinationdragaccepted.md)
- [NSAccessibilityDraggingDestinationDragNotAccepted](notification/nsaccessibilitydraggingdestinationdragnotaccepted.md)
- [NSAccessibilityDraggingDestinationDropAllowed](notification/nsaccessibilitydraggingdestinationdropallowed.md)
- [NSAccessibilityDraggingDestinationDropNotAllowed](notification/nsaccessibilitydraggingdestinationdropnotallowed.md)
- [NSAccessibilityDraggingSourceDragBegan](notification/nsaccessibilitydraggingsourcedragbegan.md)
- [NSAccessibilityDraggingSourceDragEnded](notification/nsaccessibilitydraggingsourcedragended.md)
- [NSAccessibilityTextInputMarkingSessionBegan](notification/nsaccessibilitytextinputmarkingsessionbegan.md)
- [NSAccessibilityTextInputMarkingSessionEnded](notification/nsaccessibilitytextinputmarkingsessionended.md)

### Initializers

- [init(rawValue:)](notification/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using Accessibility Types

- [NSAccessibility.Action](action.md): Constants that describe types of actions.
- [NSAccessibility.AnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibility.Attribute](attribute.md): Constants that describe attributes.
- [NSAccessibility.FontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibility.NotificationUserInfoKey](notificationuserinfokey.md): The key in the user info dictionary for a notification.
- [NSAccessibility.OrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.ParameterizedAttribute](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibility.Role](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibility.RulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.

# NSAccessibilityNotificationName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The name of the notification.

## Declaration

```objectivec
typedef NSString * NSAccessibilityNotificationName;
```

## Topics

### Notification names

- [NSAccessibilityAnnouncementRequestedNotification](notification/announcementrequested.md): This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.
- [NSAccessibilityApplicationActivatedNotification](notification/applicationactivated.md): This notification is posted after the app has been activated. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationDeactivatedNotification](notification/applicationdeactivated.md): This notification is posted after the app has been deactivated. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationHiddenNotification](notification/applicationhidden.md): This notification is posted after the app is hidden. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationShownNotification](notification/applicationshown.md): This notification is posted after the app is shown. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityCreatedNotification](notification/created.md): This notification is posted after an accessibility element is created. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityDrawerCreatedNotification](notification/drawercreated.md): This notification is posted after a drawer appears. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityFocusedUIElementChangedNotification](notification/focuseduielementchanged.md): This notification is posted after an accessibility element gains focus. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityFocusedWindowChangedNotification](notification/focusedwindowchanged.md): This notification is posted after the key window changes. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityHelpTagCreatedNotification](notification/helptagcreated.md): This notification is posted after a help tag appears. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityLayoutChangedNotification](notification/layoutchanged.md): This notification is posted after the UI changes in a way that requires the attention of an accessibility client. This notification should be accompanied by a `userInfo` dictionary with the key [NSAccessibilityUIElementsKey](notificationuserinfokey/uielements.md) and an array containing the UI elements that have been added or changed. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityMainWindowChangedNotification](notification/mainwindowchanged.md): This notification is posted after the main window changes. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityMovedNotification](notification/moved.md): This notification is posted after an accessibility element moves. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityResizedNotification](notification/resized.md): This notification is posted after an accessibility element’s size changes. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowCollapsedNotification](notification/rowcollapsed.md): This notification is posted after a row collapses. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowCountChangedNotification](notification/rowcountchanged.md): This notification is posted after a row is added or deleted. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowExpandedNotification](notification/rowexpanded.md): This notification is posted after a row expands. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedCellsChangedNotification](notification/selectedcellschanged.md): This notification is posted after one or more cells in a cell-based table are selected or deselected. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedChildrenChangedNotification](notification/selectedchildrenchanged.md): This notification is posted after one or more child elements are selected or deselected. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedChildrenMovedNotification](notification/selectedchildrenmoved.md): This notification is posted after the selected items in a layout area move. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedColumnsChangedNotification](notification/selectedcolumnschanged.md): This notification is posted after one or more columns are selected or deselected. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedRowsChangedNotification](notification/selectedrowschanged.md): This notification is posted after one or more rows are selected or deselected. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySelectedTextChangedNotification](notification/selectedtextchanged.md): This notification is posted after text is selected or deselected. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilitySheetCreatedNotification](notification/sheetcreated.md): This notification is posted after a sheet appears. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityTitleChangedNotification](notification/titlechanged.md): This notification is posted after an accessibility element’s title changes. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityUIElementDestroyedNotification](notification/uielementdestroyed.md): This notification is posted after an accessibility element is destroyed. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityUnitsChangedNotification](notification/unitschanged.md): This notification is posted after the units in a layout area change. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityValueChangedNotification](notification/valuechanged.md): This notification is posted after an accessibility element’s value changes. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowCreatedNotification](notification/windowcreated.md): This notification is posted after a new window appears. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowDeminiaturizedNotification](notification/windowdeminiaturized.md): This notification is posted after a window is restored to full size from the Dock. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowMiniaturizedNotification](notification/windowminiaturized.md): This notification is posted after a window is put in the Dock. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowMovedNotification](notification/windowmoved.md): This notification is posted after a window moves. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityWindowResizedNotification](notification/windowresized.md): This notification is posted after a window’s size changes. Post this notification using the [NSAccessibilityPostNotification](post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.

### Accessibility notification names

- [NSAccessibilityAutocorrectionOccurredNotification](notification/nsaccessibilityautocorrectionoccurred.md)
- [NSAccessibilityDraggingDestinationDragAcceptedNotification](notification/nsaccessibilitydraggingdestinationdragaccepted.md)
- [NSAccessibilityDraggingDestinationDragNotAcceptedNotification](notification/nsaccessibilitydraggingdestinationdragnotaccepted.md)
- [NSAccessibilityDraggingDestinationDropAllowedNotification](notification/nsaccessibilitydraggingdestinationdropallowed.md)
- [NSAccessibilityDraggingDestinationDropNotAllowedNotification](notification/nsaccessibilitydraggingdestinationdropnotallowed.md)
- [NSAccessibilityDraggingSourceDragBeganNotification](notification/nsaccessibilitydraggingsourcedragbegan.md)
- [NSAccessibilityDraggingSourceDragEndedNotification](notification/nsaccessibilitydraggingsourcedragended.md)
- [NSAccessibilityTextInputMarkingSessionBeganNotification](notification/nsaccessibilitytextinputmarkingsessionbegan.md)
- [NSAccessibilityTextInputMarkingSessionEndedNotification](notification/nsaccessibilitytextinputmarkingsessionended.md)

## See Also

### Using Accessibility Types

- [NSAccessibilityActionName](action.md): Constants that describe types of actions.
- [NSAccessibilityAnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAttributeName](attribute.md): Constants that describe attributes.
- [NSAccessibilityFontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityNotificationUserInfoKey](notificationuserinfokey.md): The key in the user info dictionary for a notification.
- [NSAccessibilityOrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibilityParameterizedAttributeName](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibilityRole](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySubrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
