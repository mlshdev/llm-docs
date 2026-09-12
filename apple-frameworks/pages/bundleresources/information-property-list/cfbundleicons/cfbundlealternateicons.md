> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundleicons/cfbundlealternateicons](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleicons/cfbundlealternateicons)

# CFBundleAlternateIcons (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of alternate icons for the Home screen and Settings app.

## Details

`CFBundleAlternateIcons`

## Properties

- `Any Key` — `AppIconReferenceName`:

<a id="Discussion"></a>

## Discussion

The value of this key is different in iOS and tvOS.

In tvOS, the value of the key is an array of strings. The value of each string is the name of an icon file in your app.

In iOS, the value of the key is a dictionary. The key for each dictionary entry is the name of the alternate icon, which is also the string you pass to [setAlternateIconName(\_:completionHandler:)](../../../uikit/uiapplication/setalternateiconname%28__completionhandler_%29.md) when changing icons. The value for each dictionary key is an [AppIconReferenceName](cfbundlealternateicons/appiconreferencename.md) dictionary.

## Topics

### Property List Keys

- [AppIconReferenceName](cfbundlealternateicons/appiconreferencename.md)

## See Also

### Property List Keys

- [CFBundlePrimaryIcon](cfbundleprimaryicon.md): The app’s primary icon for display on the Home Screen, in the Settings app, and many other places throughout the system.

# CFBundleAlternateIcons (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of alternate icons for the Home screen and Settings app.

## Details

`CFBundleAlternateIcons`

## Properties

- `Any Key` — `AppIconReferenceName`:

<a id="Discussion"></a>

## Discussion

The value of this key is different in iOS and tvOS.

In tvOS, the value of the key is an array of strings. The value of each string is the name of an icon file in your app.

In iOS, the value of the key is a dictionary. The key for each dictionary entry is the name of the alternate icon, which is also the string you pass to [setAlternateIconName:completionHandler:](../../../uikit/uiapplication/setalternateiconname%28__completionhandler_%29.md) when changing icons. The value for each dictionary key is an [AppIconReferenceName](cfbundlealternateicons/appiconreferencename.md) dictionary.

## Topics

### Property List Keys

- [AppIconReferenceName](cfbundlealternateicons/appiconreferencename.md)

## See Also

### Property List Keys

- [CFBundlePrimaryIcon](cfbundleprimaryicon.md): The app’s primary icon for display on the Home Screen, in the Settings app, and many other places throughout the system.
