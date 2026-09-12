> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage/ensureattributesarefixed(in:)](https://developer.apple.com/documentation/uikit/nstextstorage/ensureattributesarefixed(in:))

# ensureAttributesAreFixed(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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
