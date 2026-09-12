> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkinputcontroller/compositionattributes(at:)](https://developer.apple.com/documentation/inputmethodkit/imkinputcontroller/compositionattributes(at:))

# compositionAttributes(at:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a dictionary of text attributes.

## Declaration

```swift
func compositionAttributes(at range: NSRange) -> NSMutableDictionary!
```

## Parameters

- `range`: The range of text whose attributes you want to obtain.

<a id="return-value"></a>

## Return Value

The dictionary of text attributes. The default implementation returns an empty dictionary.

## See Also

### Working with Ranges

- [selectionRange()](selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [replacementRange()](replacementrange%28%29.md): Returns the range in the client document that the text should replace.
- [mark(forStyle:at:)](mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.

# compositionAttributesAtRange: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a dictionary of text attributes.

## Declaration

```objectivec
- (NSMutableDictionary *) compositionAttributesAtRange:(NSRange) range;
```

## Parameters

- `range`: The range of text whose attributes you want to obtain.

<a id="return-value"></a>

## Return Value

The dictionary of text attributes. The default implementation returns an empty dictionary.

## See Also

### Working with Ranges

- [selectionRange](selectionrange%28%29.md): Returns where the range of the selection that should be placed inside marked text.
- [replacementRange](replacementrange%28%29.md): Returns the range in the client document that the text should replace.
- [markForStyle:atRange:](mark%28forstyle_at_%29.md): Returns a dictionary of text attributes that can mark a range of an attributed string to send to a client.
