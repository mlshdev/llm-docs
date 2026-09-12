> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openurloptionskey/openinplace](https://developer.apple.com/documentation/uikit/uiapplication/openurloptionskey/openinplace)

# openInPlace (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key containing a flag that indicates whether a document must be copied before you use it.

> Use UIScene lifecycle and UISceneOpenURLOptions.openInPlace from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```swift
static let openInPlace: UIApplication.OpenURLOptionsKey
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), you must copy the document to maintain access to it. If the flag is not set, you also must copy the document before you can use it.

If the document does not need to be copied, you can open it in place in your implementation of the [application(\_:open:options:)](../../uiapplicationdelegate/application%28__open_options_%29.md) method. For information about declaring whether your app wants the ability to open iCloud Drive documents in place, see the description of the [LSSupportsOpeningDocumentsInPlace](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW13) information property list key. For an example of an app that opens iCloud Drive documents in place, see [ShapeEdit: Building a Simple iCloud Document App](https://developer.apple.com/library/archive/samplecode/ShapeEdit/Introduction/Intro.html#//apple_ref/doc/uid/TP40016100).

## See Also

### Accessing open-URL options

- [sourceApplication](sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [annotation](annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [eventAttribution](eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.

# UIApplicationOpenURLOptionsOpenInPlaceKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key containing a flag that indicates whether a document must be copied before you use it.

> Use UIScene lifecycle and UISceneOpenURLOptions.openInPlace from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```objectivec
extern UIApplicationOpenURLOptionsKey const UIApplicationOpenURLOptionsOpenInPlaceKey;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false), you must copy the document to maintain access to it. If the flag is not set, you also must copy the document before you can use it.

If the document does not need to be copied, you can open it in place in your implementation of the [application:openURL:options:](../../uiapplicationdelegate/application%28__open_options_%29.md) method. For information about declaring whether your app wants the ability to open iCloud Drive documents in place, see the description of the [LSSupportsOpeningDocumentsInPlace](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW13) information property list key. For an example of an app that opens iCloud Drive documents in place, see [ShapeEdit: Building a Simple iCloud Document App](https://developer.apple.com/library/archive/samplecode/ShapeEdit/Introduction/Intro.html#//apple_ref/doc/uid/TP40016100).

## See Also

### Accessing open-URL options

- [UIApplicationOpenURLOptionsSourceApplicationKey](sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [UIApplicationOpenURLOptionsAnnotationKey](annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [UIApplicationOpenURLOptionsEventAttributionKey](eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.
