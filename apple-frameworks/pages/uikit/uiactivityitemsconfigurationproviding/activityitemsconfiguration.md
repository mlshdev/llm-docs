> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsconfigurationproviding/activityitemsconfiguration](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding/activityitemsconfiguration)

# activityItemsConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object or value that specifies items to share.

## Declaration

```swift
var activityItemsConfiguration: (any UIActivityItemsConfigurationReading)? { get }
```

<a id="Discussion"></a>

## Discussion

To offer a configuration for sharing through Siri or the toolbar in an app built with Mac Catalyst, override this property on the root view controller or a modal view controller. To provide a configuration when your app is displaying a [UISplitViewController](../uisplitviewcontroller.md), implement this property on the detail view controller.

To offer a configuration for sharing through a context menu, override this property on your [UIView](../uiview.md) subclass, and attach a [UIContextMenuInteraction](../uicontextmenuinteraction.md) to that view.

> **Note**

>  When the user asks Siri to “share this” on iOS, if both [activityItemsConfiguration](activityitemsconfiguration.md) and [activityItemsConfigurationSource](../uiwindowscene/activityitemsconfigurationsource.md) are `nil`, the system uses the [webpageURL](../../foundation/nsuseractivity/webpageurl.md) property on your app’s current [userActivity](../uiresponder/useractivity.md) to create shareable content. The system doesn’t offer this fallback behavior in an app built with Mac Catalyst.

# activityItemsConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object or value that specifies items to share.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) id<UIActivityItemsConfigurationReading> activityItemsConfiguration;
```

<a id="Discussion"></a>

## Discussion

To offer a configuration for sharing through Siri or the toolbar in an app built with Mac Catalyst, override this property on the root view controller or a modal view controller. To provide a configuration when your app is displaying a [UISplitViewController](../uisplitviewcontroller.md), implement this property on the detail view controller.

To offer a configuration for sharing through a context menu, override this property on your [UIView](../uiview.md) subclass, and attach a [UIContextMenuInteraction](../uicontextmenuinteraction.md) to that view.

> **Note**

>  When the user asks Siri to “share this” on iOS, if both [activityItemsConfiguration](activityitemsconfiguration.md) and [activityItemsConfigurationSource](../uiwindowscene/activityitemsconfigurationsource.md) are `nil`, the system uses the [webpageURL](../../foundation/nsuseractivity/webpageurl.md) property on your app’s current [userActivity](../uiresponder/useractivity.md) to create shareable content. The system doesn’t offer this fallback behavior in an app built with Mac Catalyst.
