> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/updatecomposition()

# updateComposition() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs the input controller that the composition has changed.

## Declaration

```swift
func updateComposition()
```

<a id="Discussion"></a>

## Discussion

This method calls the protocol method composedString: to obtain the current composition. The current composition is sent to the client by a call to the method `setMarkedText(_:selectionRange:replacementRange:)`.

## See Also

### Managing Composition

- [cancelComposition()](cancelcomposition%28%29.md): Stops the current composition and replaces marked text with the original text.

# updateComposition (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs the input controller that the composition has changed.

## Declaration

```objectivec
- (void) updateComposition;
```

<a id="Discussion"></a>

## Discussion

This method calls the protocol method composedString: to obtain the current composition. The current composition is sent to the client by a call to the method `setMarkedText(_:selectionRange:replacementRange:)`.

## See Also

### Managing Composition

- [cancelComposition](cancelcomposition%28%29.md): Stops the current composition and replaces marked text with the original text.
