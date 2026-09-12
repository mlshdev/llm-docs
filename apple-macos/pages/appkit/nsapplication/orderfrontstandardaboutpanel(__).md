> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/orderfrontstandardaboutpanel(_:)](https://developer.apple.com/documentation/appkit/nsapplication/orderfrontstandardaboutpanel(_:))

# orderFrontStandardAboutPanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays a standard About window.

## Declaration

```swift
func orderFrontStandardAboutPanel(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

This method calls [orderFrontStandardAboutPanel(options:)](orderfrontstandardaboutpanel%28options_%29.md) with a `nil` argument. See [orderFrontStandardAboutPanel(options:)](orderfrontstandardaboutpanel%28options_%29.md) for a description of what’s displayed.

## See Also

### Managing Panels

- [orderFrontColorPanel(\_:)](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel(options:)](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette(\_:)](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout(\_:)](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSApplication.AboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.

# orderFrontStandardAboutPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays a standard About window.

## Declaration

```objectivec
- (void) orderFrontStandardAboutPanel:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

This method calls [orderFrontStandardAboutPanelWithOptions:](orderfrontstandardaboutpanel%28options_%29.md) with a `nil` argument. See [orderFrontStandardAboutPanelWithOptions:](orderfrontstandardaboutpanel%28options_%29.md) for a description of what’s displayed.

## See Also

### Managing Panels

- [orderFrontColorPanel:](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanelWithOptions:](orderfrontstandardaboutpanel%28options_%29.md): Displays a standard About window with information from a given options dictionary.
- [orderFrontCharacterPalette:](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout:](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSAboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.
