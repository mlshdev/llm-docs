> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/canopenurl(_:)](https://developer.apple.com/documentation/uikit/uiapplication/canopenurl(_:))

# canOpenURL(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a Boolean value that indicates whether an app is available to handle a URL scheme.

> Attempt to open the URL and handle any failure instead of validating it first. Using universal links instead of custom URL schemes removes the need for this validation entirely.

## Declaration

```swift
nonisolated func canOpenURL(_ url: URL) -> Bool
```

## Parameters

- `url`: A URL (Universal Resource Locator). At runtime, the system determines if the device has an installed app registered to handle the URL’s scheme. The device can have more than one app registered to handle a scheme.

  The URL can have a common scheme such as `http`, `https`, `tel`, or `facetime`, or a custom scheme. For information about supported schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the device doesn’t have an installed app registered to handle the URL’s scheme, or if you haven’t declared the URL’s scheme in your `Info.plist` file; otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

When this method returns [true](https://developer.apple.com/documentation/swift/true), iOS guarantees subsequent calls to the [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md) method with the same URL will successfully launch an app that can handle the URL. The return value doesn’t indicate the validity of the URL, whether the specified resource exists, or, in the case of a universal link, whether the device has an installed app registered to respond to the universal link.

You can call this method safely on a thread that isn’t the main thread.

> **Important**

>  If you link your app on or after iOS 9.0, you must declare the URL schemes you pass to this method by adding the `LSApplicationQueriesSchemes` key to your app’s `Info.plist` file. This method always returns [false](https://developer.apple.com/documentation/swift/false) for undeclared schemes, even if the device doesn’t have a registered app installed. Apps linked on or after iOS 15 are limited to a maximum of 50 entries in the `LSApplicationQueriesSchemes` key. Apps linked on or after iOS 27 are limited to a maximum of 25 entries in the `LSApplicationQueriesSchemes` key. To learn more about the key, see [LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes).

If you link your app against an earlier version of iOS but it is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always return [false](https://developer.apple.com/documentation/swift/false). If the user reinstalls or upgrades the app, iOS resets the limit.

Unlike this method, the [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md) method isn’t constrained by the `LSApplicationQueriesSchemes` requirement. If an app is available to handle the URL, the system will launch it, even if you haven’t declared the scheme.

Using universal links instead of custom URL schemes removes the need to use this method to validate target links; if no app is available to handle a universal link, iOS routes it to the person’s default browser, allowing the associated website to respond. For more information on universal links, see [Allowing apps and websites to link to your content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content).

## See Also

### Related Documentation

- [openURL(\_:)](openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.

### Opening a URL resource

- [open(\_:options:completionHandler:)](open%28__options_completionhandler_%29.md): Attempts to asynchronously open the resource at the specified URL.
- [UIApplication.OpenExternalURLOptionsKey](openexternalurloptionskey.md): Options for opening a URL.

# canOpenURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 27.0) · iPadOS 3.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Returns a Boolean value that indicates whether an app is available to handle a URL scheme.

> Attempt to open the URL and handle any failure instead of validating it first. Using universal links instead of custom URL schemes removes the need for this validation entirely.

## Declaration

```objectivec
- (BOOL) canOpenURL:(NSURL *) url;
```

## Parameters

- `url`: A URL (Universal Resource Locator). At runtime, the system determines if the device has an installed app registered to handle the URL’s scheme. The device can have more than one app registered to handle a scheme.

  The URL can have a common scheme such as `http`, `https`, `tel`, or `facetime`, or a custom scheme. For information about supported schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the device doesn’t have an installed app registered to handle the URL’s scheme, or if you haven’t declared the URL’s scheme in your `Info.plist` file; otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

When this method returns [true](https://developer.apple.com/documentation/swift/true), iOS guarantees subsequent calls to the [openURL:options:completionHandler:](open%28__options_completionhandler_%29.md) method with the same URL will successfully launch an app that can handle the URL. The return value doesn’t indicate the validity of the URL, whether the specified resource exists, or, in the case of a universal link, whether the device has an installed app registered to respond to the universal link.

You can call this method safely on a thread that isn’t the main thread.

> **Important**

>  If you link your app on or after iOS 9.0, you must declare the URL schemes you pass to this method by adding the `LSApplicationQueriesSchemes` key to your app’s `Info.plist` file. This method always returns [false](https://developer.apple.com/documentation/swift/false) for undeclared schemes, even if the device doesn’t have a registered app installed. Apps linked on or after iOS 15 are limited to a maximum of 50 entries in the `LSApplicationQueriesSchemes` key. Apps linked on or after iOS 27 are limited to a maximum of 25 entries in the `LSApplicationQueriesSchemes` key. To learn more about the key, see [LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes).

If you link your app against an earlier version of iOS but it is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always return [false](https://developer.apple.com/documentation/swift/false). If the user reinstalls or upgrades the app, iOS resets the limit.

Unlike this method, the [openURL:options:completionHandler:](open%28__options_completionhandler_%29.md) method isn’t constrained by the `LSApplicationQueriesSchemes` requirement. If an app is available to handle the URL, the system will launch it, even if you haven’t declared the scheme.

Using universal links instead of custom URL schemes removes the need to use this method to validate target links; if no app is available to handle a universal link, iOS routes it to the person’s default browser, allowing the associated website to respond. For more information on universal links, see [Allowing apps and websites to link to your content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content).

## See Also

### Related Documentation

- [openURL:](openurl%28__%29.md): Deprecated. Attempts to open the resource at the specified URL.

### Opening a URL resource

- [openURL:options:completionHandler:](open%28__options_completionhandler_%29.md): Attempts to asynchronously open the resource at the specified URL.
- [UIApplicationOpenExternalURLOptionsKey](openexternalurloptionskey.md): Options for opening a URL.
