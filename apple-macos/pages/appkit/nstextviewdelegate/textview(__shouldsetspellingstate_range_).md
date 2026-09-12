> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:shouldsetspellingstate:range:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:shouldsetspellingstate:range:))

# textView(\_:shouldSetSpellingState:range:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent when the spelling state is changed.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, shouldSetSpellingState value: Int, range affectedCharRange: NSRange) -> Int
```

## Parameters

- `textView`: The text view sending the message.
- `value`: The proposed spelling state value to set. Possible values, for the temporary attribute on the layout manager using the key NSSpellingStateAttributeName, are:

  - [NSSpellingStateSpellingFlag](../nsspellingstate/nsspellingstatespellingflag.md) to highlight spelling issues.
  - [NSSpellingStateGrammarFlag](../nsspellingstate/nsspellingstategrammarflag.md) to highlight grammar issues.
- `affectedCharRange`: The character range over which to set the given spelling state.

<a id="return-value"></a>

## Return Value

The actual spelling state to set.

<a id="Discussion"></a>

## Discussion

Delegate only. Allows delegate to control the setting of spelling and grammar indicators.

## See Also

### Related Documentation

- [setSpellingState(\_:range:)](../nstextview/setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

### Working With the Spelling Checker

- [textView(\_:willCheckTextIn:options:types:)](textview%28__willchecktextin_options_types_%29.md): Invoked to allow the delegate to modify the text checking process before it occurs.
- [textView(\_:didCheckTextIn:types:options:results:orthography:wordCount:)](textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md): Invoked to allow the delegate to modify the text checking results after checking has occurred.

# textView:shouldSetSpellingState:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sent when the spelling state is changed.

## Declaration

```objectivec
- (NSInteger) textView:(NSTextView *) textView shouldSetSpellingState:(NSInteger) value range:(NSRange) affectedCharRange;
```

## Parameters

- `textView`: The text view sending the message.
- `value`: The proposed spelling state value to set. Possible values, for the temporary attribute on the layout manager using the key NSSpellingStateAttributeName, are:

  - [NSSpellingStateSpellingFlag](../nsspellingstate/nsspellingstatespellingflag.md) to highlight spelling issues.
  - [NSSpellingStateGrammarFlag](../nsspellingstate/nsspellingstategrammarflag.md) to highlight grammar issues.
- `affectedCharRange`: The character range over which to set the given spelling state.

<a id="return-value"></a>

## Return Value

The actual spelling state to set.

<a id="Discussion"></a>

## Discussion

Delegate only. Allows delegate to control the setting of spelling and grammar indicators.

## See Also

### Related Documentation

- [setSpellingState:range:](../nstextview/setspellingstate%28__range_%29.md): Sets the spelling state, which controls the display of the spelling and grammar indicators on the given text range.

### Working With the Spelling Checker

- [textView:willCheckTextInRange:options:types:](textview%28__willchecktextin_options_types_%29.md): Invoked to allow the delegate to modify the text checking process before it occurs.
- [textView:didCheckTextInRange:types:options:results:orthography:wordCount:](textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md): Invoked to allow the delegate to modify the text checking results after checking has occurred.
