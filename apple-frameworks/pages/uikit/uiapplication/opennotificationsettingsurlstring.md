> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/opennotificationsettingsurlstring](https://developer.apple.com/documentation/uikit/uiapplication/opennotificationsettingsurlstring)

# openNotificationSettingsURLString

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS · visionOS

The URL string you use to deep link to your app’s notification settings in the Settings app.

## Declaration

```swift
nonisolated static let openNotificationSettingsURLString: String
```

<a id="Discussion"></a>

## Discussion

Create a URL from this value and pass it to the [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md) method to launch the Settings app and display your app’s notification settings, if it has any.

```swift
// Create the URL that deep links to your app's notification settings.
if let url = URL(string: UIApplication.openNotificationSettingsURLString) {
    // Ask the system to open that URL.
    await UIApplication.shared.open(url)
}
```

## See Also

### Deep linking to custom settings

- [openSettingsURLString](opensettingsurlstring.md): The URL string you use to deep link to your app’s custom settings in the Settings app.
- [UIApplicationOpenNotificationSettingsURLString](../uiapplicationopennotificationsettingsurlstring.md): Deprecated. A constant that provides the URL string you use to deep link to your app’s notification settings in the Settings app.
- [openDefaultApplicationsSettingsURLString](opendefaultapplicationssettingsurlstring.md): The URL string used to select a default app in the Settings app.
