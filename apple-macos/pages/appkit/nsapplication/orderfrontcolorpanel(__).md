> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/orderfrontcolorpanel(_:)](https://developer.apple.com/documentation/appkit/nsapplication/orderfrontcolorpanel(_:))

# orderFrontColorPanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Brings up the color panel, an instance of `NSColorPanel`.

## Declaration

```swift
func orderFrontColorPanel(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

If the `NSColorPanel` object does not exist yet, this method creates one. This method is typically invoked when the user chooses Colors from a menu.

## See Also

### Managing Panels

- [orderFrontStandardAboutPanel(\_:)](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanel(options:)](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette(\_:)](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout(\_:)](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSApplication.AboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.

# orderFrontColorPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Brings up the color panel, an instance of `NSColorPanel`.

## Declaration

```objectivec
- (void) orderFrontColorPanel:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

If the `NSColorPanel` object does not exist yet, this method creates one. This method is typically invoked when the user chooses Colors from a menu.

## See Also

### Managing Panels

- [orderFrontStandardAboutPanel:](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanelWithOptions:](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette:](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout:](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSAboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.
