> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/berespondereditactions/promptforreplace(_:)](https://developer.apple.com/documentation/browserenginekit/berespondereditactions/promptforreplace(_:))

# promptForReplace(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Shows potential replacements for the selected content.

## Declaration

```swift
optional func promptForReplace(_ sender: Any?)
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for this action, call [showReplacements(forText:)](../betextinteraction/showreplacements%28fortext_%29.md) in your implementation of this method.

## See Also

### Finding and replacing text

- [findSelected(\_:)](findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [replace(\_:)](replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.
- [addShortcut(\_:)](addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.

# promptForReplace: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Shows potential replacements for the selected content.

## Declaration

```objectivec
- (void) promptForReplace:(id) sender;
```

## Parameters

- `sender`: The object calling this method.

<a id="discussion"></a>

## Discussion

To present the standard system UI for this action, call [showReplacementsForText:](../betextinteraction/showreplacements%28fortext_%29.md) in your implementation of this method.

## See Also

### Finding and replacing text

- [findSelected:](findselected%28__%29.md): Begins a search for the selected content in your browser text view.
- [replace:](replace%28__%29.md): Removes the selected text and inputs the chosen replacement text.
- [addShortcut:](addshortcut%28__%29.md): Adds a text-replacement shortcut to the edit dictionary.
