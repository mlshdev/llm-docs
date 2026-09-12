> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/findselected(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/findselected(_:))

# findSelected(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Begins a search for the selected content in your browser text view.

## Declaration

```swift
optional func findSelected(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

UIKit calls this method when someone selects Use Selection for Find from an editing menu. Present the UI for finding text in your view, and use the selected text for the search. To present the standard system UI for finding text, and support standard keyboard shortcuts, add a [UIFindInteraction](https://developer.apple.com/documentation/uikit/uifindinteraction) to your browser text view.

## See Also

### Finding and replacing text

- [promptForReplace(\_:)](promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [replace(\_:)](replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.
- [addShortcut(\_:)](addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.

# findSelected: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Begins a search for the selected content in your browser text view.

## Declaration

```objectivec
- (void) findSelected:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

UIKit calls this method when someone selects Use Selection for Find from an editing menu. Present the UI for finding text in your view, and use the selected text for the search. To present the standard system UI for finding text, and support standard keyboard shortcuts, add a [UIFindInteraction](https://developer.apple.com/documentation/uikit/uifindinteraction) to your browser text view.

## See Also

### Finding and replacing text

- [promptForReplace:](promptforreplace%28__%29.md): Shows potential replacements for the selected content.
- [replace:](replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.
- [addShortcut:](addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.
