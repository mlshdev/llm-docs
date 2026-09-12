> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/aboutpaneloptionkey/applicationicon](https://developer.apple.com/documentation/appkit/nsapplication/aboutpaneloptionkey/applicationicon)

# applicationIcon (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The icon to display for the app in the About panel.

## Declaration

```swift
static let applicationIcon: NSApplication.AboutPanelOptionKey
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSImage](../../nsimage.md) object. If you do not specify an image, AppKit looks for an image with the name `NSApplicationIcon`. If neither is available, this method uses the generic app icon.

## See Also

### Option Keys

- [applicationName](applicationname.md): The name of the application to display in the About panel.
- [applicationVersion](applicationversion.md): The version information to display in the About panel.
- [credits](credits.md): The credits string to display in the About panel.
- [version](version.md): The version number to display in the About panel.

# NSAboutPanelOptionApplicationIcon (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.13+

The icon to display for the app in the About panel.

## Declaration

```objectivec
extern NSAboutPanelOptionKey const NSAboutPanelOptionApplicationIcon;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSImage](../../nsimage.md) object. If you do not specify an image, AppKit looks for an image with the name `NSApplicationIcon`. If neither is available, this method uses the generic app icon.

## See Also

### Option Keys

- [NSAboutPanelOptionApplicationName](applicationname.md): The name of the application to display in the About panel.
- [NSAboutPanelOptionApplicationVersion](applicationversion.md): The version information to display in the About panel.
- [NSAboutPanelOptionCredits](credits.md): The credits string to display in the About panel.
- [NSAboutPanelOptionVersion](version.md): The version number to display in the About panel.
