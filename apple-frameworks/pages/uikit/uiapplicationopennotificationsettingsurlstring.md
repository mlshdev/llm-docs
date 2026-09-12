> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationopennotificationsettingsurlstring](https://developer.apple.com/documentation/uikit/uiapplicationopennotificationsettingsurlstring)

# UIApplicationOpenNotificationSettingsURLString (Swift)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 15.4+ (deprecated in 16.0) · iPadOS 15.4+ (deprecated in 16.0) · Mac Catalyst 15.4+ (deprecated in 16.0) · tvOS 15.4+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 8.5+ (deprecated in 9.0)

A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.

> In Swift, use [openNotificationSettingsURLString](uiapplication/opennotificationsettingsurlstring.md) instead.

## Declaration

```swift
nonisolated let UIApplicationOpenNotificationSettingsURLString: String
```

<a id="Discussion"></a>

## Discussion

Create a URL from this value and pass it to the [open(\_:options:completionHandler:)](uiapplication/open%28__options_completionhandler_%29.md) method to launch the Settings app and display your app’s notification settings, if it has any.

```objc
// Create the URL that deep links to your app's notification settings.
NSURL *url = [[NSURL alloc] initWithString:UIApplicationOpenNotificationSettingsURLString];
// Ask the system to open that URL.
[[UIApplication sharedApplication] openURL:url
                                   options:@{}
                         completionHandler:nil];
```

## See Also

### Deep linking to custom settings

- [openSettingsURLString](uiapplication/opensettingsurlstring.md): The URL string you use to deep link to your app’s custom settings in the Settings app.
- [openNotificationSettingsURLString](uiapplication/opennotificationsettingsurlstring.md): The URL string you use to deep link to your app’s notification settings in the Settings app.
- [openDefaultApplicationsSettingsURLString](uiapplication/opendefaultapplicationssettingsurlstring.md): The URL string used to select a default app in the Settings app.

# UIApplicationOpenNotificationSettingsURLString (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 15.4+ · visionOS 1.0+

A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.

## Declaration

```objectivec
extern NSString * const UIApplicationOpenNotificationSettingsURLString;
```

<a id="Discussion"></a>

## Discussion

Create a URL from this value and pass it to the [openURL:options:completionHandler:](uiapplication/open%28__options_completionhandler_%29.md) method to launch the Settings app and display your app’s notification settings, if it has any.

```objc
// Create the URL that deep links to your app's notification settings.
NSURL *url = [[NSURL alloc] initWithString:UIApplicationOpenNotificationSettingsURLString];
// Ask the system to open that URL.
[[UIApplication sharedApplication] openURL:url
                                   options:@{}
                         completionHandler:nil];
```

## See Also

### Deep linking to custom settings

- [UIApplicationOpenSettingsURLString](uiapplication/opensettingsurlstring.md): The URL string you use to deep link to your app’s custom settings in the Settings app.
- [UIApplicationOpenDefaultApplicationsSettingsURLString](uiapplication/opendefaultapplicationssettingsurlstring.md): The URL string used to select a default app in the Settings app.
