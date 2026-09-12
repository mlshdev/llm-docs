> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey)

# NSAccessibility.NotificationUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The key in the user info dictionary for a notification.

## Declaration

```swift
struct NotificationUserInfoKey
```

## Topics

### Constants

- [announcement](notificationuserinfokey/announcement.md): The announcement as a localized string.
- [uiElements](notificationuserinfokey/uielements.md): An array of elements for the notification.
- [priority](notificationuserinfokey/priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.
- [NSAccessibilityPriorityLevel](../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

### Initializers

- [init(rawValue:)](notificationuserinfokey/init%28rawvalue_%29.md): Returns a new notification object with a specified name and object.

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
- [NSAccessibility.Notification](notification.md): The name of the notification.
- [NSAccessibility.OrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.ParameterizedAttribute](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibility.Role](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibility.RulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.

# NSAccessibilityNotificationUserInfoKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The key in the user info dictionary for a notification.

## Declaration

```objectivec
typedef NSString * NSAccessibilityNotificationUserInfoKey;
```

## Topics

### Constants

- [NSAccessibilityAnnouncementKey](notificationuserinfokey/announcement.md): The announcement as a localized string.
- [NSAccessibilityUIElementsKey](notificationuserinfokey/uielements.md): An array of elements for the notification.
- [NSAccessibilityPriorityKey](notificationuserinfokey/priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.
- [NSAccessibilityPriorityLevel](../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

## See Also

### Using Accessibility Types

- [NSAccessibilityActionName](action.md): Constants that describe types of actions.
- [NSAccessibilityAnnotationAttributeKey](annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibilityAttributeName](attribute.md): Constants that describe attributes.
- [NSAccessibilityFontAttributeKey](fontattributekey.md): Keys for font attributes.
- [NSAccessibilityNotificationName](notification.md): The name of the notification.
- [NSAccessibilityOrientationValue](orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibilityParameterizedAttributeName](parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibilityRole](role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibilityRulerMarkerTypeValue](rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibilityRulerUnitValue](rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibilitySortDirectionValue](sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibilitySubrole](subrole.md): Values that describe specialized object subtypes that accessibility elements represent.
