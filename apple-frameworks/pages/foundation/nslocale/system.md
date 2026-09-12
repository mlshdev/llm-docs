> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslocale/system](https://developer.apple.com/documentation/foundation/nslocale/system)

# system (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A locale representing the generic root values with little localization.

## Declaration

```swift
class var system: Locale { get }
```

<a id="return-value"></a>

## Return Value

The generic locale that contains fixed “backstop” settings that provide values for otherwise undefined keys.

<a id="Discussion"></a>

## Discussion

Use the system locale when you don’t want any localizations. If you want localizations that match the user’s region settings, use the locale given by the [current](current.md) or the [autoupdatingCurrent](autoupdatingcurrent.md) property instead.

## See Also

### Getting the User’s Locale

- [autoupdatingCurrent](autoupdatingcurrent.md): A locale which tracks the user’s current preferences.
- [current](current.md): A locale that represents the user’s region settings at the time the property is read.
- [currentLocaleDidChangeNotification](currentlocaledidchangenotification.md): A notification that indicates that the user’s locale changed.

# systemLocale (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A locale representing the generic root values with little localization.

## Declaration

```objectivec
@property (class, copy, readonly) NSLocale * systemLocale;
```

<a id="return-value"></a>

## Return Value

The generic locale that contains fixed “backstop” settings that provide values for otherwise undefined keys.

<a id="Discussion"></a>

## Discussion

Use the system locale when you don’t want any localizations. If you want localizations that match the user’s region settings, use the locale given by the [currentLocale](current.md) or the [autoupdatingCurrentLocale](autoupdatingcurrent.md) property instead.

## See Also

### Getting the User’s Locale

- [autoupdatingCurrentLocale](autoupdatingcurrent.md): A locale which tracks the user’s current preferences.
- [currentLocale](current.md): A locale that represents the user’s region settings at the time the property is read.
- [NSCurrentLocaleDidChangeNotification](currentlocaledidchangenotification.md): A notification that indicates that the user’s locale changed.
