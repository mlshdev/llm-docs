> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/openurloptionskey](https://developer.apple.com/documentation/uikit/uiapplication/openurloptionskey)

# UIApplication.OpenURLOptionsKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Keys you use to access values in the options dictionary when opening a URL.

> Use UIScene lifecycle and equivalent properties on UISceneOpenURLOptions from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```swift
struct OpenURLOptionsKey
```

<a id="overview"></a>

## Overview

Use these keys to retrieve options in the [application(\_:open:options:)](../uiapplicationdelegate/application%28__open_options_%29.md) method of your app delegate.

## Topics

### Accessing open-URL options

- [sourceApplication](openurloptionskey/sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [annotation](openurloptionskey/annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [openInPlace](openurloptionskey/openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.
- [eventAttribution](openurloptionskey/eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.

### Creating an open-URL options key

- [init(rawValue:)](openurloptionskey/init%28rawvalue_%29.md): Deprecated. Creates a URL-opening options key with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Opening a URL-specified resource

- [application(\_:open:options:)](../uiapplicationdelegate/application%28__open_options_%29.md): Deprecated. Asks the delegate to open a resource specified by a URL, and provides a dictionary of launch options.

# UIApplicationOpenURLOptionsKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Keys you use to access values in the options dictionary when opening a URL.

> Use UIScene lifecycle and equivalent properties on UISceneOpenURLOptions from a UIOpenURLContext in UIScene.ConnectionOptions.URLContexts instead.

## Declaration

```objectivec
typedef NSString * UIApplicationOpenURLOptionsKey;
```

<a id="overview"></a>

## Overview

Use these keys to retrieve options in the [application:openURL:options:](../uiapplicationdelegate/application%28__open_options_%29.md) method of your app delegate.

## Topics

### Accessing open-URL options

- [UIApplicationOpenURLOptionsSourceApplicationKey](openurloptionskey/sourceapplication.md): Deprecated. A key containing the bundle ID of the app that sent the open-URL request to your app.
- [UIApplicationOpenURLOptionsAnnotationKey](openurloptionskey/annotation.md): Deprecated. A key containing the information passed to a document interaction controller object’s annotation property.
- [UIApplicationOpenURLOptionsOpenInPlaceKey](openurloptionskey/openinplace.md): Deprecated. A key containing a flag that indicates whether a document must be copied before you use it.
- [UIApplicationOpenURLOptionsEventAttributionKey](openurloptionskey/eventattribution.md): Deprecated. An options key for `application(_:open:options:)`. The value is a `UIEventAttribution` to go along with the URL to open.

## See Also

### Opening a URL-specified resource

- [application:openURL:options:](../uiapplicationdelegate/application%28__open_options_%29.md): Deprecated. Asks the delegate to open a resource specified by a URL, and provides a dictionary of launch options.
