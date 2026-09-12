> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextstorage/ensureattributesarefixed(in:)](https://developer.apple.com/documentation/appkit/nstextstorage/ensureattributesarefixed(in:))

# ensureAttributesAreFixed(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Ensures that attribute fixing occurs in the specified range.

## Declaration

```swift
func ensureAttributesAreFixed(in range: NSRange)
```

## Parameters

- `range`: The range of characters to examine.

<a id="Discussion"></a>

## Discussion

An `NSTextStorage` object using lazy attribute fixing is required to call this method before accessing any attributes within `range`. This method gives attribute fixing a chance to occur if necessary. `NSTextStorage` subclasses wishing to support laziness must call this method from all attribute accessors they implement.

## See Also

### Fixing the string attributes

- [invalidateAttributes(in:)](invalidateattributes%28in_%29.md): Invalidates attributes in the specified range.
- [fixesAttributesLazily](fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.

# ensureAttributesAreFixedInRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Ensures that attribute fixing occurs in the specified range.

## Declaration

```objectivec
- (void) ensureAttributesAreFixedInRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters to examine.

<a id="Discussion"></a>

## Discussion

An `NSTextStorage` object using lazy attribute fixing is required to call this method before accessing any attributes within `range`. This method gives attribute fixing a chance to occur if necessary. `NSTextStorage` subclasses wishing to support laziness must call this method from all attribute accessors they implement.

## See Also

### Fixing the string attributes

- [invalidateAttributesInRange:](invalidateattributes%28in_%29.md): Invalidates attributes in the specified range.
- [fixesAttributesLazily](fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.
