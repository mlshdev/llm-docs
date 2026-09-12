> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openurloptionskey/annotation](https://developer.apple.com/documentation/uikit/uiapplication/openurloptionskey/annotation)

# annotation (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key containing the information passed to a document interaction controller object’s annotation property.

> Use UIScene lifecycle and UISceneOpenURLOptions.annotation from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```swift
static let annotation: UIApplication.OpenURLOptionsKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is a property list-typed object.

## See Also

### Accessing open-URL options

- [sourceApplication](sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [openInPlace](openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.
- [eventAttribution](eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.

# UIApplicationOpenURLOptionsAnnotationKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key containing the information passed to a document interaction controller object’s annotation property.

> Use UIScene lifecycle and UISceneOpenURLOptions.annotation from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```objectivec
extern UIApplicationOpenURLOptionsKey const UIApplicationOpenURLOptionsAnnotationKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a property list-typed object.

## See Also

### Accessing open-URL options

- [UIApplicationOpenURLOptionsSourceApplicationKey](sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [UIApplicationOpenURLOptionsOpenInPlaceKey](openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.
- [UIApplicationOpenURLOptionsEventAttributionKey](eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.
