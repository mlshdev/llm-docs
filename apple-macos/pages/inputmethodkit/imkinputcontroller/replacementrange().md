> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/replacementrange()](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/replacementrange())

# replacementRange() (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the range in the client document that the text should replace.

## Declaration

```swift
func replacementRange() -> NSRange
```

<a id="return-value"></a>

## Return Value

The range to replace.

<a id="Discussion"></a>

## Discussion

This method is called by [updateComposition()](updatecomposition%28%29.md) to obtain the range in the client  document where marked text should be placed. The default implementation returns an `NSRange` object whose location and length are `NSNotFound`. That indicates that the marked text should be placed at the current insertion point. Input methods that insert marked text somewhere other than at the current insertion point should override this method.

An example of an input method that might override this method would be one replaces words with synonyms. That input method would watch for certain words and when it detects such a word it would replaced the word by marked text that was a synonym of the word.

## See Also

### Working with Ranges

- [compositionAttributes(at:)](compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [selectionRange()](selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [mark(forStyle:at:)](mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.

# replacementRange (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the range in the client document that the text should replace.

## Declaration

```objectivec
- (NSRange) replacementRange;
```

<a id="return-value"></a>

## Return Value

The range to replace.

<a id="Discussion"></a>

## Discussion

This method is called by [updateComposition](updatecomposition%28%29.md) to obtain the range in the client  document where marked text should be placed. The default implementation returns an `NSRange` object whose location and length are `NSNotFound`. That indicates that the marked text should be placed at the current insertion point. Input methods that insert marked text somewhere other than at the current insertion point should override this method.

An example of an input method that might override this method would be one replaces words with synonyms. That input method would watch for certain words and when it detects such a word it would replaced the word by marked text that was a synonym of the word.

## See Also

### Working with Ranges

- [compositionAttributesAtRange:](compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [selectionRange](selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [markForStyle:atRange:](mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.
