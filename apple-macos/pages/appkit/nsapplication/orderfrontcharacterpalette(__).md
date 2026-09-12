> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/orderfrontcharacterpalette(_:)](https://developer.apple.com/documentation/appkit/nsapplication/orderfrontcharacterpalette(_:))

# orderFrontCharacterPalette(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Opens the character palette.

## Declaration

```swift
func orderFrontCharacterPalette(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

## See Also

### Managing Panels

- [orderFrontColorPanel(\_:)](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel(\_:)](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanel(options:)](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [runPageLayout(\_:)](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSApplication.AboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.

# orderFrontCharacterPalette: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Opens the character palette.

## Declaration

```objectivec
- (void) orderFrontCharacterPalette:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

## See Also

### Managing Panels

- [orderFrontColorPanel:](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel:](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanelWithOptions:](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [runPageLayout:](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSAboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.
