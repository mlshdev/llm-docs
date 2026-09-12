> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/clearallmenuitems()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/clearallmenuitems())

# clearAllMenuItems() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Removes all programmatically added actions from the context menu.

> Elevate important items out of such menus and into the relevant screen or a settings screen.

## Declaration

```swift
func clearAllMenuItems()
```

<a id="Discussion"></a>

## Discussion

Use this method to remove all menu items that you added using the [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-1q2zj.md) or [addMenuItem(withImageNamed:title:action:)](addmenuitem%28withimagenamed_title_action_%29.md) method. This method does not remove menu items that you configured in the storyboard file.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItem(withImageNamed:title:action:)](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates()](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [endGlanceUpdates()](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity(\_:)](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [presentController(\_:)](presentcontroller%28__%29.md): Deprecated. Presents a page-based interface modally.
- [reloadRootControllers(withNames:contexts:)](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity(\_:userInfo:webpageURL:)](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.

# clearAllMenuItems (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Removes all programmatically added actions from the context menu.

> Elevate important items out of such menus and into the relevant screen or a settings screen.

## Declaration

```objectivec
- (void) clearAllMenuItems;
```

<a id="Discussion"></a>

## Discussion

Use this method to remove all menu items that you added using the [addMenuItemWithImage:title:action:](addmenuitem%28with_title_action_%29-1q2zj.md) or [addMenuItemWithImageNamed:title:action:](addmenuitem%28withimagenamed_title_action_%29.md) method. This method does not remove menu items that you configured in the storyboard file.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItemWithImageNamed:title:action:](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItemWithItemIcon:title:action:](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItemWithImage:title:action:](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [endGlanceUpdates](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity:](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [reloadRootControllersWithNames:contexts:](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity:userInfo:webpageURL:](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.
