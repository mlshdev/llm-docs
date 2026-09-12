> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/orderfrontfontpanel(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/orderfrontfontpanel(_:))

# orderFrontFontPanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.

## Declaration

```swift
func orderFrontFontPanel(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message.

## See Also

### Related Documentation

- [fontPanel(\_:)](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontPanelFactory(\_:)](setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.

### Sending Action Methods

- [addFontTrait(\_:)](addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait(\_:)](removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont(\_:)](modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel(\_:)](modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel(\_:)](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.

# orderFrontFontPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.

## Declaration

```objectivec
- (void) orderFrontFontPanel:(id) sender;
```

## Parameters

- `sender`: The control that sent the message.

## See Also

### Related Documentation

- [fontPanel:](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontPanelFactory:](setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.

### Sending Action Methods

- [addFontTrait:](addfonttrait%28__%29.md): Adds a trait to the font.
- [removeFontTrait:](removefonttrait%28__%29.md): Removes a trait from the font.
- [modifyFont:](modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel:](modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel:](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.
