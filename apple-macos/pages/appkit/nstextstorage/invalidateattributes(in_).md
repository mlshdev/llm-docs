> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/invalidateattributes(in:)](https://developer.apple.com/documentation/appkit/nstextstorage/invalidateattributes(in:))

# invalidateAttributes(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Invalidates attributes in the specified range.

## Declaration

```swift
func invalidateAttributes(in range: NSRange)
```

## Parameters

- `range`: The range of characters whose attributes the method should invalidate.

<a id="Discussion"></a>

## Discussion

Called from [processEditing()](processediting%28%29.md) to invalidate attributes when the text storage changes. If the receiver isn’t lazy, this method calls [fixAttributes(in:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/fixattributes%28in:%29). If lazy attribute fixing is in effect, this method instead records the range needing fixing.

## See Also

### Fixing the string attributes

- [ensureAttributesAreFixed(in:)](ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
- [fixesAttributesLazily](fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.

# invalidateAttributesInRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Invalidates attributes in the specified range.

## Declaration

```objectivec
- (void) invalidateAttributesInRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters whose attributes the method should invalidate.

<a id="Discussion"></a>

## Discussion

Called from [processEditing](processediting%28%29.md) to invalidate attributes when the text storage changes. If the receiver isn’t lazy, this method calls [fixAttributesInRange:](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/fixattributes%28in:%29). If lazy attribute fixing is in effect, this method instead records the range needing fixing.

## See Also

### Fixing the string attributes

- [ensureAttributesAreFixedInRange:](ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
- [fixesAttributesLazily](fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.
