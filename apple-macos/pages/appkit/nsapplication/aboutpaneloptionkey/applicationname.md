> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/aboutpaneloptionkey/applicationname](https://developer.apple.com/documentation/appkit/nsapplication/aboutpaneloptionkey/applicationname)

# applicationName (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The name of the application to display in the About panel.

## Declaration

```swift
static let applicationName: NSApplication.AboutPanelOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the app’s name. If you do not specify this key, AppKit uses the value of the `CFBundleName` key from the app’s `Info.plist` file. If neither is found, AppKit uses the name of the app’s process.

## See Also

### Option Keys

- [applicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [applicationVersion](applicationversion.md): The version information to display in the About panel.
- [credits](credits.md): The credits string to display in the About panel.
- [version](version.md): The version number to display in the About panel.

# NSAboutPanelOptionApplicationName (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.13+

The name of the application to display in the About panel.

## Declaration

```objectivec
extern NSAboutPanelOptionKey const NSAboutPanelOptionApplicationName;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object containing the app’s name. If you do not specify this key, AppKit uses the value of the `CFBundleName` key from the app’s `Info.plist` file. If neither is found, AppKit uses the name of the app’s process.

## See Also

### Option Keys

- [NSAboutPanelOptionApplicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [NSAboutPanelOptionApplicationVersion](applicationversion.md): The version information to display in the About panel.
- [NSAboutPanelOptionCredits](credits.md): The credits string to display in the About panel.
- [NSAboutPanelOptionVersion](version.md): The version number to display in the About panel.
