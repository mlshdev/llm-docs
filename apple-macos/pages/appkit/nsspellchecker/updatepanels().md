> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/updatepanels()](https://developer.apple.com/documentation/appkit/nsspellchecker/updatepanels())

# updatePanels() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Updates the available panels to account for user changes.

## Declaration

```swift
func updatePanels()
```

<a id="Discussion"></a>

## Discussion

This method should be called when a client changes some relevant setting, such as what kind of spelling, grammar checking, or substitutions it uses.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanel(withGrammarString:detail:)](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.

# updatePanels (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Updates the available panels to account for user changes.

## Declaration

```objectivec
- (void) updatePanels;
```

<a id="Discussion"></a>

## Discussion

This method should be called when a client changes some relevant setting, such as what kind of spelling, grammar checking, or substitutions it uses.

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updateSpellingPanelWithGrammarString:detail:](updatespellingpanel%28withgrammarstring_detail_%29.md): Specifies a grammar-analysis detail to highlight in the Spelling panel.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.
