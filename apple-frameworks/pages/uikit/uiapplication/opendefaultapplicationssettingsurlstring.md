> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/opendefaultapplicationssettingsurlstring](https://developer.apple.com/documentation/uikit/uiapplication/opendefaultapplicationssettingsurlstring)

# openDefaultApplicationsSettingsURLString (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · tvOS 18.3+ · visionOS 2.3+

The URL string used to select a default app in the Settings app.

## Declaration

```swift
nonisolated class let openDefaultApplicationsSettingsURLString: String
```

<a id="discussion"></a>

## Discussion

Create a URL from this value and pass it to the [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md) method to launch the Settings app and display your app’s custom settings, if it has any:

**Swift**

```swift
// Create the URL that links to the Settings app for default app selection.
if let url = URL(string: UIApplication.openDefaultApplicationsSettingsURLString) {
    // Ask the system to open that URL.
    await UIApplication.shared.open(url)
}
```

**Objective-C**

```objc
// Create the URL that links to the Settings app for default app selection.
NSURL *url = [[NSURL alloc] initWithString:UIApplicationOpenDefaultApplicationsSettingsURLString];
// Ask the system to open that URL.
[[UIApplication sharedApplication] openURL:url
                                   options:@{}
                         completionHandler:nil];
```

For design guidance, see Human Interface Guidelines \> [Settings](https://developer.apple.com/design/human-interface-guidelines/).

## See Also

### Deep linking to custom settings

- [openSettingsURLString](opensettingsurlstring.md): The URL string you use to deep link to your app’s custom settings in the Settings app.
- [openNotificationSettingsURLString](opennotificationsettingsurlstring.md): The URL string you use to deep link to your app’s notification settings in the Settings app.
- [UIApplicationOpenNotificationSettingsURLString](../uiapplicationopennotificationsettingsurlstring.md): Deprecated. A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.

# UIApplicationOpenDefaultApplicationsSettingsURLString (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 18.3+ · iPadOS 18.3+ · Mac Catalyst 18.3+ · tvOS 18.3+ · visionOS 2.3+

The URL string used to select a default app in the Settings app.

## Declaration

```objectivec
extern NSString * const UIApplicationOpenDefaultApplicationsSettingsURLString;
```

<a id="discussion"></a>

## Discussion

Create a URL from this value and pass it to the [openURL:options:completionHandler:](open%28__options_completionhandler_%29.md) method to launch the Settings app and display your app’s custom settings, if it has any:

**Swift**

```swift
// Create the URL that links to the Settings app for default app selection.
if let url = URL(string: UIApplication.openDefaultApplicationsSettingsURLString) {
    // Ask the system to open that URL.
    await UIApplication.shared.open(url)
}
```

**Objective-C**

```objc
// Create the URL that links to the Settings app for default app selection.
NSURL *url = [[NSURL alloc] initWithString:UIApplicationOpenDefaultApplicationsSettingsURLString];
// Ask the system to open that URL.
[[UIApplication sharedApplication] openURL:url
                                   options:@{}
                         completionHandler:nil];
```

For design guidance, see Human Interface Guidelines \> [Settings](https://developer.apple.com/design/human-interface-guidelines/).

## See Also

### Deep linking to custom settings

- [UIApplicationOpenSettingsURLString](opensettingsurlstring.md): The URL string you use to deep link to your app’s custom settings in the Settings app.
- [UIApplicationOpenNotificationSettingsURLString](../uiapplicationopennotificationsettingsurlstring.md): Deprecated. A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.
