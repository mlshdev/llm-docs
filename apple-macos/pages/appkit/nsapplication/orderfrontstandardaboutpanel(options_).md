> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/orderfrontstandardaboutpanel(options:)](https://developer.apple.com/documentation/appkit/nsapplication/orderfrontstandardaboutpanel(options:))

# orderFrontStandardAboutPanel(options:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays a standard About window with information from a given options dictionary.

## Declaration

```swift
func orderFrontStandardAboutPanel(options optionsDictionary: [NSApplication.AboutPanelOptionKey : Any] = [:])
```

## Parameters

- `optionsDictionary`: A dictionary whose keys define the contents of the About window. For a list of keys, see [NSApplication.AboutPanelOptionKey](aboutpaneloptionkey.md).

<a id="Discussion"></a>

## Discussion

In addition to the keys in AboutPanelOptionKey, you may also include the following key in `optionsDictionary`:

- ```@``"Copyright"```: An `NSString` object with a line of copyright information. If not specified, this method then looks for the value of `NSHumanReadableCopyright` in the localized version of the app’s `Info.plist` file. If neither is available, this method leaves the space blank.

## See Also

### Managing Panels

- [orderFrontColorPanel(\_:)](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel(\_:)](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontCharacterPalette(\_:)](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout(\_:)](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSApplication.AboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.

# orderFrontStandardAboutPanelWithOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays a standard About window with information from a given options dictionary.

## Declaration

```objectivec
- (void) orderFrontStandardAboutPanelWithOptions:(NSDictionary<NSString *,id> *) optionsDictionary;
```

## Parameters

- `optionsDictionary`: A dictionary whose keys define the contents of the About window. For a list of keys, see [NSAboutPanelOptionKey](aboutpaneloptionkey.md).

<a id="Discussion"></a>

## Discussion

In addition to the keys in AboutPanelOptionKey, you may also include the following key in `optionsDictionary`:

- ```@``"Copyright"```: An `NSString` object with a line of copyright information. If not specified, this method then looks for the value of `NSHumanReadableCopyright` in the localized version of the app’s `Info.plist` file. If neither is available, this method leaves the space blank.

## See Also

### Managing Panels

- [orderFrontColorPanel:](orderfrontcolorpanel%28__%29.md): Brings up the color panel, an instance of `NSColorPanel`.
- [orderFrontStandardAboutPanel:](orderfrontstandardaboutpanel%28__%29.md): Displays a standard About window.
- [orderFrontCharacterPalette:](orderfrontcharacterpalette%28__%29.md): Opens the character palette.
- [runPageLayout:](runpagelayout%28__%29.md): Displays the receiver’s page layout panel, an instance of `NSPageLayout`.
- [NSAboutPanelOptionKey](aboutpaneloptionkey.md): Keys to include in the options dictionary when displaying an About panel.
