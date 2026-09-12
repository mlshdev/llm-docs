> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/modifyfontviapanel(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/modifyfontviapanel(_:))

# modifyFontViaPanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies a font trait using input from the Font panel.

## Declaration

```swift
func modifyFontViaPanel(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message.

<a id="Discussion"></a>

## Discussion

By default, the action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). This action method causes the receiver to send its action message up the responder chain.

When a responder replies by providing a font to convert in a [convert(\_:)](convert%28__%29.md) message, the receiver converts the font by sending a [convert(\_:)](../nsfontpanel/convert%28__%29.md) message to the Font panel. The panel in turn may send [convert(\_:toFamily:)](convert%28__tofamily_%29.md), [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md), and other specific conversion methods to make its change.

## See Also

### Sending Action Methods

- [addFontTrait(\_:)](addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait(\_:)](removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont(\_:)](modifyfont%28__%29.md): Modifies a trait of the font.
- [orderFrontStylesPanel(\_:)](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel(\_:)](orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.

# modifyFontViaPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Modifies a font trait using input from the Font panel.

## Declaration

```objectivec
- (void) modifyFontViaPanel:(id) sender;
```

## Parameters

- `sender`: The control that sent the message.

<a id="Discussion"></a>

## Discussion

By default, the action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). This action method causes the receiver to send its action message up the responder chain.

When a responder replies by providing a font to convert in a [convertFont:](convert%28__%29.md) message, the receiver converts the font by sending a [panelConvertFont:](../nsfontpanel/convert%28__%29.md) message to the Font panel. The panel in turn may send [convertFont:toFamily:](convert%28__tofamily_%29.md), [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md), and other specific conversion methods to make its change.

## See Also

### Sending Action Methods

- [addFontTrait:](addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait:](removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont:](modifyfont%28__%29.md): Modifies a trait of the font.
- [orderFrontStylesPanel:](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel:](orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.
