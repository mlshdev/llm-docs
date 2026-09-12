> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:open:options:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:open:options:))

# application(\_:open:options:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Asks the delegate to open a resource specified by a URL, and provides a dictionary of launch options.

> Use UIScene lifecycle and scene(\_:openURLContexts:) from UISceneDelegate instead.

## Declaration

```swift
optional func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool
```

## Parameters

- `app`: Your singleton app object.
- `url`: The URL resource to open. This resource can be a network resource or a file. For information about the Apple-registered URL schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).
- `options`: A dictionary of URL handling options. For information about the possible keys in this dictionary and how to handle them, see `UIApplicationOpenURLOptionsKey`. By default, the value of this parameter is an empty dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate successfully handled the request or [false](https://developer.apple.com/documentation/swift/false) if the attempt to open the URL resource failed.

## Mentioned In

- [Enabling document sharing](../enabling-document-sharing.md)

<a id="Discussion"></a>

## Discussion

This method is not called if your implementations return [false](https://developer.apple.com/documentation/swift/false) from both the [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) and [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) methods. (If only one of the two methods is implemented, its return value determines whether this method is called.) If your app implements the [applicationDidFinishLaunching(\_:)](applicationdidfinishlaunching%28__%29.md) method instead of [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md), this method is called to open the specified URL after the app has been initialized.

If a URL arrives while your app is suspended or running in the background, the system moves your app to the foreground prior to calling this method.

There is no equivalent notification for this delegation method.

## See Also

### Opening a URL-specified resource

- [UIApplication.OpenURLOptionsKey](../uiapplication/openurloptionskey.md): Deprecated. Keys you use to access values in the options dictionary when opening a URL.

# application:openURL:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Asks the delegate to open a resource specified by a URL, and provides a dictionary of launch options.

> Use UIScene lifecycle and scene(\_:openURLContexts:) from UISceneDelegate instead.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) app openURL:(NSURL *) url options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `app`: Your singleton app object.
- `url`: The URL resource to open. This resource can be a network resource or a file. For information about the Apple-registered URL schemes, see [Apple URL Scheme Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneURLScheme_Reference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007899).
- `options`: A dictionary of URL handling options. For information about the possible keys in this dictionary and how to handle them, see `UIApplicationOpenURLOptionsKey`. By default, the value of this parameter is an empty dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate successfully handled the request or [false](https://developer.apple.com/documentation/swift/false) if the attempt to open the URL resource failed.

## Mentioned In

- [Enabling document sharing](../enabling-document-sharing.md)

<a id="Discussion"></a>

## Discussion

This method is not called if your implementations return [false](https://developer.apple.com/documentation/swift/false) from both the [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) and [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) methods. (If only one of the two methods is implemented, its return value determines whether this method is called.) If your app implements the [applicationDidFinishLaunching:](applicationdidfinishlaunching%28__%29.md) method instead of [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md), this method is called to open the specified URL after the app has been initialized.

If a URL arrives while your app is suspended or running in the background, the system moves your app to the foreground prior to calling this method.

There is no equivalent notification for this delegation method.

## See Also

### Opening a URL-specified resource

- [UIApplicationOpenURLOptionsKey](../uiapplication/openurloptionskey.md): Deprecated. Keys you use to access values in the options dictionary when opening a URL.
