> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/notification/resized](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notification/resized)

# resized (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

This notification is posted after an accessibility element’s size changes. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.

## Declaration

```swift
static let resized: NSAccessibility.Notification
```

## See Also

### Notification names

- [announcementRequested](announcementrequested.md): This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.
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
- [rowCollapsed](rowcollapsed.md): This notification is posted after a row collapses. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [rowCountChanged](rowcountchanged.md): This notification is posted after a row is added or deleted. Post this notification using the [post(element:notification:)](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.

# NSAccessibilityResizedNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

This notification is posted after an accessibility element’s size changes. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.

## Declaration

```objectivec
extern NSAccessibilityNotificationName const NSAccessibilityResizedNotification;
```

## See Also

### Notification names

- [NSAccessibilityAnnouncementRequestedNotification](announcementrequested.md): This notification posts when an app needs to make an announcement to the user. If VoiceOver is enabled, it’s presented via speech and/or braille. Otherwise, it does nothing.
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
- [NSAccessibilityRowCollapsedNotification](rowcollapsed.md): This notification is posted after a row collapses. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
- [NSAccessibilityRowCountChangedNotification](rowcountchanged.md): This notification is posted after a row is added or deleted. Post this notification using the [NSAccessibilityPostNotification](../post%28element_notification_%29.md) function instead of an `NSNotificationCenter` instance.
