> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/completions(forpartialwordrange:indexofselecteditem:)](https://developer.apple.com/documentation/appkit/nstextview/completions(forpartialwordrange:indexofselecteditem:))

# completions(forPartialWordRange:indexOfSelectedItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.

## Declaration

```swift
func completions(forPartialWordRange charRange: NSRange, indexOfSelectedItem index: UnsafeMutablePointer<Int>) -> [String]?
```

## Parameters

- `charRange`: The range of characters of the matched partial word to be completed.
- `index`: On return, optionally set to the completion that should be initially selected. The default is 0, and –1 indicates no selection.

<a id="return-value"></a>

## Return Value

An array of potential completions, in the order to be presented, representing possible word completions available from a partial word at `charRange`. Returning `nil` or a zero-length array suppresses completion.

<a id="Discussion"></a>

## Discussion

May be overridden by subclasses to modify or override the list of possible completions.

This method should call the delegate method [textView(\_:completions:forPartialWordRange:indexOfSelectedItem:)](../nstextviewdelegate/textview%28__completions_forpartialwordrange_indexofselecteditem_%29.md) if the delegate implements such a method.

## See Also

### Performing text completion

- [complete(\_:)](complete%28__%29.md): Invokes completion in a text view.
- [insertCompletion(\_:forPartialWordRange:movement:isFinal:)](insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.
- [rangeForUserCompletion](rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.

# completionsForPartialWordRange:indexOfSelectedItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.

## Declaration

```objectivec
- (NSArray<NSString *> *) completionsForPartialWordRange:(NSRange) charRange indexOfSelectedItem:(NSInteger *) index;
```

## Parameters

- `charRange`: The range of characters of the matched partial word to be completed.
- `index`: On return, optionally set to the completion that should be initially selected. The default is 0, and –1 indicates no selection.

<a id="return-value"></a>

## Return Value

An array of potential completions, in the order to be presented, representing possible word completions available from a partial word at `charRange`. Returning `nil` or a zero-length array suppresses completion.

<a id="Discussion"></a>

## Discussion

May be overridden by subclasses to modify or override the list of possible completions.

This method should call the delegate method [textView:completions:forPartialWordRange:indexOfSelectedItem:](../nstextviewdelegate/textview%28__completions_forpartialwordrange_indexofselecteditem_%29.md) if the delegate implements such a method.

## See Also

### Performing text completion

- [complete:](complete%28__%29.md): Invokes completion in a text view.
- [insertCompletion:forPartialWordRange:movement:isFinal:](insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.
- [rangeForUserCompletion](rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.
