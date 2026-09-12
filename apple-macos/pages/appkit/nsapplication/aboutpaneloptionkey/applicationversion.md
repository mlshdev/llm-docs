> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/aboutpaneloptionkey/applicationversion](https://developer.apple.com/documentation/appkit/nsapplication/aboutpaneloptionkey/applicationversion)

# applicationVersion (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The version information to display in the About panel.

## Declaration

```swift
static let applicationVersion: NSApplication.AboutPanelOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object with the app version (“Version 1.0”). If not specified, AppKit obtains the version string from the `CFBundleShortVersionString` key in the app’s `Info.plist` file. If neither is available, AppKit uses the build version, printed as `Version x.x`.

## See Also

### Option Keys

- [applicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [applicationName](applicationname.md): The name of the application to display in the About panel.
- [credits](credits.md): The credits string to display in the About panel.
- [version](version.md): The version number to display in the About panel.

# NSAboutPanelOptionApplicationVersion (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.13+

The version information to display in the About panel.

## Declaration

```objectivec
extern NSAboutPanelOptionKey const NSAboutPanelOptionApplicationVersion;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object with the app version (“Version 1.0”). If not specified, AppKit obtains the version string from the `CFBundleShortVersionString` key in the app’s `Info.plist` file. If neither is available, AppKit uses the build version, printed as `Version x.x`.

## See Also

### Option Keys

- [NSAboutPanelOptionApplicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [NSAboutPanelOptionApplicationName](applicationname.md): The name of the application to display in the About panel.
- [NSAboutPanelOptionCredits](credits.md): The credits string to display in the About panel.
- [NSAboutPanelOptionVersion](version.md): The version number to display in the About panel.
