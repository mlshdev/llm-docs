> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/updateuseractivity(_:userinfo:webpageurl:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/updateuseractivity(_:userinfo:webpageurl:))

# updateUserActivity(\_:userInfo:webpageURL:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Registers the current user activity with the system.

> Use [update(\_:)](update%28__%29.md) instead.

## Declaration

```swift
func updateUserActivity(_ type: String, userInfo: [AnyHashable : Any]? = nil, webpageURL: URL?)
```

## Parameters

- `type`: The type of activity to be continued. The value is a developer-defined string in reverse-DNS format by convention, for example, `com.myCompany.myEditor.editing`. This parameter must not be `nil` or an empty string.
- `userInfo`: A dictionary containing app-specific state information needed to continue an activity on another device. Keys and values in the dictionary must be of the following types: [NSArray](https://developer.apple.com/documentation/foundation/nsarray), [NSData](https://developer.apple.com/documentation/foundation/nsdata), [NSDate](https://developer.apple.com/documentation/foundation/nsdate), [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), [NSNull](https://developer.apple.com/documentation/foundation/nsnull), [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSSet](https://developer.apple.com/documentation/foundation/nsset), or [NSString](https://developer.apple.com/documentation/foundation/nsstring).
- `webpageURL`: A URL containing the web page to load in a browser to continue the activity. The scheme of the URL must be `http` or `https`. Any other scheme throws an exception.

<a id="Discussion"></a>

## Discussion

Use this method to publish your app’s current activity so that it can be handled as needed. When calling this method, you must specify a value for the `userInfo` parameter, the `webpageURL` parameter, or both. Call this method in the following situations:

- In your glance interface controller, call this method and provide a `userInfo` dictionary with information about what the glance displays. If the user taps your glance, that contextual information passes to your app so it can configure its interface.
- Call this method to register the current activity with Handoff. The system delivers the information to the user’s iPhone, which can propagate the Handoff information to the user’s other devices. For more information about supporting Handoff, see [Handoff Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338).

Call this method at any time during the execution of your interface controller’s code. The system takes the information you provide and stores it for delivery to the appropriate target.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItem(withImageNamed:title:action:)](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItem(with:title:action:)](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates()](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems()](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates()](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity(\_:)](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [presentController(\_:)](presentcontroller%28__%29.md): Deprecated. Presents a page-based interface modally.
- [reloadRootControllers(withNames:contexts:)](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.

# updateUserActivity:userInfo:webpageURL: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+ (deprecated in 5.0)

Registers the current user activity with the system.

> Use [updateUserActivity:](update%28__%29.md) instead.

## Declaration

```objectivec
- (void) updateUserActivity:(NSString *) type userInfo:(NSDictionary *) userInfo webpageURL:(NSURL *) webpageURL;
```

## Parameters

- `type`: The type of activity to be continued. The value is a developer-defined string in reverse-DNS format by convention, for example, `com.myCompany.myEditor.editing`. This parameter must not be `nil` or an empty string.
- `userInfo`: A dictionary containing app-specific state information needed to continue an activity on another device. Keys and values in the dictionary must be of the following types: [NSArray](https://developer.apple.com/documentation/foundation/nsarray), [NSData](https://developer.apple.com/documentation/foundation/nsdata), [NSDate](https://developer.apple.com/documentation/foundation/nsdate), [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary), [NSNull](https://developer.apple.com/documentation/foundation/nsnull), [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber), [NSSet](https://developer.apple.com/documentation/foundation/nsset), or [NSString](https://developer.apple.com/documentation/foundation/nsstring).
- `webpageURL`: A URL containing the web page to load in a browser to continue the activity. The scheme of the URL must be `http` or `https`. Any other scheme throws an exception.

<a id="Discussion"></a>

## Discussion

Use this method to publish your app’s current activity so that it can be handled as needed. When calling this method, you must specify a value for the `userInfo` parameter, the `webpageURL` parameter, or both. Call this method in the following situations:

- In your glance interface controller, call this method and provide a `userInfo` dictionary with information about what the glance displays. If the user taps your glance, that contextual information passes to your app so it can configure its interface.
- Call this method to register the current activity with Handoff. The system delivers the information to the user’s iPhone, which can propagate the Handoff information to the user’s other devices. For more information about supporting Handoff, see [Handoff Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338).

Call this method at any time during the execution of your interface controller’s code. The system takes the information you provide and stores it for delivery to the appropriate target.

## See Also

### Deprecated symbols

- [Text Response Key](../text-response-key.md): Keys for retrieving text response information.
- [addMenuItemWithImageNamed:title:action:](addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItemWithItemIcon:title:action:](addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItemWithImage:title:action:](addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates](beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems](clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates](endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity:](handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [reloadRootControllersWithNames:contexts:](reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [WKMenuItemIcon](../wkmenuitemicon.md): Deprecated. Template images that you can use for menus.
