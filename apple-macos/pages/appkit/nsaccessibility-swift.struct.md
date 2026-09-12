> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct)

# NSAccessibility

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

A namespace for accessibility symbols for AppKit apps.

## Declaration

```swift
struct NSAccessibility
```

## Topics

### Posting Notifications

- [post(element:notification:)](nsaccessibility-swift.struct/post%28element_notification_%29.md): Sends a notification to any observing assistive apps.
- [post(element:notification:userInfo:)](nsaccessibility-swift.struct/post%28element_notification_userinfo_%29.md): Sends a notification and an optional user info dictionary to any observing assistive apps.

### Getting Accessibility Objects

- [unignoredAncestor(of:)](nsaccessibility-swift.struct/unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.
- [unignoredChildren(from:)](nsaccessibility-swift.struct/unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredChildrenForOnlyChild(from:)](nsaccessibility-swift.struct/unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredDescendant(of:)](nsaccessibility-swift.struct/unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.

### Getting Screen Coordinates

- [screenPoint(fromView:point:)](nsaccessibility-swift.struct/screenpoint%28fromview_point_%29.md): Returns the point in screen coordinates.
- [screenRect(fromView:rect:)](nsaccessibility-swift.struct/screenrect%28fromview_rect_%29.md): Returns the frame in screen coordinates.

### Specifying Protected Content

- [setMayContainProtectedContent(\_:)](nsaccessibility-swift.struct/setmaycontainprotectedcontent%28__%29.md): Sets whether the app may have protected content.

### Handling Errors

- [ErrorCodeExceptionInfo](nsaccessibility-swift.struct/errorcodeexceptioninfo.md): An integer error code for debugging.

### Using Accessibility Types

- [NSAccessibility.Action](nsaccessibility-swift.struct/action.md): Constants that describe types of actions.
- [NSAccessibility.AnnotationAttributeKey](nsaccessibility-swift.struct/annotationattributekey.md): Keys for annotation attributes.
- [NSAccessibility.Attribute](nsaccessibility-swift.struct/attribute.md): Constants that describe attributes.
- [NSAccessibility.FontAttributeKey](nsaccessibility-swift.struct/fontattributekey.md): Keys for font attributes.
- [NSAccessibility.Notification](nsaccessibility-swift.struct/notification.md): The name of the notification.
- [NSAccessibility.NotificationUserInfoKey](nsaccessibility-swift.struct/notificationuserinfokey.md): The key in the user info dictionary for a notification.
- [NSAccessibility.OrientationValue](nsaccessibility-swift.struct/orientationvalue.md): Values that indicate the orientation of user interface elements, such as scroll bars and split views.
- [NSAccessibility.ParameterizedAttribute](nsaccessibility-swift.struct/parameterizedattribute.md): Values that describe parameterized attributes.
- [NSAccessibility.Role](nsaccessibility-swift.struct/role.md): Values that describe types of objects that accessibility elements represent.
- [NSAccessibility.RulerMarkerTypeValue](nsaccessibility-swift.struct/rulermarkertypevalue.md): Values that describe ruler marker types.
- [NSAccessibility.RulerUnitValue](nsaccessibility-swift.struct/rulerunitvalue.md): Values that indicate the unit values of a ruler or layout area.
- [NSAccessibility.SortDirectionValue](nsaccessibility-swift.struct/sortdirectionvalue.md): Values that indicate the sort direction of a column.
- [NSAccessibility.Subrole](nsaccessibility-swift.struct/subrole.md): Values that describe specialized object subtypes that accessibility elements represent.

### Deprecated

- [raiseBadArgumentException(\_:\_:\_:)](nsaccessibility-swift.struct/raisebadargumentexception%28______%29.md): Deprecated. Raises an error if the parameter is the wrong type or has an illegal value

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### AppKit Elements

- [NSAccessibilityProtocol](nsaccessibilityprotocol.md): The complete list of properties and methods for accessible elements.
