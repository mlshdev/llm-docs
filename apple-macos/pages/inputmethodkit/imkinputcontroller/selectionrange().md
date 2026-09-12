> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/selectionrange()](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/selectionrange())

# selectionRange() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns where the range of the selection that should be placed inside marked text.

## Declaration

```swift
func selectionRange() -> NSRange
```

<a id="return-value"></a>

## Return Value

The range of the selection.

<a id="Discussion"></a>

## Discussion

This method is called by [updateComposition()](updatecomposition%28%29.md) to obtain the selection range for marked text. The default implementation sets the selection range at the end of the marked text. You should override this method if your input method provides font or glyph information.

## See Also

### Working with Ranges

- [compositionAttributes(at:)](compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [replacementRange()](replacementrange%28%29.md): Returns the range in the client document that the text should replace.
- [mark(forStyle:at:)](mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.

# selectionRange (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns where the range of the selection that should be placed inside marked text.

## Declaration

```objectivec
- (NSRange) selectionRange;
```

<a id="return-value"></a>

## Return Value

The range of the selection.

<a id="Discussion"></a>

## Discussion

This method is called by [updateComposition](updatecomposition%28%29.md) to obtain the selection range for marked text. The default implementation sets the selection range at the end of the marked text. You should override this method if your input method provides font or glyph information.

## See Also

### Working with Ranges

- [compositionAttributesAtRange:](compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [replacementRange](replacementrange%28%29.md): Returns the range in the client document that the text should replace.
- [markForStyle:atRange:](mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.
