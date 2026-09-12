> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkmenuitemicon](https://developer.apple.com/documentation/watchkit/wkmenuitemicon)

# WKMenuItemIcon (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Template images that you can use for menus.

> Elevate important items out of such menus and into the relevant screen or a settings screen.

## Declaration

```swift
enum WKMenuItemIcon
```

<a id="overview"></a>

## Overview

Use these constants with the [addMenuItem(with:title:action:)](wkinterfacecontroller/addmenuitem%28with_title_action_%29-6pb4t.md) method to configure actions for your interface controller’s menu.

## Topics

### Constants

- [WKMenuItemIcon.accept](wkmenuitemicon/accept.md): Deprecated. The icon indicating an action to accept an event or item.
- [WKMenuItemIcon.add](wkmenuitemicon/add.md): Deprecated. The icon indicating an action for adding an item.
- [WKMenuItemIcon.block](wkmenuitemicon/block.md): Deprecated. The icon indicating an action to block or prevent something from happening.
- [WKMenuItemIcon.decline](wkmenuitemicon/decline.md): Deprecated. The icon indicating an action to decline or cancel an event.
- [WKMenuItemIcon.info](wkmenuitemicon/info.md): Deprecated. The icon indicating an action to retrieve more information.
- [WKMenuItemIcon.maybe](wkmenuitemicon/maybe.md): Deprecated. The icon indicating an answer of maybe for an action.
- [WKMenuItemIcon.more](wkmenuitemicon/more.md): Deprecated. The icon indicating that more actions or options are available.
- [WKMenuItemIcon.mute](wkmenuitemicon/mute.md): Deprecated. The icon indicating an action to mute the sound.
- [WKMenuItemIcon.pause](wkmenuitemicon/pause.md): Deprecated. The icon indicating an action to pause playback.
- [WKMenuItemIcon.play](wkmenuitemicon/play.md): Deprecated. The icon indicating an action to play some content.
- [WKMenuItemIcon.repeat](wkmenuitemicon/repeat.md): Deprecated. The icon indicating that played content should repeat in a loop.
- [WKMenuItemIcon.resume](wkmenuitemicon/resume.md): Deprecated. The icon indicating an action to resume playing some content.
- [WKMenuItemIcon.share](wkmenuitemicon/share.md): Deprecated. The icon indicating an action to share content.
- [WKMenuItemIcon.shuffle](wkmenuitemicon/shuffle.md): Deprecated. The icon indicating an action to shuffle content.
- [WKMenuItemIcon.speaker](wkmenuitemicon/speaker.md): Deprecated. The icon indicating audio output.
- [WKMenuItemIcon.trash](wkmenuitemicon/trash.md): Deprecated. The icon indicating an action to delete some content.

### Initializers

- [init(rawValue:)](wkmenuitemicon/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated symbols

- [Text Response Key](text-response-key.md): Keys for retrieving text response information.
- [addMenuItem(withImageNamed:title:action:)](wkinterfacecontroller/addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItem(with:title:action:)](wkinterfacecontroller/addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItem(with:title:action:)](wkinterfacecontroller/addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates()](wkinterfacecontroller/beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems()](wkinterfacecontroller/clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates()](wkinterfacecontroller/endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity(\_:)](wkinterfacecontroller/handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [presentController(\_:)](wkinterfacecontroller/presentcontroller%28__%29.md): Deprecated. Presents a page-based interface modally.
- [reloadRootControllers(withNames:contexts:)](wkinterfacecontroller/reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity(\_:userInfo:webpageURL:)](wkinterfacecontroller/updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.

# WKMenuItemIcon (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+ (deprecated in 7.0)

Template images that you can use for menus.

> Elevate important items out of such menus and into the relevant screen or a settings screen.

## Declaration

```objectivec
enum WKMenuItemIcon : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [addMenuItemWithItemIcon:title:action:](wkinterfacecontroller/addmenuitem%28with_title_action_%29-6pb4t.md) method to configure actions for your interface controller’s menu.

## Topics

### Constants

- [WKMenuItemIconAccept](wkmenuitemicon/accept.md): Deprecated. The icon indicating an action to accept an event or item.
- [WKMenuItemIconAdd](wkmenuitemicon/add.md): Deprecated. The icon indicating an action for adding an item.
- [WKMenuItemIconBlock](wkmenuitemicon/block.md): Deprecated. The icon indicating an action to block or prevent something from happening.
- [WKMenuItemIconDecline](wkmenuitemicon/decline.md): Deprecated. The icon indicating an action to decline or cancel an event.
- [WKMenuItemIconInfo](wkmenuitemicon/info.md): Deprecated. The icon indicating an action to retrieve more information.
- [WKMenuItemIconMaybe](wkmenuitemicon/maybe.md): Deprecated. The icon indicating an answer of maybe for an action.
- [WKMenuItemIconMore](wkmenuitemicon/more.md): Deprecated. The icon indicating that more actions or options are available.
- [WKMenuItemIconMute](wkmenuitemicon/mute.md): Deprecated. The icon indicating an action to mute the sound.
- [WKMenuItemIconPause](wkmenuitemicon/pause.md): Deprecated. The icon indicating an action to pause playback.
- [WKMenuItemIconPlay](wkmenuitemicon/play.md): Deprecated. The icon indicating an action to play some content.
- [WKMenuItemIconRepeat](wkmenuitemicon/repeat.md): Deprecated. The icon indicating that played content should repeat in a loop.
- [WKMenuItemIconResume](wkmenuitemicon/resume.md): Deprecated. The icon indicating an action to resume playing some content.
- [WKMenuItemIconShare](wkmenuitemicon/share.md): Deprecated. The icon indicating an action to share content.
- [WKMenuItemIconShuffle](wkmenuitemicon/shuffle.md): Deprecated. The icon indicating an action to shuffle content.
- [WKMenuItemIconSpeaker](wkmenuitemicon/speaker.md): Deprecated. The icon indicating audio output.
- [WKMenuItemIconTrash](wkmenuitemicon/trash.md): Deprecated. The icon indicating an action to delete some content.

## See Also

### Deprecated symbols

- [Text Response Key](text-response-key.md): Keys for retrieving text response information.
- [addMenuItemWithImageNamed:title:action:](wkinterfacecontroller/addmenuitem%28withimagenamed_title_action_%29.md): Deprecated. Adds an action to the context menu using an existing image resource in your Watch app bundle.
- [addMenuItemWithItemIcon:title:action:](wkinterfacecontroller/addmenuitem%28with_title_action_%29-6pb4t.md): Deprecated. Adds an action to the context menu using a system-provided icon.
- [addMenuItemWithImage:title:action:](wkinterfacecontroller/addmenuitem%28with_title_action_%29-1q2zj.md): Deprecated. Adds an action to the context menu by using an image provided by your WatchKit extension.
- [beginGlanceUpdates](wkinterfacecontroller/beginglanceupdates%28%29.md): Deprecated. Tells the system that you are about to start a potentially lengthy update task for your glance.
- [clearAllMenuItems](wkinterfacecontroller/clearallmenuitems%28%29.md): Deprecated. Removes all programmatically added actions from the context menu.
- [endGlanceUpdates](wkinterfacecontroller/endglanceupdates%28%29.md): Deprecated. Tells the system that you finished updating your glance content.
- [handleUserActivity:](wkinterfacecontroller/handleuseractivity%28__%29.md): Deprecated. Responds to Handoff–related activity.
- [reloadRootControllersWithNames:contexts:](wkinterfacecontroller/reloadrootcontrollers%28withnames_contexts_%29.md): Deprecated. Loads the specified interface controllers and rebuilds the app’s page-based interface.
- [updateUserActivity:userInfo:webpageURL:](wkinterfacecontroller/updateuseractivity%28__userinfo_webpageurl_%29.md): Deprecated. Registers the current user activity with the system.
