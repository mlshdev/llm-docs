> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/beginglanceupdates()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/beginglanceupdates())

# beginGlanceUpdates() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Tells the system that you are about to start a potentially lengthy update task for your glance.

> watchOS no longer supports glances.

## Declaration

```swift
func beginGlanceUpdates()
```

<a id="Discussion"></a>

## Discussion

Calling this method is not required when updating your glance. This method is intended for situations where loading your glance content involves asynchronous method calls or other potentially lengthy tasks. Calling it from your [willActivate()](willactivate%28%29.md) method before you start such operations causes WatchKit to continue displaying the glance loading screen until you call the [endGlanceUpdates()](endglanceupdates%28%29.md) method. Even if your glance is not yet onscreen, calling this method gives you extra time to process results received from an asynchronous call.

You must balance each call to this method with a corresponding call to the [endGlanceUpdates()](endglanceupdates%28%29.md) method. Failure to do so prevents your updated glance content from being displayed. You may nest calls to this method to mark several update points. When the [willActivate()](willactivate%28%29.md) method returns, WatchKit checks for any in-progress glance updates and displays the loading screen until you make the matching calls to the [endGlanceUpdates()](endglanceupdates%28%29.md) method.

When your interface controller’s [didDeactivate()](diddeactivate%28%29.md) method is called, WatchKit ends any outstanding glance updates automatically.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItem(withImageNamed:title:action:)](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [clearAllMenuItems()](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates()](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity(\_:)](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [presentController(\_:)](presentcontroller%28__%29.md): Deprecated. Presents a page-based interface modally.
- [reloadRootControllers(withNames:contexts:)](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity(\_:userInfo:webpageURL:)](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.

# beginGlanceUpdates (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Tells the system that you are about to start a potentially lengthy update task for your glance.

> watchOS no longer supports glances.

## Declaration

```objectivec
- (void) beginGlanceUpdates;
```

<a id="Discussion"></a>

## Discussion

Calling this method is not required when updating your glance. This method is intended for situations where loading your glance content involves asynchronous method calls or other potentially lengthy tasks. Calling it from your [willActivate](willactivate%28%29.md) method before you start such operations causes WatchKit to continue displaying the glance loading screen until you call the [endGlanceUpdates](endglanceupdates%28%29.md) method. Even if your glance is not yet onscreen, calling this method gives you extra time to process results received from an asynchronous call.

You must balance each call to this method with a corresponding call to the [endGlanceUpdates](endglanceupdates%28%29.md) method. Failure to do so prevents your updated glance content from being displayed. You may nest calls to this method to mark several update points. When the [willActivate](willactivate%28%29.md) method returns, WatchKit checks for any in-progress glance updates and displays the loading screen until you make the matching calls to the [endGlanceUpdates](endglanceupdates%28%29.md) method.

When your interface controller’s [didDeactivate](diddeactivate%28%29.md) method is called, WatchKit ends any outstanding glance updates automatically.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItemWithImageNamed:title:action:](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItemWithItemIcon:title:action:](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItemWithImage:title:action:](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [clearAllMenuItems](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity:](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [reloadRootControllersWithNames:contexts:](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity:userInfo:webpageURL:](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.
