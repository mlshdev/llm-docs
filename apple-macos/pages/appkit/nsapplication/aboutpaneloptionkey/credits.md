> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/aboutpaneloptionkey/credits](https://developer.apple.com/documentation/appkit/nsapplication/aboutpaneloptionkey/credits)

# credits (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The credits string to display in the About panel.

## Declaration

```swift
static let credits: NSApplication.AboutPanelOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) displayed in the info area of the panel. If not specified, AppKit then looks for a file named “Credits.html”, “Credits.rtf”, and “Credits.rtfd”, in that order, in the bundle returned by the [Bundle](https://developer.apple.com/documentation/foundation/bundle) class method main. The first file found is used. If none is found, the info area is left blank.

## See Also

### Option Keys

- [applicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [applicationName](applicationname.md): The name of the application to display in the About panel.
- [applicationVersion](applicationversion.md): The version information to display in the About panel.
- [version](version.md): The version number to display in the About panel.

# NSAboutPanelOptionCredits (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.13+

The credits string to display in the About panel.

## Declaration

```objectivec
extern NSAboutPanelOptionKey const NSAboutPanelOptionCredits;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) displayed in the info area of the panel. If not specified, AppKit then looks for a file named “Credits.html”, “Credits.rtf”, and “Credits.rtfd”, in that order, in the bundle returned by the [NSBundle](https://developer.apple.com/documentation/foundation/bundle) class method main. The first file found is used. If none is found, the info area is left blank.

## See Also

### Option Keys

- [NSAboutPanelOptionApplicationIcon](applicationicon.md): The icon to display for the app in the About panel.
- [NSAboutPanelOptionApplicationName](applicationname.md): The name of the application to display in the About panel.
- [NSAboutPanelOptionApplicationVersion](applicationversion.md): The version information to display in the About panel.
- [NSAboutPanelOptionVersion](version.md): The version number to display in the About panel.
