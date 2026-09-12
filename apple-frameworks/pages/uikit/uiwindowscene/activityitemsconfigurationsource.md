> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activityitemsconfigurationsource](https://developer.apple.com/documentation/uikit/uiwindowscene/activityitemsconfigurationsource)

# activityItemsConfigurationSource (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object that can provide shareable items for a scene.

## Declaration

```swift
weak var activityItemsConfigurationSource: (any UIActivityItemsConfigurationProviding)? { get set }
```

<a id="Discussion"></a>

## Discussion

When a user asks Siri to “share this” on iOS, or clicks an [NSSharingServicePickerToolbarItem](https://developer.apple.com/documentation/appkit/nssharingservicepickertoolbaritem) in the toolbar of an app built with Mac Catalyst, the system asks the current scene or view controller what to share. You can supply multiple representations of the current content, such as a file, image, and URL.

You can implement this property or provide configurations from view controllers with [activityItemsConfiguration](../uiactivityitemsconfigurationproviding/activityitemsconfiguration.md).

If you don’t provide a [UIActivityItemsConfiguration](../uiactivityitemsconfiguration.md) in either of these ways, the system may fall back to sharing either the [webpageURL](../../foundation/nsuseractivity/webpageurl.md) of your app’s current user activity or a screenshot of the scene.

## See Also

### Sharing content

- [UIActivityItemsConfigurationProviding](../uiactivityitemsconfigurationproviding.md): An interface that provides a source for shareable content to fulfill user requests to share current content.

# activityItemsConfigurationSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An object that can provide shareable items for a scene.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIActivityItemsConfigurationProviding> activityItemsConfigurationSource;
```

<a id="Discussion"></a>

## Discussion

When a user asks Siri to “share this” on iOS, or clicks an [NSSharingServicePickerToolbarItem](https://developer.apple.com/documentation/appkit/nssharingservicepickertoolbaritem) in the toolbar of an app built with Mac Catalyst, the system asks the current scene or view controller what to share. You can supply multiple representations of the current content, such as a file, image, and URL.

You can implement this property or provide configurations from view controllers with [activityItemsConfiguration](../uiactivityitemsconfigurationproviding/activityitemsconfiguration.md).

If you don’t provide a [UIActivityItemsConfiguration](../uiactivityitemsconfiguration.md) in either of these ways, the system may fall back to sharing either the [webpageURL](../../foundation/nsuseractivity/webpageurl.md) of your app’s current user activity or a screenshot of the scene.

## See Also

### Sharing content

- [UIActivityItemsConfigurationProviding](../uiactivityitemsconfigurationproviding.md): An interface that provides a source for shareable content to fulfill user requests to share current content.
