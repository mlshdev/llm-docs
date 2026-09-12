> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/aboutpaneloptionkey/version](https://developer.apple.com/documentation/appkit/nsapplication/aboutpaneloptionkey/version)

# version (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The version number to display in the About panel.

## Declaration

```swift
static let version: NSApplication.AboutPanelOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object with the build version number of the app, such as `58.4`. AppKit displays this string as `(v58.4)`. If not specified, AppKit obtains the version number from the CFBundleVersion key of the app’s Info.plist file. If no version information is found, AppKit does not display version information.

## See Also

### Option Keys

- [applicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [applicationName](applicationname.md): The name of the application to display in the About panel.
- [applicationVersion](applicationversion.md): The version information to display in the About panel.
- [credits](credits.md): The credits string to display in the About panel.

# NSAboutPanelOptionVersion (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.13+

The version number to display in the About panel.

## Declaration

```objectivec
extern NSAboutPanelOptionKey const NSAboutPanelOptionVersion;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object with the build version number of the app, such as `58.4`. AppKit displays this string as `(v58.4)`. If not specified, AppKit obtains the version number from the CFBundleVersion key of the app’s Info.plist file. If no version information is found, AppKit does not display version information.

## See Also

### Option Keys

- [NSAboutPanelOptionApplicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [NSAboutPanelOptionApplicationName](applicationname.md): The name of the application to display in the About panel.
- [NSAboutPanelOptionApplicationVersion](applicationversion.md): The version information to display in the About panel.
- [NSAboutPanelOptionCredits](credits.md): The credits string to display in the About panel.
