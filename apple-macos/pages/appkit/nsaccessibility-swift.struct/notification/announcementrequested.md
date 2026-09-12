> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/notification/announcementrequested](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/announcementrequested)

# announcementRequested (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.

## Declaration

```swift
static let announcementRequested: NSAccessibility.Notification
```

<a id="Discussion"></a>

## Discussion

This notification requires a `userInfo` dictionary with the key [announcement](../notificationuserinfokey/announcement.md) and a localized string containing the announcement. To help an assistive app determine the importance of the announcement, add the appropriate [priority](../notificationuserinfokey/priority.md) to the `userInfo` dictionary.

**Swift**

```swift
let announcement = "The input was invalid."
NSAccessibility.post(
    element: NSApp.mainWindow as Any,
    notification: .announcementRequested,
    userInfo: [
        .announcement: announcement,
        .priority: NSAccessibilityPriorityLevel.medium.rawValue
    ])
```

**Objective-C**

```objc
NSString *announcement = @"The input was invalid.";
NSAccessibilityPostNotificationWithUserInfo(NSApp, NSAccessibilityAnnouncementRequestedNotification, @{
    NSAccessibilityAnnouncementKey : announcement,
    NSAccessibilityPriorityKey : @(NSAccessibilityPriorityMedium) 
});
```

