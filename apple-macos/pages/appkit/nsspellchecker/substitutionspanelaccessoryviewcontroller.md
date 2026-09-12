> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/substitutionspanelaccessoryviewcontroller](https://developer.apple.com/documentation/appkit/nsspellchecker/substitutionspanelaccessoryviewcontroller)

# substitutionsPanelAccessoryViewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Sets the substitutions panel’s accessory view.

## Declaration

```swift
var substitutionsPanelAccessoryViewController: NSViewController? { get set }
```

## Parameters

- `accessoryController`: The accessory view controller or `nil` if there is none.

<a id="Discussion"></a>

## Discussion

The accessory view controller can accommodate any custom view you want to display with the substitutions panel. The accessory view controller’s view is displayed below the substitutions list and the panel automatically resizes to accommodate the accessory view.

This method posts a notification named  [didResizeNotification](../nswindow/didresizenotification.md) with the substitutions panel object to the default notification center.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanel(withGrammarString:detail:)](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels()](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.

# substitutionsPanelAccessoryViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Sets the substitutions panel’s accessory view.

## Declaration

```objectivec
@property (strong, nullable) NSViewController * substitutionsPanelAccessoryViewController;
```

## Parameters

- `accessoryController`: The accessory view controller or `nil` if there is none.

<a id="Discussion"></a>

## Discussion

The accessory view controller can accommodate any custom view you want to display with the substitutions panel. The accessory view controller’s view is displayed below the substitutions list and the panel automatically resizes to accommodate the accessory view.

This method posts a notification named  [NSWindowDidResizeNotification](../nswindow/didresizenotification.md) with the substitutions panel object to the default notification center.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanelWithGrammarString:detail:](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
