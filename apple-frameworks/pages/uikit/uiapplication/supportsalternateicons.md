> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/supportsalternateicons](https://developer.apple.com/documentation/uikit/uiapplication/supportsalternateicons)

# supportsAlternateIcons (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the app is allowed to change its icon.

## Declaration

```swift
var supportsAlternateIcons: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) only when the system allows you to change the icon of your app. To declare your app’s alternate icons, include them in the [CFBundleIcons](../../bundleresources/information-property-list/cfbundleicons.md) key of your app’s `Info.plist` file.

The value of this property is always [false](https://developer.apple.com/documentation/swift/false) for apps built using the visionOS SDK.

## See Also

### Managing the app’s icon

- [alternateIconName](alternateiconname.md): The name of the icon the system displays for the app.
- [setAlternateIconName(\_:completionHandler:)](setalternateiconname%28__completionhandler_%29.md): Changes the icon the system displays for the app.

# supportsAlternateIcons (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the app is allowed to change its icon.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsAlternateIcons;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) only when the system allows you to change the icon of your app. To declare your app’s alternate icons, include them in the [CFBundleIcons](../../bundleresources/information-property-list/cfbundleicons.md) key of your app’s `Info.plist` file.

The value of this property is always [false](https://developer.apple.com/documentation/swift/false) for apps built using the visionOS SDK.

## See Also

### Managing the app’s icon

- [alternateIconName](alternateiconname.md): The name of the icon the system displays for the app.
- [setAlternateIconName:completionHandler:](setalternateiconname%28__completionhandler_%29.md): Changes the icon the system displays for the app.
