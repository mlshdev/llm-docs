> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/aboutpaneloptionkey](https://developer.apple.com/documentation/appkit/nsapplication/aboutpaneloptionkey)

# NSApplication.AboutPanelOptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Keys to include in the options dictionary when displaying an About panel.

## Declaration

```swift
struct AboutPanelOptionKey
```

## Topics

### Option Keys

- [applicationIcon](aboutpaneloptionkey/applicationicon.md): The icon to display for the app in the About panel.
- [applicationName](aboutpaneloptionkey/applicationname.md): The name of the application to display in the About panel.
- [applicationVersion](aboutpaneloptionkey/applicationversion.md): The version information to display in the About panel.
- [credits](aboutpaneloptionkey/credits.md): The credits string to display in the About panel.
- [version](aboutpaneloptionkey/version.md): The version number to display in the About panel.

### Initializers

- [init(rawValue:)](aboutpaneloptionkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Panels

- [orderFrontColorPanel(\_:)](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel(\_:)](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanel(options:)](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette(\_:)](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout(\_:)](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.

# NSAboutPanelOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Keys to include in the options dictionary when displaying an About panel.

## Declaration

```objectivec
typedef NSString * NSAboutPanelOptionKey;
```

## Topics

### Option Keys

- [NSAboutPanelOptionApplicationIcon](aboutpaneloptionkey/applicationicon.md): The icon to display for the app in the About panel.
- [NSAboutPanelOptionApplicationName](aboutpaneloptionkey/applicationname.md): The name of the application to display in the About panel.
- [NSAboutPanelOptionApplicationVersion](aboutpaneloptionkey/applicationversion.md): The version information to display in the About panel.
- [NSAboutPanelOptionCredits](aboutpaneloptionkey/credits.md): The credits string to display in the About panel.
- [NSAboutPanelOptionVersion](aboutpaneloptionkey/version.md): The version number to display in the About panel.

## See Also

### Managing Panels

- [orderFrontColorPanel:](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel:](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanelWithOptions:](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette:](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout:](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
