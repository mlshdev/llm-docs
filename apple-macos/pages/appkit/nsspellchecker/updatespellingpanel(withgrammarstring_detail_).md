> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspellchecker/updatespellingpanel(withgrammarstring:detail:)](https://developer.apple.com/documentation/appkit/nsspellchecker/updatespellingpanel(withgrammarstring:detail:))

# updateSpellingPanel(withGrammarString:detail:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies a grammar-analysis detail to highlight in the Spelling panel.

## Declaration

```swift
func updateSpellingPanel(withGrammarString string: String, detail: [String : Any])
```

## Parameters

- `string`: Problematic grammatical unit identified by [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md).
- `detail`: One of the grammar-analysis details provided by [checkGrammar(of:startingAt:language:wrap:inSpellDocumentWithTag:details:)](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md).

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updatePanels()](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.

# updateSpellingPanelWithGrammarString:detail: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Specifies a grammar-analysis detail to highlight in the Spelling panel.

## Declaration

```objectivec
- (void) updateSpellingPanelWithGrammarString:(NSString *) string detail:(NSDictionary<NSString *,id> *) detail;
```

## Parameters

- `string`: Problematic grammatical unit identified by [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md).
- `detail`: One of the grammar-analysis details provided by [checkGrammarOfString:startingAt:language:wrap:inSpellDocumentWithTag:details:](checkgrammar%28of_startingat_language_wrap_inspelldocumentwithtag_details_%29.md).

## See Also

### Managing Panels

- [spellingPanel](spellingpanel.md): Returns the spell checker’s panel.
- [substitutionsPanel](substitutionspanel.md): Returns the substitutions panel.
- [updatePanels](updatepanels%28%29.md): Updates the available panels to account for user changes.
- [accessoryView](accessoryview.md): Makes a view an accessory of the Spelling panel by making it a subview of the panel’s content view.
- [substitutionsPanelAccessoryViewController](substitutionspanelaccessoryviewcontroller.md): Sets the substitutions panel’s accessory view.
