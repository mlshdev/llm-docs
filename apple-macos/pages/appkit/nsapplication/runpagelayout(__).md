> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/runpagelayout(_:)](https://developer.apple.com/documentation/appkit/nsapplication/runpagelayout(_:))

# runPageLayout(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the receiver’s page layout panel, an instance of `NSPageLayout`.

## Declaration

```swift
func runPageLayout(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

If the `NSPageLayout` instance does not exist, this method creates one. This method is typically invoked when the user chooses Page Setup from the app’s File menu.

## See Also

### Managing Panels

- [orderFrontColorPanel(\_:)](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel(\_:)](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanel(options:)](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette(\_:)](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [NSApplication.AboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.

# runPageLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays the receiver’s page layout panel, an instance of `NSPageLayout`.

## Declaration

```objectivec
- (void) runPageLayout:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

If the `NSPageLayout` instance does not exist, this method creates one. This method is typically invoked when the user chooses Page Setup from the app’s File menu.

## See Also

### Managing Panels

- [orderFrontColorPanel:](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel:](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontStandardAboutPanelWithOptions:](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette:](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [NSAboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.
