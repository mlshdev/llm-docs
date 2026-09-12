> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/setalternateiconname(_:completionhandler:)](https://developer.apple.com/documentation/uikit/uiapplication/setalternateiconname(_:completionhandler:))

# setAlternateIconName(\_:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+ · visionOS 1.0+

Changes the icon the system displays for the app.

## Declaration

```swift
func setAlternateIconName(_ alternateIconName: String?, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func setAlternateIconName(_ alternateIconName: String?) async throws
```

## Parameters

- `alternateIconName`: The name of the alternate icon, as declared in the `CFBundleAlternateIcons` key of your app’s `Info.plist` file. Specify `nil` if you want to display the app’s primary icon, which you declare using the `CFBundlePrimaryIcon` key. Both keys are subentries of the `CFBundleIcons` key in your app’s `Info.plist` file.
- `completionHandler`: The handler to execute with the results. After attempting to change your app’s icon, the system reports the results by calling your handler. The handler executes on a UIKit-provided queue, and not necessarily on your app’s main queue. The handler has no return value and takes the following parameter:

  - **error**: On success, the value of this parameter is `nil`. If an error occurred, this parameter contains the error object indicating what happened and the value of the [alternateIconName](alternateiconname.md) property remains unchanged.

<a id="Discussion"></a>

## Discussion

Use this method to change your app’s icon to its primary icon or to one of its alternate icons. You can change the icon only if the value of the [supportsAlternateIcons](supportsalternateicons.md) property is [true](https://developer.apple.com/documentation/swift/true).

You must configure your app’s primary icon asset in the “App Icons and Launch Images” section of the General pane or set it directly using the “Primary App Icon Set Name” build setting. You specify the names of additional icon assets available to your app using the “Alternate App Icon Sets” build setting. Xcode uses these setting to generate the entries for [CFBundlePrimaryIcon](../../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon.md) and [CFBundleAlternateIcons](../../bundleresources/information-property-list/cfbundleicons/cfbundlealternateicons.md) under the top-level key [CFBundleIcons](../../bundleresources/information-property-list/cfbundleicons.md). For more information, see [Build settings reference](https://developer.apple.com/documentation/xcode/build-settings-reference) and [Configuring your app icon using an asset catalog](https://developer.apple.com/documentation/xcode/configuring-your-app-icon).

> **Note**

>  This method still sets the alternate icon in compatible iPad and iPhone apps running in visionOS. Support for alternate icons is unavailable in apps you build using the visionOS SDK, and calling this method has no effect.

## See Also

### Managing the app’s icon

- [supportsAlternateIcons](supportsalternateicons.md): A Boolean value that indicates whether the app is allowed to change its icon.
- [alternateIconName](alternateiconname.md): The name of the icon the system displays for the app.

# setAlternateIconName:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+ · visionOS 1.0+

Changes the icon the system displays for the app.

## Declaration

```objectivec
- (void) setAlternateIconName:(NSString *) alternateIconName completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `alternateIconName`: The name of the alternate icon, as declared in the `CFBundleAlternateIcons` key of your app’s `Info.plist` file. Specify `nil` if you want to display the app’s primary icon, which you declare using the `CFBundlePrimaryIcon` key. Both keys are subentries of the `CFBundleIcons` key in your app’s `Info.plist` file.
- `completionHandler`: The handler to execute with the results. After attempting to change your app’s icon, the system reports the results by calling your handler. The handler executes on a UIKit-provided queue, and not necessarily on your app’s main queue. The handler has no return value and takes the following parameter:

  - **error**: On success, the value of this parameter is `nil`. If an error occurred, this parameter contains the error object indicating what happened and the value of the [alternateIconName](alternateiconname.md) property remains unchanged.

<a id="Discussion"></a>

## Discussion

Use this method to change your app’s icon to its primary icon or to one of its alternate icons. You can change the icon only if the value of the [supportsAlternateIcons](supportsalternateicons.md) property is [true](https://developer.apple.com/documentation/swift/true).

You must configure your app’s primary icon asset in the “App Icons and Launch Images” section of the General pane or set it directly using the “Primary App Icon Set Name” build setting. You specify the names of additional icon assets available to your app using the “Alternate App Icon Sets” build setting. Xcode uses these setting to generate the entries for [CFBundlePrimaryIcon](../../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon.md) and [CFBundleAlternateIcons](../../bundleresources/information-property-list/cfbundleicons/cfbundlealternateicons.md) under the top-level key [CFBundleIcons](../../bundleresources/information-property-list/cfbundleicons.md). For more information, see [Build settings reference](https://developer.apple.com/documentation/xcode/build-settings-reference) and [Configuring your app icon using an asset catalog](https://developer.apple.com/documentation/xcode/configuring-your-app-icon).

> **Note**

>  This method still sets the alternate icon in compatible iPad and iPhone apps running in visionOS. Support for alternate icons is unavailable in apps you build using the visionOS SDK, and calling this method has no effect.

## See Also

### Managing the app’s icon

- [supportsAlternateIcons](supportsalternateicons.md): A Boolean value that indicates whether the app is allowed to change its icon.
- [alternateIconName](alternateiconname.md): The name of the icon the system displays for the app.
