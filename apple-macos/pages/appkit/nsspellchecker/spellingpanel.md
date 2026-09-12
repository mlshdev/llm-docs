> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/spellingpanel](https://developer.apple.com/documentation/appkit/nsspellchecker/spellingpanel)

# spellingPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the spell checker’s panel.

## Declaration

```swift
var spellingPanel: NSPanel { get }
```

<a id="return-value"></a>

## Return Value

The spell checking panel.

## See Also

### Managing Panels

- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanel(withGrammarString:detail:)](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels()](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.

# spellingPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Returns the spell checker’s panel.

## Declaration

```objectivec
@property (strong, readonly) NSPanel * spellingPanel;
```

<a id="return-value"></a>

## Return Value

The spell checking panel.

## See Also

### Managing Panels

- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanelWithGrammarString:detail:](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.
