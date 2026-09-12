> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/handleuseractivity(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/handleuseractivity(_:))

# handleUserActivity(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Responds to Handoff–related activity.

> Use the [WKExtensionDelegate](../wkextensiondelegate.md) protocol’s [handleUserActivity(\_:)](../wkextensiondelegate/handleuseractivity%28__%29.md) method instead.

## Declaration

```swift
func handleUserActivity(_ userInfo: [AnyHashable : Any]?)
```

## Parameters

- `userInfo`: The dictionary containing data about the activity. When launching an app from its glance, WatchKit sets this parameter to the dictionary that the glance passed to the [updateUserActivity(\_:userInfo:webpageURL:)](updateuseractivity%28__userinfo_webpageurl_%29.md) method.

<a id="Discussion"></a>

## Discussion

Implement this method in your app’s initial interface controller and use it to respond to Handoff–related activity. If you do not implement the [handleUserActivity(\_:)](../wkextensiondelegate/handleuseractivity%28__%29.md) method in your app’s extension delegate, WatchKit calls this method on your app’s initial interface controller. (If your app uses a page-based interface, WatchKit calls this method for each interface controller that is part of your initial interface.) Your implementation of this method should look at the `userInfo` dictionary and decide what actions (if any) to take. For example, an interface controller in a page-based interface might make itself the current page.

The default implementation of this method does nothing. When overriding this method, do not call `super`.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItem(withImageNamed:title:action:)](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates()](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems()](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates()](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [presentController(\_:)](presentcontroller%28__%29.md): Deprecated. Presents a page-based interface modally.
- [reloadRootControllers(withNames:contexts:)](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity(\_:userInfo:webpageURL:)](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.

# handleUserActivity: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 4.0)

Responds to Handoff–related activity.

> Use the [WKExtensionDelegate](../wkextensiondelegate.md) protocol’s [handleUserActivity:](../wkextensiondelegate/handleuseractivity%28__%29.md) method instead.

## Declaration

```objectivec
- (void) handleUserActivity:(NSDictionary *) userInfo;
```

## Parameters

- `userInfo`: The dictionary containing data about the activity. When launching an app from its glance, WatchKit sets this parameter to the dictionary that the glance passed to the [updateUserActivity:userInfo:webpageURL:](updateuseractivity%28__userinfo_webpageurl_%29.md) method.

<a id="Discussion"></a>

## Discussion

Implement this method in your app’s initial interface controller and use it to respond to Handoff–related activity. If you do not implement the [handleUserActivity:](../wkextensiondelegate/handleuseractivity%28__%29.md) method in your app’s extension delegate, WatchKit calls this method on your app’s initial interface controller. (If your app uses a page-based interface, WatchKit calls this method for each interface controller that is part of your initial interface.) Your implementation of this method should look at the `userInfo` dictionary and decide what actions (if any) to take. For example, an interface controller in a page-based interface might make itself the current page.

The default implementation of this method does nothing. When overriding this method, do not call `super`.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItemWithImageNamed:title:action:](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItemWithItemIcon:title:action:](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItemWithImage:title:action:](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [reloadRootControllersWithNames:contexts:](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity:userInfo:webpageURL:](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.
