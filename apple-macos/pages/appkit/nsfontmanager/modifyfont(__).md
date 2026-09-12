> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/modifyfont(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/modifyfont(_:))

# modifyFont(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies a trait of the font.

## Declaration

```swift
func modifyFont(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message.

<a id="Discussion"></a>

## Discussion

By default, the action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). This action method causes the receiver to send its action message up the responder chain.

When a responder replies by providing a font to convert in a [convert(\_:)](convert%28__%29.md) message, the receiver converts the font in the manner specified by `sender`. The conversion is determined by sending a `tag` message to `sender` and invoking a corresponding method:

| Sender’s Tag | Method Used |
| --- | --- |
| `NSNoFontChangeAction` | None; the font is returned unchanged. |
| `NSViaPanelFontAction` | The Font panel’s [convert(\_:)](../nsfontpanel/convert%28__%29.md). |
| `NSAddTraitFontAction` | [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md). |
| `NSRemoveTraitFontAction` | [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md). |
| `NSSizeUpFontAction` | [convert(\_:toSize:)](convert%28__tosize_%29.md). |
| `NSSizeDownFontAction` | [convert(\_:toSize:)](convert%28__tosize_%29.md). |
| `NSHeavierFontAction` | [convertWeight(\_:of:)](convertweight%28__of_%29.md). |
| `NSLighterFontAction` | [convertWeight(\_:of:)](convertweight%28__of_%29.md). |

## See Also

### Sending Action Methods

- [addFontTrait(\_:)](addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait(\_:)](removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFontViaPanel(\_:)](modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel(\_:)](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel(\_:)](orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.

# modifyFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies a trait of the font.

## Declaration

```objectivec
- (void) modifyFont:(id) sender;
```

## Parameters

- `sender`: The control that sent the message.

<a id="Discussion"></a>

## Discussion

By default, the action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). This action method causes the receiver to send its action message up the responder chain.

When a responder replies by providing a font to convert in a [convertFont:](convert%28__%29.md) message, the receiver converts the font in the manner specified by `sender`. The conversion is determined by sending a `tag` message to `sender` and invoking a corresponding method:

| Sender’s Tag | Method Used |
| --- | --- |
| `NSNoFontChangeAction` | None; the font is returned unchanged. |
| `NSViaPanelFontAction` | The Font panel’s [panelConvertFont:](../nsfontpanel/convert%28__%29.md). |
| `NSAddTraitFontAction` | [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md). |
| `NSRemoveTraitFontAction` | [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md). |
| `NSSizeUpFontAction` | [convertFont:toSize:](convert%28__tosize_%29.md). |
| `NSSizeDownFontAction` | [convertFont:toSize:](convert%28__tosize_%29.md). |
| `NSHeavierFontAction` | [convertWeight:ofFont:](convertweight%28__of_%29.md). |
| `NSLighterFontAction` | [convertWeight:ofFont:](convertweight%28__of_%29.md). |

## See Also

### Sending Action Methods

- [addFontTrait:](addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait:](removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFontViaPanel:](modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel:](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel:](orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.
