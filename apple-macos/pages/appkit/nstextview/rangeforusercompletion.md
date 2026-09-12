> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/rangeforusercompletion](https://developer.apple.com/documentation/appkit/nstextview/rangeforusercompletion)

# rangeForUserCompletion (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The partial range from the most recent beginning of a word up to the insertion point.

## Declaration

```swift
var rangeForUserCompletion: NSRange { get }
```

<a id="Discussion"></a>

## Discussion

This value is intended to be used for the range argument in the text completion methods such as [completions(forPartialWordRange:indexOfSelectedItem:)](completions%28forpartialwordrange_indexofselecteditem_%29.md).

## See Also

### Performing text completion

- [complete(\_:)](complete%28__%29.md): Invokes completion in a text view.
- [completions(forPartialWordRange:indexOfSelectedItem:)](completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [insertCompletion(\_:forPartialWordRange:movement:isFinal:)](insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.

# rangeForUserCompletion (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The partial range from the most recent beginning of a word up to the insertion point.

## Declaration

```objectivec
@property (readonly) NSRange rangeForUserCompletion;
```

<a id="Discussion"></a>

## Discussion

This value is intended to be used for the range argument in the text completion methods such as [completionsForPartialWordRange:indexOfSelectedItem:](completions%28forpartialwordrange_indexofselecteditem_%29.md).

## See Also

### Performing text completion

- [complete:](complete%28__%29.md): Invokes completion in a text view.
- [completionsForPartialWordRange:indexOfSelectedItem:](completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [insertCompletion:forPartialWordRange:movement:isFinal:](insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.
