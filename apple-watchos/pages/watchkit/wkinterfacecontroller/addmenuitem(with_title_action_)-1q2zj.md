> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/addmenuitem(with:title:action:)-1q2zj](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/addmenuitem(with:title:action:)-1q2zj)

# addMenuItem(with:title:action:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Adds an action to the context menu by using an image provided by your WatchKit extension.

> Elevate important items out of such menus and into the relevant screen or a settings screen.

## Declaration

```swift
func addMenuItem(with image: UIImage, title: String, action: Selector)
```

## Parameters

- `image`: The template image to be used for the action. Only the alpha channel of the image is used. This parameter must not be `nil`. For information about the dimensions for menu images, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).
- `title`: The title string to be displayed underneath the image. Title strings should be reasonably short. Any text that cannot be displayed is truncated. This parameter must not be `nil` or an empty string.
- `action`: The action method to be called when the action is tapped. The method must be defined on the current interface controller object. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to append an action to the interface controller’s context menu. If the menu already has four items, additional items are ignored.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItem(withImageNamed:title:action:)](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [beginGlanceUpdates()](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems()](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates()](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity(\_:)](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [presentController(\_:)](presentcontroller%28__%29.md): Deprecated. Presents a page-based interface modally.
- [reloadRootControllers(withNames:contexts:)](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity(\_:userInfo:webpageURL:)](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.

# addMenuItemWithImage:title:action: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Adds an action to the context menu by using an image provided by your WatchKit extension.

> Elevate important items out of such menus and into the relevant screen or a settings screen.

## Declaration

```objectivec
- (void) addMenuItemWithImage:(UIImage *) image title:(NSString *) title action:(SEL) action;
```

## Parameters

- `image`: The template image to be used for the action. Only the alpha channel of the image is used. This parameter must not be `nil`. For information about the dimensions for menu images, see [Apple Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/).
- `title`: The title string to be displayed underneath the image. Title strings should be reasonably short. Any text that cannot be displayed is truncated. This parameter must not be `nil` or an empty string.
- `action`: The action method to be called when the action is tapped. The method must be defined on the current interface controller object. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to append an action to the interface controller’s context menu. If the menu already has four items, additional items are ignored.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItemWithImageNamed:title:action:](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItemWithItemIcon:title:action:](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [beginGlanceUpdates](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity:](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [reloadRootControllersWithNames:contexts:](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity:userInfo:webpageURL:](updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.
