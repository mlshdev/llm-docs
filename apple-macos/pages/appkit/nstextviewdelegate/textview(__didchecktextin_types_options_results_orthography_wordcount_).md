> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:didchecktextin:types:options:results:orthography:wordcount:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:didchecktextin:types:options:results:orthography:wordcount:))

# textView(\_:didCheckTextIn:types:options:results:orthography:wordCount:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to modify the text checking results after checking has occurred.

## Declaration

```swift
@MainActor optional func textView(_ view: NSTextView, didCheckTextIn range: NSRange, types checkingTypes: NSTextCheckingTypes, options: [NSSpellChecker.OptionKey : Any] = [:], results: [NSTextCheckingResult], orthography: NSOrthography, wordCount: Int) -> [NSTextCheckingResult]
```

## Parameters

- `view`: The text view sending the message.
- `range`: The range that was checked.
- `checkingTypes`: The type of checking that was performed. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: A dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.
- `results`: An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) instances.
- `orthography`: The orthography of the text.
- `wordCount`: The number of words checked.

<a id="return-value"></a>

## Return Value

An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) instances. You can return the results array as is, or an altered array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects.

<a id="Discussion"></a>

## Discussion

Invoked by [handleTextCheckingResults(\_:forRange:types:options:orthography:wordCount:)](../nstextview/handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md), this method allows observation of text checking, or modification of the results

## See Also

### Working With the Spelling Checker

- [textView(\_:shouldSetSpellingState:range:)](textview%28__shouldsetspellingstate_range_%29.md): Sent when the spelling state is changed.
- [textView(\_:willCheckTextIn:options:types:)](textview%28__willchecktextin_options_types_%29.md): Invoked to allow the delegate to modify the text checking process before it occurs.

# textView:didCheckTextInRange:types:options:results:orthography:wordCount: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked to allow the delegate to modify the text checking results after checking has occurred.

## Declaration

```objectivec
- (NSArray<NSTextCheckingResult *> *) textView:(NSTextView *) view didCheckTextInRange:(NSRange) range types:(NSTextCheckingTypes) checkingTypes options:(NSDictionary<NSString *,id> *) options results:(NSArray<NSTextCheckingResult *> *) results orthography:(NSOrthography *) orthography wordCount:(NSInteger) wordCount;
```

## Parameters

- `view`: The text view sending the message.
- `range`: The range that was checked.
- `checkingTypes`: The type of checking that was performed. The possible constants are listed in [NSTextCheckingTypes](https://developer.apple.com/documentation/foundation/nstextcheckingtypes) and can be combined using the C bit-wise `OR` operator to perform multiple checks at the same time.
- `options`: A dictionary of values used during the checking process to perform. See Spell Checking Option Dictionary Keys for the supported values.
- `results`: An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) instances.
- `orthography`: The orthography of the text.
- `wordCount`: The number of words checked.

<a id="return-value"></a>

## Return Value

An array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) instances. You can return the results array as is, or an altered array of [NSTextCheckingResult](https://developer.apple.com/documentation/foundation/nstextcheckingresult) objects.

<a id="Discussion"></a>

## Discussion

Invoked by [handleTextCheckingResults:forRange:types:options:orthography:wordCount:](../nstextview/handletextcheckingresults%28__forrange_types_options_orthography_wordcount_%29.md), this method allows observation of text checking, or modification of the results

## See Also

### Working With the Spelling Checker

- [textView:shouldSetSpellingState:range:](textview%28__shouldsetspellingstate_range_%29.md): Sent when the spelling state is changed.
- [textView:willCheckTextInRange:options:types:](textview%28__willchecktextin_options_types_%29.md): Invoked to allow the delegate to modify the text checking process before it occurs.
