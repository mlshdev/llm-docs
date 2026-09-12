> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:willchecktextin:options:types:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:willchecktextin:options:types:))

# textView(\_:willCheckTextIn:options:types:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to modify the text checking process before it occurs.

## Declaration

```swift
@MainActor optional func textView(_ view: NSTextView, willCheckTextIn range: NSRange, options: [NSSpellChecker.OptionKey : Any] = [:], types checkingTypes: UnsafeMutablePointer<NSTextCheckingTypes>) -> [NSSpellChecker.OptionKey : Any]
```

## Parameters

- `view`: The text view sending the message.
- `range`: The range to be checked.
- `options`: A dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.
- `checkingTypes`: The type of checking to be performed, passed by-reference. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.

  You can change this parameter to alter the types of checking to be performed.

<a id="return-value"></a>

## Return Value

A dictionary containing an alternative to the options `dictionary`.

<a id="Discussion"></a>

## Discussion

Invoked by [checkText(in:types:options:)](../nstextview/checktext%28in_types_options_%29.md), this method allows control over text checking `options`s (via the return value) or types (by modifying the flags pointed to by the inout parameter `checkingTypes`)

## See Also

### Working With the Spelling Checker

- [textView(\_:shouldSetSpellingState:range:)](textview%28__shouldsetspellingstate_range_%29.md): Sent when the spelling state is changed.
- [textView(\_:didCheckTextIn:types:options:results:orthography:wordCount:)](textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md): Invoked to allow the delegate to modify the text checking results after checking has occurred.

# textView:willCheckTextInRange:options:types: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to modify the text checking process before it occurs.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) textView:(NSTextView *) view willCheckTextInRange:(NSRange) range options:(NSDictionary<NSString *,id> *) options types:(NSTextCheckingTypes *) checkingTypes;
```

## Parameters

- `view`: The text view sending the message.
- `range`: The range to be checked.
- `options`: A dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.
- `checkingTypes`: The type of checking to be performed, passed by-reference. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.

  You can change this parameter to alter the types of checking to be performed.

<a id="return-value"></a>

## Return Value

A dictionary containing an alternative to the options `dictionary`.

<a id="Discussion"></a>

## Discussion

Invoked by [checkTextInRange:types:options:](../nstextview/checktext%28in_types_options_%29.md), this method allows control over text checking `options`s (via the return value) or types (by modifying the flags pointed to by the inout parameter `checkingTypes`)

## See Also

### Working With the Spelling Checker

- [textView:shouldSetSpellingState:range:](textview%28__shouldsetspellingstate_range_%29.md): Sent when the spelling state is changed.
- [textView:didCheckTextInRange:types:options:results:orthography:wordCount:](textview%28__didchecktextin_types_options_results_orthography_wordcount_%29.md): Invoked to allow the delegate to modify the text checking results after checking has occurred.
