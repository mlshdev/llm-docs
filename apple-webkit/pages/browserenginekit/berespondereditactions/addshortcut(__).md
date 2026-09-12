> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/addshortcut(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/addshortcut(_:))

# addShortcut(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Adds a text-replacement shortcut to the edit dictionary.

## Declaration

```swift
optional func addShortcut(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for adding text-replacement shortcuts, call [addShortcut(forText:from:)](../betextinteraction/addshortcut%28fortext_from_%29.md) in your implementation of this method.

## See Also

### Finding and replacing text

- [findSelected(\_:)](findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [promptForReplace(\_:)](promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [replace(\_:)](replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.

# addShortcut: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Adds a text-replacement shortcut to the edit dictionary.

## Declaration

```objectivec
- (void) addShortcut:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for adding text-replacement shortcuts, call [addShortcutForText:fromRect:](../betextinteraction/addshortcut%28fortext_from_%29.md) in your implementation of this method.

## See Also

### Finding and replacing text

- [findSelected:](findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [promptForReplace:](promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [replace:](replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.
