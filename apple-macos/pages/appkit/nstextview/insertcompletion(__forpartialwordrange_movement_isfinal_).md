> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/insertcompletion(_:forpartialwordrange:movement:isfinal:)](https://developer.apple.com/documentation/appkit/nstextview/insertcompletion(_:forpartialwordrange:movement:isfinal:))

# insertCompletion(\_:forPartialWordRange:movement:isFinal:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the selected completion into the text at the appropriate location.

## Declaration

```swift
func insertCompletion(_ word: String, forPartialWordRange charRange: NSRange, movement: Int, isFinal flag: Bool)
```

## Parameters

- `word`: The text to insert, including the matched partial word and its potential completion.
- `charRange`: The range of characters of the matched partial word to be completed.
- `movement`: The direction of movement. For possible values see the [NSText](../nstext.md) Constants section. This value allows subclasses to distinguish between canceling completion and selection by arrow keys, by return, by tab, or by other means such as clicking.
- `flag`: [false](https://developer.apple.com/documentation/swift/false) while the user navigates through the potential text completions, [true](https://developer.apple.com/documentation/swift/true) when a completion is definitively selected or cancelled and the original value is reinserted.

<a id="Discussion"></a>

## Discussion

This method has two effects, text substitution and changing of the selection:

- It replaces the text between `charRange.start` and the current insertion point with `word`.
- If `flag` is [false](https://developer.apple.com/documentation/swift/false) it changes the selection to be the last *n* characters of `word` where *n* is equal to `[word length]` minus `charRange.length`, that is, the potential completion.
- If `flag` is [true](https://developer.apple.com/documentation/swift/true) it makes the selection empty and puts the insertion point just after `word`.

## See Also

### Performing text completion

- [complete(\_:)](complete%28__%29.md): Invokes completion in a text view.
- [completions(forPartialWordRange:indexOfSelectedItem:)](completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [rangeForUserCompletion](rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.

# insertCompletion:forPartialWordRange:movement:isFinal: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the selected completion into the text at the appropriate location.

## Declaration

```objectivec
- (void) insertCompletion:(NSString *) word forPartialWordRange:(NSRange) charRange movement:(NSInteger) movement isFinal:(BOOL) flag;
```

## Parameters

- `word`: The text to insert, including the matched partial word and its potential completion.
- `charRange`: The range of characters of the matched partial word to be completed.
- `movement`: The direction of movement. For possible values see the [NSText](../nstext.md) Constants section. This value allows subclasses to distinguish between canceling completion and selection by arrow keys, by return, by tab, or by other means such as clicking.
- `flag`: [false](https://developer.apple.com/documentation/swift/false) while the user navigates through the potential text completions, [true](https://developer.apple.com/documentation/swift/true) when a completion is definitively selected or cancelled and the original value is reinserted.

<a id="Discussion"></a>

## Discussion

This method has two effects, text substitution and changing of the selection:

- It replaces the text between `charRange.start` and the current insertion point with `word`.
- If `flag` is [false](https://developer.apple.com/documentation/swift/false) it changes the selection to be the last *n* characters of `word` where *n* is equal to `[word length]` minus `charRange.length`, that is, the potential completion.
- If `flag` is [true](https://developer.apple.com/documentation/swift/true) it makes the selection empty and puts the insertion point just after `word`.

## See Also

### Performing text completion

- [complete:](complete%28__%29.md): Invokes completion in a text view.
- [completionsForPartialWordRange:indexOfSelectedItem:](completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [rangeForUserCompletion](rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.
