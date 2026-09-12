> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/mark(forstyle:at:)](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/mark(forstyle:at:))

# mark(forStyle:at:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.

## Declaration

```swift
func mark(forStyle style: Int, at range: NSRange) -> [AnyHashable : Any]!
```

## Parameters

- `style`: A style, which should be one of the following values: [kTSMHiliteSelectedRawText](https://developer.apple.com/documentation/coreservices/ktsmhiliteselectedrawtext), [kTSMHiliteConvertedText](https://developer.apple.com/documentation/coreservices/ktsmhiliteconvertedtext), or [kTSMHiliteSelectedConvertedText](https://developer.apple.com/documentation/coreservices/ktsmhiliteselectedconvertedtext). See the `AERegistry.h` header file for the definition of these values.
- `range`: The range (that is, a clause) to mark.

<a id="return-value"></a>

## Return Value

The dictionary of text attributes.

<a id="Discussion"></a>

## Discussion

This utility function can be called by input methods to mark each range (i.e. clause ) of marked text. T

The default implementation first calls the method [compositionAttributes(at:)](compositionattributes%28at_%29.md) to obtain the additional attributes that an input method wants to include, such as font or glyph information. Then, it adds the appropriate underline and underline color information to the attributes dictionary for the style parameter. Finally it adds the style value as the dictionary value. The key for the style value is [markedClauseSegment](https://developer.apple.com/documentation/foundation/nsattributedstring/key/markedclausesegment).

## See Also

### Working with Ranges

- [compositionAttributes(at:)](compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [selectionRange()](selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [replacementRange()](replacementrange%28%29.md): Returns the range in the client document that the text should replace.

# markForStyle:atRange: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.

## Declaration

```objectivec
- (NSDictionary *) markForStyle:(NSInteger) style atRange:(NSRange) range;
```

## Parameters

- `style`: A style, which should be one of the following values: [kTSMHiliteSelectedRawText](https://developer.apple.com/documentation/coreservices/ktsmhiliteselectedrawtext), [kTSMHiliteConvertedText](https://developer.apple.com/documentation/coreservices/ktsmhiliteconvertedtext), or [kTSMHiliteSelectedConvertedText](https://developer.apple.com/documentation/coreservices/ktsmhiliteselectedconvertedtext). See the `AERegistry.h` header file for the definition of these values.
- `range`: The range (that is, a clause) to mark.

<a id="return-value"></a>

## Return Value

The dictionary of text attributes.

<a id="Discussion"></a>

## Discussion

This utility function can be called by input methods to mark each range (i.e. clause ) of marked text. T

The default implementation first calls the method [compositionAttributesAtRange:](compositionattributes%28at_%29.md) to obtain the additional attributes that an input method wants to include, such as font or glyph information. Then, it adds the appropriate underline and underline color information to the attributes dictionary for the style parameter. Finally it adds the style value as the dictionary value. The key for the style value is [markedClauseSegment](https://developer.apple.com/documentation/foundation/nsattributedstring/key/markedclausesegment).

## See Also

### Working with Ranges

- [compositionAttributesAtRange:](compositionattributes%28at_%29.md): Returns a dictionary of text attributes.
- [selectionRange](selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [replacementRange](replacementrange%28%29.md): Returns the range in the client document that the text should replace.
