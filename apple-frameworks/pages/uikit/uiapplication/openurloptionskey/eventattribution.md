> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openurloptionskey/eventattribution](https://developer.apple.com/documentation/uikit/uiapplication/openurloptionskey/eventattribution)

# eventAttribution (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.5+ (deprecated in 26.0) · iPadOS 14.5+ (deprecated in 26.0) · Mac Catalyst 14.5+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.

> Use UIScene lifecycle and UISceneOpenURLOptions.eventAttribution from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```swift
static let eventAttribution: UIApplication.OpenURLOptionsKey
```

## See Also

### Accessing open-URL options

- [sourceApplication](sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [annotation](annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [openInPlace](openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.

# UIApplicationOpenURLOptionsEventAttributionKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 14.5+ (deprecated in 26.0) · iPadOS 14.5+ (deprecated in 26.0) · Mac Catalyst 14.5+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.

> Use UIScene lifecycle and UISceneOpenURLOptions.eventAttribution from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```objectivec
extern UIApplicationOpenURLOptionsKey const UIApplicationOpenURLOptionsEventAttributionKey;
```

## See Also

### Accessing open-URL options

- [UIApplicationOpenURLOptionsSourceApplicationKey](sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [UIApplicationOpenURLOptionsAnnotationKey](annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [UIApplicationOpenURLOptionsOpenInPlaceKey](openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.
