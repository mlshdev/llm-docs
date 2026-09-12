> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/invalidateattributes(in:)](https://developer.apple.com/documentation/uikit/nstextstorage/invalidateattributes(in:))

# invalidateAttributes(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Invalidates attributes in the specified range.

## Declaration

```swift
func invalidateAttributes(in range: NSRange)
```

## Parameters

- `range`: The range of characters whose attributes the method should invalidate.

<a id="Discussion"></a>

## Discussion

Called from [processEditing()](processediting%28%29.md) to invalidate attributes when the text storage changes. If the receiver isn’t lazy, this method calls [fixAttributes(in:)](../../foundation/nsmutableattributedstring/fixattributes%28in_%29.md). If lazy attribute fixing is in effect, this method instead records the range needing fixing.

## See Also

### Fixing the string attributes

- [ensureAttributesAreFixed(in:)](ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
- [fixesAttributesLazily](fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.

# invalidateAttributesInRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Invalidates attributes in the specified range.

## Declaration

```objectivec
- (void) invalidateAttributesInRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters whose attributes the method should invalidate.

<a id="Discussion"></a>

## Discussion

Called from [processEditing](processediting%28%29.md) to invalidate attributes when the text storage changes. If the receiver isn’t lazy, this method calls [fixAttributesInRange:](../../foundation/nsmutableattributedstring/fixattributes%28in_%29.md). If lazy attribute fixing is in effect, this method instead records the range needing fixing.

## See Also

### Fixing the string attributes

- [ensureAttributesAreFixedInRange:](ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
- [fixesAttributesLazily](fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.
