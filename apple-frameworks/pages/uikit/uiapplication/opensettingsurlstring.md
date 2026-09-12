> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/opensettingsurlstring](https://developer.apple.com/documentation/uikit/uiapplication/opensettingsurlstring)

# openSettingsURLString (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The URL string you use to deep link to your app’s custom settings in the Settings app.

## Declaration

```swift
nonisolated class let openSettingsURLString: String
```

<a id="Discussion"></a>

## Discussion

Create a URL from this value and pass it to the [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md) method to launch the Settings app and display your app’s custom settings, if it has any.

**Swift**

```swift
// Create the URL that deep links to your app's custom settings.
if let url = URL(string: UIApplication.openSettingsURLString) {
    // Ask the system to open that URL.
    await UIApplication.shared.open(url)
}
```

**Objective-C**

```objc
// Create the URL that deep links to your app's custom settings.
NSURL *url = [[NSURL alloc] initWithString:UIApplicationOpenSettingsURLString];
// Ask the system to open that URL.
[[UIApplication sharedApplication] openURL:url
                                   options:@{}
                         completionHandler:nil];
```

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/settings/).

## See Also

### Deep linking to custom settings

- [openNotificationSettingsURLString](opennotificationsettingsurlstring.md): The URL string you use to deep link to your app’s notification settings in the Settings app.
- [UIApplicationOpenNotificationSettingsURLString](../uiapplicationopennotificationsettingsurlstring.md): Deprecated. A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.
- [openDefaultApplicationsSettingsURLString](opendefaultapplicationssettingsurlstring.md): The URL string used to select a default app in the Settings app.

# UIApplicationOpenSettingsURLString (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The URL string you use to deep link to your app’s custom settings in the Settings app.

## Declaration

```objectivec
extern NSString * const UIApplicationOpenSettingsURLString;
```

<a id="Discussion"></a>

## Discussion

Create a URL from this value and pass it to the [openURL:options:completionHandler:](open%28__options_completionhandler_%29.md) method to launch the Settings app and display your app’s custom settings, if it has any.

**Swift**

```swift
// Create the URL that deep links to your app's custom settings.
if let url = URL(string: UIApplication.openSettingsURLString) {
    // Ask the system to open that URL.
    await UIApplication.shared.open(url)
}
```

**Objective-C**

```objc
// Create the URL that deep links to your app's custom settings.
NSURL *url = [[NSURL alloc] initWithString:UIApplicationOpenSettingsURLString];
// Ask the system to open that URL.
[[UIApplication sharedApplication] openURL:url
                                   options:@{}
                         completionHandler:nil];
```

For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/settings/).

## See Also

### Deep linking to custom settings

- [UIApplicationOpenNotificationSettingsURLString](../uiapplicationopennotificationsettingsurlstring.md): Deprecated. A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.
- [UIApplicationOpenDefaultApplicationsSettingsURLString](opendefaultapplicationssettingsurlstring.md): The URL string used to select a default app in the Settings app.
