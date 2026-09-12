> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextinteraction/showreplacements(fortext:)](https://developer.apple.com/documentation/browserenginekit/betextinteraction/showreplacements(fortext:))

# showReplacements(forText:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Displays inline text replacements for the current selection.

## Declaration

```swift
func showReplacements(forText text: String)
```

<a id="discussion"></a>

## Discussion

Call this method to present system UI for suggesting text replacements, for example, when your browser text view receives [promptForReplace(\_:)](../berespondereditactions/promptforreplace%28__%29.md).

## See Also

### Text replacements

- [addShortcut(forText:from:)](addshortcut%28fortext_from_%29.md): Presents UI for a person to add a text-replacement shortcut to the keyboard dictionary.

# showReplacementsForText: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Displays inline text replacements for the current selection.

## Declaration

```objectivec
- (void) showReplacementsForText:(NSString *) text;
```

<a id="discussion"></a>

## Discussion

Call this method to present system UI for suggesting text replacements, for example, when your browser text view receives [promptForReplace:](../berespondereditactions/promptforreplace%28__%29.md).

## See Also

### Text replacements

- [addShortcutForText:fromRect:](addshortcut%28fortext_from_%29.md): Presents UI for a person to add a text-replacement shortcut to the keyboard dictionary.
