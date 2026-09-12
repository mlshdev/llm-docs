> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openurloptionskey/sourceapplication](https://developer.apple.com/documentation/uikit/uiapplication/openurloptionskey/sourceapplication)

# sourceApplication (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key containing the bundle ID of the app that sent the open-URL request to your app.

> Use UIScene lifecycle and UISceneOpenURLOptions.sourceApplication from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```swift
static let sourceApplication: UIApplication.OpenURLOptionsKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../../foundation/nsstring.md) object containing the bundle ID of the app that made the request. If the request originated from another app belonging to your team, UIKit sets the value of this key to the ID of that app. If the team identifier of the originating app is different than the team identifier of the current app, the value of the key is `nil`.

## See Also

### Accessing open-URL options

- [annotation](annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [openInPlace](openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.
- [eventAttribution](eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.

# UIApplicationOpenURLOptionsSourceApplicationKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key containing the bundle ID of the app that sent the open-URL request to your app.

> Use UIScene lifecycle and UISceneOpenURLOptions.sourceApplication from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```objectivec
extern UIApplicationOpenURLOptionsKey const UIApplicationOpenURLOptionsSourceApplicationKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../../foundation/nsstring.md) object containing the bundle ID of the app that made the request. If the request originated from another app belonging to your team, UIKit sets the value of this key to the ID of that app. If the team identifier of the originating app is different than the team identifier of the current app, the value of the key is `nil`.

## See Also

### Accessing open-URL options

- [UIApplicationOpenURLOptionsAnnotationKey](annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [UIApplicationOpenURLOptionsOpenInPlaceKey](openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.
- [UIApplicationOpenURLOptionsEventAttributionKey](eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.
