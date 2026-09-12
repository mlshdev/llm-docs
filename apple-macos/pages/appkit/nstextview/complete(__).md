> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/complete(_:)](https://developer.apple.com/documentation/appkit/nstextview/complete(_:))

# complete(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invokes completion in a text view.

## Declaration

```swift
func complete(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message. May be `nil`.

<a id="Discussion"></a>

## Discussion

By default invoked using the F5 key, this method provides users with a choice of completions for the word currently being typed. May be invoked programmatically if autocompletion is desired by a client of the text system. You can change the key invoking this method using the text system’s key bindings mechanism; see “[Text System Defaults and Key Bindings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/EventOverview/TextDefaultsBindings/TextDefaultsBindings.html#//apple_ref/doc/uid/20000468)” for an explanation of the procedure.

The delegate may replace or modify the list of possible completions by implementing [textView(\_:completions:forPartialWordRange:indexOfSelectedItem:)](../nstextviewdelegate/textview%28__completions_forpartialwordrange_indexofselecteditem_%29.md). Subclasses can control the list by overriding [completions(forPartialWordRange:indexOfSelectedItem:)](completions%28forpartialwordrange_indexofselecteditem_%29.md).

## See Also

### Performing text completion

- [completions(forPartialWordRange:indexOfSelectedItem:)](completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [insertCompletion(\_:forPartialWordRange:movement:isFinal:)](insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.
- [rangeForUserCompletion](rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.

# complete: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invokes completion in a text view.

## Declaration

```objectivec
- (void) complete:(id) sender;
```

## Parameters

- `sender`: The control sending the message. May be `nil`.

<a id="Discussion"></a>

## Discussion

By default invoked using the F5 key, this method provides users with a choice of completions for the word currently being typed. May be invoked programmatically if autocompletion is desired by a client of the text system. You can change the key invoking this method using the text system’s key bindings mechanism; see “[Text System Defaults and Key Bindings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/EventOverview/TextDefaultsBindings/TextDefaultsBindings.html#//apple_ref/doc/uid/20000468)” for an explanation of the procedure.

The delegate may replace or modify the list of possible completions by implementing [textView:completions:forPartialWordRange:indexOfSelectedItem:](../nstextviewdelegate/textview%28__completions_forpartialwordrange_indexofselecteditem_%29.md). Subclasses can control the list by overriding [completionsForPartialWordRange:indexOfSelectedItem:](completions%28forpartialwordrange_indexofselecteditem_%29.md).

## See Also

### Performing text completion

- [completionsForPartialWordRange:indexOfSelectedItem:](completions%28forpartialwordrange_indexofselecteditem_%29.md): Returns an array of potential completions, in the order to be presented, representing possible word completions available from a partial word.
- [insertCompletion:forPartialWordRange:movement:isFinal:](insertcompletion%28__forpartialwordrange_movement_isfinal_%29.md): Inserts the selected completion into the text at the appropriate location.
- [rangeForUserCompletion](rangeforusercompletion.md): The partial range from the most recent beginning of a word up to the insertion point.
