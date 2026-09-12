> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/cancelcomposition()](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/cancelcomposition())

# cancelComposition() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Stops the current composition and replaces marked text with the original text.

## Declaration

```swift
func cancelComposition()
```

<a id="Discussion"></a>

## Discussion

This method calls the method originalString: to obtain the original text and sends that text to the client using a call to the `IMKTextInput`  protocol method `insertText(_:replacementRange:)`

## See Also

### Managing Composition

- [updateComposition()](updatecomposition%28%29.md): Informs the input controller that the composition has changed.

# cancelComposition (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Stops the current composition and replaces marked text with the original text.

## Declaration

```objectivec
- (void) cancelComposition;
```

<a id="Discussion"></a>

## Discussion

This method calls the method originalString: to obtain the original text and sends that text to the client using a call to the `IMKTextInput`  protocol method `insertText(_:replacementRange:)`

## See Also

### Managing Composition

- [updateComposition](updatecomposition%28%29.md): Informs the input controller that the composition has changed.
