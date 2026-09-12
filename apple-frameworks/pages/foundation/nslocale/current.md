> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/current](https://developer.apple.com/documentation/foundation/nslocale/current)

# current (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A locale that represents the user’s region settings at the time the property is read.

## Declaration

```swift
class var current: Locale { get }
```

<a id="Discussion"></a>

## Discussion

This value represents the locale currently used by the app, based on the following:

- The current system locale.
- Any app-specific locale choice made in the Settings app.
- The availability of the preferred locale in the app. For example, if the person using an app has set their device to use a Spanish-language locale, but the app only supports English, this value returns an English locale.

Use this property when you need to rely on a consistent locale. A locale instance obtained this way does not change even when the person using the device changes region settings. If you want a locale instance that always reflects the current configuration, use the one provided by the [autoupdatingCurrent](autoupdatingcurrent.md) property instead.

To receive notification of locale changes, add your object as an observer of [currentLocaleDidChangeNotification](currentlocaledidchangenotification.md).

## See Also

### Getting the User’s Locale

- [autoupdatingCurrent](autoupdatingcurrent.md): A locale which tracks the user’s current preferences.
- [currentLocaleDidChangeNotification](currentlocaledidchangenotification.md): A notification that indicates that the user’s locale changed.
- [system](system.md): A locale representing the generic root values with little localization.

# currentLocale (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A locale that represents the user’s region settings at the time the property is read.

## Declaration

```objectivec
@property (class, copy, readonly) NSLocale * currentLocale;
```

<a id="Discussion"></a>

## Discussion

This value represents the locale currently used by the app, based on the following:

- The current system locale.
- Any app-specific locale choice made in the Settings app.
- The availability of the preferred locale in the app. For example, if the person using an app has set their device to use a Spanish-language locale, but the app only supports English, this value returns an English locale.

Use this property when you need to rely on a consistent locale. A locale instance obtained this way does not change even when the person using the device changes region settings. If you want a locale instance that always reflects the current configuration, use the one provided by the [autoupdatingCurrentLocale](autoupdatingcurrent.md) property instead.

To receive notification of locale changes, add your object as an observer of [NSCurrentLocaleDidChangeNotification](currentlocaledidchangenotification.md).

## See Also

### Getting the User’s Locale

- [autoupdatingCurrentLocale](autoupdatingcurrent.md): A locale which tracks the user’s current preferences.
- [NSCurrentLocaleDidChangeNotification](currentlocaledidchangenotification.md): A notification that indicates that the user’s locale changed.
- [systemLocale](system.md): A locale representing the generic root values with little localization.