If you need more control over how your announcements are pronounced, such as including punctuation or setting the spoken language, you can use [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring). For a list of available string attributes, see [NSAttributedString.Key](https://developer.apple.com/documentation/foundation/nsattributedstring/key).

**Swift**

```swift
let announcement = NSAttributedString(
    string: "pain",
    attributes: [.accessibilityLanguage: "fr"]
)
NSAccessibility.post(
    element: NSApp.mainWindow as Any,
    notification: .announcementRequested,
    userInfo: [
        .announcement: announcement,
        .priority: NSAccessibilityPriorityLevel.medium.rawValue
    ])
```

**Objective-C**

```objc
NSAttributedString *announcement =
    [[NSAttributedString alloc] initWithString:@"pain" attributes: @{
    NSAccessibilityLanguageTextAttribute : @"fr"
}];
NSAccessibilityPostNotificationWithUserInfo(NSApp, NSAccessibilityAnnouncementRequestedNotification, @{
    NSAccessibilityAnnouncementKey : announcement,
    NSAccessibilityPriorityKey : @(NSAccessibilityPriorityMedium)
});
```

## See Also

### Notification names

- [applicationActivated](applicationactivated.md): This notification is posted after the app has been activated. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [applicationDeactivated](applicationdeactivated.md): This notification is posted after the app has been deactivated. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [applicationHidden](applicationhidden.md): This notification is posted after the app is hidden. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [applicationShown](applicationshown.md): This notification is posted after the app is shown. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [created](created.md): This notification is posted after an accessibility element is created. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [drawerCreated](drawercreated.md): This notification is posted after a drawer appears. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [focusedUIElementChanged](focuseduielementchanged.md): This notification is posted after an accessibility element gains focus. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [focusedWindowChanged](focusedwindowchanged.md): This notification is posted after the key window changes. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [helpTagCreated](helptagcreated.md): This notification is posted after a help tag appears. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [layoutChanged](layoutchanged.md): This notification is posted after the UI changes in a way that requires the attention of an accessibility client. This notification should be accompanied by a `userInfo` dictionary with the key [uiElements](../notificationuserinfokey/uielements.md) and an array containing the UI elements that have been added or changed. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [mainWindowChanged](mainwindowchanged.md): This notification is posted after the main window changes. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [moved](moved.md): This notification is posted after an accessibility element moves. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [resized](resized.md): This notification is posted after an accessibility element’s size changes. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [rowCollapsed](rowcollapsed.md): This notification is posted after a row collapses. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [rowCountChanged](rowcountchanged.md): This notification is posted after a row is added or deleted. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.

# NSAccessibilityAnnouncementRequestedNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.

## Declaration

```objectivec
extern NSAccessibilityNotificationName const NSAccessibilityAnnouncementRequestedNotification;
```

<a id="Discussion"></a>

## Discussion

This notification requires a `userInfo` dictionary with the key [NSAccessibilityAnnouncementKey](../notificationuserinfokey/announcement.md) and a localized string containing the announcement. To help an assistive app determine the importance of the announcement, add the appropriate [NSAccessibilityPriorityKey](../notificationuserinfokey/priority.md) to the `userInfo` dictionary.

**Swift**

```swift
let announcement = "The input was invalid."
NSAccessibility.post(
    element: NSApp.mainWindow as Any,
    notification: .announcementRequested,
    userInfo: [
        .announcement: announcement,
        .priority: NSAccessibilityPriorityLevel.medium.rawValue
    ])
```

**Objective-C**

```objc
NSString *announcement = @"The input was invalid.";
NSAccessibilityPostNotificationWithUserInfo(NSApp, NSAccessibilityAnnouncementRequestedNotification, @{
    NSAccessibilityAnnouncementKey : announcement,
    NSAccessibilityPriorityKey : @(NSAccessibilityPriorityMedium) 
});
```

If you need more control over how your announcements are pronounced, such as including punctuation or setting the spoken language, you can use [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring). For a list of available string attributes, see [NSAttributedStringKey](https://developer.apple.com/documentation/foundation/nsattributedstring/key).

**Swift**

```swift
let announcement = NSAttributedString(
    string: "pain",
    attributes: [.accessibilityLanguage: "fr"]
)
NSAccessibility.post(
    element: NSApp.mainWindow as Any,
    notification: .announcementRequested,
    userInfo: [
        .announcement: announcement,
        .priority: NSAccessibilityPriorityLevel.medium.rawValue
    ])
```

**Objective-C**

```objc
NSAttributedString *announcement =
    [[NSAttributedString alloc] initWithString:@"pain" attributes: @{
    NSAccessibilityLanguageTextAttribute : @"fr"
}];
NSAccessibilityPostNotificationWithUserInfo(NSApp, NSAccessibilityAnnouncementRequestedNotification, @{
    NSAccessibilityAnnouncementKey : announcement,
    NSAccessibilityPriorityKey : @(NSAccessibilityPriorityMedium)
});
```

## See Also

### Notification names

- [NSAccessibilityApplicationActivatedNotification](applicationactivated.md): This notification is posted after the app has been activated. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationDeactivatedNotification](applicationdeactivated.md): This notification is posted after the app has been deactivated. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationHiddenNotification](applicationhidden.md): This notification is posted after the app is hidden. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityApplicationShownNotification](applicationshown.md): This notification is posted after the app is shown. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityCreatedNotification](created.md): This notification is posted after an accessibility element is created. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityDrawerCreatedNotification](drawercreated.md): This notification is posted after a drawer appears. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityFocusedUIElementChangedNotification](focuseduielementchanged.md): This notification is posted after an accessibility element gains focus. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityFocusedWindowChangedNotification](focusedwindowchanged.md): This notification is posted after the key window changes. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityHelpTagCreatedNotification](helptagcreated.md): This notification is posted after a help tag appears. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityLayoutChangedNotification](layoutchanged.md): This notification is posted after the UI changes in a way that requires the attention of an accessibility client. This notification should be accompanied by a `userInfo` dictionary with the key [NSAccessibilityUIElementsKey](../notificationuserinfokey/uielements.md) and an array containing the UI elements that have been added or changed. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityMainWindowChangedNotification](mainwindowchanged.md): This notification is posted after the main window changes. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityMovedNotification](moved.md): This notification is posted after an accessibility element moves. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityResizedNotification](resized.md): This notification is posted after an accessibility element’s size changes. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowCollapsedNotification](rowcollapsed.md): This notification is posted after a row collapses. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowCountChangedNotification](rowcountchanged.md): This notification is posted after a row is added or deleted. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
