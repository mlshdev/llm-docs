> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/substitutionspanel](https://developer.apple.com/documentation/appkit/nsspellchecker/substitutionspanel)

# substitutionsPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Returns the substitutions panel.

## Declaration

```swift
var substitutionsPanel: NSPanel { get }
```

<a id="return-value"></a>

## Return Value

The substitutions checking panel.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [updateSpellingPanel(withGrammarString:detail:)](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels()](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.

# substitutionsPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Returns the substitutions panel.

## Declaration

```objectivec
@property (strong, readonly) NSPanel * substitutionsPanel;
```

<a id="return-value"></a>

## Return Value

The substitutions checking panel.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [updateSpellingPanelWithGrammarString:detail:](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [updatePanels](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.
