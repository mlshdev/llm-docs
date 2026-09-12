> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/accessoryview](https://developer.apple.com/documentation/appkit/nsspellchecker/accessoryview)

# accessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.

## Declaration

```swift
var accessoryView: NSView? { get set }
```

## Parameters

- `aView`: The accessory view displayed in the receiver.

<a id="Discussion"></a>

## Discussion

The accessory view can be any custom view you want to display with the spelling panel. The accessory view is displayed below the spelling checker and the panel automatically resizes to accommodate the accessory view.

This method posts a notification named [didResizeNotification](../nswindow/didresizenotification.md) with the Spelling panel object to the default notification center.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanel(withGrammarString:detail:)](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels()](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.

# accessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.

## Declaration

```objectivec
@property (strong, nullable) NSView * accessoryView;
```

## Parameters

- `aView`: The accessory view displayed in the receiver.

<a id="Discussion"></a>

## Discussion

The accessory view can be any custom view you want to display with the spelling panel. The accessory view is displayed below the spelling checker and the panel automatically resizes to accommodate the accessory view.

This method posts a notification named [NSWindowDidResizeNotification](../nswindow/didresizenotification.md) with the Spelling panel object to the default notification center.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanelWithGrammarString:detail:](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.
