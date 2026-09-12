> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/accessibility-functions](https://developer.apple.com/documentation/appkit/accessibility-functions)

# Accessibility Functions (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Global accessibility functions for custom views and controls.

<a id="overview"></a>

## Overview

Use these [NSAccessibility](nsaccessibility-swift.struct.md) functions to enhance the accessibility experience of your custom view or control. Standard AppKit elements handle this behavior for you.

<a id="Notifications"></a>

### Notifications

Your custom view or control may need to let the assistive app know when changes occur. For example, if your control’s value changes, you need to send a [valueChanged](nsaccessibility-swift.struct/notification/valuechanged.md) notification.

[NSAccessibility.Notification](nsaccessibility-swift.struct/notification.md) defines a number of notifications that you can send using the [post(element:notification:)](nsaccessibility-swift.struct/post%28element_notification_%29.md) method. You typically need to send your own notifications only when you’re creating a custom control or when you’re using a standard control in a nonstandard way. Make sure you’re posting any relevant notifications as your control’s state changes.

## Topics

### Notifications

- [post(element:notification:)](nsaccessibility-swift.struct/post%28element_notification_%29.md): Sends a notification to any observing assistive apps.
- [post(element:notification:userInfo:)](nsaccessibility-swift.struct/post%28element_notification_userinfo_%29.md): Sends a notification and an optional user info dictionary to any observing assistive apps.
- [NSAccessibility.Notification](nsaccessibility-swift.struct/notification.md): The name of the notification.
- [NSAccessibility.NotificationUserInfoKey](nsaccessibility-swift.struct/notificationuserinfokey.md): The key in the user info dictionary for a notification.

### Screen Coordinates

- [screenRect(fromView:rect:)](nsaccessibility-swift.struct/screenrect%28fromview_rect_%29.md): Returns the frame in screen coordinates.
- [screenPoint(fromView:point:)](nsaccessibility-swift.struct/screenpoint%28fromview_point_%29.md): Returns the point in screen coordinates.

### Accessibility Objects

- [unignoredChildren(from:)](nsaccessibility-swift.struct/unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredChildrenForOnlyChild(from:)](nsaccessibility-swift.struct/unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [unignoredDescendant(of:)](nsaccessibility-swift.struct/unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.
- [unignoredAncestor(of:)](nsaccessibility-swift.struct/unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.

### Protected Content

- [setMayContainProtectedContent(\_:)](nsaccessibility-swift.struct/setmaycontainprotectedcontent%28__%29.md): Sets whether the app may have protected content.

### Descriptions

- [description](nsaccessibility-swift.struct/action/description.md): Returns a standard description for an action.
- [description(with:)](nsaccessibility-swift.struct/role/description%28with_%29.md): Returns a standard description for a role and subrole.
- [description(for:)](nsaccessibility-swift.struct/role/description%28for_%29.md): Returns a standard role description for a user interface element.

## See Also

### Custom View Subclasses

- [Custom Controls](custom-controls.md): Support accessibility for custom user interface elements by adopting a role-specific protocol and implementing its methods.

# Accessibility Functions (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Global accessibility functions for custom views and controls.

<a id="overview"></a>

## Overview

Use these [NSAccessibility](nsaccessibility-swift.struct.md) functions to enhance the accessibility experience of your custom view or control. Standard AppKit elements handle this behavior for you.

<a id="Notifications"></a>

### Notifications

Your custom view or control may need to let the assistive app know when changes occur. For example, if your control’s value changes, you need to send a [NSAccessibilityValueChangedNotification](nsaccessibility-swift.struct/notification/valuechanged.md) notification.

[NSAccessibilityNotificationName](nsaccessibility-swift.struct/notification.md) defines a number of notifications that you can send using the [NSAccessibilityPostNotification](nsaccessibility-swift.struct/post%28element_notification_%29.md) method. You typically need to send your own notifications only when you’re creating a custom control or when you’re using a standard control in a nonstandard way. Make sure you’re posting any relevant notifications as your control’s state changes.

## Topics

### Notifications

- [NSAccessibilityPostNotification](nsaccessibility-swift.struct/post%28element_notification_%29.md): Sends a notification to any observing assistive apps.
- [NSAccessibilityPostNotificationWithUserInfo](nsaccessibility-swift.struct/post%28element_notification_userinfo_%29.md): Sends a notification and an optional user info dictionary to any observing assistive apps.
- [NSAccessibilityNotificationName](nsaccessibility-swift.struct/notification.md): The name of the notification.
- [NSAccessibilityNotificationUserInfoKey](nsaccessibility-swift.struct/notificationuserinfokey.md): The key in the user info dictionary for a notification.

### Screen Coordinates

- [NSAccessibilityFrameInView](nsaccessibility-swift.struct/screenrect%28fromview_rect_%29.md): Returns the frame in screen coordinates.
- [NSAccessibilityPointInView](nsaccessibility-swift.struct/screenpoint%28fromview_point_%29.md): Returns the point in screen coordinates.

### Accessibility Objects

- [NSAccessibilityUnignoredChildren](nsaccessibility-swift.struct/unignoredchildren%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredChildrenForOnlyChild](nsaccessibility-swift.struct/unignoredchildrenforonlychild%28from_%29.md): Returns a list of unignored accessibility objects, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredDescendant](nsaccessibility-swift.struct/unignoreddescendant%28of_%29.md): Returns an unignored accessibility object, descending the hierarchy, if necessary.
- [NSAccessibilityUnignoredAncestor](nsaccessibility-swift.struct/unignoredancestor%28of_%29.md): Returns an unignored accessibility object, ascending the hierarchy, if necessary.

### Protected Content

- [NSAccessibilitySetMayContainProtectedContent](nsaccessibility-swift.struct/setmaycontainprotectedcontent%28__%29.md): Sets whether the app may have protected content.

### Descriptions

- [NSAccessibilityActionDescription](nsaccessibility-swift.struct/action/description.md): Returns a standard description for an action.
- [NSAccessibilityRoleDescription](nsaccessibility-swift.struct/role/description%28with_%29.md): Returns a standard description for a role and subrole.
- [NSAccessibilityRoleDescriptionForUIElement](nsaccessibility-swift.struct/role/description%28for_%29.md): Returns a standard role description for a user interface element.

## See Also

### Custom View Subclasses

- [Custom Controls](custom-controls.md): Support accessibility for custom user interface elements by adopting a role-specific protocol and implementing its methods.
