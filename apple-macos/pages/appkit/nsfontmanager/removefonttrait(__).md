> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/removefonttrait(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/removefonttrait(_:))

# removeFontTrait(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes a trait from the font.

## Declaration

```swift
func removeFontTrait(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message.

<a id="Discussion"></a>

## Discussion

By default, the action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). This action method causes the receiver to send its action message up the responder chain.

When a responder replies by providing a font to convert in a [convert(\_:)](convert%28__%29.md) message, the receiver converts the font by removing the trait specified by `sender`. This trait is determined by sending a `tag` message to `sender` and interpreting it as a font trait mask for a [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md) message.

## See Also

### Sending Action Methods

- [addFontTrait(\_:)](addfonttrait%28__%29.md): Adds a trait to the font.
- [modifyFont(\_:)](modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel(\_:)](modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel(\_:)](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel(\_:)](orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.

# removeFontTrait: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes a trait from the font.

## Declaration

```objectivec
- (void) removeFontTrait:(id) sender;
```

## Parameters

- `sender`: The control that sent the message.

<a id="Discussion"></a>

## Discussion

By default, the action message is [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:). This action method causes the receiver to send its action message up the responder chain.

When a responder replies by providing a font to convert in a [convertFont:](convert%28__%29.md) message, the receiver converts the font by removing the trait specified by `sender`. This trait is determined by sending a `tag` message to `sender` and interpreting it as a font trait mask for a [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md) message.

## See Also

### Sending Action Methods

- [addFontTrait:](addfonttrait%28__%29.md): Adds a trait to the font.
- [modifyFont:](modifyfont%28__%29.md): Modifies a trait of the font.
- [modifyFontViaPanel:](modifyfontviapanel%28__%29.md): Modifies a font trait using input from the Font panel.
- [orderFrontStylesPanel:](orderfrontstylespanel%28__%29.md): Opens the Font Styles panel.
- [orderFrontFontPanel:](orderfrontfontpanel%28__%29.md): Opens the Font panel, creating it if necessary, and displays that panel in front of the app’s windows.
- [NSFontAction](../nsfontaction.md): Actions that modify a font.
