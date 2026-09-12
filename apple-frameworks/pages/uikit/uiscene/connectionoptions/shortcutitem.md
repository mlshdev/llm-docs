> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions/shortcutitem](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions/shortcutitem)

# shortcutItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The user-selected action to perform.

## Declaration

```swift
var shortcutItem: UIApplicationShortcutItem? { get }
```

<a id="Discussion"></a>

## Discussion

If the user selected one of your app’s quick actions, this property contains the selected action. You use quick actions to provide access to frequently used features of your app, and the user accesses those actions through interactions with your app’s icon in the Home Screen. If the user didn’t select a quick action, this property is `nil`.

For an example of how to set up quick actions for your app, see [Add Home Screen quick actions](../../add-home-screen-quick-actions.md).

# shortcutItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The user-selected action to perform.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIApplicationShortcutItem * shortcutItem;
```

<a id="Discussion"></a>

## Discussion

If the user selected one of your app’s quick actions, this property contains the selected action. You use quick actions to provide access to frequently used features of your app, and the user accesses those actions through interactions with your app’s icon in the Home Screen. If the user didn’t select a quick action, this property is `nil`.

For an example of how to set up quick actions for your app, see [Add Home Screen quick actions](../../add-home-screen-quick-actions.md).
